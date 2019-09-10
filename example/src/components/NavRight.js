import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

export const NavRight = ({ children }) => (
  <Container >
    {children}
  </Container>
)

const Container = styled.section`
  flex-display: "flex-end";
`

NavRight.propTypes = {
  children: PropTypes.node.isRequired
}
