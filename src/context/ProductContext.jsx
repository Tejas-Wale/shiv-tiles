import { createContext, useState, useEffect } from 'react';
import { mockProducts } from '../data/mockProducts';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(mockProducts);
  const [loading, setLoading] = useState(false);

  const getProductById = (id) => {
    return products.find(product => product.id === parseInt(id, 10));
  };

  const getProductsByCategory = (category) => {
    return products.filter(product => product.category === category);
  };

  const getProductsByType = (type) => {
    return products.filter(product => product.type === type);
  };

  const searchProducts = (query) => {
    const lowerQuery = query.toLowerCase();
    return products.filter(product =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.description.toLowerCase().includes(lowerQuery)
    );
  };

  const getFeaturedProducts = () => {
    // Return products with high ratings
    return products
      .filter(product => product.rating >= 4.7)
      .slice(0, 8);
  };

  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: products.length + 1,
      createdAt: new Date().toISOString().split('T')[0],
    };
    setProducts([...products, newProduct]);
    return newProduct;
  };

  const updateProduct = (id, updatedProduct) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, ...updatedProduct } : product
    ));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const value = {
    products,
    loading,
    getProductById,
    getProductsByCategory,
    getProductsByType,
    searchProducts,
    getFeaturedProducts,
    addProduct,
    updateProduct,
    deleteProduct,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
