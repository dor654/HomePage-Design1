import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import DealsSection from "./components/DealsSection";
import ProductGrid from "./components/ProductGrid";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar cartCount={cartCount} />
      <Hero />
      <Categories />
      <ProductGrid onAddToCart={handleAddToCart} />
      <DealsSection />
    </div>
  );
}

export default App;
