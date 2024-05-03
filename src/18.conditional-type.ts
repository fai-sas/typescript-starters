{
  //conditional type

  type A1 = number
  type B1 = string

  type X = A1 extends null ? true : false
  type Y = A1 extends null ? true : B1 extends undefined ? undefined : any

  type Sheikh = {
    bike: string
    car: string
    ship: string
    plane: string
  }

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false

  type HasPlane = CheckVehicle<'plane'>
}
