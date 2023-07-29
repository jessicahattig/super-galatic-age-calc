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

  test('Calculates years passed on Earth since a past birthday', () => {
    const ageCalc = new Calc(56);
    const yearsPassedOnEarth = ageCalc.yearsPassedOnEarth(43);
    expect(yearsPassedOnEarth).toBe(13);
  });

  test('Determines how many years have passed on each planet since a past birthday', () => {
  const ageCalc = new Calc(56);
  const yearsPassedOnPlanets = ageCalc.yearsPassedOnPlanets(43);
  const mercuryYears = parseFloat(yearsPassedOnPlanets.mercury.toFixed(0));
  const venusYears = parseFloat(yearsPassedOnPlanets.venus.toFixed(0));
  const marsYears = parseFloat(yearsPassedOnPlanets.mars.toFixed(0));
  const jupiterYears = parseFloat(yearsPassedOnPlanets.jupiter.toFixed(0));

    expect(mercuryYears).toBeCloseTo(54.16, 0);
    expect(venusYears).toBeCloseTo(20.96, 0);
    expect(marsYears).toBeCloseTo(6.91, 0);
    expect(jupiterYears).toBeCloseTo(1.09, 0);
  });

  test("Determines how many years have yet to pass until a future birthday", () => {
    const ageCalc = new Calc(56);
    const futureAge = 61;
    const yearsToFutureBirthday = ageCalc.yearsToFutureBirthday(futureAge);

    expect(yearsToFutureBirthday.earth).toBe(5);
    expect(yearsToFutureBirthday.mercury).toBeCloseTo(20.83, 1);
    expect(yearsToFutureBirthday.venus).toBeCloseTo(8.06, 1);
    expect(yearsToFutureBirthday.mars).toBeCloseTo(2.65, 1);
    expect(yearsToFutureBirthday.jupiter).toBeCloseTo(0.42, 1);
  });
});