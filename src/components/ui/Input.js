import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

export const Input = ({type, placeholder = ""}) => (
  <StyledInput className="bw-s-1 bc-light-grey" type={type} placeholder={placeholder} />
)

const StyledInput = styled.input`
  padding-left: 25px;
`

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string
}
