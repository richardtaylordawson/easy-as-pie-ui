import React from "react"
import { BorderContent, ReactCuttlefishColors, Button, Table } from "react-cuttlefish"

import ComponentsLayout from "./../../layouts/ComponentsLayout"

const ButtonsPage = () => (
  <ComponentsLayout>
    <div className="mb-lg">
      <h3>Buttons</h3>
      <p>Custom button styles for use in forms, pages, CTA's etc. They support multiple colors, states, and more.</p>
    </div>
    <div className="mb-md">
    <h4 className="mb-sm">Regular</h4>
      <BorderContent sides={"true true false true"} color="light-grey" size="3" radius="5">
        <p className="text-grey">EXAMPLE</p>
        {
          Object.keys(ReactCuttlefishColors).map((key, index) => {
            return <Button color={key} key={index}>{key}</Button>
          })
        }
      </BorderContent>
      <code><span className="text-yellow">import</span> Button <span className="text-warning">from</span> "react-cuttlefish"</code>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Outline</h4>
      <BorderContent sides={"true true false true"} color="light-grey" size="3" radius="5">
        <p className="text-grey">EXAMPLE</p>
        {
          Object.keys(ReactCuttlefishColors).map((key, index) => {
            return <Button color={`${key}-outline`} key={index}>{key}</Button>
          })
        }
      </BorderContent>
      <code><span className="text-yellow">import</span> Button <span className="text-warning">from</span> "react-cuttlefish"</code>
    </div>
    <div className="mb-md">
      <h4>API</h4>
      <p>import button from stuff</p>
      <Table>
        <thead>
          <th>Name</th>
          <th>Type</th>
          <th>Default</th>
          <th>Description</th>
        </thead>
        <tbody>
          <tr>
            <td>children</td>
            <td>node</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>color</td>
            <td>string</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>href</td>
            <td>string</td>
            <td></td>
            <td>Passing in an href automatically creates the button as an a tag and will link to whatever reference is passed in.</td>
          </tr>
          <tr>
            <td>target</td>
            <td>string</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  </ComponentsLayout>
)

export default ButtonsPage

