import React from "react";
import "./dashboard.css";
import Button from "../../components/Input/Button";
import Userinfo from "../../components/Userinfo/Userinfo";
import Weather from "../../components/Weather/Weather";
import Notes from "../../components/Notes/Notes";
import Timer from "../../components/Timer/Timer";
import News from "../../components/News/News";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const browseHandler = () => {
    navigate("/entertainment");
  };
  return (
    <div className="dashboard flex">
      <div className="dashboard-main flex">
        <div className="main-left flex">
          <div className="left-up flex">
            <div className="up-left flex">
              <div className="left-upper flex">
                <Userinfo />
              </div>
              <div className="left-lower flex">
                <Weather />
              </div>
            </div>
            <div className="up-right flex">
              <Notes />
            </div>
          </div>
          <div className="left-down flex">
            <Timer />
          </div>
        </div>
        <div className="main-right flex">
          <News />
        </div>
      </div>
      <div className="browseBtn flex">
        <Button
          children={"Browse"}
          className="categoryNextBtn"
          onClick={browseHandler}
        />
      </div>
    </div>
  );
};

export default Dashboard;
