import React from "react";
import CategoryCard from "./CategoryCard";

const categories = [
  { name: "Smart Watches", price: "$199" },
  { name: "Laptops", price: "$899" },
  { name: "GoPro Cameras", price: "$349" },
  { name: "Headphones", price: "$199" },
  { name: "Smartphones", price: "$699" },
];

export default function Categories() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-2xl font-bold mb-8">Popular Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <CategoryCard key={index} {...category} />
        ))}
      </div>
    </div>
  );
}
