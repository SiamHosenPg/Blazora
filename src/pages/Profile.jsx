import React from "react";
import Profiletopimage from "../components/profile/Profiletopimage";

const Profile = () => {
  return (
    <div className="Pagearea">
      <div className="flex gap-6 items-start justify-between ">
        <div className="leftfeed w-7/12">
          <Profiletopimage />
        </div>

        <div className="rightfeed flex-1">Right Feed</div>
      </div>
    </div>
  );
};

export default Profile;
