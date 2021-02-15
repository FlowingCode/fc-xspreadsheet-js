import {FCXSpreadsheet} from '../fc-xspreadsheet.js';
import {fixture, html} from '@open-wc/testing';

const assert = chai.assert;

suite('fc-xspreadsheet', () => {
  test('is defined', () => {
    const el = document.createElement('fc-xspreadsheet');
    assert.instanceOf(el, FCXSpreadsheet);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<fc-xspreadsheet></fc-xspreadsheet>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<fc-xspreadsheet name="Test"></fc-xspreadsheet>`);
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `
    );
  });

  test('handles a click', async () => {
    const el = await fixture(html`<fc-xspreadsheet></fc-xspreadsheet>`);
    const button = el.shadowRoot.querySelector('button');
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(
      el,
      `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `
    );
  });
});
