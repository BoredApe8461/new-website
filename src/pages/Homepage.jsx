import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import CommunityDriven from "../components/CommunityDriven";
import InnovativeTool from "../components/InnovativeTools";
import Innovators from "../components/Innovators";
import PolkadotOffer from "../components/PolkadotOffer";
const Homepage = () => {
  return (
    <>
      <main id="main">
        <Banner />
        <PolkadotOffer />
        <CommunityDriven />
        <InnovativeTool />
        <Innovators />
        <Footer />
      </main>
    </>
  );
};

export default Homepage;
