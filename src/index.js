import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import Y from 'yjs';
import yWebrtc from 'y-webrtc/dist/y-webrtc';


/**
 * `yjs-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class YjsElement extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'yjs-element',
      },
    };
  }
}

window.customElements.define('yjs-element', YjsElement);
