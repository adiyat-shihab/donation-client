export const Donation = ({ data }) => {
  const {
    id,
    picture,
    category,
    text_button_bg_color,
    title,
    card_bg_color,
    category_bg_color,
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
      }
    }
  };
  return (
    <>
      <div
        className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 cursor-pointer"
        onClick={() => handleData(data)}
      >
        <div className="relative m-0 overflow-hidden rounded-t-lg bg-transparent bg-clip-border text-gray-700 shadow-none">
          <img src={picture} alt="ui/ux review check" className={"w-[24rem]"} />
        </div>
        <div
          className={"p-6 rounded-b-lg h-[9.125rem]"}
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
