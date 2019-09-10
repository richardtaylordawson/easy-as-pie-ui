import React from "react"
import { Section, Button } from "easy-as-pie-ui"

export const Index = () => (
  <Section>
    <div className="center-block text-center mb-xl mt-xl">
      <h1 className="mb-sm text-blue">Easy as Pie UI</h1>
      <h6 className="mb-md">React component library that is easy as pie<br/> to theme and implement on any site.</h6>
      <Button color="blue-outline" href="https://github.com/richardtaylordawson/easy-as-pie-ui" target="_blank">Github</Button>
      <Button color="blue" href="/components/button">Components</Button>
    </div>
    <div className="content-sm center-block mb-xl">
      <h4 className="text-red">Installation</h4>
      <hr/>
      <h5 className="mt-md">NPM</h5>
      <p>Install Easy as Pie UI and peer dependencies via NPM</p>
      <code><span className="text-yellow">npm install</span> --save easy-as-pie-ui</code>
      <h5 className="mt-md">Set Up</h5>
      <p>The only thing you will need to set up in your project is adding the Easy as Pie UI Theme component into your layout. This brings in base theme defaults for fonts, headings, etc. It will be the file that themes all the components in this library and can be overridden by following the guidelines in the Theming section below.</p>
      <p>Here is an example of the theme in a layout:</p>
      <code>
        <span class="text-yellow">&#60;Fragment&#62;</span>
          <div className="pl-sm text-teal">&#60;EasyAsPieUITheme /&#62;</div><br/>
          <div className="pl-sm text-teal">&#60;main&#62;<span class="text-white">&#123;children&#125;</span>&#60;main&#62;</div>
        <span class="text-yellow">&#60;Fragment&#62;</span>
      </code>
    </div>
    <div className="content-sm center-block mb-xl">
      <h4 className="text-red">Theming</h4>
      <hr/>
      <h5 className="mt-md">Colors</h5>
      <p>Every color can be changed to your own site's colors by passing an object into the Easy as Pie Theme object. This should include the key as the color you want to override and the value as the hex, rgb, or web safe color you want to change it to.</p>
      <p>Full list of colors is as follows:</p>
      <ul>
        <li>red</li>
        <li>orange</li>
        <li>yellow</li>
        <li>olive</li>
        <li>green</li>
        <li>teal</li>
        <li>blue</li>
        <li>violet</li>
        <li>purple</li>
        <li>pink</li>
        <li>brown</li>
        <li>grey</li>
        <li>light-grey</li>
        <li>black</li>
      </ul>
      <p>Here is an example changing a few of the default colors:</p>
      <code>
        <span class="text-yellow">&#60;Fragment&#62;</span>
          <div className="pl-sm text-teal">&#60;EasyAsPieUITheme <span class="text-pink">colors=&#123;</span></div>
          <div className="pl-lg text-pink">red: "rgb(255, 0, 0)",</div>
          <div className="pl-lg text-pink">blue: "#0000ff",</div>
          <div className="pl-lg text-pink">green: "green",</div>
          <div className="pl-md text-pink">&#125;</div>
          <div className="pl-sm text-teal">&#62;</div>
          <div className="pl-sm text-teal">&#60;main&#62;<span class="text-white">&#123;children&#125;</span>&#60;main&#62;</div>
        <span class="text-yellow">&#60;Fragment&#62;</span>
      </code>
      <h5 className="mt-md">Spacing</h5>
      <p>You may also change some of the default spacing around the site that are used in the components as well as the helper classes. As with the colors, you pass in an object with the key being the size and the value being in px, em, or rem.</p>
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
        <span class="text-yellow">&#60;Fragment&#62;</span>
          <div className="pl-sm text-teal">&#60;EasyAsPieUITheme <span class="text-pink">colors=&#123;</span></div>
          <div className="pl-lg text-pink">sm: "15px",</div>
          <div className="pl-lg text-pink">md: "30rem",</div>
          <div className="pl-lg text-pink">lg: "45em",</div>
          <div className="pl-md text-pink">&#125;</div>
          <div className="pl-sm text-teal">&#62;</div>
          <div className="pl-sm text-teal">&#60;main&#62;<span class="text-white">&#123;children&#125;</span>&#60;main&#62;</div>
        <span class="text-yellow">&#60;Fragment&#62;</span>
      </code>
    </div>
    <div className="content-sm center-block mb-xl">
      <h4 className="text-red">Breakpoints</h4>
      <hr/>
      <h5 className="mt-md">Overview</h5>
      <p>This is a JS object that you can import from Easy as Pie UI that contains the breakpoints used in the theming of this library so custom changes to your own site match.</p>
      <p>Example of using breakpoints (implement in any css in js manner if in a template literal, example is done in emotion):</p>
      <p>Possible values include:</p>
      <ul>
        <li>small</li>
        <li>small-up</li>
        <li>small-down</li>
        <li>medium</li>
        <li>medium-up</li>
        <li>medium-down</li>
        <li>large</li>
        <li>large-up</li>
      </ul>
      <code>
        <div className="text-yellow">$&#123;Breakpoints&#91;"small-up"&#93;&#125; &#123;</div>
        <div className="pl-sm">text-align: center;</div>
        <div className="pl-sm">color: red;</div>
        <div className="text-yellow">&#125;</div>
      </code>
    </div>
    <div className="content-sm center-block mb-xl">
      <h4 className="text-red">Helper Classes</h4>
      <hr/>
      <h5 className="mt-md">Overview</h5>
      <p>Many helper classes come with the project as well as are generated with the project based on your theme choices. For example, if you override the color red, the helper class for changing color text will now use your site's color red instead of the default.</p>
      <h6 className="mt-md">Text Alignment</h6>
      <p class="text-small">Changes the css text-align property. May use responsive classes by passing center, left or right with sm, md or lg.</p>
      <ul>
        <li>text-center</li>
        <li>text-left</li>
        <li>text-right</li>
        <li>text-sm-&#123;position&#125;</li>
        <li>text-md-&#123;position&#125;</li>
        <li>text-lg-&#123;position&#125;</li>
      </ul>
      <h6 className="mt-md">Text Sizing</h6>
      <p class="text-small">Changes the css font-size property</p>
      <ul>
        <li>text-small</li>
      </ul>
      <h6 className="mt-md">Font Styling</h6>
      <p class="text-small">Changes the css font-style property</p>
      <ul>
        <li>bold</li>
        <li>italic</li>
      </ul>
      <h6 className="mt-md">Float</h6>
      <p class="text-small">Changes the css float property</p>
      <ul>
        <li>left</li>
        <li>right</li>
      </ul>
      <h6 className="mt-md">Display</h6>
      <p class="text-small">Changes the css display or visibility property</p>
      <ul>
        <li>show</li>
        <li>hidden</li>
        <li>invisible</li>
        <li>inline</li>
      </ul>
      <h6 className="mt-md">Text Color</h6>
      <p class="text-small">Changes the css color property. Must pass a color such as "red" or "blue" that is defined in the theme.</p>
      <ul>
        <li>text-&#123;color&#125;</li>
      </ul>
      <h6 className="mt-md">Background Color</h6>
      <p class="text-small">Changes the css color property. Must pass a color such as "red" or "blue" that is defined in the theme.</p>
      <ul>
        <li>bg-&#123;color&#125;</li>
      </ul>
      <h6 className="mt-md">Padding</h6>
      <p class="text-small">Changes the css padding property. Must pass a spacing such as "xs" or "md" that is defined in the theme.</p>
      <ul>
        <li>pb-&#123;spacing&#125;</li>
        <li>pt-&#123;spacing&#125;</li>
        <li>pr-&#123;spacing&#125;</li>
        <li>pl-&#123;spacing&#125;</li>
      </ul>
      <h6 className="mt-md">Margin</h6>
      <p class="text-small">Changes the css margin property. Must pass a spacing such as "xs" or "md" that is defined in the theme.</p>
      <ul>
        <li>mb-&#123;spacing&#125;</li>
        <li>mt-&#123;spacing&#125;</li>
        <li>mr-&#123;spacing&#125;</li>
        <li>ml-&#123;spacing&#125;</li>
      </ul>
      <h6 className="mt-md">Border Color</h6>
      <p class="text-small">Changes the css color property. Must pass a color such as "red" or "blue" that is defined in the theme.</p>
      <ul>
        <li>bc-&#123;color&#125;</li>
      </ul>
      <h6 className="mt-md">Border Width</h6>
      <p class="text-small">Changes the css border-width and style property. Stands for "border width solid 'size'".</p>
      <ul>
        <li>bw-s-1</li>
        <li>bw-s-2</li>
        <li>bw-s-3</li>
        <li>bw-none</li>
      </ul>
      <h6 className="mt-md">Content Sizes</h6>
      <p class="text-small">Changes the css max-width property. Please note this is not based on the theme spacing</p>
      <ul>
        <li>content-xs</li>
        <li>content-sm</li>
        <li>content-md</li>
        <li>content-lg</li>
      </ul>
      <h6 className="mt-md">Content Sizes</h6>
      <p class="text-small">Changes the css max-width property. Please note this is not based on the theme spacing</p>
      <ul>
        <li>content-xs</li>
        <li>content-sm</li>
        <li>content-md</li>
        <li>content-lg</li>
      </ul>
      <h6 className="mt-md">Image Utilities</h6>
      <p class="text-small">Changes properties related to image size, etc.</p>
      <ul>
        <li>img-responsive</li>
      </ul>
      <h6 className="mt-md">Box Shadow</h6>
      <p class="text-small">Changes the css box-shadow property.</p>
      <ul>
        <li>box-shadow</li>
      </ul>
      <h6 className="mt-md">Box Shadow</h6>
      <p class="text-small">Changes the css display and margin properties.</p>
      <ul>
        <li>center-block</li>
        <li>center-block-lg</li>
      </ul>
    </div>
  </Section>
)
