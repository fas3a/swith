import React from "react";

const SearchFilter = () => {
  return (
    <div className="p-10">
      <div className="flex mb-3">
        <p className="font-bold mr-5">Categories</p>
        <p className="font-bold">Men's Clothing</p>
      </div>
      <div className="flex">
        <p>Price:</p>
        <input type="text" placeholder="min" className="" />
        <input type="text" placeholder="max" className="" />
        <input type="checkbox" name="Popular ranges" id="" />
      </div>
      <div className="flex">
        <input type="checkbox" name="sale" id="" />
        <input type="checkbox" name="Spend and Save" id="" />
        <input type="checkbox" name="Free Shipping" id="" />
        <input type="checkbox" name="Rating" id="" />
      </div>
      <div className="flex">
        <p>
          <span>Sortby |</span>
          <span>Best Match |</span>
          <span>Orders |</span>
          <span>Newest |</span>
          <span>Price |</span>
        </p>
      </div>
    </div>
  );
};

export default SearchFilter;
