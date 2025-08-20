import React from "react";
import SocialIcons from "../Components/SocialIcons";
import Header from "../Components/Header";
import BlobClip from "../Assets/Header-Blob/BlobClip";

const Main = () => {
  return (
    <main className="mt-38.5">
      <section className="grid grid-cols-12">
        <div className="md:col-span-2 lg:col-span-1 md:pe-10  bg-red-500">
          <SocialIcons />
        </div>
        <div className="md:col-span-5 lg:col-span-6 md:translate-x-[-15px] lg:translate-x-0 pt-7.5 lg:ps-20 bg-red-400">
          <Header />
        </div>
        <div className="md:col-span-5 lg:col-span-5">
          <BlobClip />
        </div>
      </section>
    </main>
  );
};

export default Main;
