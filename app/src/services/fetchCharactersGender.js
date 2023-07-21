
import { fetchCharactersInfo } from '../constants/endpoints'

export default async function fetchCharactersGender() {
  try {
    let [female, male, genderless, unknown] = await Promise.all([
      genderFemale(),
      genderMale(),
      genderLess(),
      genderUnknown()
    ])

    let gender = {
      female: female.info.count,
      male: male.info.count,
      genderless: genderless.info.count,
      unknown: unknown.info.count
    }

    return gender
  } catch (error) {
    return console.error('Houve um problema com a requisição Fetch: ' + error.message)
  }
}


const genderFemale = async () => {
  let response = await fetch(`${fetchCharactersInfo}?gender=female`)
  let female = response.json()
  return female
}

const genderMale = async () => {
  let response = await fetch(`${fetchCharactersInfo}?gender=male`)
  let male = response.json()
  return male
}

const genderLess = async () => {
  let response = await fetch(`${fetchCharactersInfo}?gender=genderless`)
  let genderless = response.json()
  return genderless
}

const genderUnknown = async () => {
  let response = await fetch(`${fetchCharactersInfo}?gender=unknown`)
  let unknown = response.json()
  return unknown
}