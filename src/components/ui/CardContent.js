
import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Container = styled.div`
  text-align: center;
  padding: 45px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`

const CardContent = ({children}) => (
  <Container>{children}</Container>
)

CardContent.propTypes = {
  children: PropTypes.node.isRequired
}

export default CardContent
