import React from "react";
import "../../styles/style.css";
import { Body } from "../components/Body";
import Footer from "../components/common/Footer";
import { JssProvider, SheetsRegistry } from "react-jss";
import MainLayout from "../components/layout/MainLayout";

const index = () => {
  const sheets = new SheetsRegistry();
  return (
    <JssProvider registry={sheets}>
      <MainLayout
        title={"Seach Job | HireSide by WebHR"}
        description={
          "Find a jobs thats fits your skills, and get hired. HireSide is the best Job Paltform."
        }
      >
        <Body />
        <Footer />
      </MainLayout>
    </JssProvider>
  );
};

export default index;
