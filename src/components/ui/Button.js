import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Container = styled.button`
  //TODO add hover state and better colors for the light buttons
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 47.5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 5px;
`

const Button = ({children, color, outline = false}) => {

  //TODO change this to nested ternary and figure out why you cant use your own variable
  if(outline) {
    outline = color ? `text-${color} bc-${color} bw-s-1` : `text-primary bc-primary bw-s-1`
  } else {
    outline = color ? `text-white bg-${color} bw-none` : `text-primary bg-white bw-none`
  }

  return (
    <Container className={`${outline}`} color={color}>
      {children}
    </Container>
  )
}


Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  outline: PropTypes.bool
}

export default Button
