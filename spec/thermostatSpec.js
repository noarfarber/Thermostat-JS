'use strict';

describe("Thermostat", () => {
  let thermostat 
  beforeEach(()=> {
    thermostat = new Thermostat()
  })

  it('should start at 20 degrees', () => {
    expect(thermostat.currentTemp).toEqual(20)
  })

  it('should increase the temperature when using up', () => {
    thermostat.up(5)
    expect(thermostat.currentTemp).toEqual(25)
  })

  it('should decrease the temperature when using down', () => {
    thermostat.down(2)
    expect(thermostat.currentTemp).toEqual(18)
  })

  it('should have a minimum temperature of 10 degrees', () => {
    thermostat.down(11)
    expect(thermostat.currentTemp).toEqual(10)
  })

  it('should change the mode when power saving mode is clicked', () => {
    thermostat.powerSaving()
    expect(thermostat.savingMode).toBeFalsy()
  })

  it('should have a maximum temperature of 25 if saving mode is on', () => {
    thermostat.up(6)
    expect(thermostat.currentTemp).toEqual(thermostat.maxTemp)
  })

  it('should have a maximum temperature of 32 if saving mode is off', () => {
    thermostat.powerSaving()
    thermostat.up(13)
    expect(thermostat.currentTemp).toEqual(thermostat.maxTemp)
  })

  it('should be able to set the temperature to 20', () => {
    thermostat.reset()
    expect(thermostat.currentTemp).toEqual(20)
  })

  it('should give us the usage level', () => {
    expect(thermostat.usage()).toEqual("medium-usage") 
  })

  it('should give us the usage level', () => {
    thermostat.powerSaving()
    thermostat.up(6)
    expect(thermostat.usage()).toEqual("high-usage") 
  })

  it('should give us the usage level', () => {
    thermostat.down(3)
    expect(thermostat.usage()).toEqual("low-usage") 
  })
})
