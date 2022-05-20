import * as React from "react";
import Layout from "../components/layout";
import girls from "../images/cat1.jpg";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <img src={girls} alt="Girls" style={{ width: "100%" }} />
    </Layout>
  );
};

export default IndexPage;
