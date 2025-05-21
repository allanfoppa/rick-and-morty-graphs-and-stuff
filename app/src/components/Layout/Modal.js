import PropTypes from 'prop-types'

import { Image } from '../../components'

export default function Modal({active, closeLayer, characterProfile}) {
  return(
		<div className={`modal ${active ? 'is-active' : ''}`}>
			<ModalBG />
      <ModalContent
        characterProfile={characterProfile}
      />
      <ModalCloseButton
        closeLayer={closeLayer}
      />
		</div>
  )
}

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  closeLayer: PropTypes.func.isRequired,
  characterProfile: PropTypes.array.isRequired
}

const ModalBG = () => <div className="modal-background"></div>

const ModalContent = ({characterProfile}) => {

  let character

  if (Array.isArray(characterProfile)) character = characterProfile[0]
  else character = characterProfile

  return(
    <div className="modal-content box p-6">
      <div className="columns">
        <div className="column is-justify-content-center">
          <Image
            src={character.image}
            alt={character.name}
            styling="is-128x128"
          />
        </div>
        <div className="column">
          <table className="table is-striped">
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{character.name}</td>
              </tr>
              <tr>
                <td>Status</td>
                <td>{character.status}</td>
              </tr>
              <tr>
                <td>Species</td>
                <td>{character.species}</td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>{character.gender}</td>
              </tr>
              <tr>
                <td>Origin</td>
                <td>{character.origin.name}</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>{character.location.name}</td>
              </tr>
              <tr>
                <td>Epidode(s)</td>
                <td>{character.episode.map((e) => {
                  return <span key={e.id}>{`${e.split('/').pop()}, `}</span>
                })}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

ModalContent.propTypes = {
  characterProfile: PropTypes.array.isRequired
}

const ModalCloseButton = ({closeLayer}) => {
  return(
    <button
      className="modal-close is-large"
      aria-label="close"
      onClick={closeLayer}
    />
  )
}

ModalCloseButton.propTypes = {
  closeLayer: PropTypes.func.isRequired
}