import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

const Container = styled.div`
  background-color: white;
  padding: 5px 16px;
  border-left: 2px solid ${props => props.borderColor ? props.borderColor : "black"};
`

const BorderCard = ({children, color}) => (
  <Container borderColor={color}>
    {children[0]}
    {children[1]}
  </Container>
)

BorderCard.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
}

export default BorderCard
