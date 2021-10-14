import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <ul>
        <Link to="/products/1">
          <li>Book</li>
        </Link>
        <Link to="/products/2">
          <li>Pen</li>
        </Link>
        <Link to="/products/3">
          <li>Crayons</li>
        </Link>
      </ul>
    </section>
  );
};
export default Products;
