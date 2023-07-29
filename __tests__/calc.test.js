import { Calc } from '../src/js/calc.js'; 

describe("Super Galactic Age Calculator Tests", () => {

test('Calculates age in Mercury years', () => {
  const ageCalc = new Calc(30);
  const mercuryAge = ageCalc.calculateMercuryAge();
  expect(mercuryAge).toBeCloseTo(124.60, 1);
  });

test('Calculates age in Venus years', () => {
  const ageCalc = new Calc(30);
  const venusAge = ageCalc.calculateVenusAge();
  expect(venusAge).toBeCloseTo(48.75, 1);
  });

  test('Calculates age in Mars years', () => {
    const ageCalc = new Calc(30);
    const marsAge = ageCalc.calculateMarsAge();
    expect(marsAge).toBeCloseTo(15.95, 1);
  });

  test('Calculates age in Jupiter years', () => {
    const ageCalc = new Calc(30);
    const jupiterAge = ageCalc.calculateJupiterAge();
    expect(jupiterAge).toBeCloseTo(2.53, 1);
  });
});