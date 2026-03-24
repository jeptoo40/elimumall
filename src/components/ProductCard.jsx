import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div>
      <img src={product.image} width="150" />
      <h3>{product.name}</h3>
      <p>KES {product.price}</p>
      <Link to={`/product/${product.id}`}>View</Link>
    </div>
  );
}

export default ProductCard;