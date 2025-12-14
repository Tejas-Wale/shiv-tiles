import { useState } from 'react';
import { X } from 'lucide-react';
import {
  PRODUCT_CATEGORIES,
  TILE_TYPES,
  FIXTURE_TYPES,
  PRICE_RANGES,
  COLORS,
  TILE_SIZES,
  TILE_FINISHES,
} from '../../utils/constants';

const ProductFilter = ({ filters, onFilterChange, onReset }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleFilterChange = (key, value) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const handlePriceRangeChange = (range) => {
    onFilterChange({
      ...filters,
      priceMin: range.min,
      priceMax: range.max === 999999 ? undefined : range.max,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900">Filters</h2>
        <button
          onClick={onReset}
          className="text-sm text-primary-600 hover:text-primary-700"
        >
          Reset All
        </button>
      </div>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-2">Category</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              checked={!filters.category}
              onChange={() => handleFilterChange('category', '')}
              className="mr-2"
            />
            All
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              value={PRODUCT_CATEGORIES.TILES}
              checked={filters.category === PRODUCT_CATEGORIES.TILES}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="mr-2"
            />
            Tiles
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              value={PRODUCT_CATEGORIES.FIXTURES}
              checked={filters.category === PRODUCT_CATEGORIES.FIXTURES}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="mr-2"
            />
            Fixtures
          </label>
        </div>
      </div>

      {/* Type Filter - Conditional based on category */}
      {filters.category === PRODUCT_CATEGORIES.TILES && (
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">Tile Type</h3>
          <div className="space-y-2">
            {Object.entries(TILE_TYPES).map(([key, value]) => (
              <label key={value} className="flex items-center">
                <input
                  type="radio"
                  name="type"
                  value={value}
                  checked={filters.type === value}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="mr-2"
                />
                {key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </label>
            ))}
          </div>
        </div>
      )}

      {filters.category === PRODUCT_CATEGORIES.FIXTURES && (
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">Fixture Type</h3>
          <div className="space-y-2">
            {Object.entries(FIXTURE_TYPES).map(([key, value]) => (
              <label key={value} className="flex items-center">
                <input
                  type="radio"
                  name="type"
                  value={value}
                  checked={filters.type === value}
                  onChange={(e) => handleFilterChange('type', e.target.value)}
                  className="mr-2"
                />
                {key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Price Range */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-2">Price Range</h3>
        <div className="space-y-2">
          {PRICE_RANGES.map((range) => (
            <label key={range.label} className="flex items-center">
              <input
                type="radio"
                name="priceRange"
                checked={filters.priceMin === range.min && (filters.priceMax === range.max || (range.max === 999999 && !filters.priceMax))}
                onChange={() => handlePriceRangeChange(range)}
                className="mr-2"
              />
              {range.label}
            </label>
          ))}
        </div>
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-2">Color</h3>
        <div className="flex flex-wrap gap-2">
          {COLORS.map((color) => (
            <button
              key={color}
              onClick={() => handleFilterChange('color', filters.color === color ? '' : color)}
              className={`px-3 py-1 text-sm rounded-full border ${
                filters.color === color
                  ? 'bg-primary-600 text-white border-primary-600'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-primary-600'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Size Filter - Only for tiles */}
      {filters.category === PRODUCT_CATEGORIES.TILES && (
        <div className="mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">Size</h3>
          <div className="space-y-2">
            {TILE_SIZES.map((size) => (
              <label key={size} className="flex items-center">
                <input
                  type="radio"
                  name="size"
                  value={size}
                  checked={filters.size === size}
                  onChange={(e) => handleFilterChange('size', e.target.value)}
                  className="mr-2"
                />
                {size}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilter;
