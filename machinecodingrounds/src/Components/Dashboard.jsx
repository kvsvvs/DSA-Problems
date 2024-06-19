import React, { useState } from "react";
import SidePanel from "./SidePanel";
import Container from "./Container";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("StarRating");
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <SidePanel setActiveTab={setActiveTab} />
      <Container activeTab={activeTab} />
    </div>
  );
};

export default Dashboard;
