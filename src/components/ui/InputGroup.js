import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

export const InputGroup = ({children}) => (
  <Container>
    {children}
  </Container>
)

const Container = styled.div`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  margin: 5px;

  button {
    position: relative;
    flex: 1 1 auto;
    margin: 0;
    border-radius: 0;
    border: none;
  }

  > :first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  > :last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`

InputGroup.propTypes = {
  children: PropTypes.node.isRequired
}
