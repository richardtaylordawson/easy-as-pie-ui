import React, { Component, Fragment } from "react"
import { Link } from "@reach/router"
import styled from "@emotion/styled"

const StyledLink = styled(Link)`
  padding: 0 20px;
  margin: 15px;
  color: gray;
  cursor: pointer;
  display: block;

  &.active {
    border-left: 2px solid red;
  }

  &:hover {
    color: black;
  }
`

class SideNav extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Fragment>
        <h4>Components</h4>
        <p>Position</p>
        <StyledLink to="/components/section" className="active">Section</StyledLink>
        <StyledLink to="/components/columns">Columns</StyledLink>
        <p>UI</p>
        <StyledLink to="/components/accordion">Accordion</StyledLink>
        <StyledLink to="/components/border-content">Border Content</StyledLink>
        <StyledLink to="/components/buttons">Buttons</StyledLink>
        <StyledLink to="/components/card">Card</StyledLink>
        <StyledLink to="/components/navbar">Navbar</StyledLink>
      </Fragment>
    )
  }
}

export default SideNav
