import { Banner } from "./Banner.jsx";
import { DonationCampaign } from "./DonationCampaign.jsx";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

export const MainSection = () => {
  const loader = useLoaderData();
  const [searchData, setSearchData] = useState("");

  const handleInput = (data) => {
    return setSearchData(data);
  };
  return (
    <>
      <Banner handleInput={handleInput} />
      <div className={"mb-[8.65rem]"}></div>
      <DonationCampaign mainData={loader} searchData={searchData} />
    </>
  );
};
