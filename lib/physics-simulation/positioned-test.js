import {Positioned} from './positioned.js';
import {PositionedMixin} from './positioned-mixin.js';
import {Pos} from '../physics/cinematics/pos.js';

export let tests = {
    positionedIsInterface() {
        const test = new class extends Positioned {

        };

        let posNotValid = false;
        try {
            test.pos;
        } catch (e) {
            posNotValid = true;
            console.assert(e === 'Not implemented', 'Positioned pos throws correct exception');
        }
        console.assert(posNotValid === true, 'Cannot instantiate Positioned');
    },

    positionedMixin() {
        class Test extends PositionedMixin(Positioned) {
            constructor(pos) {
                super();
                this._pos = pos;
            }
        }

        const test = new Test(new Pos(1, 2));
        console.assert(test.pos.eq(new Pos(1, 2)), 'Positioned has correct coordinates');
    },
};
