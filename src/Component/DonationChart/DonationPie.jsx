import { PieChart } from "react-minimal-pie-chart";

export const DonationPie = () => {
  const data = [
    { title: "Total Donation", value: 50, color: "#FF444A", label: "Label 1" },
    { title: "Your Donation", value: 15, color: "#00C49F", label: "Label 2" },
  ];

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
    </>
  );
};
