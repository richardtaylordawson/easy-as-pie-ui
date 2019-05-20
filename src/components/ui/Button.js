import React from "react"
import PropTypes from "prop-types"

const Button = ({children, color = "", href = "", target=""}) => {
  const buttonClasses = `btn btn-${color}`

  return (href)
    ? <a href={href} target={target ? target : ""} className={buttonClasses}>{children}</a>
    : <button type="button" className={buttonClasses}>{children}</button>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string
}

export default Button
