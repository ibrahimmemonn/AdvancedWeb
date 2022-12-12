import React from "react";
import App from "../UIComponent";

import Banner from "./home/Banner";
import DistrictList from "./home/DistrictList";
import Header from "./home/Header";
import Infography from "./home/Infography";
import Products from "./home/Products";

export const Body = () => {
  return (
    <>
      <Header />
      <Banner />
      <Infography />
      <Products />
      {/* <App /> */}

      <DistrictList />
    </>
  );
};
