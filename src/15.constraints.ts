{
  // constraints

  interface Student {
    id: number
    name: string
    email: string
  }

  const addCourseToStudent = <T extends Student>(student: T) => {
    const course = 'Web Dev'

    return {
      ...student,
      course,
    }
  }

  const student1 = addCourseToStudent<{
    id: number
    name: string
    email: string
    devType: string
  }>({
    id: 222,
    name: 'Mr X',
    email: 'x@gmail.com',
    devType: 'NLWD',
  })

  const student2 = addCourseToStudent({
    id: 333,
    name: 'Mr Y',
    email: 'y@gmail.com',
    hasWatch: 'Apple Watch',
  })

  const student3 = addCourseToStudent({
    id: 44,
    name: 'Mr. Z',
    email: 'z@gmail.com',
    random: 'random',
  })
}
