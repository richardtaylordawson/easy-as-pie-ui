import React from "react"
import PropTypes from "prop-types"
import styledImport from "@emotion/styled"

const styled = styledImport.default || styledImport

export const CardContent = ({ children }) => <Container>{children}</Container>

const Container = styled.div`
  text-align: center;
  padding: 45px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
}
