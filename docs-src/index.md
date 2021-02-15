---
layout: page.11ty.cjs
title: <fc-xspreadsheet> ⌲ Home
---

# &lt;fc-xspreadsheet>

`<fc-xspreadsheet>` is an awesome element. It's a great introduction to building web components with LitElement, with nice documentation site as well.

## As easy as HTML

<section class="columns">
  <div>

`<fc-xspreadsheet>` is just an HTML element. You can it anywhere you can use HTML!

```html
<fc-xspreadsheet></fc-xspreadsheet>
```

  </div>
  <div>

<fc-xspreadsheet></fc-xspreadsheet>

  </div>
</section>

## Configure with attributes

<section class="columns">
  <div>

`<fc-xspreadsheet>` can be configured with attributed in plain HTML.

```html
<fc-xspreadsheet name="HTML"></fc-xspreadsheet>
```

  </div>
  <div>

<fc-xspreadsheet name="HTML"></fc-xspreadsheet>

  </div>
</section>

## Declarative rendering

<section class="columns">
  <div>

`<fc-xspreadsheet>` can be used with declarative rendering libraries like Angular, React, Vue, and lit-html

```js
import {html, render} from 'lit-html';

const name="lit-html";

render(html`
  <h2>This is a &lt;fc-xspreadsheet&gt;</h2>
  <fc-xspreadsheet .name=${name}></fc-xspreadsheet>
`, document.body);
```

  </div>
  <div>

<h2>This is a &lt;fc-xspreadsheet&gt;</h2>
<fc-xspreadsheet name="lit-html"></fc-xspreadsheet>

  </div>
</section>
