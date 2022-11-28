import React from "react";

const MainLayout = ({ children, title, description, image }) => {
  return (
    <>
      <title>{title ? title : "HireSide by WebHR"}</title>
      <meta charSet="utf-8" />
      <meta name="author" content="HireSide" />
      <meta name="theme-color" content="#fff" />
      <meta name="custom1" content="hireside_www" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="viewport" content="width=device-width" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="description" content={description ? description : ""} />
      <meta
        property="og:title"
        content={title ? title : "HireSide by WebHR"}
      ></meta>
      <meta
        property="og:description"
        content={description ? description : "HireSide by WebHR"}
      ></meta>
      <meta
        property="og:image"
        content={image ? image : "https://cdn.hireside.com/cdn/images/logo.png"}
      ></meta>
      <meta
        name="copyright"
        content="© 2022 - HireSide Inc. Developed by Verge Inc."
      />
      {children}
    </>
  );
};

export default MainLayout;
