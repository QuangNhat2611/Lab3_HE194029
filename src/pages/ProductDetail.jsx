import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="product-detail-page error">
        <h2>Sản phẩm không tồn tại!</h2>
        <button onClick={() => navigate('/products')} className="btn-secondary">
          Quay lại danh sách sản phẩm
        </button>
      </div>
    );
  }

  return (
    <div className="product-detail-page">
      <button onClick={() => navigate(-1)} className="btn-back">
        &larr; Quay lại danh sách
      </button>

      <div className="detail-card">
        <span className="category-badge">{product.category}</span>
        <h1>{product.name}</h1>
        <p className="price-tag">{product.price.toLocaleString('vi-VN')} VNĐ</p>
        <hr />
        <h3>Mô tả :</h3>
        <p className="description-text">{product.description}</p>
      </div>
    </div>
  );
}