import React from "react";
import Hero from "../../components/Hero";
import Layout from "../../components/Layout";
import TwoColumns from "../../components/TwoColumns";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <Hero />
      <TwoColumns />
    </Layout>
  );
}
