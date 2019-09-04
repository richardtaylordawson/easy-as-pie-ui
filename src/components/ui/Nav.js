import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Container = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 0;
    list-style: none;
  }
`

export const Nav = ({children}) => (
  <Container>
    <ul>{children}</ul>
  </Container>
)

Nav.propTypes = {
  children: PropTypes.node.isRequired
}
