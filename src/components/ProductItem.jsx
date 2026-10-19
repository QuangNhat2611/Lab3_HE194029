import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
  return (
    <div className="product-card">
      <span className="category-tag">{product.category}</span>
      <h3>{product.name}</h3>
      <p className="price">{product.price.toLocaleString('vi-VN')} VNĐ</p>
      <p className="description">{product.description}</p>
      <Link to={`/products/${product.id}`} className="btn-detail">
        Chi tiết
      </Link>
    </div>
  );
}