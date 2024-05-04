import React from "react";
import SideBar from "../Components/sideBar";
import Pics from "../assets/40w 1.png";

let user = JSON.parse(sessionStorage.getItem("user"));

const Dashboard = () => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  let timeOfDay;
  if (currentHour < 12) {
    timeOfDay = "morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "evening";
  }
  return (
    <div className="dashboard">
      <div className="dash-nav-bar">
        <SideBar />
      </div>
      <div className="dash-content">
        <div className="dash-header">
          <h1>{`Good ${timeOfDay}, ${user?.name}!`}</h1>
          <p>What delicious meal are you craving today?</p>
        </div>
        <div className="dash-pics">
          <img src={Pics} alt="pics" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
