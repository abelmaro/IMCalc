import { motion } from "framer-motion"
import { Control, useController } from "react-hook-form"
import useTheme from "../../hooks/useTheme"
import i18n from "../../i18n/i18n"

import './styles.sass'
import { BMI_FORM, IBMIFormValues } from "../../constants/bmiForm"
import { IconType } from "react-icons"

interface IOption {
  key: string,
  label: string,
  icon?: IconType
}

interface ICustomRadioOptions {
  control: Control<IBMIFormValues, any>,
  name: BMI_FORM,
  selected: string,
  options: IOption[],
}

const CustomRadioOptions = ({ control, name, selected, options }: ICustomRadioOptions) => {
  const { isDarkTheme } = useTheme()
  const { field } = useController({
    name,
    control,
    rules: { required: true }
  })

  return (
    <div className="radio-container">
      {
        options && options.map((option, index: number) => {
          return (<motion.label key={`${name}-${index}`}
            whileHover={{ scale: 1.01 }}
            htmlFor={`${name}-${option.key}`}
            className={`radio-container__button ${selected === option.key ? 'active' : ''} ${isDarkTheme ? 'radio-container__button--dark' : 'radio-container__button--light'}`}
          >
            <input
              {...field}
              type="radio"
              id={`${name}-${option.key}`}
              value={option.key}
              className="radio-container__button__input"

            />
            {option.icon &&
              <motion.div whileHover={{ rotate: 360, speed: 0.5 }}>
                <option.icon />
              </motion.div>
            }
            {i18n.t(option.label)}
          </motion.label>)
        })
      }
    </div>
  )
}

export default CustomRadioOptions