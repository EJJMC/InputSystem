// import React from "react";
// import ControllerTester from "./ControllerTester";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <ControllerTester />
//       </header>
//     </div>
//   );
// }

// export default App;

import React from "react";
import Card from "./Card";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="cards-container">
        <Card
          title="Card title"
          imageUrl="https://esports.gg/_next/image/?url=https%3A%2F%2Fadmin.esports.gg%2Fwp-content%2Fuploads%2F2023%2F05%2Fryu-hadoken-street-fighter-6.png&w=3840&q=75"
          body="Testing"
        />
        <Card
          title="Card title"
          imageUrl="https://esports.gg/_next/image/?url=https%3A%2F%2Fadmin.esports.gg%2Fwp-content%2Fuploads%2F2023%2F05%2Fryu-hadoken-street-fighter-6.png&w=3840&q=75"
          body="Testing"
        />
      </div>
    </div>
  );
}

export default App;
