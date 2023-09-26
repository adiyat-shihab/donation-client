import { Link } from "react-router-dom";

export const DonationData = ({ data, idx }) => {
  const {
    id,
    picture,
    category,
    text_button_bg_color,
    title,
    card_bg_color,
    category_bg_color,
    price,
  } = data;
  console.log(idx);
  return (
    <>
      <div className="relative flex  flex-row md:h-[14.5rem] lg:h-[14.5rem] w-[25rem] h-[10rem] md:w-[46rem] lg:w-[48.175rem]  bg-white bg-clip-border text-gray-700 rounded-lg ">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden   bg-white bg-clip-border rounded-l-lg text-gray-700">
          <img
            src={picture}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div
          className="p-6 rounded-r-lg w-full flex items-center "
          style={{ backgroundColor: card_bg_color }}
        >
          <div>
            <div
              className={"w-fit py-[0.25rem] px-[0.625rem] rounded"}
              style={{
                backgroundColor: category_bg_color,
                color: text_button_bg_color,
              }}
            >
              {category}
            </div>
            <h4 className="block font-sans text-[1rem] md:text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {title}
            </h4>
            <p
              className={"font-semibold"}
              style={{
                color: text_button_bg_color,
              }}
            >
              {" "}
              ${price}
            </p>
            <Link
              to={`/donation/details/${encodeURIComponent(
                JSON.stringify(data),
              )}`}
            >
              <button
                className="py-[0.5625rem] px-4 rounded-lg mt-[0.25rem] md:mt-[1.25rem]"
                style={{
                  backgroundColor: text_button_bg_color,
                  color: "white",
                }}
                type="button"
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
