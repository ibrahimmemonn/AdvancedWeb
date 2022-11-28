import React from "react";
import { Body } from "../components/Body";
import "../../styles/style.css";
import MainLayout from "../components/layout/MainLayout";
import { JssProvider, SheetsRegistry } from "react-jss";

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
      </MainLayout>
    </JssProvider>
  );
};

export default index;
