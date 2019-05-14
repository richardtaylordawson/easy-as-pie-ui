import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const Container = styled.section`
  padding-left: 15px;
  padding-right: 15px;
  background-image: url(${props => props.image && props.image});
  background-size: cover;
  background-position: ${props => props.imagePosition && props.imagePosition};
`

const Section = ({children, color, image, imagePosition, padding = "", notch = ""}) => {

  // TODO change so that it works like TRBL css
  padding = padding.split(" ")
  padding = padding.length > 1
    ? `pt-${padding[0]} pb-${padding[1]}`
    : `pt-xl pb-xl`

  if(notch !== "") {
    notch = notch.split(" ")
    notch = notch && `notch notch-${notch[0]} notch-${notch[1]}`
  }

  return (
    <Container className={`${notch} ${padding} ${color ? `bg-${color}` : `bg-white`}`} image={image} imagePosition={imagePosition}>
      <div className="center-block content-lg">
        {children}
      </div>
    </Container>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  image: PropTypes.string,
  imagePosition: PropTypes.string,
  padding: PropTypes.string,
  notch: PropTypes.string
}

export default Section
