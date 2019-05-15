import React from "react"
<<<<<<< HEAD
import { Link } from "@reach/router"
import {
=======

// Core
import {
  ReactCuttlefishTheme,
>>>>>>> 058c948271c694b4399ff82d1d0e040697a93a99
  Section,
  Button,
  Columns,
  Card,
  CardHeader,
  CardContent,
  BorderContent,
  Accordion,
  Input,
  InputGroup
} from "react-cuttlefish"

const Components = () => (
  <div>
<<<<<<< HEAD
    <Section className="mt-sm">
      <div className="text-left mb-xl">
        <h5 className="inline text-danger">reactCuttleFish - Components</h5>
        <div className="pull-right">
          <Link to="/">Home</Link>
        </div>
=======
    <Section>
      <div className="center-block text-center mb-xl">
        <h1 className="mb-sm text-danger">reactCuttleFish</h1>
        <h6 className="mb-md">Collection of generic components <br/>that can be used to easily build a website.</h6>
>>>>>>> 058c948271c694b4399ff82d1d0e040697a93a99
      </div>
      <div className="center-block mb-xl">
        <h4 className="text-primary">Button</h4>
        <hr/>
        <Button color="primary">primary</Button>
        <Button color="secondary">secondary</Button>
        <Button color="success">success</Button>
        <Button color="danger">danger</Button>
        <Button color="warning">warning</Button>
        <Button color="info">info</Button>
        <Button color="dark">dark</Button>
        <Button color="muted">muted</Button>
        <Button color="primary" outline={true}>primary</Button>
        <Button color="secondary" outline={true}>secondary</Button>
        <Button color="success" outline={true}>success</Button>
        <Button color="danger" outline={true}>danger</Button>
        <Button color="warning" outline={true}>warning</Button>
        <Button color="info" outline={true}>info</Button>
        <Button color="dark" outline={true}>dark</Button>
        <Button color="muted" outline={true}>muted</Button>
        <code className="mt-xl"><span className="text-warning">import</span> Button <span className="text-warning">from</span> "react-cuttlefish"</code>
      </div>
      <div className="center-block mb-xl">
        <h4 className="text-primary">Input Group</h4>
        <hr/>
        <InputGroup>
          <Button color="primary">This</Button>
          <Button color="primary">is</Button>
          <Button color="primary">an</Button>
          <Button color="primary">input</Button>
          <Button color="primary">group!</Button>
        </InputGroup>
        <InputGroup>
          <Button color="success">Mix</Button>
          <Button color="danger">Colors!</Button>
        </InputGroup>
        <InputGroup>
          <Button color="warning">Examples</Button>
          <Input type="text" placeholder="of"/>
        </InputGroup>
        <InputGroup>
          <Input type="text" placeholder="Using"/>
          <Button color="muted">Inputs</Button>
        </InputGroup>
        <code className="mt-xl"><span className="text-warning">import</span> InputGroup <span className="text-warning">from</span> "react-cuttlefish"</code>
      </div>
      <div className="center-block mb-xl">
        <h4 className="text-primary">Card</h4>
        <hr/>
        <Columns>
          <Card>
            <CardHeader>
              <h3 className="mb-xs">Primary</h3>
            </CardHeader>
            <CardContent>
              <p>Display content here</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader color="danger">
              <h3 className="mb-xs">Danger</h3>
            </CardHeader>
            <CardContent>
              <p>Display content here</p>
            </CardContent>
          </Card>
        </Columns>
        <Columns>
        <Card>
          <CardHeader color="success">
            <h3 className="mb-xs">Success</h3>
          </CardHeader>
          <CardContent>
            <p>Display content here</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader color="warning">
            <h3 className="mb-xs">Warning</h3>
          </CardHeader>
          <CardContent>
            <p>Display content here</p>
          </CardContent>
        </Card>
      </Columns>
        <code className="mt-xl"><span className="text-warning">import</span> Card, CardHeader, CardContent <span className="text-warning">from</span> "react-cuttlefish"</code>
      </div>
      <div className="center-block mb-xl">
        <h4 className="text-primary">Border Content</h4>
        <hr/>
        <Columns>
          <BorderContent>
            <h5>Primary</h5>
            <p>Write your content here</p>
          </BorderContent>
          <BorderContent color="danger">
            <h5>Danger</h5>
            <p>Write your content here</p>
          </BorderContent>
        </Columns>
        <Columns>
          <BorderContent color="warning" sides="true false false true">
            <h5>Warning</h5>
            <p>Write your content here</p>
          </BorderContent>
          <BorderContent color="success" sides="false false true false">
            <h5>Success</h5>
            <p>Write your content here</p>
          </BorderContent>
        </Columns>
        <code className="mt-xl"><span className="text-warning">import</span> BorderContent <span className="text-warning">from</span> "react-cuttlefish"</code>
      </div>
      <div className="center-block mb-xl">
        <h4 className="text-primary">Accordion</h4>
        <hr/>
        <Accordion>
          <h5>Primary</h5>
          Surprise! Content here.
        </Accordion>
        <Accordion>
          <h5>Success</h5>
          Surprise! Content here.
        </Accordion>
        <Accordion>
          <h5>Danger</h5>
          Surprise! Content here.
        </Accordion>
        <Accordion>
          <h5>Warning</h5>
          Surprise! Content here.
        </Accordion>
<<<<<<< HEAD
        <code className="mt-xl"><span className="text-warning">import</span> Accordion <span className="text-warning">from</span> "react-cuttlefish"</code>
=======
        <code className="mt-xl"><span className="text-warning">import</span> Accordion, AccordionHeader, AccordionContent <span className="text-warning">from</span> "react-cuttlefish"</code>
>>>>>>> 058c948271c694b4399ff82d1d0e040697a93a99
      </div>
    </Section>
  </div>
)

export default Components
