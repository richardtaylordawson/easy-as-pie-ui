import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Container = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  height: 60px;
`

const Constraint = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-left: 22.5%;
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
