import { useEffect } from "react";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import FoodAppPage from "./Components/FoodAppPage/FoodAppPage";
import FoodPageHeader from "./Components/FoodPageHeader/FoodPageHeader";
import FoodMenu from "./Components/FoodMenu/FoodMenu";
import FoodCheckout from "./Components/FoodCheckout/FoodCheckout";

import { Route, Routes, useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  const location = window.location;
  useEffect(() => {
    location.pathname === "/" && navigate("/Login");
  }, [location, navigate]);
  return (
    <>
      <FoodPageHeader />
      <Routes>
        <Route path="/home" element={<FoodAppPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/FoodMenu" element={<FoodMenu />} />
        <Route path="/FoodCheckout" element={<FoodCheckout />} />
      </Routes>
    </>
  );
}

export default App;
