import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

export const Section = ({ children, color, image, imagePosition, padding = "", notch = "" }) => {
  padding = padding !== ""
    ? `pt-${padding} pb-${padding}`
    : `pt-xl pb-xl`

  if (notch !== "") {
    notch = notch.split(" ")
    notch = notch && `notch notch-${notch[0]} notch-${notch[1]}`
  }

  return (
    <Container className={`pl-md pr-md ${notch} ${padding} ${color ? `bg-${color}` : `bg-white`}`} image={image} imagePosition={imagePosition}>
      <div className="center-block content-lg">
        {children}
      </div>
    </Container>
  )
}

const Container = styled.section`
  ${props => props.image && `background-image: url(${props.image}); background-size: cover;`}
  ${props => props.image ? props.imagePosition ? `background-position: ${props.imagePosition};` : "background-position: center;" : ""}
`

Section.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  image: PropTypes.string,
  imagePosition: PropTypes.string,
  notch: PropTypes.string
}
