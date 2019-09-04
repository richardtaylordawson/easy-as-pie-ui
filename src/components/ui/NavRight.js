import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Container = styled.section`
  flex-display: "flex-end";
`

export const NavRight = ({children}) => (
  <Container >
    {children}
  </Container>
)

NavRight.propTypes = {
  children: PropTypes.node.isRequired
}
