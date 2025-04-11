import React from "react";
import Profiletopimage from "../components/profile/Profiletopimage";
import UploadBox from "../components/uploadbox/UploadBox";
import Newsfeed from "../components/newsfeed/Newsfeed";

const Profile = () => {
  return (
    <div className="Pagearea">
      <div className="flex gap-12 items-start justify-between ">
        <div className="leftfeed w-7/12">
          <Profiletopimage />
        </div>

        <div className="rightfeed flex-1">
          <UploadBox />
          <Newsfeed />
        </div>
      </div>
    </div>
  );
};

export default Profile;
