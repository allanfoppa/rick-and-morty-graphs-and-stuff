import { createElement } from "react";
import PropTypes from 'prop-types'

export default function Title({level, styling, text}) {
  return createElement(`h${level}`, { className: styling }, text)
}

Title.propTypes = {
  level: PropTypes.number.isRequired,
  styling: PropTypes.string,
  text: PropTypes.string.isRequired,
}