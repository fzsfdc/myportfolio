import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {

  height = '';
  weight = '';
  bmiValue= '';
  result='';

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
    this.calculateBmi();
  }

  /**
   * 
   */
  calculateBmi() {
    let height = Number(this.height)/100;
    let bmi = Number(this.weight) / (height * height);
    this.bmiValue = Number(bmi.toFixed(2));
    // console.log('bmi value: ', bmi);

    if(this.bmiValue < 18.5) {
      this.result = "Underweight";
    } else if(this.bmiValue >= 18.5 && this.bmiValue < 25) {
      this.result = "Healthy";
    } else if(this.bmiValue >= 25 && this.bmiValue < 30) {
      this.result = "Overweight";
    } else {
      this.result = "Obese";
    } 

    console.log('result: ', this.result);
    console.log('bmi value: ', this.bmiValue);
  }

  /**
   * 
   */
  recalculate() {
    this.height = '';
    this.weight = '';
    this.bmiValue= '';
    this.result='';
  }
}