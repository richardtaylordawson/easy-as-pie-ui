import React from "react"
import { ComponentsLayout } from "./../../layouts/ComponentsLayout"
import { Table } from "./../../components/Table"
import { Columns, BorderContent } from "easy-as-pie-ui"

export const ColumnsPage = () => (
  <ComponentsLayout>
    <div className="mb-lg">
      <h3>Columns</h3>
      <p>Smartly divides your children content into responsive columns.</p>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Smart Split</h4>
      <p className="text-small italic">Splits each child into equal column width's that fill their parent container</p>
      <BorderContent sides="true true false true" color="light-grey" size="1" radius="5">
        <p className="text-grey">EXAMPLE</p>
        <Columns>
          <div className="bg-light-grey pl-sm">Column 1</div>
          <div className="bg-light-grey pl-sm">Column 2</div>
          <div className="bg-light-grey pl-sm">Column 3</div>
        </Columns>
      </BorderContent>
      <code>
        <span class="text-yellow">&#60;Columns&#62;</span>
          <div className="pl-sm text-teal">&#60;div&#62;<span class="text-white">Column 1</span>&#60;/div&#62;</div>
          <div className="pl-sm text-teal">&#60;div&#62;<span class="text-white">Column 2</span>&#60;/div&#62;</div>
          <div className="pl-sm text-teal">&#60;div&#62;<span class="text-white">Column 3</span>&#60;/div&#62;</div>
        <span class="text-yellow">&#60;/Columns&#62;</span>
      </code>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Split</h4>
      <p className="text-small italic">Pass in an array with custom width values</p>
      <BorderContent sides="true true false true" color="light-grey" size="1" radius="5">
        <p className="text-grey">EXAMPLE</p>
        <Columns split={[25, 50, 25]}>
          <div className="bg-light-grey pl-sm">Column 1</div>
          <div className="bg-light-grey pl-sm">Column 2</div>
          <div className="bg-light-grey pl-sm">Column 3</div>
        </Columns>
      </BorderContent>
      <code>
        <span class="text-yellow">&#60;Columns <span class="text-pink">split=&#123;&#91;25, 50, 35&#93;&#125;</span>&#62;</span>
          <div className="pl-sm text-teal">&#60;div&#62;<span class="text-white">Column 1</span>&#60;/div&#62;</div>
          <div className="pl-sm text-teal">&#60;div&#62;<span class="text-white">Column 2</span>&#60;/div&#62;</div>
          <div className="pl-sm text-teal">&#60;div&#62;<span class="text-white">Column 3</span>&#60;/div&#62;</div>
        <span class="text-yellow">&#60;/Columns&#62;</span>
      </code>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Collapse Margin</h4>
      <p className="text-small italic">Collapses the margin between the columns on desktop</p>
      <BorderContent sides="true true false true" color="light-grey" size="1" radius="5">
        <p className="text-grey">EXAMPLE</p>
        <Columns split={[25, 50, 25]} collapseMargin>
          <div className="bg-light-grey pl-sm">Column 1</div>
          <div className="bg-light-grey pl-sm">Column 2</div>
          <div className="bg-light-grey pl-sm">Column 3</div>
        </Columns>
      </BorderContent>
      <code>
        <span class="text-yellow">&#60;Columns <span class="text-pink">split=&#123;&#91;25, 50, 35&#93;&#125; collapseMargin=&#123;true&#125;</span>&#62;</span>
          <div className="pl-sm text-teal">&#60;div&#62;<span class="text-white">Column 1</span>&#60;/div&#62;</div>
          <div className="pl-sm text-teal">&#60;div&#62;<span class="text-white">Column 2</span>&#60;/div&#62;</div>
          <div className="pl-sm text-teal">&#60;div&#62;<span class="text-white">Column 3</span>&#60;/div&#62;</div>
        <span class="text-yellow">&#60;/Columns&#62;</span>
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
            <td>The nodes that will map to each columned content.</td>
          </tr>
          <tr>
            <td>split</td>
            <td>array</td>
            <td></td>
            <td>An array of custom width values can be used instead of smart splitting the columns such as [25, 75] to split a two-column layout to 25% and 75%.</td>
          </tr>
          <tr>
            <td>collapseMargin</td>
            <td>bool</td>
            <td>false</td>
            <td>Collapses the margin between the columns on desktop</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </ComponentsLayout>
)
