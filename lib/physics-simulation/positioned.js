import {Pos} from '../physics/cinematics/pos.js';

/**
 * @interface
 */
export class Positioned {
	/**
	 * @return {Pos}
	 */
	get pos() {
		throw 'Not implemented';
	}
}