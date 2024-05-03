{
  // function with generics

  const createArray = (params: string): string[] => {
    return [params]
  }

  const createArrayWithGeneric = <T>(params: T): T[] => {
    return [params]
  }

  const resultArray = createArray('Developer')
  const resultGeneric = createArrayWithGeneric<string>('Developer')
  const resultGeneric2 = createArrayWithGeneric<number>(5)
  const resultGeneric3 = createArrayWithGeneric<boolean>(true)

  console.log({ resultArray, resultGeneric, resultGeneric2, resultGeneric3 })

  type User = { id: number; name: string }

  const resultGenericObject = createArrayWithGeneric<User>({
    id: 464,
    name: 'John',
  })

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2]
  }

  const result = createArrayWithTuple<string, number>('John', 25)
  const result1 = createArrayWithTuple<string, { name: string; age: number }>(
    'Asia',
    { name: 'John', age: 25 }
  )

  console.log(result, result1)

  const addCourseToStudent = <T>(student: T) => {
    const course = 'Web Dev'

    return {
      ...student,
      course,
    }
  }

  const student1 = addCourseToStudent({
    name: 'John',
    email: 'x@gmail.com',
    devType: 'Next',
  })

  const student2 = addCourseToStudent({
    name: 'Doe',
    email: 'y@gmail.com',
    hasWatch: 'Apple Watch',
  })
}
