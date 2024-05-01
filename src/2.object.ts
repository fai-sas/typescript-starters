const user: {
  firstName: string
  lastName: string
  // company: string
  company: 'Google' // --> literal type
  address: string
  phoneNumber?: string // --> optional type
  email: string
} = {
  firstName: 'John',
  lastName: 'Smith',
  company: 'Google',
  address: 'Toronto',
  email: 'js@js.com',
}

user.phoneNumber = '4684'
