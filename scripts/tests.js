import * as GeometryTest from '../lib/geometry/test.js';
import * as PhysicsTest from '../lib/physics/test.js';
import * as PhysicsSimulationTest from '../lib/physics-simulation/test.js';

function test(suite) {
    Object.keys(suite).forEach(testCase => {
        Object.keys(suite[testCase]).forEach(test => {
            console.log('Test: ' + test);
            suite[testCase][test]();
        })
    })
}

test(GeometryTest);
test(PhysicsTest);
test(PhysicsSimulationTest);
