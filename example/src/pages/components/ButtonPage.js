import React from "react"
import { BorderContent, Colors, Button, Table } from "easy-as-pie-ui"

import ComponentsLayout from "./../../layouts/ComponentsLayout"

const ButtonPage = () => (
  <ComponentsLayout>
    <div className="mb-lg">
      <h3>Button</h3>
      <p>Custom button styles for use in forms, pages, CTA's etc. They support multiple colors, states, and more.</p>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Regular</h4>
      <p className="text-small italic">Simple button used for anything you'd like.</p>
      <BorderContent sides="true true false true" color="light-grey" size="1" radius="5">
        <p className="text-grey">EXAMPLE</p>
        {
          Object.keys(Colors).map((key, index) => {
            return <Button color={key} key={index}>{key}</Button>
          })
        }
      </BorderContent>
      <code>
        <span class="text-yellow">&#60;Button <span class="text-pink">color="red"</span>&#62;<span class="text-white">red</span>&#60;/Button&#62;</span>
      </code>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Outline</h4>
      <p className="text-small italic">Change the button fill to transparent with the outline colored instead.</p>
      <BorderContent sides="true true false true" color="light-grey" size="1" radius="5">
        <p className="text-grey">EXAMPLE</p>
        {
          Object.keys(Colors).map((key, index) => {
            return <Button color={`${key}-outline`} key={index}>{key}</Button>
          })
        }
      </BorderContent>
      <code>
        <span class="text-yellow">&#60;Button <span class="text-pink">color="red-outline"</span>&#62;<span class="text-white">red outline</span>&#60;/Button&#62;</span>
      </code>
    </div>
    <div className="mb-md">
      <h4>API</h4>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>children</td>
            <td>node</td>
            <td></td>
            <td>Text displayed in the button.</td>
          </tr>
          <tr>
            <td>color</td>
            <td>string</td>
            <td></td>
            <td>Theme color that will change the color of the button. Pass the color with "-outline" to style the button with an outline instead of a background color.</td>
          </tr>
          <tr>
            <td>href</td>
            <td>string</td>
            <td></td>
            <td>Passing in an href automatically creates the button as an a tag and will link to whatever reference is passed in. Example: href="/link/to-page"</td>
          </tr>
          <tr>
            <td>target</td>
            <td>string</td>
            <td></td>
            <td>Must pass in the href attribute in order for the target to take affect. Changes the anchor tag's target created from the href attribute.</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </ComponentsLayout>
)

export default ButtonPage

