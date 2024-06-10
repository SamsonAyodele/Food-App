import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import Logo from "../Components/Logo";
import { MenuItemData } from "./MenuItemData";
import { Link } from "react-router-dom";

const sideBar = () => {
  return (
    <div className="side-bar">
      <Sidebar>
        <div className="nav-logo-text">
          {
            <Link className="link" to={"/"}>
              <Logo />
            </Link>
          }
        </div>
        <Menu>
          <MenuItem>
            <ul className="sidebar-list">
              {MenuItemData.map((value, key) => {
                return (
                  <li
                    className="list"
                    id={window.location.pathname === value.link ? "active" : ""}
                    key={key}
                    onClick={() => {
                      window.location.pathname = value.link;
                    }}
                  >
                    <div id="icon">{value.icon}</div>
                    <div id="title">
                      <div className="flex-item">{value.title}</div>
                      <span className="title">{value.number}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </MenuItem>
          {/* <MenuItem> Dashboard </MenuItem>
          <MenuItem> Your profile </MenuItem>
          <MenuItem> Order </MenuItem>
          <MenuItem> Your cart </MenuItem> */}
        </Menu>
      </Sidebar>
    </div>
  );
};

export default sideBar;
