import React from "react";
import SideBar from "../Components/sideBar";
import Pics from "../assets/40w 1.png";
import { DashboardData } from "../Components/DashboardData";

let user = JSON.parse(sessionStorage.getItem("user"));

const Dashboard = () => {
  const padTo = (digit, currency) => {
    let strDigit = digit.toString();
    let newDigit = strDigit.padStart(strDigit.length + 1, currency);
    return newDigit;
  };

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
        <div className="dash-content-header">
          <div className="dash-header">
            <h1>{`Good ${timeOfDay}, ${user?.name}!`}</h1>
            <p>What delicious meal are you craving today?</p>
          </div>
          <div className="dash-pics">
            <img src={Pics} alt="pics" />
          </div>
        </div>
        <div className="menu-data">
          <ul>
            {DashboardData.map((val, key) => {
              return (
                <li className="menu-list" key={key}>
                  <div className="main-container">
                    <div className="menu-cont">
                      <div>
                        <img src={val.menu} alt="menu"></img>
                      </div>
                      <div className="menu-title">{val.title}</div>
                      <div className="menu-des">{val.description}</div>
                    </div>
                    <div className="menu2-cont">
                      <div className="menu-price">{padTo(val.price, "$")}</div>
                      <div className="add-to-cart">{val.addToCart}</div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
