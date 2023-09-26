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
      <div
        className={
          "mt-[5.19rem] px-4 xl:px-[8.75rem] md:px-8 lg:px-10 relative"
        }
      >
        <img
          src={picture}
          alt=""
          className={
            " w-[25rem]  md:w-[44rem] lg:w-[69rem]  xl:w-[101.5rem] xl:h-[56.75rem]"
          }
        />
        <div
          className={
            " px-4 py-4 bottom-[21.5rem] w-[24.5rem] md:w-[44rem] absolute md:bottom-[14.8rem] lg:bottom-[13.2rem] xl:bottom-[13.3rem] bg-[#0b0b0b80]  lg:w-[59rem]   xl:w-[72.5rem] 2xl:w-[101.5rem] md:px-[2.31rem] md:py-[2.31rem] md:h-[8.125rem] "
          }
        >
          <button
            className={"md:px-[1.62rem] px-2 py-2 md:py-4 text-white rounded "}
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
