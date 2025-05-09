import React from "react";
import Newsfeed from "../components/newsfeed/Newsfeed";
import Storybox from "../components/storys/Storybox";
import Sidenav from "../components/navigation/Sidenav";
import Rightsidenav from "../components/navigation/Rightsidenav";
import UploadBox from "../components/uploadbox/UploadBox";
import { useAuthContext } from "../contextapi/Authentication";

const Home = () => {
  const { user } = useAuthContext();

  return (
    <div>
      <div className="flex Pagearea min-h-screen gap-6 xl:gap-6 2xl:gap-6 ">
        {/* Left Sidebar */}
        <nav className=" w-[40%] xl:w-[27%] hidden lg:block bg-white  sticky top-[90px]  h-[calc(100vh_-_90px)] rounded-t-lg  py-4 px-2 ">
          <Sidenav user={user} />
        </nav>

        {/* Main Content */}
        <main className="flex-1 w-full lg:w-[44%] mt-2 md:mt-4  ">
          <Storybox />
          <UploadBox user={user} />
          <Newsfeed />
        </main>

        {/* Right Sidebar */}
        <nav className="w-[27%]  hidden xl:block  bg-white  sticky  top-[90px]  h-[calc(100vh_-_90px)] rounded-t-lg py-4 px-2 ">
          <Rightsidenav />
        </nav>
      </div>
    </div>
  );
};

export default Home;
