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
  MdCategory,
  MdAnalytics,
  MdCheckBox,
  MdOutlineEmojiPeople,
  MdOutlineAllInbox,
  MdOutlineAddShoppingCart 
} from "react-icons/md";
import Report from "views/admin/reports";
import Supplier from "views/admin/suppliers";
import Client from "views/admin/clients";
import Almacen from "views/admin/almacen";
import Purchase from "views/admin/purchase";

const routes = [
  {
    name: "Panel de Control",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Almacenes",
    layout: "/admin",
    path: "almacenes",
    icon: <MdOutlineAllInbox className="h-6 w-6" />,
    component: <Almacen />,
    secondary: true,
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
    name: "Compras",
    layout: "/admin",
    icon: <MdOutlineAddShoppingCart className="h-6 w-6" />,
    path: "compras",
    component: <Purchase />,
  },
  {
    name: "Reportes",
    layout: "/admin",
    icon: <MdAnalytics className="h-6 w-6" />,
    path: "reportes",
    component: <Report />,
  },
  {
    name: "Proveedores",
    layout: "/admin",
    icon: <MdCheckBox className="h-6 w-6" />,
    path: "proveedores",
    component: <Supplier />,
  },
  {
    name: "Clientes",
    layout: "/admin",
    icon: <MdOutlineEmojiPeople className="h-6 w-6" />,
    path: "clientes",
    component: <Client />,
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
