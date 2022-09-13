import FoodAppPage from "./Components/FoodAppPage/FoodAppPage";
import FoodPageHeader from "./Components/FoodPageHeader/FoodPageHeader";
import FoodMenu from "./Components/FoodMenu/FoodMenu";
import FoodCheckout from "./Components/FoodCheckout/FoodCheckout";

import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <FoodPageHeader />
        <Routes>
          <Route path="/" element={<FoodAppPage />} />
          <Route path="/FoodMenu" element={<FoodMenu />} />
          <Route path="/FoodCheckout" element={<FoodCheckout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
