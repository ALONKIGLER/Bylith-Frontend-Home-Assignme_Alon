import {
  BrowserRouter,
  Routes,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import { Footer } from "../shared/Footer/Footer";
import HomePage from "../containers/HomePage/HomePage.js";
import ProductPage from "../containers/ProductPage/ProductPage.js";
import { Header } from "../shared/Header/Header";

const Routes1 = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage to="/home" />} />
        <Route path="/Homepage" element={<HomePage />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="*" element={<HomePage to="/home" />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routes1;
