import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import Features from "./Features/Features";
import CourseInfo from "./CourseInfo/CourseInfo";
import Enthusiast from "./Enthusiast/Enthusiast";
import AboutInstructor from "./AboutSection/AboutInstructor";
import StartBtn from "./BottomBtn/BottomStartBtn";
import Footer from "./Footer/Footer";
import HeroSection from "./HeroSection/HeroSection";

function LandingPage() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout title={`${siteConfig.title}`} description={siteConfig.tagline}>
      <HeroSection />
      <main style={{ marginBottom: "10px" }}>
        <Features />
        <CourseInfo />
        <Enthusiast />
        <AboutInstructor />
        <StartBtn />
      </main>
      {/* <Footer /> */}
    </Layout>
  );
}

export default LandingPage;
