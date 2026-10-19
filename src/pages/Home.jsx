import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to the ProductStore</h1>
      <p>Manage and explore products for your needs.</p>
      <Link to="/products" className="btn-primary">
        View Products
      </Link>
    </div>
  );
}