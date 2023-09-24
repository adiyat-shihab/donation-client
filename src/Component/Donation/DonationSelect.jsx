import { DonationData } from "./DonationData.jsx";
import { useState } from "react";

export const DonationSelect = () => {
  const getData = JSON.parse(localStorage.getItem("donation"));
  console.log(getData);
  const [slice, setSlice] = useState(true);
  const handleSlice = () => {
    setSlice(false);
  };

  return (
    <>
      <div
        className={
          "mt-[5.19rem] grid grid-cols-2 justify-items-center gap-6 px-[8.75rem]"
        }
      >
        {slice
          ? getData.slice(0, 4).map((data) => <DonationData data={data} />)
          : getData.map((data) => <DonationData data={data} />)}
      </div>
      <div className={" text-center mb-[9.63rem] mt-[2.5rem]"}>
        {slice ? (
          <button
            className={"bg-[#009444] w-[6.875rem] h-12 text-white rounded-lg "}
            onClick={handleSlice}
          >
            Show All
          </button>
        ) : (
          " "
        )}
      </div>
    </>
  );
};
