{
  // type assertion

  let anything: any

  anything = 'any string'

  anything = 222

  const kgToGram = (value: string | number): string | number | undefined => {
    if (typeof value === 'string') {
      const convertedValue = parseFloat(value) * 1000
      return `The converted value is ${convertedValue}`
    }
    if (typeof value === 'number') {
      return value * 1000
    }
  }

  const result1 = kgToGram('114') as number
  const result2 = kgToGram(563)

  console.log({ result1, result2 })

  type CustomError = {
    message: string
  }

  try {
  } catch (error) {
    console.log((error as CustomError).message)
  }
}
