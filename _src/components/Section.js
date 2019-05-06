import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Container = styled.section`
  padding: 60px 7.5px;
  background-color: ${props => props.bgColor ? props.bgColor : "white"};
  background-image: url(${props => props.bgImage ? props.bgImage: ""});
  background-size: cover;
`

const Row = styled.div`
  max-width: 1032px;
  margin: 0 auto;

  &.flex {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

const Section = ({children, bgColor, bgImage, flexRow}) => (
  <Container bgColor={bgColor} bgImage={bgImage}>
    <Row className={flexRow && "flex"}>
      {children}
    </Row>
  </Container>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string,
  bgImage: PropTypes.string,
  flexRow: PropTypes.bool
}

export default Section
