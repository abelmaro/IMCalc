import { ChangeEventHandler } from 'react'
import './styles.sass'
import i18n from '../../i18n/i18n'

interface ICustomDropdown {
    defaultValue?: string,
    isDarkTheme?: boolean,
    options?: IOption[],
    onChange: ChangeEventHandler<HTMLSelectElement>
}

interface IOption {
    label: string,
    value: string
}

const CustomDropdown = ({ defaultValue, isDarkTheme, options, onChange }: ICustomDropdown) => {
    return (
        <select className={`dropdown ${isDarkTheme ? 'dropdown--dark' : 'dropdown--light'}`} defaultValue={defaultValue} onChange={onChange}>
            {options && options.map((option: IOption) => (
                <option
                    key={option.value}
                    className={`dropdown__option ${isDarkTheme ? 'dropdown__option--dark' : 'dropdown__option--light'}`}
                    value={option.value}>
                    {i18n.t(option.label)}
                </option>
            ))}

        </select>
    )
}

export default CustomDropdown