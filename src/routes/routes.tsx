import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetailCharacter } from "src/pages/DetailCharacter";
import { Home } from "src/pages/Home";

function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<DetailCharacter />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default MainRoutes;
