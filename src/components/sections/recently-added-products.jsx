import { Card } from "../base/card";
import { ProductCard } from "../product-card";

const RECENTLY_ADDED_PRODUCTS = [
  {
    name: 'MacBook Pro 16" In Stock',
    status: "In Stock",
    category: "Laptops",
    date: "2024-12-10",
  },
  {
    name: "Dell XPS 13 In Stock",
    status: "In Stock",
    category: "Laptops",
    date: "2024-12-09",
  },
  {
    name: "iPhone 15 Pro Low Stock",
    status: "Low Stock",
    category: "Mobile",
    date: "2024-12-08",
  },
  {
    name: "iPad Air In Stock",
    status: "In Stock",
    category: "Tablets",
    date: "2024-12-07",
  },
  {
    name: "Surface Pro 9 Out of Stock",
    status: "Out of Stock",
    category: "Tablets",
    date: "2024-12-06",
  },
];

export const RecentlyAddedProducts = () => {
  return (
    <Card title={"Recently Added Products"}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {RECENTLY_ADDED_PRODUCTS.map((product, index) => (
          <ProductCard
            key={index}
            name={product.name}
            status={product.status}
            category={product.category}
            date={product.date}
          />
        ))}
      </div>
    </Card>
  );
};
