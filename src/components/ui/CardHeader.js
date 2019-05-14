import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Container = styled.div`
  padding: 15px 32px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  * { margin-bottom: 0; }
`

const CardHeader = ({children, color}) => (
  <Container className={`text-white ${color ? `bg-${color}` : `bg-primary`}`} >
    {children}
  </Container>
)

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
}

export default CardHeader
