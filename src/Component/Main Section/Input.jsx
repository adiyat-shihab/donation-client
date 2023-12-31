import { useState } from "react";

export const Input = ({ handleInput }) => {
  const [searchData, serSearchData] = useState("");
  const handleTest = (data) => {
    return serSearchData(data.target.value.toLowerCase());
  };
  return (
    <>
      <div>
        <label htmlFor="hs-trailing-button-add-on" className="sr-only">
          Label
        </label>
        <div className="flex rounded-md shadow-sm">
          <input
            type="text"
            id="hs-trailing-button-add-on"
            name="search"
            className="p-4 lg:w-[36rem] w-[17rem] md:h-16 lg:h-16 h-[3rem] md:w-[29.375rem] block rounded-l-lg border border-[#DEDEDE]   outline-none"
            onChange={handleTest}
          />
          <button
            type="button"
            className=" bg-[#FF444A] w-[5rem] rounded-r-lg md:w-[6.875rem] text-white text-base font-semibold"
            onClick={() => handleInput(searchData)}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};
