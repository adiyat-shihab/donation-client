import { Donation } from "./Donation.jsx";

export const DonationCampaign = ({ mainData }) => {
  console.log(mainData);
  return (
    <>
      <div
        className={
          "grid grid-cols-4 gap-[1.5rem] justify-items-center px-[8.75rem] pb-[11.37rem] "
        }
      >
        {mainData.map((data) => (
          <Donation data={data} key={data.id} />
        ))}
      </div>
    </>
  );
};
