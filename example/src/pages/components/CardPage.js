import React, { Fragment } from "react"
import { Link } from "@reach/router"
import {
  ReactCuttlefishColors,
  Section,
  Button,
  Columns,
  BorderContent
} from "react-cuttlefish"

import ComponentsNav from "./../../components/ComponentsNav"

const CardPage = () => (
  <Fragment>
    <Section>
      <Columns split={[75, 25]}>
        <div>
          <h4 className="mb-lg">Accordion</h4>
          <BorderContent sides={"true true false true"} color="light-grey" size="1" radius="5">
            <h5 className="text-grey">Example</h5>
            {
              Object.keys(ReactCuttlefishColors).map((key, index) => {
                return <Button color={key} key={index}>{key}</Button>
              })
            }
          </BorderContent>
          <code><span className="text-yellow">import</span> Button <span className="text-warning">from</span> "react-cuttlefish"</code>
        </div>
        <div>
          <ComponentsNav />
        </div>
      </Columns>
    </Section>
  </Fragment>
)

export default CardPage
