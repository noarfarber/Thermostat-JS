'use strict';

class Thermostat{
  #defaultTemp = 20;
  #minimumTemp = 10;
  #defaultMaxTemp = 25;
  constructor() {
    this.currentTemp = this.#defaultTemp;
    this.savingMode = true
    this.maxTemp = this.#defaultMaxTemp;
  }
  up(temp) {
    this.currentTemp += temp
    if(this.currentTemp >= this.maxTemp && this.savingMode == true) {
      this.currentTemp = 25 
    } else if(this.currentTemp >= this.maxTemp && this.savingMode == false) { 
      this.currentTemp = 32
    }
  }

  down(temp) {
    this.currentTemp -= temp
    if(this.currentTemp <= this.#minimumTemp){
      this.currentTemp = 10
    }  
  }

  powerSaving() {
    if(this.savingMode == true){
      this.savingMode = false  
      this.maxTemp = 32
    }
    else if(this.savingMode == false){
      this.savingMode = true 
      this.maxTemp = 25
    }
  }
  reset() {
    this.currentTemp = this.#defaultTemp
  }

  usage() {
    if(this.currentTemp < 18) {
      return "low-usage"
    } else if(this.currentTemp <= 25) {
      return "medium-usage"
    } else {
      return "high-usage"
    }
  }
}
