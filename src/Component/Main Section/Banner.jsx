import { Input } from "./Input.jsx";

export const Banner = () => {
  return (
    <>
      <div
        className={
          " bg-[#fffffff2] bg-blend-overlay h-[90vh]  bg-no-repeat bg-cover  flex justify-center items-center"
        }
        style={{
          backgroundImage: `url(
          ${"https://i.ibb.co/fXTmxss/Rectangle-4281.png"})`,
        }}
      >
        <div>
          <h1 className={"text-5xl font-bold mb-10"}>
            I Grow By Helping People In Need
          </h1>
          <div className={"flex justify-center"}>
            <Input />
          </div>
        </div>
      </div>
    </>
  );
};
