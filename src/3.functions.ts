// normal function

function add(num1: number, num2: number): number {
  return num1 + num2
}

function multiply(num1: number, num2: number = 10): number {
  return num1 * num2
}

// arrow function

const addArrow = (num1: number, num2: number): number => num1 + num2

const multiplyArrow = (num1: number, num2: number = 10): number => {
  return num1 * num2
}

const uclWinners: string[] = ['Messi', 'Ronaldo', 'Silva']

const numbers: number[] = [1, 3, 487, 8]

const newNumbers: number[] = numbers.map((number: number) => number * number)
