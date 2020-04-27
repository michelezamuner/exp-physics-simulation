import {Vec} from '../../../geometry/geometry.js';

export class Force extends Vec {
	/**
	 * @param {Vec} vec
	 * @return {Force}
	 */
	static fromVec(vec) {
		return new Force(vec.x, vec.y);
	}
}