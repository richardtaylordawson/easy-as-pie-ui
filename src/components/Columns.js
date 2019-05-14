import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

import Breakpoints from "../theme/Breakpoints"

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;

  ${Breakpoints["medium-down"]} { flex-direction: column; }
`

const Column = styled.div`
  width: ${props => 100 / props.numberOfColumns}%;
  margin: ${props => props.collapseMargin ? "0" : "30px"};

  ${Breakpoints["medium-down"]} {
    margin: 10px 0;
    width: 100%;
  }
`

const Columns = ({children, collapseMargin}) => (
  <FlexContainer>
    {
      children.map((child, index, children) => (
        <Column key={index} numberOfColumns={children.length} collapseMargin={collapseMargin}>
          {child}
        </Column>
      ))
    }
  </FlexContainer>
)

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  collapseMargin: PropTypes.bool
}

export default Columns
