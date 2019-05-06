import React from "react"
import styled from "@emotion/styled"
import PropTypes from "prop-types"

import PlusIcon from "./../../images/plus-solid.svg"

const StyledAccordion = styled.div`
  max-width: 658px;
  margin: 20px auto;
  background-color: white;
`

const Header = styled.div`
  background-color: ${props => props.headerColor ? props.headerColor: "white"};
  padding: 10px 23px;
`

const Content = styled.div`
  background-color: ${props => props.contentColor ? props.contentColor: "white"};
  padding: 30px 55px;
`

const PullRight = styled.div`
  display: absolute;
  left: 0;
  top: -50px;
`

const Accordion = ({children, headerColor, contentColor}) => (
  <StyledAccordion>
    <Header headerColor={headerColor}>
      {children[0]}
      <PullRight>
        <img src={PlusIcon} height="18" style={{marginTop: "-50px"}} alt="plus minus"/>
      </PullRight>
    </Header>
    <Content contentColor={contentColor}>{children[1]}</Content>
  </StyledAccordion>
)

Accordion.propTypes = {
  children: PropTypes.node.isRequired
}

export default Accordion
