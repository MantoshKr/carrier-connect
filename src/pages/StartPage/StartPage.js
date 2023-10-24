import React from "react";
import Welcome from "../../components/Start/Welcome";
import ExploreArticles from "../../components/Start/ExploreArticles";
import ConnectPeople from "../../components/Start/ConnectPeople";
import BottomSection from "../../components/Start/BottomSection";
import Footer from "../../components/Start/Footer";

const StartPage = () => {
  return (
    <div>
      <Welcome />
      <ExploreArticles />
      <ConnectPeople />
      <BottomSection />
      <Footer />
    </div>
  );
};

export default StartPage;
