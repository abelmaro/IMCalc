import { motion } from "framer-motion"
import i18n from "../../i18n/i18n"
import useTheme from "../../hooks/useTheme"

import './styles.sass'
import { roundValue } from "../../utils"

interface IResultContainer {
    bmi: number,
    label?: string,
    onReset?: () => void
}
const ResultContainer = ({ bmi, label, onReset }: IResultContainer) => {
    const { isDarkTheme } = useTheme()
    return (
        <motion.div
            animate={{
                scale: 2,
            }}
            className="result"
        >
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'linear'}}
                className="result__title"
            >
                {i18n.t('resultTitle')}
            </motion.span>
            <motion.strong
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, ease: 'easeIn'}}
                className="result__value"
            >
                {roundValue(bmi, 1)}
            </motion.strong>
            <motion.strong
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{  ease: 'linear', delay: 0.3}}
                className="result__value"
            >
                ¡¡¡{i18n.t(label as string)}!!!
            </motion.strong>
            <motion.button
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 0.5 }}
                transition={{ delay: 0, ease: 'linear'}}
                className={`form__button ${isDarkTheme ? 'form__button--dark' : 'form__button--light'}`}
                onClick={onReset}
                whileHover={{ scale: 0.55 }}
            >
                {i18n.t('reset')}
            </motion.button>
        </motion.div>
    )
}

export default ResultContainer