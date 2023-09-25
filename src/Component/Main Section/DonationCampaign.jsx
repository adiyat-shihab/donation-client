import { Donation } from "./Donation.jsx";

export const DonationCampaign = ({ mainData, searchData }) => {
  const filterData = [];

  if (searchData) {
    const data = mainData.filter(
      (data) => data.category.toLowerCase() === searchData,
    );
    filterData.push(data);
  }
  console.log(filterData);

  return (
    <>
      <div
        className={
          "grid grid-cols-4 gap-[1.5rem] justify-items-center px-[8.75rem] pb-[11.37rem]"
        }
      >
        {searchData
          ? filterData[0].map((data) => <Donation data={data} key={data.id} />)
          : mainData.map((data) => <Donation data={data} key={data.id} />)}
      </div>
    </>
  );
};
