import React from "react";
import Newsfeed from "../components/newsfeed/Newsfeed";
import Storybox from "../components/storys/Storybox";
import Sidenav from "../components/navigation/Sidenav";
import Rightsidenav from "../components/navigation/Rightsidenav";
import UploadBox from "../components/uploadbox/UploadBox";
import { useAuthContext } from "../contextapi/Authentication"; // Importing Authentication context

const Home = () => {
  const { user } = useAuthContext(); // Accessing login method from context
  return (
    <div>
      <div className="flex Pagearea min-h-screen gap-6 xl:gap-6 2xl:gap-6 bg-gray-100">
        {/* Left Sidebar */}
        <nav className="w-[27%] hidden md:block bg-white  sticky top-[90px]  h-[calc(100vh_-_90px)] rounded-t-lg overflow-y-auto">
          <Sidenav user={user} />
        </nav>

        {/* Main Content */}
        <main className="flex-1 w-full ">
          <Storybox />
          <UploadBox user={user} />
          <Newsfeed />
        </main>

        {/* Right Sidebar */}
        <nav className="w-[27%]  hidden md:block Scrollbar-Hover bg-white  sticky  top-[90px]  h-[calc(100vh_-_90px)] rounded-t-lg ">
          <Rightsidenav />
        </nav>
      </div>
    </div>
  );
};

export default Home;
