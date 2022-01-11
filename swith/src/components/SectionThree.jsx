import React from "react";
import Card from "./Card";
import SearchFilter from "./SearchFilter";
const SectionThree = () => {
  return (
    <div
      className="mx-auto rounded-lg my-4 flex justify-between align-middle flex-col"
      style={{ backgroundColor: "#e5e5e5", width: "90vw", minHeight: "100vh" }}
    >
      <SearchFilter />
      <h1 className="text-center">For Your Taste!!!</h1>
      <Card />
    </div>
  );
};

export default SectionThree;
