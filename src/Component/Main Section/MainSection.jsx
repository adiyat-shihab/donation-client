import { Input } from "./Input.jsx";
import { Banner } from "./Banner.jsx";
import { DonationCampaign } from "./DonationCampaign.jsx";
import { useLoaderData } from "react-router-dom";

export const MainSection = () => {
  const loader = useLoaderData();
  return (
    <>
      <Banner />
      <div className={"mb-[8.65rem]"}></div>
      <DonationCampaign mainData={loader} />
    </>
  );
};
