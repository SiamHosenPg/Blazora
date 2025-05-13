import React, { useContext, useEffect, useRef, useState } from "react";
import { PostContext } from "../contextapi/Postscontext";
import Profiletopimage from "../components/profile/Profiletopimage";
import UploadBox from "../components/uploadbox/UploadBox";
import Newsfeed from "../components/newsfeed/Newsfeed";
import ProfileSectionlist from "../components/profile/ProfileSectionlist";
import ProfileAbout from "../components/profile/ProfileAbout";
import ProfileFollower from "../components/profile/ProfileFollower";
import ProfilePhotoslist from "../components/profile/ProfilePhotoslist";
import ProfileVideos from "../components/profile/ProfileVideos";
import { useAuthContext } from "../contextapi/Authentication";
import { useParams } from "react-router-dom";
import { UserContext } from "../contextapi/Usercontext";
import Postbox from "../components/post/Postbox";

const Profile = () => {
  const { uniqueId } = useParams(); // Getting the id from the URL parameters
  const { user } = useAuthContext(); //login user
  const { userData } = useContext(UserContext); // Accessing user data from context
  const FoundUser = userData.find((p) => p.userid === uniqueId); // Finding the user from the context

  const { postData } = useContext(PostContext); // Accessing post data from context

  // Accessing login method from context
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
      <div className=" mt-2 md:mt-4 flex flex-col lg:flex-row gap-6 items-start justify-between overflow-visible">
        <div
          ref={ContainerRef}
          className="leftfeed  w-full lg:w-7/12 static lg:sticky space-y-4"
          style={{ top: `calc(98vh - ${height}px)` }}
        >
          <Profiletopimage user={FoundUser} />
          <ProfileSectionlist setShowItem={setShowItem} />
          {renderComponent()}
        </div>

        <div className="rightfeed flex-1 w-full lg:w-5/12">
          <UploadBox user={user} />
          {FoundUser && FoundUser.post_id.length > 0 ? (
            <ul className="mt-4">
              {FoundUser.post_id.map((item, index) => {
                return (
                  <div className="" key={index}>
                    {postData.map((post) => {
                      if (post.post_id === item) {
                        return <Postbox item={post} key={index} />;
                      }
                      return null;
                    })}
                  </div>
                );
              })}
            </ul>
          ) : (
            <div className="text-center text-gray-500 mt-4">
              No posts available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
