import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Column = styled.div`
  width: ${props => 100 / props.numberOfColumns}%;
  margin: ${props => props.collapseMargin ? "0" : "30px"};
`

const Columns = ({children, collapseMargin = false}) => (
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
  children: PropTypes.node.isRequired
}

export default Columns
