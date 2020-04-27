import * as CinematicsTest from './cinematics/test.js';
import * as DynamicsTest from './dynamics/test.js';

export let tests = Object.assign({}, CinematicsTest.tests, DynamicsTest.tests);
