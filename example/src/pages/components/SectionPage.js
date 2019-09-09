import React from "react"
import { BorderContent, Section, Table } from "easy-as-pie-ui"

import ComponentsLayout from "./../../layouts/ComponentsLayout"

const SectionPage = () => (
  <ComponentsLayout>
    <div className="mb-lg">
      <h3>Section</h3>
      <p>Creates a semantic section of your website with default theme padding.</p>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Color</h4>
      <p className="text-small italic">Set a background color from the list of theme colors provided.</p>
      <BorderContent sides="true true false true" color="light-grey" size="1" radius="5">
        <p className="text-grey">EXAMPLE</p>
        <Section color="olive"></Section>
      </BorderContent>
      <code>
        <span class="text-yellow">&#60;Section <span class="text-pink">color="olive"</span>&#62;</span>
          <div className="pl-md">Content Goes Here </div>
        <span class="text-yellow">&#60;/Section&#62;</span>
      </code>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Notch</h4>
      <p className="text-small italic">Display a notch at the top or bottom of the section to create CTA's or other content.</p>
      <BorderContent sides="true true false true" color="light-grey" size="1" radius="5">
        <p className="text-grey">EXAMPLE</p>
        <Section color="orange" notch="top orange"></Section>
      </BorderContent>
      <code>
        <span class="text-yellow">&#60;Section <span class="text-pink">color="orange" notch="top orange"</span>&#62;</span>
          <div className="pl-md">Content Goes Here </div>
        <span class="text-yellow">&#60;/Section&#62;</span>
      </code>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Image</h4>
      <p className="text-small italic">Pass in an image path to display as a background.</p>
      <BorderContent sides="true true false true" color="light-grey" size="1" radius="5">
        <p className="text-grey">EXAMPLE</p>
        <Section image="https://i.pinimg.com/originals/32/7e/f9/327ef97d75ab564e6d57bf49be59d681.jpg"></Section>
      </BorderContent>
      <code>
        <span class="text-yellow">&#60;Section <span class="text-pink">image="PATH_TO_IMAGE"</span>&#62;</span>
          <div className="pl-md">Content Goes Here </div>
        <span class="text-yellow">&#60;/Section&#62;</span>
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
            <td>The content to be displayed in the section of content created with this component.</td>
          </tr>
          <tr>
            <td>color</td>
            <td>string</td>
            <td>white / none</td>
            <td>Theme color that will change the background color of the section.</td>
          </tr>
          <tr>
            <td>image</td>
            <td>string</td>
            <td></td>
            <td>Image path, absolute or relative of an image to fill the entire container.</td>
          </tr>
          <tr>
            <td>imagePosition</td>
            <td>string</td>
            <td>center</td>
            <td>Change the position of the background image</td>
          </tr>
          <tr>
            <td>padding</td>
            <td>string</td>
            <td>xl</td>
            <td>Pass in a padding value from the theme to change the top & bottom padding of the section. Example: "sm". Passing in one value will apply the styling to both the top and bottom while two values with apply to top then bottom respectively.</td>
          </tr>
          <tr>
            <td>notch</td>
            <td>string</td>
            <td></td>
            <td>String that contains the position and color of the notch. The order is interchangeable. Example: "top red".</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </ComponentsLayout>
)

export default SectionPage

