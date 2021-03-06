import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import { Helmet } from "react-helmet-async";

import "../layouts/index.css";

import favicon from "../assets/images/favicon.ico";
import favicon_16 from "../assets/images/favicon-16x16.png";
import favicon_32 from "../assets/images/favicon-32x32.png";
import favicon_apple from "../assets/images/favicon-apple.png";

import Home from "./home";

function App() {
  const { language } = useI18next();
  return (
    <>
      <Helmet
        htmlAttributes={{
          language,
        }}
      >
        <title>iPortfolio</title>
        <link rel="icon" href={favicon} type="image/x-icon" />
        <link rel="apple-touch-icon" sizes="180x180" href={favicon_apple} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon_32} />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon_16} />
      </Helmet>
      <Home />
    </>
  );
}

export default App;
