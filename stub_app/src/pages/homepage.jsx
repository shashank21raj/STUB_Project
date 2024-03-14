import Navbar from "./Nav";
import Todo from "./todo";
import Notes from "./notes";
import Quote  from "./Quote";
import Footer from "./footer";
export default function Homepage() {
  return (
    <>
      <div className="bg-slate-950">
        <div className="m-0 p-0 flex">
          <div className="bg-slate-900 h-[87vh] w-3/6 m-2 rounded-2xl">
            <Notes />
          </div>
          <div className="w-3/6">
            <div className="bg-slate-950 h-[30vh] m-2 rounded-2xl">
              <Quote />
            </div>
            <div className="bg-slate-900 h-[56vh] m-2 rounded-2xl overflow-auto no-scrollbar">
              <Todo />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
