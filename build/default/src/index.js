import { html, PolymerElement } from "../node_modules/@polymer/polymer/polymer-element.js";
import Y from "../node_modules/yjs/src/y.js";
import yWebrtc from "../node_modules/y-webrtc/dist/y-webrtc.js";
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
        value: 'yjs-element'
      }
    };
  }

}

window.customElements.define('yjs-element', YjsElement);