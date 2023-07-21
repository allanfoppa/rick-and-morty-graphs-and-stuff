
import { fetchCharactersInfo } from '../constants/endpoints'

export default async function fetchCharactersStatus() {
  try {
    let [alive, dead, unknown] = await Promise.all([
      statusAlive(),
      statusDead(),
      statusUnknown()
    ])

    let status = {
      alive: alive.info.count,
      dead: dead.info.count,
      unknown: unknown.info.count
    }

    return status
  } catch (error) {
    return console.error('Houve um problema com a requisição Fetch: ' + error.message)
  }
}

const statusAlive = async () => {
  let response = await fetch(`${fetchCharactersInfo}?status=alive`)
  let alive = response.json()
  return alive
}

const statusDead = async () => {
  let response = await fetch(`${fetchCharactersInfo}?status=dead`)
  let dead = response.json()
  return dead
}

const statusUnknown = async () => {
  let response = await fetch(`${fetchCharactersInfo}?status=unknown`)
  let unknown = response.json()
  return unknown
}