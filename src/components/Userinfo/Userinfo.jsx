import React from "react";
import "./userInfo.css";

const Userinfo = ({ selectedCards }) => {
  const formDataa = JSON.parse(localStorage.getItem("formData"));
  const { name, userName, email } = formDataa;

  const categoryDataa = JSON.parse(localStorage.getItem("selectedCategories"));

  const categories = [
    "action",
    "drama",
    "romance",
    "thriller",
    "western",
    "horror",
    "fantasy",
    "music",
    "fiction",
  ];

  const selectedCategoryNames = categoryDataa.map((index) => categories[index]);
  console.log(selectedCategoryNames);
  return (
    <div className="userInfo flex">
      <div className="userImg">
        <img src="/userImg.png" className="userImage" alt="user image" />
      </div>
      <div className="savedinfo flex">
        <div className="flex user-data">
          <h3>{name}</h3>
          <h3>{email}</h3>
          <h1 className="userInfoName">{userName}</h1>
        </div>
        <div className="flex cat-data">
          {selectedCategoryNames.map((categoryName, index) => (
            <p key={index}>{categoryName}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Userinfo;
