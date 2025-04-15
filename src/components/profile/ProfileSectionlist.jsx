import React from "react";

const Lists = [
  { id: 1, name: "About" },
  { id: 2, name: "Follower" },
  { id: 3, name: "Photos" },
  { id: 4, name: "Videos" },
  { id: 5, name: "Groups" },
  { id: 6, name: "Events" },
];
const ProfileSectionlist = () => {
  return (
    <div>
      <div className="flex items-center px-10 py-4 bg-white rounded-lg w-full mb-4 gap-8">
        {Lists.map((list) => (
          <div
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
