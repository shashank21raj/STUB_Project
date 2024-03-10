import { Link } from "react-router-dom";
export default function Navbar() {
  return (
      <header className="flex justify-between border-b-2">
        <Link to={"/"} className="text-4xl my-3 mx-4 ">
          Student Hub
        </Link>
        <div className=" flex">
          <div className="flex">
            <Link to={"/career"} className="mx-4 text-3xl my-3 ">
              Career
            </Link>
            <Link to={"/roadmap"} className="mx-4 text-3xl my-3 ">
              Roadmap
            </Link>
            <Link to={"/doc"} className="mr-8 ml-4 text-3xl my-3 ">
              Docs
            </Link>
          </div>
          <Link to={"/profile"} className=" ml-4 mr-10 text-3xl  my-3 ">
            Profile
          </Link>
        </div>
      </header>
  );
}
