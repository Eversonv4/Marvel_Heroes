import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DetailCharacter } from "src/pages/DetailCharacter";
import { Home } from "src/pages/Home";

function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<DetailCharacter />} />
      </Routes>
    </Router>
  );
}

export default MainRoutes;
