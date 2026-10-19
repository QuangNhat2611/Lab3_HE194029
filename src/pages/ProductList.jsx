import { useState, useMemo } from 'react';
import { products } from '../data/products';
import ProductItem from '../components/ProductItem';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import Pagination from '../components/Pagination';

export default function ProductList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Lấy danh sách danh mục
  const categories = useMemo(() => {
    return Array.from(new Set(products.map(p => p.category)));
  }, []);

  // Lọc sản phẩm
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Tính số trang
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredProducts.slice(start, start + itemsPerPage);
  }, [filteredProducts, currentPage, itemsPerPage]);

  return (
    <div className="product-list-page">
      

      {/* Thanh tìm kiếm & Lọc */}
      <div className="filter-container">
        <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearchChange} />
        <CategoryFilter 
          categories={categories}
          selectedCategory={selectedCategory} 
          setSelectedCategory={handleCategoryChange} 
        />
      </div>

      {/* HIỂN THỊ PHÂN TRANG NGAY DƯỚI BỘ LỌC */}
      <Pagination 
        totalPages={totalPages} 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      />

      {/* Hiển thị danh sách sản phẩm */}
      {currentItems.length > 0 ? (
        <div className="products-grid" style={{ marginTop: '1rem' }}>
          {currentItems.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>Không tìm thấy sản phẩm phù hợp.</p>
        </div>
      )}
    </div>
  );
}