import { LitElement, html } from '@polymer/lit-element';

class PmhxElement extends LitElement {
	render() {
		return html `

		`;
	}

	static get properties() {
		return {
			history: {
				type:  String
			}
		}
	};

	constructor() {
		super();
		this.history = {};
	};

	_addDx() {
		this.dispatchEvent(new CustomEvent('new-history'));
	};
}

window.customElements.define('pmhx-element', PmhxElement);
