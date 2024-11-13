import React from "react";
import { Package2 } from "lucide-react";

export default function CategoryCard({ name, price }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
        <Package2 className="h-12 w-12 text-blue-600" />
      </div>
      <h3 className="font-semibold">{name}</h3>
      <p className="text-blue-600 font-medium">{price}</p>
    </div>
  );
}
