/**
 * @license
 * Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

import {LitElement, html} from 'lit-element';
import "x-data-spreadsheet/dist/xspreadsheet";
import css from "x-data-spreadsheet/dist/xspreadsheet.css";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export default class FCXSpreadsheet extends LitElement {
  static get styles() {
    return [css];
  }

  static get properties() {
    return {
      /**
       * The name to say "Hello" to.
       */
      hideToolbar: {type: Boolean, attribute: "hide-toolbar"},

      /**
       * The number of times the button has been clicked.
       */
      hideGrid: {type: Boolean, attribute: "hide-grid"},
    };
  }

  constructor() {
    super();
    this.hideToolbar=false;
    this.hideGrid=false;
    this.id="xspreadsheet";
    document.adoptedStyleSheets = this.shadowRoot.adoptedStyleSheets;
  }

  render() {
    return html`
      <slot></slot>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    var config = {
      mode: 'edit', // edit | read
      showToolbar: !this.hideToolbar,
      showGrid: !this.hideGrid,
      showContextmenu: true,
      view: {
        height: () => document.documentElement.clientHeight,
        width: () => document.documentElement.clientWidth,
      },
      row: {
        len: 100,
        height: 25,
      },
      col: {
        len: 26,
        width: 100,
        indexWidth: 60,
        minWidth: 60,
      },
      style: {
        bgcolor: '#ffffff',
        align: 'left',
        valign: 'middle',
        textwrap: false,
        strike: false,
        underline: false,
        color: '#0a0a0a',
        font: {
          name: 'Helvetica',
          size: 10,
          bold: false,
          italic: false,
        },
      },
    };

    x_spreadsheet("#xspreadsheet", config);
  }

  _onClick() {
    this.count++;
  }
}

window.customElements.define('fc-xspreadsheet', FCXSpreadsheet);
