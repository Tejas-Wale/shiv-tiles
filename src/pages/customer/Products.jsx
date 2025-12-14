import { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext';
import ProductCard from '../../components/customer/ProductCard';
import ProductFilter from '../../components/customer/ProductFilter';
import SearchBar from '../../components/common/SearchBar';
import Loading from '../../components/common/Loading';
import { filterProducts, sortProducts } from '../../utils/helpers';
import { SORT_OPTIONS } from '../../utils/constants';

const Products = () => {
  const { products, loading } = useContext(ProductContext);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [filters, setFilters] = useState({
    category: searchParams.get('category') || '',
    type: searchParams.get('type') || '',
    priceMin: undefined,
    priceMax: undefined,
    color: '',
    size: '',
    search: '',
  });
  
  const [sortBy, setSortBy] = useState('name-asc');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let result = filterProducts(products, filters);
    result = sortProducts(result, sortBy);
    setFilteredProducts(result);
  }, [products, filters, sortBy]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters({
      category: '',
      type: '',
      priceMin: undefined,
      priceMax: undefined,
      color: '',
      size: '',
      search: '',
    });
    setSearchParams({});
  };

  const handleSearch = (query) => {
    setFilters({ ...filters, search: query });
  };

  if (loading) {
    return <Loading fullScreen />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h1>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <SearchBar
              onSearch={handleSearch}
              placeholder="Search tiles, fixtures..."
              className="w-full md:w-96"
            />
            <div className="flex items-center gap-4">
              <label className="text-sm text-gray-700">Sort by:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ProductFilter
                filters={filters}
                onFilterChange={handleFilterChange}
                onReset={handleResetFilters}
              />
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 text-sm text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </div>
            
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">No products found matching your criteria.</p>
                <button
                  onClick={handleResetFilters}
                  className="mt-4 text-primary-600 hover:text-primary-700"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
