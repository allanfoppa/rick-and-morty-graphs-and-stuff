import React from 'react'

import Header from './Header'
import Main from './Main'
import Modal from '../Layout/Modal'

import fetchCharacter from '../../services/fetchCharacter'
import fetchCharacterById from '../../services/fetchCharacterById'

export default function App() {

	const [ isSearchLoading, setIsSearchLoading ] = React.useState(false)

	const [ isListNecessary, setIsListNecessary ] = React.useState(false)
	const [ characterProfileList, setCharacterProfileList ] = React.useState([])

	const [ isModalActive, setIsModalActive ] = React.useState(false)
	const [ characterProfile, setCharacterProfile ] = React.useState([])

	const [ inputCharacterValue, setInputCharacterValue ] = React.useState('')

	const getCharacter = async () => {
		setIsSearchLoading(true)
		const data = await fetchCharacter(inputCharacterValue)
		getCharacterResponse(
			data.response,
			data.payload
		)
		setIsSearchLoading(false)
	}

	const getCharacterResponse = (status, data) => {
		switch (status) {
			case 200:
				console.log('[COUNT]', data.info.count)
				setCharacterProfile(data.results)
				if (data.info.count === 1) return setIsModalActive(true)

				setCharacterProfileList(data.results)
				setIsListNecessary(true)
				break
			case 404:
				alert('Personagem nao encontrado')
				break
			default:
				console.error('Missing parameters on src/components/LayoutElements/App.js')
				break
		}
	}

	const getCharacterById = async (id) => {
		console.log('[ID BY ID]', id)
		const data = await fetchCharacterById(id)
		fetchCharacterByIdResponse(
			data.response,
			data.payload
		)
	}

	const fetchCharacterByIdResponse = (status, data) => {
		switch (status) {
			case 200:
				console.log('[fetchCharacterByIdResponse]', data)
				setIsListNecessary(false)
				setCharacterProfile(data)
				setIsModalActive(true)
				break
			case 404:
				alert('Personagem nao encontrado')
				break
			default:
				console.error('Missing parameters on src/components/LayoutElements/App.js')
				break
		}
	}

	return (
		<div id="app">
			<Header />
			<Main
				isSearchLoading={isSearchLoading}
				getCharacter={() => getCharacter()}
				isListNecessary={isListNecessary}
				characterProfile={characterProfile}
				characterProfileList={characterProfileList}
				inputCharacterValue={inputCharacterValue}
				setInputCharacterValue={setInputCharacterValue}
				getCharacterById={getCharacterById}
			/>
			{isModalActive &&
				<Modal
					active={isModalActive}
					closeLayer={() => setIsModalActive(false)}
					characterProfile={characterProfile}
				/>
			}
		</div>
	)
}