import { Routes, Route } from "react-router-dom";
import "./index.css";
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
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import BooksAdmin from "./pages/BooksAdmin";
import PurchasesAdmin from "./pages/PurchasesAdmin";
import OrdersAdmin from "./pages/OrdersAdmin";
import UsersAdmin from "./pages/UsersAdmin";

import Team from "./pages/Team";

import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      {/* Main pages */}
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<Books />} />
      <Route path="/materials" element={<Materials />} />
      <Route path="/arttools" element={<Arttools />} />
      <Route path="/techtools" element={<Techtools />} />
      <Route path="/purchase" element={<Purchase />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/storybooks" element={<Storybooks />} />
      <Route path="/setbooks" element={<Setbooks />} />
      <Route path="/PurchasesAdmin" element={<PurchasesAdmin />} />
      <Route path="/OrdersAdmin" element={<OrdersAdmin />} />
      
      <Route path="/team" element={<Team />} />

      <Route path="/settings" element={<Settings />} />


      <Route path="/UsersAdmin" element={<UsersAdmin />} />
      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/BooksAdmin" element={<BooksAdmin />} />




      {/* Auth pages */}
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>



  );
}

export default App;
