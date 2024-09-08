import useTheme from "../../hooks/useTheme"
import { motion } from "framer-motion"
import { BMI_FORM, BMI_FORM_RULES, IBMIFormValues } from "../../constants/bmiForm"
import { Control, UseFormRegister } from "react-hook-form"
import { IconType } from "react-icons"

interface ICustomInput {
    label: string,
    type: string,
    placeholder: string,
    register: UseFormRegister<IBMIFormValues>,
    name: BMI_FORM,
    rules?: any,
    icon?: IconType,
    control?: Control<IBMIFormValues, any>,
}

const CustomInput = ({ type, placeholder, register, name, icon: Icon, rules }: ICustomInput) => {
    const { isDarkTheme } = useTheme()

    return (
        <div className="form__input-group">
            <input {...register(name, rules ? rules : BMI_FORM_RULES.DEFAULT_RULES)}
                className={`form__input ${isDarkTheme ? 'form__input--dark' : 'form__input--light'}`}
                type={type}
                placeholder={placeholder}
                step="any"
            />
            <motion.span whileHover={{ rotate: 360 }} whileTap={{ scale: 1.5 }}>
                {Icon && <Icon />}
            </motion.span>
        </div>
    )
}

export default CustomInput