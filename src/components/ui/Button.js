import React from "react"
import PropTypes from "prop-types"

const Button = ({children, color, outline = false}) => (
  <button type="button" className={`btn ${outline ? `btn-${color}-outline` : `btn-${color}`}`}>{children}</button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  outline: PropTypes.bool
}

export default Button
