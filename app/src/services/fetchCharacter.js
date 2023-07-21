
import { fetchCharactersInfo } from '../constants/endpoints'

export default async function fetchCharacter(search){
  try {
    const response = await fetch(`${fetchCharactersInfo}/?name=${search}`)
    const payload = await response.json()

    const data = {
      response: response.status,
      payload: payload
    }

    return data
  } catch (error) {
    return console.log('Houve um problema com a requisição Fetch: ' + error.message)
  }
}