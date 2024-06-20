import React, { useState } from "react";

const DraggableList = () => {
  const [items, setItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
  ]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [overIndex, setOverIndex] = useState(null);

  const handleDragStart = (e, index) => {
    setDraggedItem(index);
    e.dataTransfer.effectAllowed = "move";
    // Use a transparent image as the drag image to focus on item movement in the list
    const dragIcon = document.createElement("img");
    dragIcon.src =
      "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    e.dataTransfer.setDragImage(dragIcon, 0, 0);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (index !== overIndex) {
      setOverIndex(index);
    }
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const newItems = [...items];
    const itemToMove = newItems.splice(draggedItem, 1)[0];
    newItems.splice(index, 0, itemToMove);
    setItems(newItems);
    setDraggedItem(null);
    setOverIndex(null);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
    setOverIndex(null);
  };

  return (
    <ul style={{ listStyleType: "none", padding: 0 }}>
      {items.map((item, index) => (
        <li
          key={item}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => handleDragOver(e, index)}
          onDrop={(e) => handleDrop(e, index)}
          onDragEnd={handleDragEnd}
          style={{
            padding: "10px",
            margin: "5px",
            backgroundColor:
              draggedItem === index
                ? "darkgray"
                : overIndex === index
                ? "lightblue"
                : "lightgray",
            cursor: "move",
            opacity: draggedItem === index ? 0.5 : 1,
            border: overIndex === index ? "2px dashed black" : "none",
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default DraggableList;
