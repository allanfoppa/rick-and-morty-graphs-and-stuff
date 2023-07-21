import PropTypes from 'prop-types'

import Input from "./components/Input"
import Button from "./components/Button"
import React from 'react'

export default function SearchCharacter({
  isSearchLoading,
  getCharacter,
  inputCharacterValue,
  updateEvent
}){
  return(
    <form>
      <div className="field has-addons">
        <div className="control">
          <Input
            type="text"
            placeholder="Ex: Alien Rick"
            styling="input"
            inputValue={inputCharacterValue}
            setInputValue={updateEvent}
          />
        </div>
        <div className="control">
        <Button
          type="button"
          styling="button is-info"
          isSearchLoading={isSearchLoading}
          eventClick={getCharacter}
        >
          Search
        </Button>
        </div>
      </div>
    </form>
  )
}

SearchCharacter.propTypes = {
  getCharacter: PropTypes.func.isRequired,
  isSearchLoading: PropTypes.bool.isRequired,
	inputCharacterValue: PropTypes.string.isRequired,
}
