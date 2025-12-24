import { Card } from "../base/card";
import { ProductCard } from "../product-card";
import { useData } from "../../contexts/data-context";

export const RecentlyAddedProducts = () => {
  const { products } = useData();

  const recentProducts = [...products]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 6);

  return (
    <Card title={"Recently Added Products"} asideText="View all">
      {recentProducts.length === 0 ? (
        <p className="text-muted-foreground text-sm py-4 text-center">
          No products yet. Add your first product!
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentProducts.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              status={product.status}
              category={product.category}
              date={product.createdAt?.split("T")[0]}
            />
          ))}
        </div>
      )}
    </Card>
  );
};
