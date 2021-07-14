import PropTypes from 'prop-types'

import Title from '../Foundation/Title'
import SearchCharacter from '../Forms/SearchCharacter'
import SearchCharacterBox from '../Layout/SearchCharacterBox'

import DoughnutChart from '../Media/DoughnutChart'
import PieChart from '../Media/PieChart'
import PolarChart from '../Media/PolarChart'

export default function Main({
	isSearchLoading,
	isListNecessary,
	getCharacter,
	inputCharacterValue,
	setInputCharacterValue,
	characterProfile,
	getCharacterById,
	characterProfileList,
	doughnutChartContent,
	polarChartContent,
	pieChartContent
}) {
	return (
		<main className="container px-3">
			<section id="search__character">
				<Title
					level={2}
					styling="subtitle"
					text="Filter by character name:"
				/>
				<SearchCharacter
					isSearchLoading={isSearchLoading}
					getCharacter={getCharacter}
					inputCharacterValue={inputCharacterValue}
					setInputCharacterValue={setInputCharacterValue}
				/>
				<SearchCharacterBox
					getCharacterById={getCharacterById}
					isListNecessary={isListNecessary}
					characterProfile={characterProfile}
					characterProfileList={characterProfileList}
					inputCharacterValue={inputCharacterValue}
				/>
			</section>
			<section id="graphs" className="mt-6">
				<Title
					level={2}
					styling="subtitle"
					text="Some graphs now!"
				/>

				<div className="columns">
					<div className="column">
						<DoughnutChart
							doughnutChartContent={doughnutChartContent}
						/>
					</div>
					<div className="column">
						<PieChart
							pieChartContent={pieChartContent}
						/>
					</div>
					<div className="column">
						<PolarChart
							polarChartContent={polarChartContent}
						/>
					</div>
				</div>
			</section>
		</main>
	)
}

Main.propTypes = {
	getCharacter: PropTypes.func.isRequired,
	isSearchLoading: PropTypes.bool.isRequired,
	isListNecessary: PropTypes.bool.isRequired,
	inputCharacterValue: PropTypes.string.isRequired,
	setInputCharacterValue: PropTypes.func.isRequired,
	getCharacterById: PropTypes.func.isRequired,
	characterProfileList: PropTypes.array.isRequired,
	characterProfile: PropTypes.array.isRequired,
	doughnutChartContent: PropTypes.object.isRequired,
	polarChartContent: PropTypes.object.isRequired,
	pieChartContent: PropTypes.object.isRequired,
}