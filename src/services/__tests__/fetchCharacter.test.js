import 'isomorphic-fetch'

import fetchCharacter from '../fetchCharacter'

test('the data brings 4 Morty Smith', async () => {
  const data = await fetchCharacter('Morty Smith')

  expect(data.response).toBe(200)
  expect(data.payload).toStrictEqual({
    "info": expect.any(Object),
    "results": expect.any(Array)
  })
})

test('get error when input is wrong', async () => {
  const data = await fetchCharacter('`Morty Smith')

  expect(data.response).toBe(404)
  expect(data.payload).toStrictEqual({
    "error": expect.any(String)
  })
})