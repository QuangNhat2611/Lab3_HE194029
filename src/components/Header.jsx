import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h2>ProductStore</h2>
      </div>
      <nav>
        <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} end>
          Home
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>
          Products
        </NavLink>
      </nav>
    </header>
  );
}