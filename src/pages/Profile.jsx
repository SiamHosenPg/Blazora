import React from "react";

const Profile = () => {
  return (
    <div>
      Profile Page
      <div className="flex Pagearea min-h-screen xl:gap-6 2xl:gap-14 bg-gray-100">
        {/* Left Sidebar */}
        <nav className="w-3/12 bg-white  sticky top-[100px]  h-[calc(100vh_-_120px)] rounded-lg">
          {/* Sidenav component can be added here */}
        </nav>

        {/* Main Content */}
        <main className="flex-1 ">
          {/* Profile content can be added here */}
        </main>

        {/* Right Sidebar */}
        <nav className="w-3/12 bg-white  sticky  top-[100px]  h-[calc(100vh_-_120px)] rounded-lg">
          {/* Rightsidenav component can be added here */}
        </nav>
      </div>
    </div>
  );
};

export default Profile;
