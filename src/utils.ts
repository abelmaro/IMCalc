export const cmToFeetInches = (cm: number) => {
    const length = cm / 2.54
    const feets = Math.floor(length / 12)
    const inches = length - 12 * feets

    return { feets, inches }
}

export const feetInchesToCm = (feet: number, inches: number) => {
    return feet * 30.48 + inches * 2.54
}

export const roundValue = (value: number, fixed?: number) => {
    let roundedValue = Math.round(value * 100) / 100
    if (fixed !== null)
        return roundedValue.toFixed(fixed)

    return roundedValue
}