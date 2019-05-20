import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Container = styled.li`
  margin: auto 20px;
  display: inline;
  cursor: pointer;
  color: white;

  &:hover {
    border-bottom: 1px solid white;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

const NavLink = ({children, href}) => (
  <Container>
    <a href={href}>{children}</a>
  </Container>
)

NavLink.propTypes = {
  children: PropTypes.node.isRequired
}

export default NavLink
