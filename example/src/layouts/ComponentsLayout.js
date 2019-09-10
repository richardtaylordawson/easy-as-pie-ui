import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { Section, Columns } from "easy-as-pie-ui"
import { SideNav } from "./../components"

export const ComponentsLayout = ({ children }) => (
  <Section>
    <Columns split={[75, 25]} collapseMargin={true}>
      <Container>
        {children}
      </Container>
      <Container>
        <SideNav />
      </Container>
    </Columns>
  </Section>
)

const Container = styled.div`
  overflow-y: auto;
  padding: 10px 20px;
  height: 75vh;
  margin-right: 20px;
  margin-top: 60px;
`

ComponentsLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
