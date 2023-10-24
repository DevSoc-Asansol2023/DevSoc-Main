import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";

const Login = () => {
  const [email, setemail] = useState("");
  const [pswd, setpswd] = useState("");
  const [userData, setuserData] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        pswd
      );
      const user = userCredential.user;

      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleAuth = async (e) => {
    try {
      const userCreds = await signInWithPopup(auth, provider);
      navigate("/");
      setuserData(userCreds.user);
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(userCreds.user));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-screen h-screen bg-[#0D1117] flex flex-col justify-center items-center gap-5">
        <h1 className="text-yellow-300 text-4xl font-extrabold">
          Sign In to DevSoc here!
        </h1>
        <div className="w-full max-w-xs">
          <form
            className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-slate-500 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-slate-500 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="***********"
                value={pswd}
                onChange={(e) => setpswd(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-[#0D1117] font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Log in
              </button>
              <Link
                className="inline-block align-baseline font-semibold text-sm text-yellow-500 hover:text-yellow-600"
                to="/signup"
              >
                Don't have an account?
              </Link>
            </div>
          </form>
        </div>
        <button
          type="button"
          onClick={handleGoogleAuth}
          className="text-[#0D1117] bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2"
        >
          <svg
            className="w-4 h-4 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 19"
          >
            <path
              fillRule="evenodd"
              d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
              clipRule="evenodd"
            />
          </svg>
          Sign in with Google
        </button>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 Acme Corp. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Login;

// bg-[#4285F4]
// hover:bg-[#4285F4]/90
