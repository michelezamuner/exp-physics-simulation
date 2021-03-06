import {Vec} from '../../geometry/vec.js';
import {Pos} from './pos.js';

export class Vel extends Vec {
    /**
     * @param {Vec} vec
     * @return {Vel}
     */
    static fromVec(vec) {
        return new Vel(vec.x, vec.y);
    }

    /**
     * Integrate this velocity over the given time interval, and return the
     * resulting displacement.
     *
     * @param {number} dt
     * @return {Pos}
     */
    int(dt) {
        return Pos.fromVec(this.times(dt));
    }

    /**
     * @override
     * @param {Vel} vel
     * @return {Vel}
     */
    plus(vel) {
        return Vel.fromVec(super.plus(vel));
    }
}
