import { Calc } from '../src/js/calc.js'; 

describe("Super Galactic Age Calculator Tests", () => {

test('Calculates age in Mercury years', () => {
  const ageCalc = new Calc(30);
  const mercuryAge = ageCalc.calculateMercuryAge();
  expect(mercuryAge).toBeCloseTo(124.60, 1);
  });
});