import React from "react"
import { ComponentsLayout } from "./../../layouts/ComponentsLayout"
import { Table } from "./../../components/Table"
import { BorderContent, Card, CardContent, CardHeader } from "easy-as-pie-ui"

export const CardPage = () => (
  <ComponentsLayout>
    <div className="mb-lg">
      <h3>Card</h3>
      <p>Content displayed in a nice colored card like container.</p>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Regular</h4>
      <BorderContent sides="true true false true" color="light-grey" size="1" radius="5">
        <p className="text-grey">EXAMPLE</p>
        <Card>
          <CardHeader color="blue">
            <h5>Default Card</h5>
          </CardHeader>
          <CardContent>
            <p>This is the content of the card</p>
          </CardContent>
        </Card>
      </BorderContent>
      <code>
        <span class="text-yellow">&#60;Card&#62;</span>
          <div className="pl-sm text-yellow">&#60;CardHeader</div>
            <div className="pl-md text-teal">&#60;h5&#62;<span class="text-white">Default Card</span>&#60;h5&#62;</div>
          <div className="pl-sm text-yellow">&#60;/CardHeader&#62;</div>
          <div className="pl-sm text-yellow">&#60;CardContent&#62;</div>
            <div className="pl-md text-teal">&#60;h5&#62;<span class="text-white">This is the content of the card</span>&#60;h5&#62;</div>
          <div className="pl-sm text-yellow">&#60;/CardContent&#62;</div>
        <span class="text-yellow">&#60;/Card&#62;</span>
      </code>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Color</h4>
      <p className="text-small italic">Change the color of the card by passing a theme color to the CardHeader.</p>
      <BorderContent sides="true true false true" color="light-grey" size="1" radius="5">
        <p className="text-grey">EXAMPLE</p>
        <Card>
          <CardHeader color="orange">
            <h5>Default Card</h5>
          </CardHeader>
          <CardContent>
            <p>This is the content of the card</p>
          </CardContent>
        </Card>
      </BorderContent>
      <code>
        <span class="text-yellow">&#60;Card&#62;</span>
          <div className="pl-sm text-yellow">&#60;CardHeader <span class="text-pink">color="orange"</span>&#62;</div>
            <div className="pl-md text-teal">&#60;h5&#62;<span class="text-white">Default Card</span>&#60;h5&#62;</div>
          <div className="pl-sm text-yellow">&#60;/CardHeader&#62;</div>
          <div className="pl-sm text-yellow">&#60;CardContent&#62;</div>
            <div className="pl-md text-teal">&#60;h5&#62;<span class="text-white">This is the content of the card</span>&#60;h5&#62;</div>
          <div className="pl-sm text-yellow">&#60;/CardContent&#62;</div>
        <span class="text-yellow">&#60;/Card&#62;</span>
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
            <td>This includes both the CardHeader and CardContent as shown above.</td>
          </tr>
          <tr>
            <td>color</td>
            <td>string</td>
            <td></td>
            <td>Pass in a theme color to the CardHeader in order to change the color.</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </ComponentsLayout>
)
