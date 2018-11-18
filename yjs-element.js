// import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-button/paper-button.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from './src/store.js';
import { LitElement, html } from '@polymer/lit-element/lit-element.js'

// These are the actions needed by this element.
import { increment, decrement } from './src/actions/counter.js';


// We are lazy loading its reducer.
import counter from './src/reducers/counter.js';

store.addReducers({
  counter
});

// These are the elements needed by this element.
import './src/components/counter-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './src/components/shared-styles.js';



// import Y from 'yjs';
// import { IPFS } from 'ipfs';
// import yWebrtc from 'y-webrtc/dist/y-webrtc.es6'; 

/**
 * `yjs-element`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */


class YjsElement extends connect(store)(LitElement) {

  render() {

    return html`
      <h1> Queensland </h1>
      ${SharedStyles}
      <section>
        <h2>Redux example: simple counter</h2>
        <div class="circle">${this._value}</div>
        <p>This page contains a reusable <code>&lt;counter-element&gt;</code>. The
        element is not built in a Redux-y way (you can think of it as being a
        third-party element you got from someone else), but this page is connected to the
        Redux store. When the element updates its counter, this page updates the values
        in the Redux store, and you can see the current value of the counter reflected in
        the bubble above.</p>
        <br><br>
      </section>
      <section>
        <p>
          <counter-element value="${this._value}" clicks="${this._clicks}"
              @counter-incremented="${this._counterIncremented}"
              @counter-decremented="${this._counterDecremented}">
          </counter-element>
        </p>
      </section>



    `;
  }
  static get properties() { return {
    // This is the data from the store.
    _clicks: { type: Number },
    _value: { type: Number },
  }}

  _counterIncremented() {
    store.dispatch(increment());
  }

  _counterDecremented() {
    store.dispatch(decrement());
  }

  // This is called every time something is updated in the store.
  stateChanged(state) {
    this._clicks = state.counter.clicks;
    this._value = state.counter.value;
  }


}

window.customElements.define('yjs-element', YjsElement);
