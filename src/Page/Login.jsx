import { DesignLogin } from "./DesignLogin.jsx";
import { Link, useNavigate } from "react-router-dom";
import "animate.css";
import { useContext } from "react";
import { authContext } from "./AuthProvider.jsx";
import Swal from "sweetalert2";

export const Login = () => {
  const { SignIn } = useContext(authContext);
  const navigation = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const target = e.target;
    await SignIn(target.email.value, target.password.value)
      .then(() => {
        Swal.fire("Login Success", "", "success");
        navigation("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      {" "}
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 animate__animated animate__fadeIn rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full animate__fadeIn">
            <DesignLogin />
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900 uppercase">
                  Login
                </h1>
                <p>Enter your information to register</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label className="text-xs font-semibold px-1">Email</label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                        name="email"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                        name="password"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <input
                      className="block   mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700
                        cursor-pointer w-full text-white rounded-lg px-3 py-3 font-semibold"
                      value={"Login"}
                      type="submit"
                    />

                    <div className={"pt-4"}>
                      <strong className={"mt-4"}>
                        Not an user?{" "}
                        <Link className={"text-blue-400"} to={"/register"}>
                          Register
                        </Link>
                      </strong>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
