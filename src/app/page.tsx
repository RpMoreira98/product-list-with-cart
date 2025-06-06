"use client";

import { CardComponents } from "@/components/cardComponents/cardComponents";

const Home = () => {
  return (
    <div className="container p-6 lg:p-20 mx-auto">
      <h1 className="text-4xl font-extrabold text-[#260F08] mb-6">Deserts</h1>
      <div className="grid grid-cols-1 lg:grid-cols-70-30 gap-8 place-items-start">
        <CardComponents />
      </div>
    </div>
  );
};

export default Home;
