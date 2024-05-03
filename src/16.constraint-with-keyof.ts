{
  // generic constraint with keyof operator

  type Vehicle = {
    bike: string
    car: string
    ship: string
  }

  type Owner = 'bike' | 'car' | 'ship' // manually
  type Owner2 = keyof Vehicle

  const user = {
    name: 'John',
    age: 26,
    address: 'LA',
  }

  const car = {
    model: 'Toyota 100',
    year: 200,
  }

  const getPropertyValue = <X, Y extends keyof X>(object: X, key: Y) => {
    return object[key]
  }

  const result = getPropertyValue(user, 'name')
  const result1 = getPropertyValue(car, 'model')
  // obj[key]

  console.log({ result, result1 })

  //
}
