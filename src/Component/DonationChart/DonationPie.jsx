import { PieChart } from "react-minimal-pie-chart";
import { useLoaderData } from "react-router-dom";

export const DonationPie = () => {
  const loader = useLoaderData();
  const getData = JSON.parse(localStorage.getItem("donation"));
  const getDataNull = getData ? getData.length : 0;
  const result = (getDataNull / loader.length) * 100;

  const remaining = 100 - result;
  const data = [
    {
      title: "Total Donation",
      value: parseFloat(remaining.toFixed(1)),
      color: "#FF444A",
      label: `${remaining.toFixed(1)}%`,
    },
    {
      title: "Your Donation",
      value: parseFloat(result.toFixed(1)),
      color: "#00C49F",
      label: `${result.toFixed(1)}%`,
    },
  ];

  console.log(result.toFixed(1));
  console.log(remaining);
  return (
    <>
      <div className={"flex justify-center pt-[6.44rem]"}>
        <PieChart
          data={data}
          className={"w-[31.25rem] h-[31.25rem] text-white"}
          label={({ dataEntry }) => dataEntry.label}
          labelPosition={65}
          labelStyle={{
            fontSize: "5px",
            fontWeight: "bold",
            fill: "white",
          }}
        />
      </div>
      <div
        className={
          "text-center mt-[4.31rem] flex justify-center items-center gap-14"
        }
      >
        <div className={"flex items-center gap-4"}>
          <h1>Your Donation</h1>
          <div className={"w-[6.25rem] h-[0.75rem] bg-[#00C49F] "}></div>
        </div>
        <div className={"flex items-center gap-4"}>
          <h1>Total Donation</h1>
          <div className={"w-[6.25rem] h-[0.75rem] bg-[#FF444A]"}></div>
        </div>
      </div>
    </>
  );
};
