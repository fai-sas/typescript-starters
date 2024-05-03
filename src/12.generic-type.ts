{
  // generic type

  type GenericArray<T> = Array<T>

  const rollNumbers: GenericArray<number> = [3, 45, 6874]
  const techs: GenericArray<string> = ['React', 'Next', 'Node']
  const isAdmin: GenericArray<boolean> = [true, false]

  interface User {
    name: string
    age: number
  }

  const user: GenericArray<User> = [
    {
      name: 'John',
      age: 40,
    },
  ]

  type GenericTuple<X, Y> = [X, Y]

  const users: GenericTuple<string, string> = ['John', 'Smith']

  const userWithId: GenericTuple<number, string> = [1324, 'John']

  const userWithId1: GenericTuple<number, { name: string; email: string }> = [
    1324,
    { name: 'John', email: 'john@email.com' },
  ]
}
