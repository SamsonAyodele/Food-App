import React from "react";
import Nav from "../Components/Nav";
import { Link } from "react-router-dom";
import Soc1 from "../assets/Group.svg";
import Soc2 from "../assets/Layer 2.svg";
import Img1 from "../assets/head.svg";
import Menu from "../Components/Menu";
import Menu1 from "../assets/menu1.svg";
import Menu2 from "../assets/menu2.svg";
import Menu3 from "../assets/menu3.svg";
import Update from "../Components/Update";
import Footer from "../Components/Footer";
import Logo from "../Components/Logo";

const LandingPage = () => {
  const data = [
    {
      menu: Menu1,
      title: "Stir fry Pasta",
      description: "Stir fry pasta yada yada yada because of Sesan",
    },
    {
      menu: Menu2,
      title: "Meat Balls",
      description: "Stir fry pasta yada yada yada because of Sesan",
    },
    {
      menu: Menu3,
      title: "Burger Meal",
      description: "Stir fry pasta yada yada yada because of Sesan",
    },
  ];

  return (
    <div className="landingPage">
      <div className="navigation">
        <div className="navigation--left">
          <Logo />
        </div>
        <div className="navigation--right">
          <Link className="link"  to={"/"}>
            <Nav text={"Home"} />
          </Link>
          <Link className="link"  to="/login">
            <Nav text="LogIn" />
          </Link>
          <Link className="link" to={"/signup"}>
            {" "}
            <button>SignUp</button>
          </Link>
        </div>
      </div>

      <div className="heading">
        <div className="heading--text">
          <h1>
            Order food anytime, <br />
            anywhere
          </h1>
          <p>
            Browse from our list of specials to place your order and have food
            <br /> delivered to you in no time. Affordable, tasty and fast!
          </p>
          <span className="soc-img">
            <img src={Soc1} alt="soc"></img>
            <img src={Soc2} alt="soc"></img>
          </span>
        </div>
        <div className="heading--image">
          <img src={Img1} alt="img"></img>
        </div>
      </div>
      <Menu data={data} />
      <Update />
      <Footer />
    </div>
  );
};

export default LandingPage;
