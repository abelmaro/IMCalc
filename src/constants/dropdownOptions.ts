import { FaChild, FaMale } from "react-icons/fa"
import { WeightMeasurementTypes, HeightMeasurementTypes } from "./measurementTypes"
import { PERSON_TYPES } from "./personTypes"

export const PERSON_TYPES_OPTIONS = [
    {
        key: PERSON_TYPES.ADULT,
        label: 'adult',
        icon: FaMale
    },
    {
        key: PERSON_TYPES.CHILD,
        label: 'child',
        icon: FaChild
    }
]

export const WEIGHT_MEASUREMENT_TYPES = [
    {
        key: WeightMeasurementTypes.KG,
        label: 'kg'
    },
    {
        key: WeightMeasurementTypes.LB,
        label: 'lb'
    }
]

export const HEIGHT_MEASUREMENT_TYPES = [
    {
        key: HeightMeasurementTypes.CM,
        label: 'cm'
    }, {
        key: HeightMeasurementTypes.INCHES,
        label: 'in'
    }
]

export const LANGUAGES_OPTIONS = [
    {
        label: 'spanish',
        value: 'es'
    },
    {
        label: 'english',
        value: 'en'
    },
    {
        label: 'french',
        value: 'fr'
    },
    {
        label: 'portuguese',
        value: 'pt'
    },
    {
        label: 'japanese',
        value: 'jp'
    }
]


