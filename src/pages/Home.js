import React from "react";
import Calculator from "../components/Calculator";
import IMG from "../img/img3.svg";

function Home() {
  return (
    <div className="container">
      <div className="row my-5 d-flex align-items-center">
        <div className="col-md-6">
          <h1 className="mb-4" style={{ color: "#62CD11" }}>
            Macronutrients<span style={{ color: "#26BEFF" }}> Calculator</span>
          </h1>
          <p>
            <b>Calculate</b>{" "}
            <span className="text-secondary">
              your bodys BMR (Basal Metabolic Rate AKA how many calories your
              burn without working out)
            </span>
            .
          </p>
          <p>
            <b>See</b>{" "}
            <span className="text-secondary">
              how many calories you should eat per day.
            </span>
          </p>
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid"
            style={{ height: "auto", width: "100%" }}
            src={IMG}
            alt=""
          />
        </div>
        <div className="col-md-12 mt-4">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default Home;
