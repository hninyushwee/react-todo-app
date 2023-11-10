import React from "react";
import "./App.css";
import Header from "./layouts/Header";
import Routing from "./contexts/Routing";
import ThemeProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <Routing>
        <ThemeProvider>
          <Header />
        </ThemeProvider>
      </Routing>
    </div>
  );
}
export default App;
