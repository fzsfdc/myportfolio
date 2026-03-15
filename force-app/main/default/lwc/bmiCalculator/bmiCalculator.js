import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {

  height = '';
  weight = '';

  /**
   * 
   * @param {*} event 
   * 
   * Optionally:
   * this[name]=value;
   */
  inputHandler(event) {
    const {name, value} = event.target;

    if(name==="height") {
      this.height = value;
    }
    if(name==="weight") {
      this.weight = value;
    }  
  }

  /**
   * 
   */
  submitHandler(event) {
    event.preventDefault();
    console.log('height: ', this.height);
    console.log('weight: ', this.weight);
    /** const bmi = this.weight / ((this.height/100) * (this.height/100)); */
  }

  calculateBmi() {
    let height = Number(this.height)/100;
    let bmi = Number(this.weight) / (height * height);
    bmi = bmi.toFixed(2);
    console.log('bmi value: ', bmi);

  }
}