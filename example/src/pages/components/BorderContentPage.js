import React from "react"
import { BorderContent, Columns, Table } from "react-cuttlefish"

import ComponentsLayout from "./../../layouts/ComponentsLayout"

const BorderContentPage = () => (
  <ComponentsLayout>
    <div className="mb-lg">
      <h3>Border Content</h3>
      <p>Create nice sectioned content with borders to separate the content.</p>
    </div>
    <div className="mb-md">
    <h4 className="mb-sm">Regular</h4>
      <BorderContent sides="true true false true" color="light-grey" size="1" radius="5">
        <p className="text-grey">EXAMPLE</p>
        <BorderContent>
          <h2>Border Content</h2>
          <p>Look at the pretty border content</p>
        </BorderContent>
      </BorderContent>
      <code>
        &#60;BorderContent&#62;
          <div className="pl-md">&#60;h2&#62;Border Content&#60;/h2&#62;</div>
          <div className="pl-md">&#60;p&#62;Look at the pretty border content&#60;/p&#62;</div>
        &#60;/BorderContent&#62;
      </code>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Sides</h4>
      <p className="text-small italic">Change the sides the border is painted on.</p>
      <BorderContent sides="true true false true" color="light-grey" size="1" radius="5">
        <p className="text-grey">EXAMPLE</p>
        <Columns>
          <BorderContent sides="true true true true">
            <h2>Sides</h2>
            <p>Look at the pretty border content</p>
          </BorderContent>
          <BorderContent sides="true false false false">
            <h2>Sides</h2>
            <p>Look at the pretty border content</p>
          </BorderContent>
        </Columns>
      </BorderContent>
      <code>
        &#60;Columns&#62;
          <div className="pl-md">&#60;BorderContent sides="true true true true"&#62;</div>
            <div className="pl-xl">&#60;h2&#62;Sides&#60;/h2&#62;</div>
            <div className="pl-xl">&#60;p&#62;Look at the pretty border content&#60;/p&#62;</div>
          <div className="pl-md">&#60;/BorderContent&#62;</div>
          <div className="pl-md">&#60;BorderContent sides="true false false false"&#62;</div>
            <div className="pl-xl">&#60;h2&#62;Sides&#60;/h2&#62;</div>
            <div className="pl-xl">&#60;p&#62;Look at the pretty border content&#60;/p&#62;</div>
          <div className="pl-md">&#60;/BorderContent&#62;</div>
        &#60;/Columns&#62;
      </code>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Color</h4>
      <p className="text-small italic">Change the default blue color to whatever color you'd like in the theme.</p>
      <BorderContent sides="true true false true" color="light-grey" size="1" radius="5">
        <p className="text-grey">EXAMPLE</p>
        <BorderContent color="red">
          <h2>Color</h2>
          <p>Look at the pretty border content</p>
        </BorderContent>
      </BorderContent>
      <code>
        &#60;BorderContent color="red"&#62;
          <div className="pl-md">&#60;h2&#62;Color&#60;/h2&#62;</div>
          <div className="pl-md">&#60;p&#62;Look at the pretty border content&#60;/p&#62;</div>
        &#60;/BorderContent&#62;
      </code>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Size</h4>
      <p className="text-small italic">Change the px width of the border.</p>
      <BorderContent sides="true true false true" color="light-grey" size="1" radius="5">
        <p className="text-grey">EXAMPLE</p>
        <BorderContent size="5" color="orange" sides="true false false true">
          <h2>Size</h2>
          <p>Look at the pretty border content</p>
        </BorderContent>
      </BorderContent>
      <code>
        &#60;BorderContent size="5" color="orange" sides="true false false true"&#62;
          <div className="pl-md">&#60;h2&#62;Size&#60;/h2&#62;</div>
          <div className="pl-md">&#60;p&#62;Look at the pretty border content&#60;/p&#62;</div>
        &#60;/BorderContent&#62;
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
            <td>Content to be displayed within the border content container.</td>
          </tr>
          <tr>
            <td>sides</td>
            <td>string</td>
            <td>false, false, false, true</td>
            <td>Pass in the sides you would like the border to fill. The default is just the left side. The values represent top, right, bottom, then left.</td>
          </tr>
          <tr>
            <td>color</td>
            <td>string</td>
            <td>blue</td>
            <td>Theme color that will change the color of the borders.</td>
          </tr>
          <tr>
            <td>size</td>
            <td>string</td>
            <td>2px</td>
            <td>This sets the px width of the border.</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </ComponentsLayout>
)

export default BorderContentPage

