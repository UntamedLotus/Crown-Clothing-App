import "./category-item.scss";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div key={category.id} className="category">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body">
        <h2>{title}</h2>
        <p>shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
