import React from "react";
import Banner from "./home/Banner";
import DistrictList from "./home/DistrictList";
import Header from "./home/Header";
import Infography from "./home/Infography";

export const Body = () => {
  return (
    <>
      <Header />
      <Banner />
      <Infography />
      <DistrictList />
    </>
  );
};
