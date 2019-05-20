import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Container = styled.nav`
  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
`

const Nav = ({children}) => (
  <Container>
    <ul>{children}</ul>
  </Container>
)

Nav.propTypes = {
  children: PropTypes.node.isRequired
}

export default Nav
