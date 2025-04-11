import React from "react";
import Newsfeed from "../components/newsfeed/Newsfeed";
import Storybox from "../components/storys/Storybox";
import Sidenav from "../components/navigation/Sidenav";
import Rightsidenav from "../components/navigation/Rightsidenav";
import UploadBox from "../components/uploadbox/UploadBox";

const Home = () => {
  return (
    <div>
      <div className="flex Pagearea min-h-screen xl:gap-6 2xl:gap-14 bg-gray-100">
        {/* Left Sidebar */}
        <nav className="w-3/12 bg-white  sticky top-[100px]  h-[calc(100vh_-_120px)] rounded-lg">
          <Sidenav />
        </nav>

        {/* Main Content */}
        <main className="flex-1 ">
          <Storybox />
          <UploadBox />
          <Newsfeed />
        </main>

        {/* Right Sidebar */}
        <nav className="w-3/12 bg-white  sticky  top-[100px]  h-[calc(100vh_-_120px)] rounded-lg">
          <Rightsidenav />
        </nav>
      </div>
    </div>
  );
};

export default Home;
