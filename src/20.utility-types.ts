{
  //utility types

  // Pick
  type Person = {
    name: string
    age: number
    email?: string
    contactNo: string
  }

  type NameAge = Pick<Person, 'name' | 'age'>

  // Omit

  type ContactInfo = Omit<Person, 'name' | 'age'>

  // Required

  type PersonRequired = Required<Person>

  // Partial

  type PersonPartial = Partial<Person>

  // Readonly

  type PersonReadonly = Readonly<Person>

  const person1: PersonReadonly = {
    name: 'John',
    age: 64,
    contactNo: '445',
  }

  person1.age = 64 // won't work, readonly value

  // Record

  // type MyObject = {
  //   a: string;
  //   b: string;
  // };

  type MyObject = Record<string, number>

  const EmptyObj: Record<string, unknown> = {}

  const object1: MyObject = {
    a: 'aa', // won't work
    b: 'bb', // won't work
    c: 'cc', // won't work
    d: 'dd', // won't work
    e: 6,
  }
}
