import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { data } from "autoprefixer";
import { toast, Toaster } from "react-hot-toast";

export const DonationDetails = () => {
  const { serializedData } = useParams();
  const getdata = decodeURIComponent(serializedData);
  const data = JSON.parse(getdata);
  console.log(data);
  const {
    id,
    picture,
    category,
    text_button_bg_color,
    title,
    card_bg_color,
    category_bg_color,
    description,
    price,
  } = data;
  const handleData = (data) => {
    const mainData = [];
    const mainDataSee = JSON.parse(localStorage.getItem("donation"));
    if (!mainDataSee) {
      mainData.push(data);
      localStorage.setItem("donation", JSON.stringify(mainData));
    } else {
      const exist = mainDataSee.find((data) => data.id === id);
      if (!exist) {
        mainData.push(...mainDataSee, data);
        localStorage.setItem("donation", JSON.stringify(mainData));
        toast.success("Thanks For Your Donation");
      } else {
        toast.success("You are already donate ");
      }
    }
  };
  return (
    <>
      <div className={"mt-[5.19rem] px-[8.75rem] relative"}>
        <img src={picture} alt="" className={"w-[101.5rem] h-[56.75rem]"} />
        <div
          className={
            " absolute bottom-[11.75rem] bg-[#0b0b0b80] w-[101.5rem] px-[2.31rem] py-[2.31rem] h-[8.125rem] "
          }
        >
          <button
            className={"px-[1.62rem] py-4 text-white rounded "}
            style={{ backgroundColor: text_button_bg_color }}
            onClick={() => handleData(data)}
          >{`Donate $${Math.floor(price)}`}</button>
        </div>
        <h1 className={"mt-[3.5rem] mb-[1.5rem] text-[2.5rem] font-bold"}>
          {title}
        </h1>
        <h1 className={"mb-[7.62rem]"}>{description}</h1>
      </div>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
};
