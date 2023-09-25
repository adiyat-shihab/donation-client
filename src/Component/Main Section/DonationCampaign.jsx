import { Donation } from "./Donation.jsx";
import { createContext, useContext, useEffect, useState } from "react";
import { DonationPie } from "../DonationChart/DonationPie.jsx";
import { ResultError } from "./ResultError.jsx";

export const DonationCampaign = ({ mainData, searchData }) => {
  const filterData = [];

  if (searchData) {
    const data = mainData.filter(
      (data) => data.category.toLowerCase() === searchData,
    );
    filterData.push(data);
  }
  return (
    <>
      <div
        className={
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[1.5rem] justify-items-center md:px-4 lg:px-6 xl:px-[8.75rem] pb-[11.37rem]"
        }
      >
        {searchData ? (
          filterData[0].length === 0 ? (
            <ResultError />
          ) : (
            filterData[0].map((data) => <Donation data={data} key={data.id} />)
          )
        ) : (
          mainData.map((data) => <Donation data={data} key={data.id} />)
        )}
      </div>
    </>
  );
};
