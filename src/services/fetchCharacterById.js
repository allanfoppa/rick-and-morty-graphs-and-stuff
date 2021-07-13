
import { fetchCharactersInfo } from '../constants/endpoints'

export default async function fetchCharacterById(id){
  try {
    const response = await fetch(`${fetchCharactersInfo}/${id}`)
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