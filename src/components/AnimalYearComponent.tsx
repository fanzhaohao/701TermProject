// AnimalYearComponent.tsx
import React, { useState } from "react";

const AnimalYearComponent: React.FC = () => {
  // define year state
  const [year, setYear] = useState("");
  // define activeIndex state
  const [activeIndex, setActiveIndex] = useState(null);
  let yearNumber = 0;
  // animal object
  const animal: { [index: number]: string } = {
    0: "Monkey",
    1: "Rooster",
    2: "Dog",
    3: "Pig",
    4: "Rat",
    5: "Ox",
    6: "Tiger",
    7: "Rabbit",
    8: "Dragon",
    9: "Snake",
    10: "Horse",
    11: "Goat",
  };
  // animal image object
  const animalImage: { [index: number]: string } = {
    0: "https://img.gejiba.com/images/1c0d4cdd0caf5e38ef60512759553b6b.jpg",
    1: "https://img.gejiba.com/images/fb197dd064f0ceb9aed639db47338b8f.jpg",
    2: "https://img.gejiba.com/images/848d940a505539ebf4d9b77fa3fd3534.jpg",
    3: "https://img.gejiba.com/images/108e692824a33d60c1b3508d710e96cb.jpg",
    4: "https://img.gejiba.com/images/2d87a1c31a7c92484d898fecab6fa2fb.jpg",
    5: "https://img.gejiba.com/images/517356e24eef517d276676cb2216b108.jpg",
    6: "https://img.gejiba.com/images/3b256fa55a5da6a025ed1a7b7ae2dbc3.jpg",
    7: "https://img.gejiba.com/images/48fe57eb91e9545f39ac554fedbc2b3d.jpg",
    8: "https://img.gejiba.com/images/b063a9e81621b2617b988e506e1cfc36.jpg",
    9: "https://img.gejiba.com/images/ed1241553acd59dc787c0a1379d6fb15.jpg",
    10: "https://img.gejiba.com/images/a6da6c62f3b0afdd0774de9abcdad2a3.jpg",
    11: "https://img.gejiba.com/images/34c869fdd5be3ef42cd9af7f4d549c60.jpg",
  };
  // handle input change
  const handleInputChange = (e) => {
    const { value } = e.target;
    // year update
    setYear(value);
    // update activeIndex
    setActiveIndex(value.length === 4 ? value.length - 1 : value.length);
  };

  // clear input
  const clearInput = () => {
    // update year
    setYear("");
    // update activeIndex
    setActiveIndex(null);
  };

  yearNumber = parseInt(year);

  return (
    <div className="wrapper">
      {/* Title */}
      <div className="title">Please Enter A Four Digit Year Below</div>
      <div className="container">
        {/* Animal Year */}
        <div className="code-box">
          {/* iterate four input */}
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`code-item ${index === activeIndex ? "active" : ""}`}
            >
              {year[index]}
            </div>
          ))}
          {/* Hide input boxes by styles */}
          <input
            type="text"
            className="code-input"
            value={year}
            maxLength={4}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {year.length === 4 && (
        <div className="animal-box">
          {/* year % 12 */}

          <div className="animal-name">{animal[yearNumber % 12]}</div>
          {/* use year get image */}
          <img
            className="animal-img"
            src={animalImage[yearNumber % 12]}
            alt={animal[yearNumber % 12]}
          />
        </div>
      )}
      {/* reset button */}
      <div className="clear-button" onClick={clearInput}>
        RESET
      </div>
    </div>
  );
};

export default AnimalYearComponent;
