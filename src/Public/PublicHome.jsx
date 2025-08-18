import React from "react";
import Navbar from "../Components/Navbar";
import SocialIcons from "../Components/SocialIcons";
import Header from "../Components/Header";

const PublicHome = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-[1000px] w-full">
        <div className="w-full flex flex-col items-center">
          <Navbar />
        </div>
        <main className="pt-20">
          <section className="grid grid-cols-12">
            <div className="col-span-1">
              <SocialIcons />
            </div>
            <div className="col-span-8 pt-9 ps-20"><Header /></div>
            <div className="col-span-3">2</div>
          </section>
          <section></section>
          <section></section>
        </main>
      </div>
    </div>
  );
};

export default PublicHome;
