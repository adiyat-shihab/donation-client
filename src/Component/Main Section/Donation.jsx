export const Donation = ({ data }) => {
  const {
    picture,
    category,
    text_button_bg_color,
    title,
    card_bg_color,
    category_bg_color,
  } = data;
  console.log(data);
  return (
    <>
      <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700  ">
        <div className="relative m-0 overflow-hidden rounded-t-lg bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img src={picture} alt="ui/ux review check" />
        </div>
        <div
          className={"p-6 rounded-b-lg"}
          style={{ backgroundColor: card_bg_color }}
        >
          <div
            className={"w-fit py-[0.25rem] px-[0.625rem] rounded"}
            style={{
              backgroundColor: category_bg_color,
              color: text_button_bg_color,
            }}
          >
            {category}
          </div>
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
        </div>
      </div>
    </>
  );
};
