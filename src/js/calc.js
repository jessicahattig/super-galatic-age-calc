export class Calc {
  constructor(earthAge) {
    this.earthAge = earthAge;
    this.earthYear = 365.25;
    this.planetYearRatios = {
      mercury: 0.2408467,
      venus: 0.61519726,
      mars: 1.8808158,
      jupiter: 11.862615,
    };
  };

  calculatePlanetAge(planet) {
    const planetRatio = this.planetYearRatios[planet];
    return this.earthAge / planetRatio;
  }

  calculateMercuryAge() {
    return this.calculatePlanetAge('mercury');
  }

  calculateVenusAge() {
    return this.calculatePlanetAge('venus');
  }

  calculateMarsAge() {
    return this.calculatePlanetAge('mars');
  }

  calculateJupiterAge() {
    return this.calculatePlanetAge('jupiter');
  }

  yearsPassedOnEarth(ageAtPastBirthday) {
    return this.earthAge - ageAtPastBirthday;
  }

  yearsPassedOnPlanets(ageAtPastBirthday) {
    const earthYearsPassed = this.yearsPassedOnEarth(ageAtPastBirthday);

    const yearsPassedOnPlanets = {};
    for (const planet in this.planetYearRatios) {
      const planetRatio = this.planetYearRatios[planet];
      const planetAgeAtPastBirthday = (this.earthAge - earthYearsPassed) / planetRatio;
      const planetAgeAtCurrentAge = this.earthAge / planetRatio;
      const yearsPassedOnPlanet = planetAgeAtCurrentAge - planetAgeAtPastBirthday;
      yearsPassedOnPlanets[planet] = parseFloat(yearsPassedOnPlanet.toFixed(2));
    }

    return yearsPassedOnPlanets;
  }
}