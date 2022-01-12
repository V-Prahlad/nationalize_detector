import React, { useState } from "react";
import axios from "axios";

function Home() {
  const [input, setInput] = useState([]);
  const [output, setOutput] = useState([]);

  //Event
  const getValue = (e) => {
    setInput(e.target.value);
  };

  //Axios

  const searchName = () => {
    axios.get(`https://api.nationalize.io/?name=${input}`).then((data) => {
      console.log(data.data.country);
      setOutput(data.data.country);
    });
  };

  return (
    <div className="home">
      <div className="home__form">
        <h1>Nationality Predictor from Name </h1>
        <label htmlFor="">Enter Your Name</label>
        <input onChange={getValue} type="text" />
        <button onClick={searchName}>Submit</button>
      </div>
      <div className="home__data">
        <div>
          {output.map((item) => {
            console.log(item.country_id, item.probability);
            return (
              <div>
                <span className="data__country">
                  Country Id - {item.country_id}{" "}
                </span>

                <span className="data__probability">
                  Probability - {item.probability}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
