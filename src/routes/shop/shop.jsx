import { Route, Routes } from "react-router-dom";

import CategoriesPreview from "../category-preview/ct-preview";

import Category from "../category/category";

import "./shop.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
