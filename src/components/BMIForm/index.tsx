import { useForm } from "react-hook-form"
import { BMI_FORM, BMI_FORM_RULES, IBMIFormValues } from "../../constants/bmiForm"
import { HEIGHT_MEASUREMENT_TYPES, PERSON_TYPES_OPTIONS, WEIGHT_MEASUREMENT_TYPES } from "../../constants/dropdownOptions"
import useTheme from "../../hooks/useTheme"
import i18n from "../../i18n/i18n"
import CustomInput from "../CustomInput"
import CustomRadioOptions from "../CustomRadioOptions"
import { cmToFeetInches, feetInchesToCm, roundValue } from "../../utils"
import { HeightMeasurementTypes, WeightMeasurementTypes } from "../../constants/measurementTypes"
import { motion } from "framer-motion"
import { Dispatch, SetStateAction, useEffect } from "react"
import { IBmi } from "../../interfaces/IBmi"
import { calculateBMI, defaultValues } from "./utils"

import './styles.sass'

interface IBMIForm {
    bmi: IBmi,
    setBmi: Dispatch<SetStateAction<IBmi>>
}

const BMIForm = ({
    setBmi
}: IBMIForm) => {
    const { isDarkTheme } = useTheme()
    const {
        formState: { isValid },
        handleSubmit,
        register,
        setValue,
        control,
        watch
    } = useForm<IBMIFormValues>({ defaultValues: defaultValues })

    const {
        heightMeasurementType,
        weightMeasurementType,
        heightInches,
        heightFeets,
        personType,
        height,
        weight
    } = watch()

    const setHeights = (height: number, heightFeet: number, heightInches: number) => {
        setValue(BMI_FORM.HEIGHT, height)
        setValue(BMI_FORM.HEIGHT_FEET, heightFeet)
        setValue(BMI_FORM.HEIGHT_INCHES, heightInches)
    }

    const handleHeightMeasurementTypeChange = (heightMeasurementType: string): void => {
        if (height === 0 && heightFeets === 0 && heightInches === 0)
            return

        switch (heightMeasurementType) {
            case HeightMeasurementTypes.CM:
                if (heightFeets && heightInches) {
                    const heightInCm = roundValue(feetInchesToCm(heightFeets, heightInches))
                    setHeights(heightInCm as number, 0, 0)
                }
                break
            case HeightMeasurementTypes.INCHES:
                if (height) {
                    const { feets, inches } = cmToFeetInches(height)
                    setHeights(0, feets, roundValue(inches) as number)
                }
                break
            default:
                setHeights(0, 0, 0)
        }
    }

    const handleWeightMeasurementTypeChange = (weightMeasurementType: string): void => {
        if (weight === 0 || weight === null)
            return

        switch (weightMeasurementType) {
            case WeightMeasurementTypes.KG:
                setValue(BMI_FORM.WEIGHT, roundValue(weight / 2.205) as number)
                break
            case WeightMeasurementTypes.LB:
                setValue(BMI_FORM.WEIGHT, roundValue(weight * 2.205) as number)
                break
            default:
                setValue(BMI_FORM.WEIGHT, 0)
        }
    }

    const handleFormSubmit = (data: IBMIFormValues) => {
        const { bmi, label } = calculateBMI(data)
        setBmi({
            bmi,
            label
        })
    }

    useEffect(() => {
        handleHeightMeasurementTypeChange(heightMeasurementType)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [heightMeasurementType])

    useEffect(() => {
        handleWeightMeasurementTypeChange(weightMeasurementType)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [weightMeasurementType])

    return (<form onSubmit={handleSubmit((data) => handleFormSubmit(data))} className='form'>
        <CustomRadioOptions
            control={control}
            name={BMI_FORM.PERSON_TYPE}
            selected={personType}
            options={PERSON_TYPES_OPTIONS}
        />
        <div className='form__weight-container'>
            <CustomInput
                label={i18n.t('weight')}
                type='number'
                placeholder={i18n.t('enterWeight')}
                name={BMI_FORM.WEIGHT}
                control={control}
                register={register}
                rules={weightMeasurementType === WeightMeasurementTypes.KG ? BMI_FORM_RULES.WEIGHT_KG : BMI_FORM_RULES.WEIGHT_LB}
            />
            <CustomRadioOptions
                control={control}
                name={BMI_FORM.WEIGHT_MEASUREMENT_TYPE}
                selected={weightMeasurementType}
                options={WEIGHT_MEASUREMENT_TYPES}
            />
        </div>
        <div className='form__height-container'>
            {
                heightMeasurementType === HeightMeasurementTypes.CM ?
                    <CustomInput label={i18n.t('height')}
                        type='number'
                        placeholder={i18n.t('enterHeight')}
                        name={BMI_FORM.HEIGHT}
                        control={control}
                        register={register}
                        rules={BMI_FORM_RULES.HEIGHT_CM}
                    />
                    : <>
                        <CustomInput label={i18n.t('height')}
                            type='number'
                            placeholder={i18n.t('feets')}
                            name={BMI_FORM.HEIGHT_FEET}
                            control={control}
                            register={register}
                            rules={BMI_FORM_RULES.HEIGHT_FEETS}
                        />
                        <CustomInput label={i18n.t('height')}
                            type='number'
                            placeholder={i18n.t('inches')}
                            name={BMI_FORM.HEIGHT_INCHES}
                            control={control}
                            register={register}
                        />
                    </>
            }
            <CustomRadioOptions
                control={control}
                name={BMI_FORM.HEIGHT_MEASUREMENT_TYPE}
                selected={heightMeasurementType}
                options={HEIGHT_MEASUREMENT_TYPES}
            />
        </div>
        <motion.input
            type='submit'
            disabled={!isValid}
            className={`form__button ${isDarkTheme ? 'form__button--dark' : 'form__button--light'}`}
            value={i18n.t('calculate')}
            whileHover={{ scale: 1.01 }}
        />
    </form>
    )
}

export default BMIForm