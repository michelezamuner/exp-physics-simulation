import {Vec} from './vec.js';

export let tests = {
    vecCoordinates() {
        const x = Math.random();
        const y = Math.random();
        const vec = new Vec(x, y);
        console.assert(vec.x === x && vec.y === y, 'Vec has correct coordinates');
    },

    vecEquals() {
        const x = Math.random();
        const y = Math.random();
        const vec = new Vec(x, y);
        console.assert(vec.eq(new Vec(x, y)), 'Vec equals to Vec');
        console.assert(!new Vec(1, 2).eq(new Vec(0, 0)), 'Vec not equals to Vec');
    },

    vecModule() {
        console.assert(new Vec(3, 4).mod === 5, 'Vec has correct module');
        console.assert(new Vec(5, 12).mod === 13, 'Vec has correct module');
    },

    vecVersor() {
        const firstVec = new Vec(6, 8);
        const firstVer = new Vec(3 / 5, 4 / 5);
        console.assert(firstVec.ver().eq(firstVer), 'Vec has correct versor');

        const secondVec = new Vec(15, 36);
        const secondVer = new Vec(5 / 13, 12 / 13);
        console.assert(secondVec.ver().eq(secondVer), 'Vec has correct versor');
    },

    vecOver() {
        const vec = new Vec(2, 4);
        const res = new Vec(1, 2);
        console.assert(vec.over(2).eq(res), 'Vec can be divided by scalar');
    },

    vecTimes() {
        const vec = new Vec(2, 5);
        const res = new Vec(6, 15);
        console.assert(vec.times(3).eq(res), 'Vec can be multiplied by scalar');
    },

    vecPlus() {
        const first = new Vec(1, 2);
        const second = new Vec(2, 4);
        const res = new Vec(3, 6);
        console.assert(first.plus(second).eq(res), 'Vecs can be summed');
    },

    vecMinus() {
        const first = new Vec(0, 0);
        const second = new Vec(1, 2);
        const res = new Vec(-1, -2);
        console.assert(first.minus(second).eq(res), 'Vecs can be subtracted');
    },
};
