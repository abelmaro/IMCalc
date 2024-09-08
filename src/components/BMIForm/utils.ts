import { FieldValues } from "react-hook-form"
import { HeightMeasurementTypes, WeightMeasurementTypes } from "../../constants/measurementTypes"
import { feetInchesToCm } from "../../utils"
import { PERSON_TYPES } from "../../constants/personTypes"

export const defaultValues = {
    weightMeasurementType: WeightMeasurementTypes.KG,
    heightMeasurementType: HeightMeasurementTypes.CM,
    personType: PERSON_TYPES.ADULT,
    heightInches: null,
    heightFeets: null,
    weight: null,
    height: null
}

export const calculateBMI = (data: FieldValues) => {
    const { weight, height, heightMeasurementType, heightFeets, heightInches, personType } = data
    const heightInCm = heightMeasurementType === HeightMeasurementTypes.CM ? height : feetInchesToCm(heightFeets, heightInches)

    const formattedHeight = heightInCm / 100
    const bmi = parseFloat((weight / (formattedHeight * formattedHeight)).toFixed(2))

    return { bmi, label: getMetrics(bmi, personType) }
}

const getMetrics = (bmi: number, personType: string) => {
    if (personType === PERSON_TYPES.ADULT) {
        if (bmi < 18.5)
            return 'underweight'
        else if (bmi < 25)
            return 'normal'
        else if (bmi < 30)
            return 'overweight'
        else
            return 'obese'
    }
    else {
        if (bmi < 5) {
            return 'underweight'
        } else if (bmi < 85) {
            return 'normal'
        } else if (bmi < 95) {
            return 'overweight'
        } else {
            return 'obese'
        }
    }
}