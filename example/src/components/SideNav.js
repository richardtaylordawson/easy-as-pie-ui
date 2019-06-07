import React, { Fragment } from "react"
import { Link } from "@reach/router"
import styled from "@emotion/styled"

import { ReactCuttlefishColors } from "react-cuttlefish"

const StyledLink = styled(Link)`
  padding: 0 20px;
  margin: 15px;
  color: gray;
  cursor: pointer;
  display: block;

  &.active {
    border-left: 2px solid ${ReactCuttlefishColors.blue};
  }

  &:hover {
    color: black;
  }
`

const SideNav = () => {
  return (
    <Fragment>
      <h4>Components</h4>
      <p>Position</p>
      <StyledLink
        to="/components/section"
      >
        Section
      </StyledLink>
      <StyledLink
        to="/components/columns"
      >
        Columns
      </StyledLink>
      <p>UI</p>
      <StyledLink
        to="/components/accordion"
      >
        Accordion
      </StyledLink>
      <StyledLink
        to="/components/border-content"
      >
        Border Content
      </StyledLink>
      <StyledLink
        to="/components/button"
      >
        Button
      </StyledLink>
      <StyledLink
        to="/components/card"
      >
        Card
      </StyledLink>
    </Fragment>
  )
}

export default SideNav
