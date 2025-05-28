"use client";

import { CardComponents } from "@/components/cardComponents/cardComponents";

const Home = () => {
  return (
    <div className="container p-6 lg:p-20 mx-auto">
      <h1 className="text-4xl font-bold text-rose-950 mb-6">Deserts</h1>
      <div>
        <CardComponents />
      </div>
    </div>
  );
};

export default Home;
