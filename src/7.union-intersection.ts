type FrontendDeveloper = 'React Developer' | 'Angular Developer'
type BackEndDeveloper = 'Mongoose Developer' | 'Prisma Developer'

type FullStackDeveloper = FrontendDeveloper | BackEndDeveloper

const newDeveloper: FullStackDeveloper = 'React Developer'

type User = {
  name: string
  email: string
  phoneNumber?: string
  gender: 'Male' | 'Female'
  bloodGroup: 'O+' | 'A+' | 'AB-'
}

const user2: User = {
  name: 'Ricky',
  email: 'email@email.com',
  gender: 'Male',
  bloodGroup: 'A+',
}

type FrontDeveloper = {
  skills: string[]
  designation1: 'Front End Developer'
}

type BackDeveloper = {
  skills: string[]
  designation2: 'Back End Developer'
}

type FullDeveloper = FrontDeveloper & BackDeveloper

const fullDeveloper: FullDeveloper = {
  skills: ['React', 'Next', 'Prisma'],
  designation1: 'Front End Developer',
  designation2: 'Back End Developer',
}
