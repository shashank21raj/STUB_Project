import ProfileCard from "../components/profileCard";
import ProfileDetails from "../components/profileDetails";
import ProfileSkill from "../components/profileSkills";

export default function Profile() {
  return (
    <>
      <div className="bg-slate-950 h-[90vh] flex flex-col w-screen text-white px-16 pt-6 ">
        <div className="w-full bg-slate-400 h-[38%]"></div>
        <div className="  -mt-20 flex gap-2 px-2">
          <ProfileCard />
          <ProfileDetails />
          <ProfileSkill />
        </div>
      </div>
    </>
  );
}
