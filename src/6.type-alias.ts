// type alias

type Student = {
  name: string
  age: number
  contactNo?: string
  gender: string
  address: string
}

const student: Student = {
  name: 'Smith',
  age: 50,
  gender: 'male',
  //  contactNo: '0170000000',
  address: 'Australia',
}

const student2: Student = {
  name: 'Ricky',
  age: 40,
  gender: 'male',
  address: 'Melbourne',
}

type UserName = string
type IsAdmin = boolean

const userName: UserName = 'Smith'
const isAdmin1: IsAdmin = false

type Add = (num1: number, num2: number) => number

const add1: Add = (num1, num2) => num1 + num2
