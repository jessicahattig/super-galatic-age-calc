import { Calc } from '../src/js/calc.js'; 

describe("Super Galactic Age Calculator Tests", () => {

test('Calculates age in Mercery years', () => {
  const ageCalc = new GalaticAgeCalc(30);
  const mercuryAge = ageCalc.GalaticAgeCalc();
  expect(mercuryAge).toBeClostTo(125);
  });
});