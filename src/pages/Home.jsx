import React from "react";
import Newsfeed from "../components/newsfeed/Newsfeed";
import Storybox from "../components/storys/Storybox";
import Sidenav from "../components/navigation/Sidenav";
import Rightsidenav from "../components/navigation/Rightsidenav";
import UploadBox from "../components/uploadbox/UploadBox";

const Home = () => {
  return (
    <div>
      <div className="flex Pagearea min-h-screen gap-6 xl:gap-6 2xl:gap-6 bg-gray-100">
        {/* Left Sidebar */}
        <nav className="w-[27%] bg-white  sticky top-[90px]  h-[calc(100vh_-_90px)] rounded-t-lg overflow-y-auto">
          <Sidenav />
        </nav>

        {/* Main Content */}
        <main className="flex-1 ">
          <Storybox />
          <UploadBox />
          <Newsfeed />
        </main>

        {/* Right Sidebar */}
        <nav className="w-[27%] Scrollbar-Hover bg-white  sticky  top-[90px]  h-[calc(100vh_-_90px)] rounded-t-lg ">
          <Rightsidenav />
        </nav>
      </div>
    </div>
  );
};

export default Home;
