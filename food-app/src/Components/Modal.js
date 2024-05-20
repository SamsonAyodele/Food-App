// import React, { useState } from "react";

const Modal = ({
  menu,
  title,
  description,
  price,
  addToCart,
  product_qty,
  closeModal,
  handleDecrement,
  handleIncrement,
}) => {
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="menu-cont">
          <div className="menu-img">
            <img src={menu} alt="menu"></img>
          </div>
          <div className="menu-title modal-title">{title}</div>
          <div className="menu-des modal-des">{description}</div>
        </div>
        <div className=" menu2-cont modal-cont">
          <div className="modal-price">{price}</div>
          <div className="modal-time">10-20min</div>
          <div className="modal-time">10 Pcs available</div>
        </div>
        <div className="modal-footer">
          <div className="modal-btn">
            <div className="btn remove-item" onClick={handleDecrement}>
              -
            </div>
            <div className="item-quantity">{product_qty}</div>
            <div className="btn add-item" onClick={handleIncrement}>
              +
            </div>
          </div>

          <div className="add-btn">
            <button className="modal-add-btn" onClick={addToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
