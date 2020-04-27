import {Vec} from '../../geometry/vec.js';
import {Pos} from './pos.js';

export let tests = {
    posFromVec() {
        const x = Math.random();
        const y = Math.random();
        const pos = Pos.fromVec(new Vec(x, y));
        console.assert(pos instanceof Pos, 'Pos from Vec creates Pos');
        console.assert(pos.x === x && pos.y === y, 'Pos has correct coordinates');
    },

    posEquals() {
        const first = new Pos(1, 2);
        const second = new Pos(1, 2);
        console.assert(first.eq(second), 'Pos equals to Pos');
    },

    posPlus() {
        const first = new Pos(1, 2);
        const second = new Pos(0, 1);
        const sum = first.plus(second);
        console.assert(sum.eq(new Vec(1, 3)), 'Pos can be summed');
        console.assert(sum instanceof Pos, 'Sum of Pos instance of Pos');
    },

    posMinus() {
        const first = new Pos(0, 0);
        const second = new Pos(1, 2);
        const diff = first.minus(second);
        console.assert(diff.eq(new Vec(-1, -2)), 'Pos can be subtracted');
        console.assert(diff instanceof Pos, 'Difference of Pos instance of Pos');
    },
};
