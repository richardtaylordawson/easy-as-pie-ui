import React from "react"
import { ComponentsLayout } from "./../../layouts/ComponentsLayout"
import { Table } from "./../../components/Table"
import { Accordion, BorderContent } from "easy-as-pie-ui"

export const AccordionPage = () => (
  <ComponentsLayout>
    <div className="mb-lg">
      <h3>Accordion</h3>
      <p>Creates a section that can be toggled to be used for FAQ's, etc.</p>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Color</h4>
      <p className="text-small italic">Set a header color from the list of theme colors provided.</p>
      <BorderContent sides="true true false true" color="light-grey" size="1" radius="5">
        <p className="text-grey">EXAMPLE</p>
        <Accordion color="green">
          <h5>Header</h5>
          <p>Content goes in here and can be toggled!</p>
        </Accordion>
      </BorderContent>
      <code>
        <span class="text-yellow">&#60;Accordion <span class="text-pink">color="green"</span>&#62;</span>
          <div className="pl-sm text-teal">&#60;h5&#62;<span class="text-white">Header</span>&#60;/h5&#62;</div>
          <div className="pl-sm text-teal">&#60;p&#62;<span class="text-white">Content goes in here and can be toggled!</span>&#60;/p&#62;</div>
        <span class="text-yellow">&#60;/Accordion&#62;</span>
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
            <td>The content to be displayed in the accordion with the first child node creating the header and the second node creating the content.</td>
          </tr>
          <tr>
            <td>color</td>
            <td>string</td>
            <td>blue</td>
            <td>Theme color that will change the header color of the section.</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </ComponentsLayout>
)
