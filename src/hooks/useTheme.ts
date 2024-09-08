import { useRecoilState } from "recoil"
import { ThemeState } from "../atoms/ThemeState"
import { THEMES } from "../constants/themes"
import { STORAGE_KEYS } from "../constants/storageKeys"

const useTheme = () => {
    const [themeState, setState] = useRecoilState(ThemeState)
    const isDarkTheme = themeState === THEMES.DARK

    const setThemeState = (theme: string) => {
        localStorage.setItem(STORAGE_KEYS.THEME, theme)
        setState(theme)
    }

    return {
        isDarkTheme,
        setThemeState
    }
}

export default useTheme