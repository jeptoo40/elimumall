import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Materials from "./pages/Materials";
import Arttools from "./pages/Arttools";
import Techtools from "./pages/Techtools";
import Purchase from "./pages/Purchase";
import Articles from "./pages/Articles";
import Storybooks from "./pages/Storybooks";
import Setbooks from "./pages/Setbooks";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/materials" element={<Materials />} />
      <Route path="/arttools" element={<Arttools />} />
      <Route path="/techtools" element={<Techtools />} />
      <Route path="/purchase" element={<Purchase />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/storybooks" element={<Storybooks />} />
      <Route path="/setbooks" element={<Setbooks />} />

      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;