import { DonationData } from "./DonationData.jsx";
import { useState } from "react";
import { BlankData } from "./BlankData.jsx";

export const DonationSelect = () => {
  const getData = JSON.parse(localStorage.getItem("donation"));
  const [slice, setSlice] = useState(false);
  const handleSlice = () => {
    setSlice(true);
  };

  return (
    <>
      <div
        className={`mt-[5.19rem] ${
          getData?.length > 0 && "grid grid-cols-1  2xl:grid-cols-2"
        } justify-items-center gap-6 md:px-4 lg:px-[8.75rem]`}
      >
        {slice
          ? getData && getData.map((data) => <DonationData data={data} />)
          : getData &&
            getData.slice(0, 4).map((data) => <DonationData data={data} />)}
        {!getData && <BlankData />}
      </div>
      <div className={" text-center mb-[9.63rem] mt-[2.5rem]"}>
        {getData && getData.length > 4
          ? slice || (
              <button
                className={
                  "bg-[#009444] w-[6.875rem] h-12 text-white rounded-lg "
                }
                onClick={handleSlice}
              >
                Show All
              </button>
            )
          : ""}
      </div>
    </>
  );
};
