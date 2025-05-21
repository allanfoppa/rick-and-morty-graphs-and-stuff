import PropTypes from 'prop-types'

export default function Button({
  children,
  type = 'button',
  styling,
  isSearchLoading,
  eventClick
}) {
  return(
    <button
      type={type}
      className={`${isSearchLoading ? 'is-loading': ''} ${styling}`}
      onClick={eventClick}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  styling: PropTypes.string,
  isSearchLoading: PropTypes.bool,
  eventClick: PropTypes.func
}