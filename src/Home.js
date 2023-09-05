import React from "react";
import Card from "./Card";
import "./App.css";
import { Link } from "react-router-dom"; // Import Link here
import "./ControllerTester.css";

function Home() {
  return (
    <div className="App">
      <div className="cards-container">
        {" "}
        {/* Wrap Link around Card */}
        <Card
          title="Card title"
          imageUrl="https://esports.gg/_next/image/?url=https%3A%2F%2Fadmin.esports.gg%2Fwp-content%2Fuploads%2F2023%2F05%2Fryu-hadoken-street-fighter-6.png&w=3840&q=75"
          body="Testing"
        />{" "}
        {/* Wrap Link around Card */}
        <Card
          title="Card title"
          imageUrl="https://esports.gg/_next/image/?url=https%3A%2F%2Fadmin.esports.gg%2Fwp-content%2Fuploads%2F2023%2F05%2Fryu-hadoken-street-fighter-6.png&w=3840&q=75"
          body="Testing"
        />
      </div>
    </div>
  );
}

export default Home;
