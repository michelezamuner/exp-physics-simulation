import * as PosTest from './pos-test.js';
import * as VelTest from './vel-test.js';
import * as AccTest from './acc-test.js';

export let tests = Object.assign({}, PosTest.tests, VelTest.tests, AccTest.tests);
