import React from "react"
import { BorderContent, Columns, Table, Card, CardContent, CardHeader } from "react-cuttlefish"

import ComponentsLayout from "./../../layouts/ComponentsLayout"

const CardPage = () => (
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
        &#60;Card&#62;
          <div className="pl-md">&#60;CardHeader&#62;</div>
            <div className="pl-xl">&#60;h5&#62;Default Card&#60;h5&#62;</div>
          <div className="pl-md">&#60;/CardHeader&#62;</div>
          <div className="pl-md">&#60;CardContent&#62;</div>
            <div className="pl-xl">&#60;h5&#62;This is the content of the card&#60;h5&#62;</div>
          <div className="pl-md">&#60;/CardContent&#62;</div>
        &#60;/Card&#62;
      </code>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Color</h4>
      <p className="text-small italic">Change the color of the card by passing a theme color to the CardHeader.</p>
      <BorderContent sides="true true false true" color="light-grey" size="1" radius="5">
        <p className="text-grey">EXAMPLE</p>
        <Columns>
          <Card>
            <CardHeader color="orange">
              <h5>Default Card</h5>
            </CardHeader>
            <CardContent>
              <p>This is the content of the card</p>
            </CardContent>
          </Card>
          <Card>
          <CardHeader color="red">
            <h5>Default Card</h5>
          </CardHeader>
          <CardContent>
            <p>This is the content of the card</p>
          </CardContent>
        </Card>
        </Columns>
      </BorderContent>
      <code>
        &#60;Card&#62;
          <div className="pl-md">&#60;CardHeader color="orange"&#62;</div>
            <div className="pl-xl">&#60;h5&#62;Default Card&#60;h5&#62;</div>
          <div className="pl-md">&#60;/CardHeader&#62;</div>
          <div className="pl-md">&#60;CardContent&#62;</div>
            <div className="pl-xl">&#60;h5&#62;This is the content of the card&#60;h5&#62;</div>
          <div className="pl-md">&#60;/CardContent&#62;</div>
        &#60;/Card&#62;
        &#60;Card&#62;
          <div className="pl-md">&#60;CardHeader color="red"&#62;</div>
            <div className="pl-xl">&#60;h5&#62;Default Card&#60;h5&#62;</div>
          <div className="pl-md">&#60;/CardHeader&#62;</div>
          <div className="pl-md">&#60;CardContent&#62;</div>
            <div className="pl-xl">&#60;h5&#62;This is the content of the card&#60;h5&#62;</div>
          <div className="pl-md">&#60;/CardContent&#62;</div>
        &#60;/Card&#62;
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

export default CardPage

