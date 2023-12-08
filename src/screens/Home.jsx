import React from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import CusCard from "../components/CusCard";
import Ccarousal from "../components/Ccarousal";

export default function Home() {
  return (
    <>
      <div>
        <Menu />
      </div>
      <div>
        <Ccarousal />
      </div>
      <div>
        <CusCard />
        <CusCard />
        <CusCard />
        <CusCard />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
