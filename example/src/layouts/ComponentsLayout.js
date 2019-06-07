import React from "react"
import styled from "@emotion/styled"
import { Section, Columns } from "react-cuttlefish"

import SideNav from "../components/SideNav"

const Container = styled.div`
  overflow-y: scroll;
  padding: 10px 20px;
  height: 75vh;
  margin-right: 20px;
  margin-top: 60px;
`

const ComponentsLayout = ({children}) => (
  <Section>
    <Columns split={[75, 25]} collapseMargin>
      <Container>
        {children}
      </Container>
      <Container>
        <SideNav />
      </Container>
    </Columns>
  </Section>
)

export default ComponentsLayout
