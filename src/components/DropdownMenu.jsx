import { Link } from "react-router-dom";
import { useState } from "react";
import { getCategories } from "../utils/api";
import { useParams } from "react-router-dom";

const DropdownMenu = () => {
  const { category } = useParams();
  const [categories, setCategories] = useState([]);

  getCategories(category).then((categories) => {
    console.log(categories);
    setCategories(categories);
  });

  return (
    <div className="dropdown-hover">
      <p>Categories +</p>
      <div className="dropdown-content">
        {categories.map((category) => {
          return (
            <Link
              className="link drop-link"
              key={category.slug}
              to={`/categories/${category.slug}`}
            >
              {category.slug}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DropdownMenu;
