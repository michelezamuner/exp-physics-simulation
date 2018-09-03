import {Vec} from '../../geometry/vec.js';

/**
 * The position of a body in the space.
 */
export class Pos extends Vec {
	/**
	 * @param {Vec} vec
	 * @return {Pos}
	 */
	static fromVec(vec) {
		return new Pos(vec.x, vec.y);
	}

	/**
	 * @override
	 * @param {Pos} pos
	 * @return {Pos}
	 */
	plus(pos) {
		return Pos.fromVec(super.plus(pos));
	}

	/**
	 * @override
	 * @param {Pos} pos
	 * @return {Pos}
	 */
	minus(pos) {
		return Pos.fromVec(super.minus(pos));
	}
};