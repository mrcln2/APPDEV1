import { useState } from 'react';
import './index.css';

const products = [
  { id: 1, title: 'Cabbage', price: 1.5, isFruit: false, popular: false },
  { id: 2, title: 'Garlic', price: 2.0, isFruit: false, popular: true },
  { id: 3, title: 'Apple', price: 3.25, isFruit: true, popular: true },
  { id: 4, title: 'Mango', price: 4.0, isFruit: true, popular: false },
];

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <h3>
        {product.title} {product.popular && '⭐'}
      </h3>

      <p
        className="price"
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen',
        }}
      >
        ${product.price.toFixed(2)}
      </p>

      <button onClick={onAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart() {
    setCartCount((currentCount) => currentCount + 1);
  }

  function handleRemoveOne() {
    setCartCount((currentCount) => Math.max(0, currentCount - 1));
  }

  return (
    <div className="shop">
      <h1>Mini Fruit & Veg Stand</h1>

      <div className="cart-status">
        <p>
          {cartCount === 0
            ? 'Cart is empty'
            : `${cartCount} ${
                cartCount === 1 ? 'item' : 'items'
              } in cart`}
        </p>

        {cartCount > 0 && (
          <button onClick={handleRemoveOne}>
            Remove one
          </button>
        )}
      </div>

      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </div>
  );
}