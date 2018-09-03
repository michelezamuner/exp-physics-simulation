import {Positioned} from './positioned.js';

let PositionedMixin = Base => class extends Base {
	/**
	 * {@link Positioned.pos}
	 */
	get pos() {
		return this._pos;
	}
};

export {PositionedMixin};