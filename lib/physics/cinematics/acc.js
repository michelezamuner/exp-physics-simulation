import {Vec} from '../../geometry/vec.js';
import {Vel} from './vel.js';

export class Acc extends Vec {
	/**
	 * @param {Vec} vec
	 * @return {Acc}
	 */
	static fromVec(vec) {
		return new Acc(vec.x, vec.y);
	}

	/**
	 * Integrate this acceleration over the given time interval, and
	 * return the resulting velocity.
	 *
	 * @param {double} dt
	 * @return {Vel}
	 */
	int(dt) {
		return Vel.fromVec(this.times(dt));
	}

	/**
	 * @override
	 * @param {Acc} acc
	 * @return {Acc}
	 */
	plus(acc) {
		return Acc.fromVec(super.plus(acc));
	}
}