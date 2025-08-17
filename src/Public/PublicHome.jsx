import React from "react";
import Navbar from "../Components/Navbar";
import SocialIcons from "../Components/SocialIcons";

const PublicHome = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-[1000px] w-full">
        <div className="w-full flex flex-col items-center">
          <Navbar />
        </div>
        <main className="pt-20">
          <section className="grid grid-cols-12">
            <div className="col-span-1 flex flex-col gap-6 ps-4 text-xl text-main mt-40">
              <SocialIcons />
            </div>
            <header className="bg-red-400 col-span-8">salam</header>
            <div className="bg-red-500 col-span-3">2</div>
          </section>
          <section></section>
          <section></section>
        </main>
      </div>
    </div>
  );
};

export default PublicHome;
