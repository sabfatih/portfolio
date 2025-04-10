import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <section>
      <picture className="relative">
        <div className="relative my-12 flex mx-auto size-42 border-2 border-[#1a1a1a] dark:border-white rounded-full m-auto overflow-hidden z-10">
          <Image
            src={"/bt-2724.png"}
            fill
            alt="BT-2724 from Titanfall 2"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 size-42 blur-lg bg-[#111111] dark:bg-[#d4d4d4] m-auto rounded-full"></div>
      </picture>

      <article className="text-center">
        <h2 className="text-3xl font-bold text-[#3f6212] dark:text-[#a3e635]">
          Yo! Fatih's here
        </h2>
      </article>

      {/* <img src="/bt-2724.png" alt="BT-2724 from Titanfall 2" /> */}
    </section>
  );
};

export default Home;
