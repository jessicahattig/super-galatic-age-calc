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
}