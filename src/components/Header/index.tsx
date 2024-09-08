import { ChangeEvent } from "react"
import { PiSunFill } from "react-icons/pi"
import { RiMoonFill } from "react-icons/ri"
import { THEMES } from "../../constants/themes"
import { LANGUAGES_OPTIONS } from "../../constants/dropdownOptions"

import useTheme from "../../hooks/useTheme"
import CustomDropdown from "../CustomDropdown"
import SwitchCheck from "../SwitchCheck"

import './styles.sass'
import i18next from "i18next"
import { STORAGE_KEYS } from "../../constants/storageKeys"

const Header = () => {
    const { isDarkTheme, setThemeState } = useTheme()
    const handleOnchange = (event: ChangeEvent<HTMLSelectElement>) => {
        localStorage.setItem(STORAGE_KEYS.LANG, event.target.value)
        i18next.changeLanguage(event.target.value)
    }

    return (
        <div className='header'>
            <SwitchCheck
                checkedIcon={<RiMoonFill />}
                uncheckedIcon={<PiSunFill />}
                isChecked={isDarkTheme}
                onClick={() => setThemeState(!isDarkTheme ? THEMES.DARK : THEMES.LIGHT)}
            />
            <CustomDropdown
                options={LANGUAGES_OPTIONS}
                isDarkTheme={isDarkTheme}
                defaultValue={localStorage.getItem(STORAGE_KEYS.LANG) || 'en'}
                onChange={(e) => handleOnchange(e)}
            />
        </div>
    )
}

export default Header