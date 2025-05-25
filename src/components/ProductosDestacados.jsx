import React from 'react';
import ProductList from './ProductList';

const ProductosDestacados = () => {
  return (
    <div className="container">
      <h1>Productos Destacados</h1>
      <ProductList category="jewelery" />
    </div>
  );
};

export default ProductosDestacados;