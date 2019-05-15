import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const StyledInput = styled.input`
  padding-left: 25px;
`

const Input = ({type, placeholder = ""}) => (
  <StyledInput className="bw-s-1 bc-muted" type={type} placeholder={placeholder} />
)


Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}

export default Input
