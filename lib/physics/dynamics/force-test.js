import {Force} from './force.js';
import {Vec} from '../../geometry/vec.js';

export let tests = {
    forceFromVec() {
        const x = Math.random();
        const y = Math.random();
        const force = Force.fromVec(new Vec(x, y));
        console.assert(force instanceof Force, 'Force.fromVec() creates instance of Force');
        console.assert(force.x === x && force.y === y, 'Force has correct coordinates');
    },
};
