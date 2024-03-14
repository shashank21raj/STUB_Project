import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <header className="flex justify-between border-b-2 bg-slate-950 text-white border-slate-900">
      <Link to={"/"} className="text-4xl my-4 mx-12  ">
        Student Hub
      </Link>
      <div className=" flex">
        <div className="flex">
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
        </div>
        <Link
          to={"/profile"}
          className="my-2 mx-12 text-3xl hover:bg-slate-900 rounded-2xl p-2"
        >
          Profile
        </Link>
      </div>
    </header>
  );
}
