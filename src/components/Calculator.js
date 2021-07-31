import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Select from "react-select";

const options = [
  { value: "139.7", label: "4ft 7in" },
  { value: "142.24", label: "4ft 8in" },
  { value: "144.78", label: "4ft 9in" },
  { value: "147.32", label: "4ft 10in" },
  { value: "149.86", label: "4ft 11in" },
  { value: "152.4", label: "5ft 0in" },
  { value: "154.94", label: "5ft 1in" },
  { value: "157.48", label: "5ft 2in" },
  { value: "160.02", label: "5ft 3in" },
  { value: "162.56", label: "5ft 4in" },
  { value: "165.1", label: "5ft 5in" },
  { value: "167.64", label: "5ft 6in" },
  { value: "170.18", label: "5ft 7in" },
  { value: "172.72", label: "5ft 8in" },
  { value: "175.26", label: "5ft 9in" },
  { value: "177.8", label: "5ft 10in" },
  { value: "180.34", label: "5ft 11in" },
  { value: "182.88", label: "6ft 0in" },
  { value: "185.42", label: "6ft 1in" },
  { value: "187.96", label: "6ft 2in" },
  { value: "190.5", label: "6ft 3in" },
  { value: "193.04", label: "6ft 4in" },
  { value: "195.58", label: "6ft 5in" },
  { value: "198.12", label: "6ft 6in" },
  { value: "200.66", label: "6ft 7in" },
  { value: "203.2", label: "6ft 8in" },
  { value: "205.74", label: "6ft 9in" },
  { value: "208.28", label: "6ft 10in" },
  { value: "210.82", label: "6ft 11in" },
  { value: "213.36", label: "7ft 0in" },
];

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
      genderVal: 88.362,
      selectedGender: "male",
      age: 0,
      weight: 0,
      calorieIntake: 0,
      proteinIntake: 0,
      carbIntake: 0,
      fatIntake: 0,
    };

    this.calculateWeight = this.calculateWeight.bind(this);
    this.handleHeight = this.handleHeight.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleWeight = this.handleWeight.bind(this);
    this.handleGender = this.handleGender.bind(this);
    this.clearValues = this.clearValues.bind(this);
  }

  clearValues() {
    this.setState({
      height: 0,
      genderVal: 88.362,
      selectedGender: "male",
      age: 0,
      weight: 0,
      calorieIntake: 0,
      proteinIntake: 0,
      carbIntake: 0,
      fatIntake: 0,
    });
  }

  handleHeight(e) {
    this.setState({ height: parseInt(e.value) }, () => {
      console.log(this.state.height);
    });
  }

  handleAge(e) {
    this.setState({ age: e.target.value }, () => console.log(this.state.age));
  }

  handleWeight(e) {
    this.setState({ weight: e.target.value }, () =>
      console.log(this.state.weight)
    );
  }

  handleGender(e) {
    this.setState(
      {
        selectedGender: e.target.value,
      },
      () => {
        if (this.state.selectedGender === "male") {
          this.setState({ genderVal: 88.362 }, () =>
            console.log(this.state.selectedGender)
          );
        }

        if (this.state.selectedGender === "female") {
          this.setState({ genderVal: 447.593 }, () =>
            console.log(this.state.selectedGender)
          );
        }
      }
    );
  }

  calculateWeight(e) {
    if (this.state.selectedGender === "male") {
      let calories = Math.floor(
        13.397 * this.state.weight * 0.453 +
          4.799 * this.state.height -
          5.677 * this.state.age +
          88.362
      );
      this.setState({ calorieIntake: calories }, () => {
        let proteins = Math.floor(0.4 * this.state.calorieIntake);
        let carbs = Math.floor(0.35 * this.state.calorieIntake);
        let fats = Math.floor(0.25 * this.state.calorieIntake);

        this.setState({
          proteinIntake: proteins,
          carbIntake: carbs,
          fatIntake: fats,
        });
      });
    }

    if (this.state.selectedGender === "female") {
      let calories = Math.floor(
        9.247 * this.state.weight * 0.453 +
          3.098 * this.state.height -
          4.33 * this.state.age +
          447.593
      );
      this.setState({ calorieIntake: calories }, () => {
        let proteins = this.state.calorieIntake * 0.4;
        let carbs = 0.35 * this.state.calorieIntake;
        let fats = 0.25 * this.state.calorieIntake;

        this.setState({
          proteinIntake: proteins,
          carbIntake: carbs,
          fatIntake: fats,
        });
      });
    }
  }

  render() {
    return (
      <Form>
        <div className="container-fluid">
          <div className="row py-5">
            <div className="col-12 col-md-4 py-2 border">
              <FormGroup>
                <Label for="height">Height</Label>
                <Select
                  id="height"
                  name="height"
                  options={options}
                  onChange={this.handleHeight}
                  defaultValue={{ label: "Select Height", value: 0 }}
                />
              </FormGroup>
            </div>
            <div className="col-12 col-md-4 py-2 border">
              <FormGroup>
                <Label for="age">Age</Label>
                <Input
                  value={this.state.age}
                  onChange={this.handleAge}
                  type="text"
                  name="age"
                  id="age"
                  maxLength="2"
                />
              </FormGroup>
            </div>
            <div className="col-12 col-md-4 py-2 border">
              <FormGroup>
                <Label for="weight">Weight</Label>
                <Input
                  value={this.state.weight}
                  onChange={this.handleWeight}
                  type="weight"
                  name="weight"
                  id="weight"
                  placeholder="lbs"
                  maxLength="3"
                />
              </FormGroup>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center py-2 border">
              <FormGroup tag="fieldset">
                <legend>Gender</legend>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="male"
                      value="male"
                      checked={this.state.selectedGender === "male"}
                      onChange={this.handleGender}
                    />
                    Male
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="female"
                      value="female"
                      checked={this.state.selectedGender === "female"}
                      onChange={this.handleGender}
                    />
                    Female
                  </Label>
                </FormGroup>
              </FormGroup>
            </div>
            <div className="col-12 col-md-4 py-2 border">
              <FormGroup>
                <Label className="text-secondary">
                  (Based on Revised Harris-Benedict Equation)
                </Label>
                <Button
                  className="btn btn-block btn-success mt-2"
                  onClick={this.calculateWeight}
                >
                  Calculate
                </Button>
                <Button
                  className="btn btn-block btn-secondary mt-2"
                  onClick={this.clearValues}
                >
                  Clear
                </Button>
              </FormGroup>
            </div>
            <div className="col-12 col-md-4 py-2 border">
              <FormGroup>
                <h4>Calories: {this.state.calorieIntake}</h4>
                <h4>Proteins: {this.state.proteinIntake}</h4>
                <h4>Carbs: {this.state.carbIntake}</h4>
                <h4>Fats: {this.state.fatIntake}</h4>
              </FormGroup>
            </div>
          </div>
        </div>
      </Form>
    );
  }
}

export default Calculator;
