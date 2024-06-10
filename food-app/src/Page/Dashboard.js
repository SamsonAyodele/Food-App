import React, { useState } from "react";
import SideBar from "../Components/sideBar";
import Pics from "../assets/40w 1.png";
import { DashboardData } from "../Components/DashboardData";
import Modal from "../Components/Modal";

let user = JSON.parse(sessionStorage.getItem("user"));

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState();
  const [cart, setCart] = useState([]);

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

  function showModal(id) {
    let myData = DashboardData.find((data) => data.id === id);
    // console.log(myData);
    setModalData(myData);
    setModal((prev) => !prev);
  }

  // Function to add or update a product in the cart
  const addToCart = () => {
    // Check if the product already exists in the cart
//     const existingProductIndex = cart.find((item) => item.id === id);
// let lineItems = []
//     if (existingProductIndex) {
//       // If the product exists, update its quantity
      
//       // let newQty = cart[existingProductIndex].product_qty += product.product_qty;
//       console.log('item already in cart')
//       return cart
//     } else {
//       // If the product is not in the cart, add it
//       lineItems.push(modalData)
//       setCart((prev) => [...prev,...lineItems]);
//       console.log(cart,'cart')
      
//     }
setCart((prevCart) => {
  
  // Check if the item is already in the cart
  console.log('Before:', cart);
  const existingItem = prevCart.find(cartItem => cartItem.id === modalData.id);
  if (existingItem) {
    // Update quantity if item exists
    return prevCart.map(cartItem => 
      cartItem.id === modalData.id ? { ...cartItem, quantity: cartItem.quantity + modal.quantity } : cartItem
    );
  } else {
    // Add new item to the cart
    return [...prevCart, modalData];
  }
});
console.log('After:', cart);
  };

  // Function to handle decrementing product quantity
  const handleDecrement = (id) => {
    // Update cart state
    setModalData((prev)=> ({...prev, product_qty: Math.max(1, prev.product_qty - 1)}))
    // const updatedCart = cart.map((item) =>
    //   item.id === id ? { ...item, product_qty: Math.max(0, item.product_qty - 1) } : item
    // );
    // console.log("Updated Cart (Decrement):", updatedCart);
    // setCart(updatedCart);
  };

  // Function to handle incrementing product quantity
  const handleIncrement = (id) => {
    // Update cart state
    const updatedCart = cart.map((item) => (item.id === id ? { ...item, product_qty: item.product_qty + 1 } : item));
    console.log("Updated Cart (Increment):", updatedCart);
    setCart(updatedCart);
  };

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
            {DashboardData.map((val, index) => {
              return (
                <li className="menu-list" key={index} onClick={() => showModal(val.id)}>
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
      {/* {modal ? <p>{modalData?.title}</p> : null} */}
      {modal ? (
        <Modal
          menu={modalData.menu}
          title={modalData.title}
          description={modalData.description}
          price={padTo(modalData.price, "$")}
          addToCart={addToCart}
          handleDecrement={() => handleDecrement(modalData.id)}
          handleIncrement={() => handleIncrement(modalData.id)}
          product_qty={modalData.product_qty}
          closeModal={() => setModal(false)}
        />
      ) : null}
    </div>
  );
};

export default Dashboard;
