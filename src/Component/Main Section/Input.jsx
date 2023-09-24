export const Input = () => {
  return (
    <>
      <div>
        <label htmlFor="hs-trailing-button-add-on" className="sr-only">
          Label
        </label>
        <div className="flex rounded-md shadow-sm">
          <input
            type="text"
            id="hs-trailing-button-add-on"
            name="hs-trailing-button-add-on"
            className="p-4 w-[29.375rem] block rounded-l-lg border border-[#DEDEDE]   outline-none"
          />
          <button
            type="button"
            className=" bg-[#FF444A] rounded-r-lg w-[6.875rem] text-white text-base font-semibold"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};
