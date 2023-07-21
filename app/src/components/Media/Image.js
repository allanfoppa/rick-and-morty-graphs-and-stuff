import PropTypes from 'prop-types'

export default function Image({src, alt, styling}) {
  return(
    <img src={src} alt={alt} className={styling} />
  )
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  styling: PropTypes.string
}