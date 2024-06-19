import React from "react";

const SidePanel = ({ setActiveTab }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", marginRight: "24px" }}
    >
      <button onClick={() => setActiveTab("StarRating")}>Star Rating</button>
      <button onClick={() => setActiveTab("Modal")}>Modal</button>
      <button onClick={() => setActiveTab("AutoComplete")}>
        AutoComplete Functionality
      </button>
      <button onClick={() => setActiveTab("Clock")}>Clock</button>
    </div>
  );
};

export default SidePanel;
