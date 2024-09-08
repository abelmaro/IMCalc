import { PERSON_TYPES } from "./personTypes"

export enum BMI_FORM {
    HEIGHT = 'height',
    HEIGHT_FEET = 'heightFeets',
    HEIGHT_INCHES = 'heightInches',
    WEIGHT = 'weight',
    PERSON_TYPE = 'personType',
    WEIGHT_MEASUREMENT_TYPE = 'weightMeasurementType',
    HEIGHT_MEASUREMENT_TYPE = 'heightMeasurementType',
}

export interface IBMIFormValues {
    height: number | null 
    heightFeets: number | null,
    heightInches: number | null,
    weight: number | null,
    heightMeasurementType: string,
    weightMeasurementType: string,
    personType: PERSON_TYPES
}

const DEFAULT_RULES = {
    required: true,
    min: 1,
    max: 9999,
    pattern: {
        value: /^[0-9]+(\.[0-9]+)?$|^([0-9]+,[0-9]+)?$/,
    }
}

export const BMI_FORM_RULES = {
    DEFAULT_RULES,
    WEIGHT_KG: {
        ...DEFAULT_RULES,
        min: 30
    },
    WEIGHT_LB: {
        ...DEFAULT_RULES,
        min: 66.15
    },
    HEIGHT_CM: {
        ...DEFAULT_RULES,
        min: 60.96
    },
    HEIGHT_FEETS: {
        ...DEFAULT_RULES,
        min: 2
    }
};