import { DonationData } from "./DonationData.jsx";
import { useState } from "react";

export const DonationSelect = () => {
  const getData = JSON.parse(localStorage.getItem("donation"));
  const [slice, setSlice] = useState(false);
  const handleSlice = () => {
    setSlice(true);
  };

  return (
    <>
      <div
        className={
          "mt-[5.19rem] grid grid-cols-2 justify-items-center gap-6 px-[8.75rem]"
        }
      >
        {slice
          ? getData && getData.map((data) => <DonationData data={data} />)
          : getData &&
            getData.slice(0, 4).map((data) => <DonationData data={data} />)}
        {!getData && <h1>No data Found</h1>}
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
          : " "}
      </div>
    </>
  );
};
