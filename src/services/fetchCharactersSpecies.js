
import { fetchCharactersInfo } from '../constants/endpoints'

export default async function fetchCharactersSpecies() {
  try {
    let [
      human,
      poopybutthole,
      humanoid,
      alien,
      mythological,
      animal,
      cronenberg,
      disease,
      unknown
    ] = await Promise.all([
      speciesHumam(),
      speciesPoopybutthole(),
      speciesHumanoid(),
      speciesAlien(),
      speciesMythological(),
      speciesAnimal(),
      speciesCronenberg(),
      speciesDisease(),
      speciesUnknown()
    ])

    let species ={
      human: human.info.count,
      poopybutthole: poopybutthole.info.count,
      humanoid: humanoid.info.count,
      alien: alien.info.count,
      mythological: mythological.info.count,
      animal: animal.info.count,
      cronenberg: cronenberg.info.count,
      disease: disease.info.count,
      unknown: unknown.info.count
    }

    return species
  } catch (error) {
    return console.error('Houve um problema com a requisição Fetch: ' + error.message)
  }
}

const speciesHumam = async () => {
  let response = await fetch(`${fetchCharactersInfo}?species=human`)
  let human = response.json()
  return human
}

const speciesPoopybutthole = async () => {
  let response = await fetch(`${fetchCharactersInfo}?species=poopybutthole`)
  let poopybutthole = response.json()
  return poopybutthole
}

const speciesHumanoid = async () => {
  let response = await fetch(`${fetchCharactersInfo}?species=humanoid`)
  let humanoid = response.json()
  return humanoid
}

const speciesAlien = async () => {
  let response = await fetch(`${fetchCharactersInfo}?species=alien`)
  let alien = response.json()
  return alien
}

const speciesMythological = async () => {
  let response = await fetch(`${fetchCharactersInfo}?species=mythological`)
  let mythological = response.json()
  return mythological
}

const speciesAnimal = async () => {
  let response = await fetch(`${fetchCharactersInfo}?species=animal`)
  let animal = response.json()
  return animal
}

const speciesCronenberg = async () => {
  let response = await fetch(`${fetchCharactersInfo}?species=cronenberg`)
  let cronenberg = response.json()
  return cronenberg
}

const speciesDisease = async () => {
  let response = await fetch(`${fetchCharactersInfo}?species=disease`)
  let disease = response.json()
  return disease
}

const speciesUnknown = async () => {
  let response = await fetch(`${fetchCharactersInfo}?species=unknown`)
  let unknown = response.json()
  return unknown
}