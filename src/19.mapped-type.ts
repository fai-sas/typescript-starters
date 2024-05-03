{
  // mapped types

  const arrayOfNumbers: number[] = [45, 6, 97, 745]

  const arrayOfStrings: string[] = arrayOfNumbers.map((number) =>
    number.toString()
  )
  console.log(arrayOfStrings)

  interface AreaNumber {
    height: number
    width: number
  }

  type AreaString<T> = {
    [key in keyof T]: T[key]
  }

  const area1: AreaString<{ height: string; width: number }> = {
    height: '458',
    width: 64,
  }

  type Height = AreaNumber['height'] // look up type
  // type AreaString = {
  //   height: string;
  //   width: string
  // }
  // keyof AreaNumber => "height"|"width"

  // T => {height:string;width:number}
  // key => T["width"]
  // type AreaString<T> = {
  //   [key in keyof T]: T[key]
  // }

  // const area1: AreaString<{ height: string; width: number }> = {
  //   height: '100',
  //   width: 50,
  // }
}
