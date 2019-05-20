import React, { Component } from "react"
import { Link } from "@reach/router"
import styled from "@emotion/styled"

const Container = styled.nav`
  height: 100%;
  overflow-y: scroll;
  padding: 0 5px;

  .active {
    border-left: 2px solid red;
  }
`

const StyledLink = styled(Link)`
  padding: 0 20px;
  margin: 15px;
  color: gray;
  cursor: pointer;
  display: block;

  &:hover {
    color: black;
  }
`

class ComponentsNav extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Container>
        <h4>Components</h4>
        <p>Position</p>
        <StyledLink to="/components/section" className="active">Section</StyledLink>
        <StyledLink to="/components/columns">Columns</StyledLink>
        <p>UI</p>
        <StyledLink to="/components/buttons">Buttons</StyledLink>
        <StyledLink to="/components/card">Card</StyledLink>
        <StyledLink to="/components/accordion">Accordion</StyledLink>
        <StyledLink to="/components/border-content">Border Content</StyledLink>
      </Container>
    )
  }
}

export default ComponentsNav
