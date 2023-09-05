import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Resultpage from "./Resultpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/result" element={<Resultpage />} />
    </Routes>
  );
}

export default App;
