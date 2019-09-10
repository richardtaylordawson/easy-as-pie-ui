import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

export const Nav = ({ children }) => (
  <Container>
    <ul>{children}</ul>
  </Container>
)

const Container = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0;
    list-style: none;
  }
`

Nav.propTypes = {
  children: PropTypes.node.isRequired
}
