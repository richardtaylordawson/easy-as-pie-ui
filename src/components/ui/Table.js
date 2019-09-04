import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Container = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid lightgray;
  font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;

  th, td {
    padding: 12px;
    border: 1px solid lightgray;
  }

  th {
    border-bottom: 2px solid lightgray;
    background-color: #fff;
  }

  tr:nth-of-type(odd) {background-color: #f2f2f2;}
`

export const Table = ({children}) => (
  <Container>
    {children}
  </Container>
)

Table.propTypes = {
  children: PropTypes.node.isRequired
}
