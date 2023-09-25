import { Link } from "react-router-dom";

export const MobileNavigation = () => {
  return (
    <>
      <div className=" absolute top-12 right-0 w-[14rem] " id="navbar-default">
        <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <Link to={"/"}>
            {" "}
            <li>
              <div className="block py-2 pl-3 pr-4 text-white text-black roundeddark:text-white ">
                Home
              </div>
              <hr />
            </li>
          </Link>
          <Link to={"/donation"}>
            <li>
              <div className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0  dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">
                Donation
              </div>
            </li>
            <hr />
          </Link>
          <Link to={"/statistics"}>
            {" "}
            <li>
              <div className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-white lg:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">
                Statistics
              </div>
              <hr />
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};
