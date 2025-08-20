import React from "react";
import SocialIcons from "../Components/SocialIcons";
import Header from "../Components/Header";
import BlobClip from "../Assets/Header-Blob/BlobClip";

const Main = () => {
  return (
    <main className="mt-20 sm:mt-38.5">
      <section>
        <div className="grid grid-cols-12">
          <div className="col-span-1 sm:col-span-1 md:col-span-2 lg:col-span-1 sm:pe-10">
            <SocialIcons />
          </div>
          <div className="sm:col-span-6 md:col-span-5 lg:col-span-6 md:translate-x-[-15px] lg:translate-x-0 pt-7.5 lg:ps-20 max-sm:hidden">
            <Header />
          </div>
          <div className=" flex items-center justify-center col-span-10 sm:col-span-5 md:col-span-5 lg:col-span-5 ms-15 sm:ms-0">
            <BlobClip />
          </div>
        </div>
        <div className="max-xs:block sm:hidden p-5">
          <Header />
        </div>
      </section>
    </main>
  );
};

export default Main;
