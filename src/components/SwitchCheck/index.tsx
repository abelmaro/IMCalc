import { motion } from "framer-motion"
import useTheme from "../../hooks/useTheme"
import { ReactNode, useState } from "react"

import './styles.sass'

interface ISwitchCheck {
    checkedIcon?: ReactNode,
    uncheckedIcon?: ReactNode,
    isChecked: boolean,
    onClick?: () => void
}

const SwitchCheck = ({ checkedIcon, uncheckedIcon, isChecked, onClick }: ISwitchCheck) => {
    const [checked, setChecked] = useState(isChecked)
    const { isDarkTheme } = useTheme()
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    }

    const handleClick = () => {
        if (onClick)
            onClick()
        setChecked(!checked)
    }

    return (
        <div
            className={`switch ${isDarkTheme ? 'switch--dark' : 'switch--light'}`}
            data-ison={isDarkTheme}
            onClick={handleClick}>
            <motion.div
                className={`switch__handle ${isDarkTheme ? 'switch__handle--dark' : 'switch__handle--light'}`}
                layout
                transition={spring}>
                {checked ? (checkedIcon && checkedIcon) || <></> : (uncheckedIcon && uncheckedIcon) || <></>}
            </motion.div>
        </div>
    )
}

export default SwitchCheck