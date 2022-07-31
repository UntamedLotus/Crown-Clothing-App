import { useNavigate } from "react-router-dom";

import { BackgroundImage, Body, Category } from "./category-item.style";

const CategoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;

  const navigate = useNavigate();

  const onNavigate = () => navigate(route);

  return (
    <Category key={category.id} onClick={onNavigate}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>shop Now</p>
      </Body>
    </Category>
  );
};

export default CategoryItem;
