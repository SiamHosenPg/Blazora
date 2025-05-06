import React, { useEffect, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";

const Notifications = () => {
  const [Notification, setNotificaton] = useState([]);

  useEffect(() => {
    fetch("/data/Notificationdata.json")
      .then((response) => response.json())
      .then((data) => setNotificaton(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [Notification]);

  return (
    <div className="Pagearea">
      <div>
        <div className="Pagearea w-full "></div>
        <div className="w-full flex flex-col gap-2  px-4  ">
          {Notification.map((item, index) => {
            return (
              <div
                key={index}
                className="Profile flex items-start justify-between gap-2 bg-white rounded-lg p-4"
              >
                <div className="w-12 h-12 shrink-0 rounded-full border-df border flex items-center justify-center">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="w-full">
                  <span className="block text-sm text-gray-600 ">
                    <b>{item.title}</b> <span>{item.description}</span>
                  </span>
                  <span className="block text-[11px] text-gray-600">
                    {item.timestamp}
                  </span>
                </div>
                <button className=" shrink-0 mt-1">
                  <HiDotsVertical className="text-xl text-gray-600 text-center block shrink-0" />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
