
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Materials from "./pages/Materials";
import Arttools from  "./pages/Arttools";
import Techtools from  "./pages/Techtools";
import Purchase from "./pages/Purchase";
import  Articles from "./pages/Articles";
import Storybooks from "./pages/Storybooks";
import Setbooks from "./pages/Setbooks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Books" element={<Books/>}/>
      <Route path="/Materials" element={<Materials/>}/>
      <Route path="/Arttools" element={<Arttools/>}/>
      <Route path="/Techtools" element={<Techtools/>}/>
      <Route path="/Purchase" element={<Purchase/>}/>
      <Route path="/Articles" element={<Articles/>}/>
      <Route path="/Storybooks" element={<Storybooks/>}/>
      <Route path="/Setbooks" element={<Setbooks/>}/>
    
    </Routes>
  );
}

export default App;