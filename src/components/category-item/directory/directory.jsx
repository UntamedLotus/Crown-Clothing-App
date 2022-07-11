import CategoryItem from "../category-item";
import "./directory.scss";

const Directory = ({ categories }) => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
