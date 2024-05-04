import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReorderIcon from "@mui/icons-material/Reorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const MenuItemData = [
  {
    title: "Dashboard",
    icon: <HomeIcon />,
    link: "/dashboard",
  },
  {
    title: "Your profile",
    icon: <AccountCircleIcon />,
    link: "/home",
  },
  {
    title: "Orders",
    icon: <ReorderIcon />,
    link: "/order",
    number: 6,
  },
  {
    title: "Your cart",
    icon: <ShoppingCartIcon />,
    link: "/cart",
    number: 6,
  },
];
