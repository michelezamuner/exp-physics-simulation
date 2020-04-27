import {Vec} from '../../geometry/vec.js';
import {Pos} from './pos.js';
import {Vel} from './vel.js';

export let tests = {
    velFromVec() {
        const x = Math.random();
        const y = Math.random();
        const vel = Vel.fromVec(new Vec(x, y));
        console.assert(vel instanceof Vel, 'Vel from Vec creates Vel');
        console.assert(vel.x === x && vel.y === y, 'Vel has correct coordinates');
    },

    velIntegration() {
        const vel = new Vel(2, 1);
        const int = vel.int(0.5);
        const res = new Pos(1, 0.5);
        console.assert(int instanceof Pos, 'Vel integrated produces Pos');
        console.assert(int.eq(res), 'Vel is correctly integrated');
    },

    velPlus() {
        const first = new Vel(1, 3);
        const second = new Vel(-2, 1);
        const sum = first.plus(second);
        console.assert(sum.eq(new Vec(-1, 4)), 'Vel can be summed');
        console.assert(sum instanceof Vel, 'Sum of Vel instance of Vel')
    },
};
