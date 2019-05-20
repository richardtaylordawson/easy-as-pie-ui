import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Container = styled.nav`
  height: 100%;
  overflow: scroll;
  padding: 0 5px;

  .active {
    border-left: 2px solid red;
  }

  p {
    padding: 0 20px;
    color: gray;
    cursor: pointer;

    &:hover {
      color: black;
    }
  }
`

const ComponentsNav = () => (
  <Container>
    <h4>Components</h4>
    <p className="active">Section</p>
    <p>Columns</p>
    <p>Button</p>
    <p>Card</p>
    <p>Accordion</p>
    <p>Border Content</p>
  </Container>
)

export default ComponentsNav
