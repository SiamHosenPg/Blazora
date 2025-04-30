import React, { useState } from "react";
const data = [
  { id: 1, title: "Item One", details: "This is the detail for item one." },
  { id: 2, title: "Item Two", details: "This is the detail for item two." },
  { id: 3, title: "Item Three", details: "This is the detail for item three." },
];

const Notifications = () => {
  const [openItems, setOpenItems] = useState({});

  const handleToggle = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div>
      <div className="space-y-4">
        {data.map((item) => (
          <div key={item.id} className="border p-4 rounded shadow">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">{item.title}</h2>
              <button
                onClick={() => handleToggle(item.id)}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                aaa
              </button>
            </div>

            {openItems[item.id] && (
              <p className="mt-2 text-gray-700">{item.details}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
