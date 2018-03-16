export interface UserFriendInterface {
  id: number
  name: string
}

export interface UserInterface {
  index: number
  guid: string
  isActive: boolean
  balance: string
  picture: string
  age: number
  eyeColor: string
  name: {
    first: string
    last: string
  }
  company: string
  email: string
  phone: string
  address: string
  about: string
  registered: string
  latitude: string
  longitude: string
  tags: Array<string>
  range: Array<number>
  friends: Array<UserFriendInterface>
  greeting: string
  favoriteFruit: string
}