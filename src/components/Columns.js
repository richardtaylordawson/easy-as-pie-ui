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
  width: ${props => props.columnWidth}%;
  margin: ${props => props.collapseMargin ? "0" : "30px"};

  ${Breakpoints["medium-down"]} {
    margin: 10px 0;
    width: 100%;
  }
`

const Columns = ({children, collapseMargin, split}) => (
  <FlexContainer>
    {
      children.map((child, index, children) => (
        <Column key={index} columnWidth={split ? split[index] : 100 / children.length} collapseMargin={collapseMargin}>
          {child}
        </Column>
      ))
    }
  </FlexContainer>
)

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  collapseMargin: PropTypes.bool,
  split: PropTypes.array
}

export default Columns
