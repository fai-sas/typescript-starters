// spread operator

const team1: string[] = ['Madrid', 'Paris', 'Chelsea']
const team2: string[] = ['Milan', 'Dortmund', 'City']

team1.push(...team2)

const frontEnd: string[] = ['Css', 'Js', 'React', 'Next']
const backEnd: string[] = ['Express', 'Mongoose', 'Prisma']

const fullStack: string[] = { ...frontEnd, ...backEnd }

// rest operator

const greetFriends = (...friends: string[]) => {
  friends.forEach((friend) => console.log(`Hello ${friend}`))
}

greetFriends('Adam', 'Smith', 'Boult')
