export default function ProfileDetails() {
  return (
    <>
      <div className="w-2/4 bg-slate-800 text-white py-1 px-8 flex flex-col rounded-2xl">
        <div className="flex border-b-2 justify-center items-center h-1/4 text-2xl border-slate-400">
          <div className="w-1/4">Full Name</div>
          <div className="w-3/4">Shashank</div>
        </div>
        <div className="flex border-b-2 justify-center items-center h-1/4 text-xl border-slate-400">
          <div className="w-1/4">Email</div>
          <div className="w-3/4">Shashank@gmail.com</div>
        </div>
        <div className="flex border-b-2 justify-center items-center h-1/4 text-xl border-slate-400">
          <div className="w-1/4">Collage</div>
          <div className="w-3/4">
            Kalinga Institute of Industrial Technology
          </div>
        </div>
        <div className="flex border-b-2 justify-center items-center h-1/4 text-xl border-slate-400">
          <div className="w-1/4">Mobile</div>
          <div className="w-3/4">9100972500</div>
        </div>
        <div className="flex  justify-center items-center h-1/4 text-xl border-slate-400">
          <div className="w-1/4">Address</div>
          <div className="w-3/4">Hyderabad, Mumbai, India, 500049</div>
        </div>
      </div>
    </>
  );
}
