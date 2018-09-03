import {Positioned} from './positioned.js';
import {PositionedMixin} from './positioned-mixin.js';
import {Pos} from '../physics/cinematics/pos.js';

(function() {
	class Test extends Positioned {

	}

	const test = new Test();

	let posNotValid = false;
	try {
		test.pos;
	} catch (e) {
		console.assert(e === 'Not implemented', 'Positioned pos throws correct exception');
		posNotValid = true;
	}
	console.log('Test: Positioned is interface');
})();

(function() {
	class Test extends PositionedMixin(Positioned) {
		constructor(pos) {
			super();
			this._pos = pos;
		}
	};

	const test = new Test(new Pos(1, 2));
	console.assert(test.pos.eq(new Pos(1, 2)), 'Positioned has correct coordinates');
	console.log('Test: Positioned mixin');
})();