import React from "react";
import ClothCard from "../ClothCard/ClothCard";

async function RecentClothes() {
  const data = await fetch("http://localhost:3030/recent-clothes");
  const clothes = await data.json();

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 pl-4">
        Top Selling Clothes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {clothes.map((cloth) => (
          <ClothCard cloth={cloth} key={cloth._id} />
        ))}
      </div>
    </div>
  );
}

export default RecentClothes;
