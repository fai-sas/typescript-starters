// ternary operator || optional chaining || nullish coalescing operator

const age: number = 18

if (age >= 18) {
  console.log('adult')
} else {
  console.log('not adult')
}

const isAdult = age >= 18 ? 'adult' : 'not adult'

// nullish coalescing operator
// null / undefined ---> decision making

const isAuthenticated = ''

const result1 = isAuthenticated ?? 'Guest'
const result2 = isAuthenticated ? isAuthenticated : 'Guest'
console.log({ result1, result2 })

type NewUser = {
  name: string
  address: {
    city: string
    road: string
    presentAddress: string
    permanentAddress?: string
  }
}

const newUser: NewUser = {
  name: 'John',
  address: {
    city: 'LA',
    road: 'Baker Street',
    presentAddress: 'Downtown',
  },
}

const permanentAddress =
  newUser?.address?.permanentAddress ?? 'No Permanent Address'
console.log({ permanentAddress })
