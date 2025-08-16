import React from "react";
import Navbar from "../Components/Navbar";

const PublicHome = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-[1000px] w-full">
        <div className="w-full flex flex-col items-center">
          <Navbar />
        </div>
        <main>  
          <section>
            <div></div>
            <header></header>
            <div></div>
          </section>
          <section></section>
          <section></section>
        </main>
      </div>
    </div>
  );
};

export default PublicHome;
