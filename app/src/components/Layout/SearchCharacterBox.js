import PropTypes from 'prop-types'

export default function SearchCharacterBox({
  isListNecessary,
  inputCharacterValue,
  getCharacterById,
  characterProfileList
}) {
  return(
    <ul
      className={`
        menu-list
        column
        is-one-third
        mt-2
        pl-0
        ${isListNecessary ? '' : 'is-hidden'}
      `}>
      <p className="has-background-info has-text-white p-2">
        Listing the first {characterProfileList.length} records for {inputCharacterValue}
      </p>
      <li>
        <ul>
          {characterProfileList.map((e) => {
            return <li key={e.id}><a onClick={() => getCharacterById(e.id)}>{e.name}</a></li>
          })}
        </ul>
      </li>
    </ul>
  )
}

SearchCharacterBox.propTypes = {
  isListNecessary: PropTypes.bool.isRequired,
  inputCharacterValue: PropTypes.string,
  getCharacterById: PropTypes.func,
  characterProfileList: PropTypes.array
}