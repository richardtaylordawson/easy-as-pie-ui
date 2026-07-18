import React from "react"
import { createRoot } from "react-dom/client"
import {
  Accordion,
  BorderContent,
  Button,
  Card,
  CardContent,
  CardHeader,
  Colors,
  Columns,
  EasyAsPieUITheme,
  Section,
  Spacing,
} from "../../src/index.js"
import "./styles.css"

const colorNames = Object.keys(Colors)
const spacingEntries = Object.entries(Spacing)

const CodeBlock = ({ children }) => <pre>{children}</pre>

const ExampleBlock = ({ title, description, children, code }) => (
  <article className="example-block">
    <div className="example-copy">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    <div className="example-preview">{children}</div>
    <CodeBlock>{code}</CodeBlock>
  </article>
)

const MiniPanel = ({ label, children }) => (
  <div className="mini-panel">
    <strong>{label}</strong>
    <p>{children}</p>
  </div>
)

const App = () => (
  <>
    <EasyAsPieUITheme
      colors={{
        blue: "#275dad",
        green: "#2d936c",
        orange: "#f18f01",
        purple: "#7b2cbf",
      }}
    />
    <main>
      <section className="docs-hero">
        <div className="docs-shell hero-grid">
          <div>
            <span className="eyebrow">React component library</span>
            <h1>Easy as Pie UI</h1>
            <p className="hero-copy">
              Theme primitives, layout helpers, and reusable UI components that
              are easy as pie to drop into a React project.
            </p>
            <div className="hero-actions">
              <Button color="blue" href="#components">
                View components
              </Button>
              <Button
                color="black-outline"
                href="https://github.com/richardtaylordawson/easy-as-pie-ui"
              >
                GitHub
              </Button>
            </div>
          </div>
          <Card>
            <CardHeader color="purple">
              <h2>Install</h2>
            </CardHeader>
            <CardContent>
              <p className="install-lede">
                Add the package, wrap your app in the theme, and compose the
                pieces you need.
              </p>
              <CodeBlock>{"yarn add easy-as-pie-ui"}</CodeBlock>
            </CardContent>
          </Card>
        </div>
      </section>

      <Section color="grey" padding="lg lg" notch="bottom grey">
        <div className="intro-grid">
          <MiniPanel label="Layout">
            Sections and columns cover the common page structure work.
          </MiniPanel>
          <MiniPanel label="UI">
            Buttons, cards, accordions, and bordered content ship ready to
            theme.
          </MiniPanel>
          <MiniPanel label="Theme">
            Colors, spacing, responsive helpers, and utility classes are
            generated globally.
          </MiniPanel>
        </div>
      </Section>

      <section className="docs-shell component-stack" id="components">
        <div className="section-heading">
          <span className="eyebrow">Examples</span>
          <h2>Component Gallery</h2>
          <p>
            Each example below is rendered by the current library source and
            paired with the usage pattern it demonstrates.
          </p>
        </div>

        <ExampleBlock
          title="Button"
          description="Render a themed button or anchor by passing a color and optional href."
          code={`<Button color="blue">Primary action</Button>
<Button color="orange-outline" href="/docs">Read docs</Button>`}
        >
          <div className="button-row">
            <Button color="blue">Primary action</Button>
            <Button color="orange-outline" href="#buttons">
              Outline link
            </Button>
            <Button color="green">Confirm</Button>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="Card, CardHeader, and CardContent"
          description="Compose a framed content surface with a colored heading and padded body."
          code={`<Card>
  <CardHeader color="green">
    <h3>Starter Kit</h3>
  </CardHeader>
  <CardContent>
    <p>Use cards for repeated, framed content.</p>
  </CardContent>
</Card>`}
        >
          <div className="card-demo">
            <Card>
              <CardHeader color="green">
                <h3>Starter Kit</h3>
              </CardHeader>
              <CardContent>
                <p>
                  Pair a card header with focused supporting copy and a clear
                  action.
                </p>
                <Button color="green-outline">Choose kit</Button>
              </CardContent>
            </Card>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="Accordion"
          description="Use accordions for optional detail, FAQs, and disclosure patterns."
          code={`<Accordion color="purple">
  <h5>Can I theme it?</h5>
  <p>Yes. Pass color overrides into EasyAsPieUITheme.</p>
</Accordion>`}
        >
          <Accordion color="purple">
            <h5>Can I theme it?</h5>
            <p>
              Yes. Pass color overrides into EasyAsPieUITheme and the helper
              classes update across the component set.
            </p>
          </Accordion>
          <Accordion color="blue">
            <h5>Does it include layout helpers?</h5>
            <p>
              Yes. Section and Columns cover common page composition patterns.
            </p>
          </Accordion>
        </ExampleBlock>

        <ExampleBlock
          title="Columns"
          description="Columns splits children evenly by default, or by explicit percentages."
          code={`<Columns split={[35, 65]}>
  <div>Navigation</div>
  <div>Main content</div>
</Columns>`}
        >
          <div className="columns-demo">
            <Columns split={[35, 65]} collapseMargin>
              <div className="column-chip">35%</div>
              <div className="column-chip wide">65%</div>
            </Columns>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="Section"
          description="Sections apply responsive padding, background colors, max-width content, and optional notches."
          code={`<Section color="blue" padding="md md" notch="top blue">
  <h3>Launch-ready section</h3>
</Section>`}
        >
          <div className="section-demo">
            <Section color="blue" padding="md md" notch="top blue">
              <h3 className="text-white text-center">Launch-ready section</h3>
              <p className="text-white text-center">
                A full-width band with themed background and generated spacing.
              </p>
            </Section>
          </div>
        </ExampleBlock>

        <ExampleBlock
          title="BorderContent"
          description="Add a theme-colored border to one or more sides of a content block."
          code={`<BorderContent color="orange" sides="true false true false">
  <p>Top and bottom borders only.</p>
</BorderContent>`}
        >
          <div className="border-grid">
            <BorderContent color="blue">
              <h3>Default</h3>
              <p>Left border, themed blue.</p>
            </BorderContent>
            <BorderContent color="orange" sides="true false true false">
              <h3>Custom sides</h3>
              <p>Top and bottom borders.</p>
            </BorderContent>
          </div>
        </ExampleBlock>
      </section>

      <Section color="black" padding="lg lg">
        <div className="theme-section">
          <div>
            <span className="eyebrow light">Theme Tokens</span>
            <h2 className="text-white">Colors and spacing</h2>
            <p className="text-white">
              Easy as Pie UI exposes token objects and generates matching helper
              classes for common styling work.
            </p>
          </div>
          <div className="token-panel">
            <div className="swatch-grid">
              {colorNames.map((color) => (
                <span
                  className="swatch"
                  key={color}
                  style={{ backgroundColor: Colors[color] }}
                  title={color}
                />
              ))}
            </div>
            <div className="spacing-list">
              {spacingEntries.map(([name, value]) => (
                <div className="spacing-row" key={name}>
                  <strong>{name}</strong>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </main>
  </>
)

createRoot(document.getElementById("root")).render(<App />)
