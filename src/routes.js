import React from "react";
// Admin Imports
import MainDashboard from "views/admin/default";
import Product from "views/admin/products";
import Category from "views/admin/category";
import Sales from "views/admin/sales";
// Auth Imports
import SignIn from "views/auth/SignIn";
// Icon Imports
import {
  MdHome,
  MdDashboard,
  MdLock,
  MdViewList,
  MdCategory 
} from "react-icons/md";

const routes = [
  {
    name: "Panel de Control",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Productos",
    layout: "/admin",
    path: "productos",
    icon: <MdDashboard className="h-6 w-6" />,
    component: <Product />,
    secondary: true,
  },
  {
    name: "Categorias",
    layout: "/admin",
    icon: <MdCategory className="h-6 w-6" />,
    path: "categoria",
    component: <Category />,
  },
  {
    name: "Ventas",
    layout: "/admin",
    icon: <MdViewList className="h-6 w-6" />,
    path: "ventas",
    component: <Sales />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
];
export default routes;
