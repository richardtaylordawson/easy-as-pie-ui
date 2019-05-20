import React, { Fragment } from "react"
import {
  Section,
  Columns
} from "react-cuttlefish"

import ComponentsNav from "./../components/ComponentsNav"

const ComponentsLayout = ({children}) => (
  <Fragment>
    <Section>
      <Columns split={[75, 25]}>
        <Fragment>
          {children}
        </Fragment>
        <Fragment>
          <ComponentsNav />
        </Fragment>
      </Columns>
    </Section>
  </Fragment>
)

export default ComponentsLayout
