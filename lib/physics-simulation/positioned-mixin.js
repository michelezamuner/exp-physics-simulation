import {Positioned} from './positioned.js';

export let PositionedMixin = Base => class extends Base {
    /**
     * {@link Positioned.pos}
     */
    get pos() {
        return this._pos;
    }
};
