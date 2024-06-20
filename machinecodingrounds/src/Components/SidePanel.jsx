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
      <button onClick={() => setActiveTab("Form")}>Form</button>
      <button onClick={() => setActiveTab("FileManager")}>File Manager</button>
      <button onClick={() => setActiveTab("Checkboxes")}>
        Nested Checkboxes
      </button>
      <button onClick={() => setActiveTab("DraggableList")}>
        Draggable List
      </button>
      <button onClick={() => setActiveTab("Counter")}>Counter</button>
      <button onClick={() => setActiveTab("ImageCarousel")}>
        Image Carousel
      </button>
      <button onClick={() => setActiveTab("Datagrid")}>Datagrid</button>
      <button onClick={() => setActiveTab("Poll")}>Poll Widget</button>
    </div>
  );
};

export default SidePanel;
