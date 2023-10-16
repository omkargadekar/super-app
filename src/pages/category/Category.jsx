import React, { useEffect, useState } from "react";
import Button from "../../components/Input/Button";
import "./category.css";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const [selectedCards, setSelectedCards] = useState([]);
  const categories = [
    { name: "action", img: "/action.png", bg: "#FF5209" },
    { name: "drama", img: "/drama.png", bg: "#D7A4FF" },
    { name: "romance", img: "/romance.png", bg: "#148A08" },
    { name: "thriller", img: "/thriller.png", bg: "#84C2FF" },
    { name: "western", img: "/western.png", bg: "#902500" },
    { name: "horror", img: "/horror.png", bg: "#7358FF" },
    { name: "fantasy", img: "/fantasy.png", bg: "#FF4ADE" },
    { name: "music", img: "/music.png", bg: "#E61E32" },
    { name: "fiction", img: "/fiction.png", bg: "#6CD061" },
  ];

  const navigate = useNavigate();

  useEffect(() => {
    // Load selected categories from local storage on component mount
    const storedCategories = JSON.parse(
      localStorage.getItem("selectedCategories")
    );
    if (storedCategories) {
      setSelectedCards(storedCategories);
    }
  }, []);

  const handleClick = (index) => {
    if (!selectedCards.includes(index)) {
      setSelectedCards([...selectedCards, index]);
    } else {
      setSelectedCards(selectedCards.filter((item) => item !== index));
    }

    localStorage.setItem("selectedCategories", JSON.stringify(selectedCards));
  };
  const handleNextPage = () => {
    if (selectedCards.length >= 3) {
      navigate("/dashboard");
    } else {
      alert("Minimum 3 categories are required.");
    }
  };
  return (
    <div className="categoryy">
      <div className="category">
        <div className="left">
          <div className="leftt">
            <h2>Super app</h2>
            <h1 className="category-h1">
              Choose your <br /> entertainment <br />
              category
            </h1>
            <div className="btnDiv">
              {categories.map((category, index) => (
                <Button
                  key={category.name}
                  children={category.name}
                  className={`categoryBtn ${
                    selectedCards.includes(index) ? "selectedBtn" : "hide"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {category.name}
                  <span>X</span>
                </Button>
              ))}
            </div>
            {selectedCards.length < 3 && (
              <p className="err">
                <img className="errimg" src="/error.png" alt="" />
                Minimum 3 categories required
              </p>
            )}
          </div>
        </div>
        <div className="rightt">
          <div className="container">
            <div className="right">
              {categories.map((category, index) => (
                <div
                  className={`cards ${
                    selectedCards.includes(index) ? "selected" : ""
                  }`}
                  style={{ backgroundColor: category.bg }}
                  key={category.name}
                  onClick={() => {
                    handleClick(index);
                  }}
                >
                  <div className="h4">
                    <h4>{category.name}</h4>
                  </div>
                  <img className="cardImg" src={category.img} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="nextBtn">
        <Button
          children={"Next Page"}
          className={"categoryNextBtn"}
          onClick={handleNextPage}
        />
      </div>
    </div>
  );
};

export default Category;
