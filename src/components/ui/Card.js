import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

export const Card = ({children}) => (
  <Container className="bg-white box-shadow">
    {children}
  </Container>
)

const Container = styled.div`
  border-radius: 10px;
`

Card.propTypes = {
  children: PropTypes.node.isRequired
}
