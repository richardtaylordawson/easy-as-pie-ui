import React, { Fragment } from "react"
import {
  Section,
  Accordion,
  Columns,
  BorderContent
} from "react-cuttlefish"

import ComponentsNav from "./../../components/ComponentsNav"

const AccordionPage = () => (
  <Fragment>
    <Section>
      <Columns split={[75, 25]}>
        <div>
          <h4 className="mb-lg">Accordion</h4>
          <BorderContent sides={"true true false true"} color="light-grey" size="1" radius="5">
            <h5 className="text-grey">Example</h5>
            <Accordion>
              <h5>This is an example</h5>
              <p>testing some stuff</p>
            </Accordion>
          </BorderContent>
          <code><span className="text-yellow">import</span> Accordion <span className="text-warning">from</span> "react-cuttlefish"</code>
        </div>
        <div>
          <ComponentsNav />
        </div>
      </Columns>
    </Section>
  </Fragment>
)

export default AccordionPage
