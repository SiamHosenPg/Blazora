import React, { useEffect, useRef, useState } from "react";
import Profiletopimage from "../components/profile/Profiletopimage";
import UploadBox from "../components/uploadbox/UploadBox";
import Newsfeed from "../components/newsfeed/Newsfeed";
import ProfileSectionlist from "../components/profile/ProfileSectionlist";
import ProfileAbout from "../components/profile/ProfileAbout";
import ProfileFollower from "../components/profile/ProfileFollower";
import ProfilePhotoslist from "../components/profile/ProfilePhotoslist";
import ProfileVideos from "../components/profile/ProfileVideos";

const Profile = () => {
  const ContainerRef = useRef(null);
  const [height, setHeight] = useState(0);

  const [showItem, setShowItem] = useState("about");

  const renderComponent = () => {
    switch (showItem) {
      case "about":
        return <ProfileAbout />;
      case "follower":
        return <ProfileFollower />;
      case "photos":
        return <ProfilePhotoslist />;
      case "video":
        return <ProfileVideos />;
      default:
        return <ProfileAbout />;
    }
  };

  useEffect(() => {
    const updateHeight = () => {
      if (ContainerRef.current) {
        setHeight(ContainerRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, [height, showItem]);

  return (
    <div className="Pagearea">
      <div className="flex gap-6 items-start justify-between overflow-visible">
        <div
          ref={ContainerRef}
          className="leftfeed w-7/12 sticky space-y-4"
          style={{ top: `calc(98vh - ${height}px)` }}
        >
          <Profiletopimage />
          <ProfileSectionlist setShowItem={setShowItem} />
          {renderComponent()}
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
