import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./advice.css";

const Advice = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    getAdvice();
  }, [advice]);

  const getAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((data) => {
        console.log(data.data.slip.advice);
        const { advice } = data.data.slip;
        setAdvice(advice);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="app">
      <div className="card">
        <blockquote class="blockquote text-center">
          <h1 class="mb-0">{advice}</h1>
        </blockquote>

        <button className="btn btn-dark" onClick={(event) => getAdvice(event)}>
          Click me to Get a Advice
        </button>
      </div>
    </div>
  );
};

export default Advice;
