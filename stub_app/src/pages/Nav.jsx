import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/reducer/userSlice";
export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutButton = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <header className="flex justify-between border-b-2 bg-slate-950 text-white border-slate-900">
      <div className=" flex justify-center items-center">
        <Link to={"/"} className="text-4xl my-2 mx-12  ">
          Student Hub
        </Link>
      </div>
      <div className=" flex">
        <div className="flex justify-center items-center">
          <Link
            to={"/career"}
            className="m-2 text-3xl  hover:bg-slate-900 rounded-2xl p-2 "
          >
            Career
          </Link>
          <Link
            to={"/roadmap"}
            className="m-2 text-3xl hover:bg-slate-900 rounded-2xl p-2 "
          >
            Roadmap
          </Link>
          <Link
            to={"/doc"}
            className="mx-2 text-3xl my-2 hover:bg-slate-900 rounded-2xl p-2"
          >
            Docs
          </Link>
          <Link
            to={"/profile"}
            className="mx-2 text-3xl my-2 hover:bg-slate-900 rounded-2xl p-2"
          >
            profile
          </Link>
        </div>
        <div
          className="my-2 mx-12 text-3xl hover:bg-slate-900 rounded-2xl p-2"
          onClick={(e) => logoutButton()}
        >
          Logout
        </div>
      </div>
    </header>
  );
}
