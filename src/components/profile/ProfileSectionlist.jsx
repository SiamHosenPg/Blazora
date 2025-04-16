import React from "react";

const Lists = [
  { id: 1, name: "About", link: "about" },
  { id: 2, name: "Follower", link: "follower" },
  { id: 3, name: "Photos", link: "photos" },
  { id: 4, name: "Videos", link: "video" },
  { id: 5, name: "Groups", link: "about" },
  { id: 6, name: "Events", link: "about" },
];
const ProfileSectionlist = ({ setShowItem }) => {
  return (
    <div>
      <div className="flex items-center px-10 py-4 bg-white rounded-lg w-full mb-4 gap-8">
        {Lists.map((list) => (
          <div
            onClick={() => setShowItem(list.link)}
            key={list.id}
            className="text-gray-500  font-semibold text-sm cursor-pointer"
          >
            {list.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSectionlist;
