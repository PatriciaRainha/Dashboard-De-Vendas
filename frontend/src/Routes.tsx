import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
      </BrowserRouter>
      
    );
  }
  
export default App;