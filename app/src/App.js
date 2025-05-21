import React from 'react'

import Header from './components/LayoutElements/Header'
import Main from './components/LayoutElements/Main'
import Modal from './components/Layout/Modal'

import {
    fetchCharacter,
    fetchCharacterById,
    fetchCharactersStatus,
    fetchCharactersGender,
    fetchCharactersSpecies
} from './services'

export const EventsDispatch = React.createContext(null);

export default function App() {

	const [ event, updateEvent ] = React.useReducer(
    (prev, next) => {
      return { ...prev, ...next };
    },
    {
			isSearchLoading: false,
			isListNecessary: false,
			characterProfileList: [],
			isModalActive: false,
			characterProfile: [],
			inputCharacterValue: '',
		}
  );

	const getCharacter = async () => {
		updateEvent({ isSearchLoading :true})
		const data = await fetchCharacter(event.inputCharacterValue)
		getCharacterResponse(
			data.response,
			data.payload
		)
		updateEvent({ isSearchLoading :false })
	}

	const getCharacterResponse = (status, data) => {
		switch (status) {
			case 200:
				updateEvent({ characterProfile: data.results })
				if (data.info.count === 1) return updateEvent({ isModalActive :true })

				updateEvent({ characterProfileList :data.results })
				updateEvent({ isListNecessary: true})
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
		const data = await fetchCharacterById(id)
		fetchCharacterByIdResponse(
			data.response,
			data.payload
		)
	}

	const fetchCharacterByIdResponse = (status, data) => {
		switch (status) {
			case 200:
				updateEvent({ isListNecessary: false})
				updateEvent({ characterProfile: data })
				updateEvent({ isModalActive :true })
				break
			case 404:
				alert('Personagem nao encontrado')
				break
			default:
				console.error('Missing parameters on src/components/LayoutElements/App.js')
				break
		}
	}

	const [ doughnutChartContent, setDoughnutChartContent ] = React.useState({})

	React.useEffect(() => {
		const getCharacterStatus = async () => {
			let response = await fetchCharactersStatus()
			setDoughnutChartContent(response)
		}

		getCharacterStatus()
	}, [])

	const [ pieChartContent, setPieChartContent ] = React.useState({})

	React.useEffect(() => {
		const getCharacterSpecies = async () => {
			let response = await fetchCharactersSpecies()
			setPieChartContent(response)
		}

		getCharacterSpecies()
	}, [])

	const [ polarChartContent, setPolarChartContent ] = React.useState({})

	React.useEffect(() => {
		const getCharacterGender = async () => {
			let response = await fetchCharactersGender()
			setPolarChartContent(response)
		}

		getCharacterGender()
	}, [])

	return (
		<EventsDispatch.Provider value={updateEvent}>
			<div id="app">
				<Header />
				<Main
					isSearchLoading={event.isSearchLoading}
					getCharacter={() => getCharacter()}
					isListNecessary={event.isListNecessary}
					characterProfile={event.characterProfile}
					characterProfileList={event.characterProfileList}
					inputCharacterValue={event.inputCharacterValue}
					getCharacterById={getCharacterById}
					doughnutChartContent={doughnutChartContent}
					polarChartContent={polarChartContent}
					pieChartContent={pieChartContent}
				/>
				{event.isModalActive &&
					<Modal
						active={event.isModalActive}
						closeLayer={() => updateEvent({ isModalActive :false })}
						characterProfile={event.characterProfile}
					/>
				}
			</div>
		</EventsDispatch.Provider>
	)
}
