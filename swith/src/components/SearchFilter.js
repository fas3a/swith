import React from "react";

const SearchFilter = () => {
  return (
    <div className="p-10">
      <div className="flex mb-3">
        <p className="font-bold mr-5">Categories</p>
        <p className="font-bold">Men's Clothing</p>
      </div>
      <div className="flex mb-3">
        <p className="mr-1">Price:</p>
        <input type="text" placeholder="min" className="mr-2 w-20" />
        <input type="text" placeholder="max" className="mr-2 w-20" />
        <label htmlFor="popular">popular ranges</label>
        <input type="checkbox" name="Popular ranges" id="" />
      </div>
      <div className="flex mb-3">
        <p className="flex align-middle items-center">
          <label htmlFor="sale" className="mr-1">
            sale
          </label>
          <input type="checkbox" name="sale" id="sale" className="mr-2" />

          <label htmlFor="spendandsave" className="mr-1">
            Spend and save
          </label>
          <input
            type="checkbox"
            name="Spend and save"
            id="spend andsave"
            className="mr-2"
          />

          <label htmlFor="sale" className="mr-1">
            sale
          </label>
          <input type="checkbox" name="sale" id="" className="mr-2" />

          <label htmlFor="rating" className="mr-1">
            rating
          </label>
          <input type="checkbox" name="Rating" id="rating" />
        </p>
      </div>
      <div className="flex">
        <p className="font-bold">
          <span className="mr-3">Sortby |</span>
          <span className="mr-3">Best Match |</span>
          <span className="mr-3">Orders |</span>
          <span className="mr-3">Newest |</span>
          <span>Price |</span>
        </p>
      </div>
    </div>
  );
};

export default SearchFilter;
