import Navbar from "./Nav";
import Todo from "./todo";
import Notes from "./notes";
import Calender from "./calender";
import Footer from "./footer";
export default function Homepage() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-2">
        <div className=" mx-4 row-span-2 mt-2">
          <Notes />
        </div>
        <div className="mt-2 mx-4">
          <Calender />
        </div>
        <div className="mx-4 mt-2">
          <Todo />
        </div>
      </div>
      <Footer />
    </>
  );
}
