import React from "react"
import { createRoot } from "react-dom/client"
import {
  Accordion,
  BorderContent,
  Breakpoints,
  Button,
  Card,
  CardContent,
  CardHeader,
  Colors,
  Columns,
  EasyAsPieUITheme,
  Section,
} from "../../src/index.js"
import ReactIcon from "./react-icon.svg"
import "./styles.css"

const componentLinks = [
  ["Position", null],
  ["Section", "/components/section"],
  ["Columns", "/components/columns"],
  ["UI", null],
  ["Accordion", "/components/accordion"],
  ["Border Content", "/components/border-content"],
  ["Button", "/components/button"],
  ["Card", "/components/card"],
]

const syntax = {
  tag: "text-yellow",
  attr: "text-pink",
  html: "text-teal",
  text: "text-white",
}

const CodeLine = ({ indent = "", children, className = "" }) => (
  <div className={`${indent} ${className}`.trim()}>{children}</div>
)

const CodeTag = ({ name, attrs = "", close = false, children }) => (
  <span className={syntax.tag}>
    {"<"}
    {close ? "/" : ""}
    {name}
    {attrs ? " " : ""}
    {attrs ? <span className={syntax.attr}>{attrs}</span> : null}
    {">"}
    {children}
    {close ? "" : null}
  </span>
)

const CodeText = ({ children }) => (
  <span className={syntax.text}>{children}</span>
)

const Table = ({ rows }) => (
  <table className="docs-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      {rows.map((row) => (
        <tr key={row.name}>
          <td>{row.name}</td>
          <td>{row.type}</td>
          <td>{row.defaultValue}</td>
          <td>{row.description}</td>
        </tr>
      ))}
    </tbody>
  </table>
)

const Example = ({ children }) => (
  <BorderContent sides="true true false true" color="light-grey" size="1">
    <p className="text-grey">EXAMPLE</p>
    {children}
  </BorderContent>
)

const Nav = () => (
  <header className="navbar bg-blue">
    <div className="navbar-inner">
      <a className="nav-brand" href="/">
        <img src={ReactIcon} alt="Logo" />
        <h4 className="mb-xs inline">Easy as Pie UI</h4>
      </a>
      <nav className="nav-list" aria-label="Primary">
        <a className="active" href="/">
          Home
        </a>
        <a href="/components/section">Components</a>
      </nav>
    </div>
  </header>
)

const MainLayout = ({ children }) => (
  <>
    <EasyAsPieUITheme />
    <Nav />
    <main>{children}</main>
  </>
)

const SideNav = () => (
  <aside className="side-nav">
    <h4>Components</h4>
    {componentLinks.map(([label, href]) =>
      href ? (
        <a
          className={window.location.pathname === href ? "active" : ""}
          href={href}
          key={label}
        >
          {label}
        </a>
      ) : (
        <p key={label}>{label}</p>
      )
    )}
  </aside>
)

const ComponentsLayout = ({ children }) => (
  <Section>
    <Columns split={[75, 25]} collapseMargin>
      <div className="component-pane">{children}</div>
      <div className="component-pane">
        <SideNav />
      </div>
    </Columns>
  </Section>
)

const HomePage = () => (
  <Section>
    <div className="center-block text-center mb-xl mt-xl home-hero">
      <h1 className="mb-sm text-blue">Easy as Pie UI</h1>
      <h6 className="mb-md">
        React component library that is easy as pie
        <br /> to theme and implement on any site.
      </h6>
      <Button
        color="blue-outline"
        href="https://github.com/richardtaylordawson/easy-as-pie-ui"
        target="_blank"
      >
        Github
      </Button>
      <Button color="blue" href="/components/section">
        Components
      </Button>
    </div>

    <DocSection title="Installation">
      <h5 className="mt-md">NPM</h5>
      <p>Install Easy as Pie UI and peer dependencies via NPM</p>
      <code>
        <span className="text-yellow">npm install</span> --save easy-as-pie-ui
      </code>
      <h5 className="mt-md">Set Up</h5>
      <p>
        The only thing you will need to set up in your project is adding the
        Easy as Pie UI Theme component into your layout. This brings in base
        theme defaults for fonts, headings, etc. It will be the file that themes
        all the components in this library and can be overridden by following
        the guidelines in the Theming section below.
      </p>
      <p>Here is an example of the theme in a layout:</p>
      <code>
        <CodeTag name="Fragment" />
        <CodeLine indent="pl-sm text-teal">{"<EasyAsPieUITheme />"}</CodeLine>
        <br />
        <CodeLine indent="pl-sm text-teal">
          {"<main>"}
          <CodeText>{"{children}"}</CodeText>
          {"<main>"}
        </CodeLine>
        <CodeTag name="Fragment" />
      </code>
    </DocSection>

    <DocSection title="Theming">
      <h5 className="mt-md">Colors</h5>
      <p>
        Every color can be changed to your own site's colors by passing an
        object into the Easy as Pie Theme object. This should include the key as
        the color you want to override and the value as the hex, rgb, or web
        safe color you want to change it to.
      </p>
      <p>Full list of colors is as follows:</p>
      <ul>
        {Object.keys(Colors).map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
      <p>Here is an example changing a few of the default colors:</p>
      <code>
        <CodeTag name="Fragment" />
        <CodeLine indent="pl-sm text-teal">
          {"<EasyAsPieUITheme "}
          <span className="text-pink">{"colors={"}</span>
        </CodeLine>
        <CodeLine indent="pl-lg text-pink">red: "rgb(255, 0, 0)",</CodeLine>
        <CodeLine indent="pl-lg text-pink">blue: "#0000ff",</CodeLine>
        <CodeLine indent="pl-lg text-pink">green: "green",</CodeLine>
        <CodeLine indent="pl-md text-pink">{"}"}</CodeLine>
        <CodeLine indent="pl-sm text-teal">{">"}</CodeLine>
        <CodeLine indent="pl-sm text-teal">
          {"<main>"}
          <CodeText>{"{children}"}</CodeText>
          {"<main>"}
        </CodeLine>
        <CodeTag name="Fragment" />
      </code>
      <h5 className="mt-md">Spacing</h5>
      <p>
        You may also change some of the default spacing around the site that are
        used in the components as well as the helper classes. As with the
        colors, you pass in an object with the key being the size and the value
        being in px, em, or rem.
      </p>
      <p>Full list of spacing is as follows:</p>
      <ul>
        <li>xs</li>
        <li>sm</li>
        <li>md</li>
        <li>lg</li>
        <li>xl</li>
      </ul>
      <p>Here is an example changing a few of the default spacing:</p>
      <code>
        <CodeTag name="Fragment" />
        <CodeLine indent="pl-sm text-teal">
          {"<EasyAsPieUITheme "}
          <span className="text-pink">{"spacing={"}</span>
        </CodeLine>
        <CodeLine indent="pl-lg text-pink">sm: "15px",</CodeLine>
        <CodeLine indent="pl-lg text-pink">md: "30rem",</CodeLine>
        <CodeLine indent="pl-lg text-pink">lg: "45em",</CodeLine>
        <CodeLine indent="pl-md text-pink">{"}"}</CodeLine>
        <CodeLine indent="pl-sm text-teal">{">"}</CodeLine>
        <CodeLine indent="pl-sm text-teal">
          {"<main>"}
          <CodeText>{"{children}"}</CodeText>
          {"<main>"}
        </CodeLine>
        <CodeTag name="Fragment" />
      </code>
    </DocSection>

    <DocSection title="Breakpoints">
      <h5 className="mt-md">Overview</h5>
      <p>
        This is a JS object that you can import from Easy as Pie UI that
        contains the breakpoints used in the theming of this library so custom
        changes to your own site match.
      </p>
      <p>
        Example of using breakpoints (implement in any css in js manner if in a
        template literal, example is done in emotion):
      </p>
      <p>Possible values include:</p>
      <ul>
        {Object.keys(Breakpoints).map((breakpoint) => (
          <li key={breakpoint}>{breakpoint}</li>
        ))}
      </ul>
      <code>
        <CodeLine className="text-yellow">
          {'${Breakpoints["small-up"]} {'}
        </CodeLine>
        <CodeLine indent="pl-sm">text-align: center;</CodeLine>
        <CodeLine indent="pl-sm">color: red;</CodeLine>
        <CodeLine className="text-yellow">{"}"}</CodeLine>
      </code>
    </DocSection>

    <DocSection title="Helper Classes">
      <h5 className="mt-md">Overview</h5>
      <p>
        Many helper classes come with the project as well as are generated with
        the project based on your theme choices. For example, if you override
        the color red, the helper class for changing color text will now use
        your site's color red instead of the default.
      </p>
      {[
        [
          "Text Alignment",
          "Changes the css text-align property.",
          [
            "text-center",
            "text-left",
            "text-right",
            "text-sm-{position}",
            "text-md-{position}",
            "text-lg-{position}",
          ],
        ],
        ["Text Sizing", "Changes the css font-size property", ["text-small"]],
        [
          "Font Styling",
          "Changes the css font-style property",
          ["bold", "italic"],
        ],
        ["Float", "Changes the css float property", ["left", "right"]],
        [
          "Display",
          "Changes the css display or visibility property",
          ["show", "hidden", "invisible", "inline"],
        ],
        [
          "Text Color",
          "Changes the css color property. Must pass a color such as red or blue that is defined in the theme.",
          ["text-{color}"],
        ],
        [
          "Background Color",
          "Changes the css background-color property. Must pass a color such as red or blue that is defined in the theme.",
          ["bg-{color}"],
        ],
        [
          "Padding",
          "Changes the css padding property. Must pass a spacing such as xs or md that is defined in the theme.",
          ["pb-{spacing}", "pt-{spacing}", "pr-{spacing}", "pl-{spacing}"],
        ],
        [
          "Margin",
          "Changes the css margin property. Must pass a spacing such as xs or md that is defined in the theme.",
          ["mb-{spacing}", "mt-{spacing}", "mr-{spacing}", "ml-{spacing}"],
        ],
        [
          "Border Color",
          "Changes the css border-color property. Must pass a color such as red or blue that is defined in the theme.",
          ["bc-{color}"],
        ],
        [
          "Border Width",
          "Changes the css border-width and style property. Stands for border width solid size.",
          ["bw-s-1", "bw-s-2", "bw-s-3", "bw-none"],
        ],
        [
          "Content Sizes",
          "Changes the css max-width property. Please note this is not based on the theme spacing.",
          ["content-xs", "content-sm", "content-md", "content-lg"],
        ],
        [
          "Image Utilities",
          "Changes properties related to image size, etc.",
          ["img-responsive"],
        ],
        ["Box Shadow", "Changes the css box-shadow property.", ["box-shadow"]],
        [
          "Center Block",
          "Changes the css display and margin properties.",
          ["center-block", "center-block-lg"],
        ],
      ].map(([heading, description, items]) => (
        <div key={heading}>
          <h6 className="mt-md">{heading}</h6>
          <p className="text-small">{description}</p>
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </DocSection>
  </Section>
)

const DocSection = ({ title, children }) => (
  <div className="content-sm center-block mb-xl">
    <h4 className="text-red">{title}</h4>
    <hr />
    {children}
  </div>
)

const ComponentIntro = ({ title, children }) => (
  <div className="mb-lg">
    <h3>{title}</h3>
    <p>{children}</p>
  </div>
)

const ColumnsPage = () => (
  <ComponentsLayout>
    <ComponentIntro title="Columns">
      Smartly divides your children content into responsive columns.
    </ComponentIntro>
    <div className="mb-md">
      <h4 className="mb-sm">Smart Split</h4>
      <p className="text-small italic">
        Splits each child into equal column width's that fill their parent
        container
      </p>
      <Example>
        <Columns>
          <div className="bg-light-grey pl-sm">Column 1</div>
          <div className="bg-light-grey pl-sm">Column 2</div>
          <div className="bg-light-grey pl-sm">Column 3</div>
        </Columns>
      </Example>
      <code>
        <CodeTag name="Columns" />
        {["Column 1", "Column 2", "Column 3"].map((column) => (
          <CodeLine indent="pl-sm text-teal" key={column}>
            {"<div>"}
            <CodeText>{column}</CodeText>
            {"</div>"}
          </CodeLine>
        ))}
        <CodeTag name="Columns" close />
      </code>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Split</h4>
      <p className="text-small italic">
        Pass in an array with custom width values
      </p>
      <Example>
        <Columns split={[25, 50, 25]}>
          <div className="bg-light-grey pl-sm">Column 1</div>
          <div className="bg-light-grey pl-sm">Column 2</div>
          <div className="bg-light-grey pl-sm">Column 3</div>
        </Columns>
      </Example>
      <code>
        <CodeTag name="Columns" attrs="split={[25, 50, 25]}" />
        {["Column 1", "Column 2", "Column 3"].map((column) => (
          <CodeLine indent="pl-sm text-teal" key={column}>
            {"<div>"}
            <CodeText>{column}</CodeText>
            {"</div>"}
          </CodeLine>
        ))}
        <CodeTag name="Columns" close />
      </code>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Collapse Margin</h4>
      <p className="text-small italic">
        Collapses the margin between the columns on desktop
      </p>
      <Example>
        <Columns split={[25, 50, 25]} collapseMargin>
          <div className="bg-light-grey pl-sm">Column 1</div>
          <div className="bg-light-grey pl-sm">Column 2</div>
          <div className="bg-light-grey pl-sm">Column 3</div>
        </Columns>
      </Example>
      <code>
        <CodeTag
          name="Columns"
          attrs="split={[25, 50, 25]} collapseMargin={true}"
        />
        {["Column 1", "Column 2", "Column 3"].map((column) => (
          <CodeLine indent="pl-sm text-teal" key={column}>
            {"<div>"}
            <CodeText>{column}</CodeText>
            {"</div>"}
          </CodeLine>
        ))}
        <CodeTag name="Columns" close />
      </code>
    </div>
    <ApiTable
      rows={[
        [
          "children",
          "node",
          "",
          "The nodes that will map to each columned content.",
        ],
        [
          "split",
          "array",
          "",
          "An array of custom width values can be used instead of smart splitting the columns such as [25, 75] to split a two-column layout to 25% and 75%.",
        ],
        [
          "collapseMargin",
          "bool",
          "false",
          "Collapses the margin between the columns on desktop",
        ],
      ]}
    />
  </ComponentsLayout>
)

const SectionPage = () => (
  <ComponentsLayout>
    <ComponentIntro title="Section">
      Creates a semantic section of your website with default theme padding.
    </ComponentIntro>
    <div className="mb-md">
      <h4 className="mb-sm">Color</h4>
      <p className="text-small italic">
        Set a background color from the list of theme colors provided.
      </p>
      <Example>
        <Section color="olive" />
      </Example>
      <code>
        <CodeTag name="Section" attrs='color="olive"' />
        <CodeLine indent="pl-sm">Content Goes Here</CodeLine>
        <CodeTag name="Section" close />
      </code>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Notch</h4>
      <p className="text-small italic">
        Display a notch at the top or bottom of the section to create CTA's or
        other content.
      </p>
      <Example>
        <Section color="orange" notch="top orange" />
      </Example>
      <code>
        <CodeTag name="Section" attrs='color="orange" notch="top orange"' />
        <CodeLine indent="pl-sm">Content Goes Here</CodeLine>
        <CodeTag name="Section" close />
      </code>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Image</h4>
      <p className="text-small italic">
        Pass in an image path to display as a background.
      </p>
      <Example>
        <Section image="https://i.pinimg.com/originals/32/7e/f9/327ef97d75ab564e6d57bf49be59d681.jpg" />
      </Example>
      <code>
        <CodeTag name="Section" attrs='image="PATH_TO_IMAGE"' />
        <CodeLine indent="pl-sm">Content Goes Here</CodeLine>
        <CodeTag name="Section" close />
      </code>
    </div>
    <ApiTable
      rows={[
        [
          "children",
          "node",
          "",
          "The content to be displayed in the section of content created with this component.",
        ],
        [
          "color",
          "string",
          "white / none",
          "Theme color that will change the background color of the section.",
        ],
        [
          "image",
          "string",
          "",
          "Image path, absolute or relative of an image to fill the entire container.",
        ],
        [
          "imagePosition",
          "string",
          "center",
          "Change the position of the background image",
        ],
        [
          "padding",
          "string",
          "xl",
          "Pass in a padding value from the theme to change the top & bottom padding of the section. Example: sm.",
        ],
        [
          "notch",
          "string",
          "",
          "String that contains the position and color of the notch. The order is interchangeable. Example: top red.",
        ],
      ]}
    />
  </ComponentsLayout>
)

const AccordionPage = () => (
  <ComponentsLayout>
    <ComponentIntro title="Accordion">
      Creates a section that can be toggled to be used for FAQ's, etc.
    </ComponentIntro>
    <div className="mb-md">
      <h4 className="mb-sm">Color</h4>
      <p className="text-small italic">
        Set a header color from the list of theme colors provided.
      </p>
      <Example>
        <Accordion color="green">
          <h5>Header</h5>
          <p>Content goes in here and can be toggled!</p>
        </Accordion>
      </Example>
      <code>
        <CodeTag name="Accordion" attrs='color="green"' />
        <CodeLine indent="pl-sm text-teal">
          {"<h5>"}
          <CodeText>Header</CodeText>
          {"</h5>"}
        </CodeLine>
        <CodeLine indent="pl-sm text-teal">
          {"<p>"}
          <CodeText>Content goes in here and can be toggled!</CodeText>
          {"</p>"}
        </CodeLine>
        <CodeTag name="Accordion" close />
      </code>
    </div>
    <ApiTable
      rows={[
        [
          "children",
          "node",
          "",
          "The content to be displayed in the accordion with the first child node creating the header and the second node creating the content.",
        ],
        [
          "color",
          "string",
          "blue",
          "Theme color that will change the header color of the section.",
        ],
      ]}
    />
  </ComponentsLayout>
)

const BorderContentPage = () => (
  <ComponentsLayout>
    <ComponentIntro title="Border Content">
      Create nice sectioned content with borders to separate the it.
    </ComponentIntro>
    <div className="mb-md">
      <h4 className="mb-sm">Regular</h4>
      <Example>
        <BorderContent>
          <h2>Border Content</h2>
          <p>Look at the pretty border content</p>
        </BorderContent>
      </Example>
      <code>
        <CodeTag name="BorderContent" />
        <CodeLine indent="pl-sm text-teal">
          {"<h2>"}
          <CodeText>Border Content</CodeText>
          {"</h2>"}
        </CodeLine>
        <CodeLine indent="pl-sm text-teal">
          {"<p>"}
          <CodeText>Look at the pretty border content</CodeText>
          {"</p>"}
        </CodeLine>
        <CodeTag name="BorderContent" close />
      </code>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Sides</h4>
      <p className="text-small italic">
        Change the sides the border is painted on.
      </p>
      <Example>
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
      </Example>
      <code>
        <CodeTag name="Columns" />
        <CodeLine indent="pl-sm text-yellow">
          {'<BorderContent sides="true true true true">'}
        </CodeLine>
        <CodeLine indent="pl-sm text-yellow">
          {'<BorderContent sides="true false false false">'}
        </CodeLine>
        <CodeTag name="Columns" close />
      </code>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Color</h4>
      <p className="text-small italic">
        Change the default blue color to whatever color you'd like in the theme.
      </p>
      <Example>
        <BorderContent color="red">
          <h2>Color</h2>
          <p>Look at the pretty border content</p>
        </BorderContent>
      </Example>
      <code>
        <CodeTag name="BorderContent" attrs='color="red"' />
        <CodeTag name="BorderContent" close />
      </code>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Size</h4>
      <p className="text-small italic">Change the px width of the border.</p>
      <Example>
        <BorderContent size="5" color="orange" sides="true false false true">
          <h2>Size</h2>
          <p>Look at the pretty border content</p>
        </BorderContent>
      </Example>
      <code>
        <CodeTag
          name="BorderContent"
          attrs='size="5" color="orange" sides="true false false true"'
        />
        <CodeTag name="BorderContent" close />
      </code>
    </div>
    <ApiTable
      rows={[
        [
          "children",
          "node",
          "",
          "Content to be displayed within the border content container.",
        ],
        [
          "sides",
          "string",
          "false, false, false, true",
          "Pass in the sides you would like the border to fill. The default is just the left side.",
        ],
        [
          "color",
          "string",
          "blue",
          "Theme color that will change the color of the borders.",
        ],
        ["size", "string", "2px", "This sets the px width of the border."],
      ]}
    />
  </ComponentsLayout>
)

const ButtonPage = () => (
  <ComponentsLayout>
    <ComponentIntro title="Button">
      Custom button styles for use in forms, pages, CTA's etc. They support
      multiple colors, states, and more.
    </ComponentIntro>
    <div className="mb-md">
      <h4 className="mb-sm">Regular</h4>
      <p className="text-small italic">
        Simple button used for anything you'd like.
      </p>
      <Example>
        {Object.keys(Colors).map((color) => (
          <Button color={color} key={color}>
            {color}
          </Button>
        ))}
      </Example>
      <code>
        <CodeTag name="Button" attrs='color="red"'>
          <CodeText>red</CodeText>
        </CodeTag>
        <CodeTag name="Button" close />
      </code>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Outline</h4>
      <p className="text-small italic">
        Change the button fill to transparent with the outline colored instead.
      </p>
      <Example>
        {Object.keys(Colors).map((color) => (
          <Button color={`${color}-outline`} key={color}>
            {color}
          </Button>
        ))}
      </Example>
      <code>
        <CodeTag name="Button" attrs='color="red-outline"'>
          <CodeText>red outline</CodeText>
        </CodeTag>
        <CodeTag name="Button" close />
      </code>
    </div>
    <ApiTable
      rows={[
        ["children", "node", "", "Text displayed in the button."],
        [
          "color",
          "string",
          "",
          "Theme color that will change the color of the button. Pass the color with -outline to style the button with an outline instead of a background color.",
        ],
        [
          "href",
          "string",
          "",
          "Passing in an href automatically creates the button as an a tag and will link to whatever reference is passed in.",
        ],
        [
          "target",
          "string",
          "",
          "Must pass in the href attribute in order for the target to take affect.",
        ],
      ]}
    />
  </ComponentsLayout>
)

const CardPage = () => (
  <ComponentsLayout>
    <ComponentIntro title="Card">
      Content displayed in a nice colored card like container.
    </ComponentIntro>
    <div className="mb-md">
      <h4 className="mb-sm">Regular</h4>
      <Example>
        <Card>
          <CardHeader color="blue">
            <h5>Default Card</h5>
          </CardHeader>
          <CardContent>
            <p>This is the content of the card</p>
          </CardContent>
        </Card>
      </Example>
      <code>
        <CodeTag name="Card" />
        <CodeLine indent="pl-sm text-yellow">{"<CardHeader>"}</CodeLine>
        <CodeLine indent="pl-md text-teal">
          {"<h5>"}
          <CodeText>Default Card</CodeText>
          {"<h5>"}
        </CodeLine>
        <CodeLine indent="pl-sm text-yellow">{"</CardHeader>"}</CodeLine>
        <CodeLine indent="pl-sm text-yellow">{"<CardContent>"}</CodeLine>
        <CodeLine indent="pl-md text-teal">
          {"<p>"}
          <CodeText>This is the content of the card</CodeText>
          {"<p>"}
        </CodeLine>
        <CodeLine indent="pl-sm text-yellow">{"</CardContent>"}</CodeLine>
        <CodeTag name="Card" close />
      </code>
    </div>
    <div className="mb-md">
      <h4 className="mb-sm">Color</h4>
      <p className="text-small italic">
        Change the color of the card by passing a theme color to the CardHeader.
      </p>
      <Example>
        <Card>
          <CardHeader color="orange">
            <h5>Default Card</h5>
          </CardHeader>
          <CardContent>
            <p>This is the content of the card</p>
          </CardContent>
        </Card>
      </Example>
      <code>
        <CodeTag name="Card" />
        <CodeLine indent="pl-sm text-yellow">
          {'<CardHeader color="orange">'}
        </CodeLine>
        <CodeLine indent="pl-sm text-yellow">{"</CardHeader>"}</CodeLine>
        <CodeTag name="Card" close />
      </code>
    </div>
    <ApiTable
      rows={[
        [
          "children",
          "node",
          "",
          "This includes both the CardHeader and CardContent as shown above.",
        ],
        [
          "color",
          "string",
          "",
          "Pass in a theme color to the CardHeader in order to change the color.",
        ],
      ]}
    />
  </ComponentsLayout>
)

const ApiTable = ({ rows }) => (
  <div className="mb-md">
    <h4>API</h4>
    <Table
      rows={rows.map(([name, type, defaultValue, description]) => ({
        name,
        type,
        defaultValue,
        description,
      }))}
    />
  </div>
)

const routes = {
  "/": HomePage,
  "/components": SectionPage,
  "/components/section": SectionPage,
  "/components/columns": ColumnsPage,
  "/components/accordion": AccordionPage,
  "/components/border-content": BorderContentPage,
  "/components/button": ButtonPage,
  "/components/card": CardPage,
}

const App = () => {
  const Page = routes[window.location.pathname] || HomePage

  return (
    <MainLayout>
      <Page />
    </MainLayout>
  )
}

createRoot(document.getElementById("root")).render(<App />)
