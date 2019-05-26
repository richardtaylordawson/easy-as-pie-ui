import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

const Constraint = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`

const Navbar = ({children, color}) => (
  <Container className={color ? `bg-${color}` : `bg-grey`}>
    <Constraint>
      {children}
    </Constraint>
  </Container>
)

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
}

export default Navbar
