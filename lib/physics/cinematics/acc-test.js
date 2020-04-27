import {Vec} from '../../geometry/vec.js';
import {Acc} from './acc.js';
import {Vel} from './vel.js';

export let tests = {
    accFromVec() {
        const x = Math.random();
        const y = Math.random();
        const acc = Acc.fromVec(new Vec(x, y));
        console.assert(acc instanceof Acc, 'Acc from Vec creates Acc');
        console.assert(acc.x === x && acc.y === y, 'Acc has correct coordinates');
    },

    accIntegration() {
        const acc = new Acc(5, 15);
        const int = acc.int(0.2);
        const res = new Vel(1, 3);
        console.assert(int instanceof Vel, 'Acc integrated produces Vel');
        console.assert(int.eq(res), 'Acc is correctly integrated');
    },

    accSum() {
        const first = new Acc(1, 2);
        const second = new Acc(0, -1);
        const sum = first.plus(second);
        console.assert(sum.eq(new Vec(1, 1)), 'Acc can be summed');
        console.assert(sum instanceof Acc, 'Sum of Acc instance of Acc');
    },
};

