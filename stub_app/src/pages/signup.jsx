import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/reducer/userSlice";
export default function SignUp({ setForSignin }) {
  const dispatch = useDispatch();
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/auth/signup", formdata).then((response) => {
      dispatch(loginSuccess(response.data));
    });
  };
  return (
    <>
      <div className="h-[100vh] overflow-hidden bg-slate-950">
        <div className="flex  gap-5 justify-between h-full overflow-x-hidden overflow-y-scroll pl-[100px] bg-slate-950">
          <div className=" flex flex-grow-1 flex-shrink-1 w-[400px] flex-col py-5 text-center">
            <div className="w-[400px]  font-bold inline uppercase mb-0 text-4xl text-slate-100">
              Student Hub
            </div>
            <div className="w-[400px]  font-semibold text-base  mb-8 mt-2 text-slate-200 ">
              Welcome to the Student Hub
            </div>
            <div
              name="SignUp"
              className="w-full max-w-[400px] p-6 bg-slate-900 rounded-2xl shadow-lg flex flex-col gap-3 text-slate-200"
            >
              <div>
                <h1 className=" text-3xl py-8 font-normal  ">SignUp</h1>
                <form className="flex flex-col p-3 gap-3">
                  <div className=" rounded-2xl border border-solid bg-transparent outline-none p-4 flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    <input
                      value={formdata.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      name="name"
                      className="w-full text-base outline-none border-none bg-transparent"
                    ></input>
                  </div>
                  <div className=" rounded-2xl border border-solid bg-transparent outline-none p-4 flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>

                    <input
                      value={formdata.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      name="email"
                      className="w-full text-base outline-none border-none bg-transparent"
                    ></input>
                  </div>
                  <div className=" rounded-2xl border border-solid bg-transparent outline-none p-4  flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>

                    <input
                      value={formdata.password}
                      onChange={handleInputChange}
                      placeholder="Password"
                      name="password"
                      className="w-full text-base outline-none border-none bg-transparent"
                    ></input>
                  </div>
                </form>
                <button
                  onClick={(e) => handleSubmit(e)}
                  className="w-full border-none outline-none py-4 rounded-3xl text-xl font-semibold bg-slate-700"
                >
                  Create Account
                </button>
                <p className="text-center mt-4 text-lg">
                  "Already have an Account?"
                  <span
                    className="font-semibold"
                    onClick={() => setForSignin(true)}
                  >
                    Sign In
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-grow-1 flex-shrink-1 h-full text-center justify-end bg-cyan-600"></div>
        </div>
      </div>
    </>
  );
}
// <div className="flex flex-col w-full bg-slate-950 text-white ">
//   <h1 className="text-3xl"> Title</h1>
//   <form className="flex flex-col py-12 gap-10">
//     <input
//       className="w-full text-2xl bg-transparent"
//       placeholder="name"
//       name="name"
//       value={formdata.name}
//       onChange={handleInputChange}
//     ></input>
//     <input
//       className="w-full text-2xl bg-transparent"
//       placeholder="email"
//       name="email"
//       value={formdata.email}
//       onChange={handleInputChange}
//     ></input>
//     <input
//       className="w-full text-2xl bg-transparent"
//       placeholder="password"
//       name="password"
//       value={formdata.password}
//       onChange={handleInputChange}
//     ></input>
//   </form>
//   <button
//     className="p-12 text-2xl bg-cyan-300 rounded-3xl"
//     onClick={(e) => {
//       handleSubmit(e);
//     }}
//   >
//     Signup
//   </button>
//   <p className="text-2xl text-center mt-16">
//     Already a User! Please?{" "}
//     <span className="cursor-pointer" onClick={() => setForSignin(true)}>
//       SignIn
//     </span>{" "}
//   </p>
// </div>
