{
  // interface - generic

  interface Developer<T, X = null> {
    name: string
    computer: {
      brand: string
      model: string
      releaseYear: number
    }
    smartWatch: T
    bike?: X
  }

  interface SamsungWatch {
    brand: string
    model: string
    display: string
  }

  const poorDeveloper: Developer<SamsungWatch> = {
    name: 'John',
    computer: {
      brand: 'Dell',
      model: 'X-255UR',
      releaseYear: 2013,
    },
    smartWatch: {
      brand: 'Samsung',
      model: 'kw66',
      display: 'LED',
    },
  }

  interface AppleWatch {
    brand: string
    model: string
    heartTrack: boolean
    sleepTrack: boolean
  }

  interface YamahaBike {
    model: string
    engineCapacity: string
  }

  const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: 'John Doe',
    computer: {
      brand: 'HP',
      model: 'X-25UR',
      releaseYear: 2018,
    },
    smartWatch: {
      brand: 'Apple Watch',
      model: 'Something',
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      engineCapacity: '150cc',
      model: '2016',
    },
  }
}
