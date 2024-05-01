// object destructuring

const user1 = {
  id: 345,
  contact: {
    firstName: 'John',
    lastName: 'Smith',
    company: 'Google',
    address: 'Toronto',
    email: 'js@js.com',
  },
  contactNo: '123465',
  address: 'Australia',
}

const {
  address,
  contact: { firstName: fn },
} = user1

// array destructuring

const frontEndTech: string[] = [
  'Css',
  'Js',
  'React',
  'Next',
  'Tailwind',
  'Redux',
]

const [, , favoriteTech, ...rest] = frontEndTech
