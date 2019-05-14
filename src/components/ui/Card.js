import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Container = styled.div`
  border-radius: 10px;
`

const Card = ({children}) => (
  <Container className="bg-white box-shadow">
    {children}
  </Container>
)

Card.propTypes = {
  children: PropTypes.node.isRequired
}

export default Card
