import {Vec} from './lib/geo/geo.js';
import {Pos, Vel, Acc} from './lib/cin/cin.js';
import {Force} from './lib/force/force.js';

console.log(Pos.fromVec(new Vec(1, 2)));
console.log(Vel.fromVec(new Vec(0, 3)));
console.log(Acc.fromVec(new Vec(1, 1)));
console.log(Force.fromVec(new Vec(1, 4)));