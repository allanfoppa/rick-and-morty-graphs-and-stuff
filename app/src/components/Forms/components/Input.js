import PropTypes from 'prop-types'

export default function Input({
  type,
  placeholder,
  styling,
  inputValue,
  setInputValue
}) {
  return(
    <input
      type={type}
      placeholder={placeholder}
      className={styling}
      value={inputValue}
      onChange={e => setInputValue({
        inputCharacterValue: e.target.value
      })}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  styling: PropTypes.string
}
