import React from "react"
import styled from "@emotion/styled"

const StyledButton = styled.div`
  border: none;
  background-color: white;
  color: black;
  border-radius: 5px;
  padding: 10px 47.5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 2px 4px black;
`

const Button = ({buttonText = "1.888.888.8888"}) => (
  <StyledButton>{buttonText}</StyledButton>
)

export default Button
