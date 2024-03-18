export default function ProfileSkill() {
  return (
    <>
      <div className="text-white rounded-2xl w-1/4 bg-slate-800">
        <div className="flex px-4 py-2 justify-between items-center">
          <div className=" text-2xl">Skills</div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-wrap m-4 gap-2">
          <div className=" rounded-3xl bg-slate-500 p-2 w-auto text-xl">
            HTML
          </div>
          <div className=" rounded-3xl bg-slate-500 p-2 w-auto text-xl">JS</div>
          <div className=" rounded-3xl bg-slate-500 p-2 w-auto text-xl">
            HTML
          </div>
          <div className=" rounded-3xl bg-slate-500 p-2 w-auto text-xl">
            HTML
          </div>
          <div className=" rounded-3xl bg-slate-500 p-2 w-auto text-xl">
            HTML
          </div>
          <div className=" rounded-3xl bg-slate-500 p-2 w-auto text-xl">
            HTML
          </div>
        </div>
      </div>
    </>
  );
}
