import React from "react"
import PropTypes from "prop-types"
import styledImport from "@emotion/styled"

const styled = styledImport.default || styledImport

export const CardHeader = ({ children, color }) => (
  <Container className={`text-white ${color ? `bg-${color}` : `bg-blue`}`}>
    {children}
  </Container>
)

const Container = styled.div`
  padding: 15px 32px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  * {
    margin-bottom: 0;
  }
`

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
}
