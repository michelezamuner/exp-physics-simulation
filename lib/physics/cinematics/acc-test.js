import {Vec} from '../../geometry/vec.js';
import {Acc} from './acc.js';
import {Vel} from './vel.js';

(function() {
	const x = Math.random();
	const y = Math.random();
	const acc = Acc.fromVec(new Vec(x, y));
	console.assert(acc instanceof Acc, 'Acc from Vec creates Acc');
	console.assert(acc.x === x && acc.y === y, 'Acc has correct coordinates');
	console.log('Test: Acc from Vec');
})();

(function() {
	const acc = new Acc(5, 15);
	const int = acc.int(0.2);
	const res = new Vel(1, 3);
	console.assert(int instanceof Vel, 'Acc integrated produces Vel');
	console.assert(int.eq(res), 'Acc is correctly integrated');
	console.log('Test: Acc integration');
})();

(function() {
	const first = new Acc(1, 2);
	const second = new Acc(0, -1);
	const sum = first.plus(second);
	console.assert(sum.eq(new Vec(1, 1)), 'Acc can be summed');
	console.assert(sum instanceof Acc, 'Sum of Acc instance of Acc');
	console.log('Test: Acc sum');
})();