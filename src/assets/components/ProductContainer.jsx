import { useEffect, useState } from "react";
/*store and update state - use state*/
/*use effect - used for side effects*/
import ProductCard from "./ProductCard";
import Skeleton from "./Skeleton.jsx";
/* skeleton - used to avoild blank screen when loading*/

// Closure to track API fetch attempts
const fetchTracker = (() => {
  let attempts = 0;

  return () => {
    attempts++;
    return attempts;
  };
})();

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      /*allows use of await*/
      try {
        const attemptNo = fetchTracker();
        console.log("Fetch Attempt:", attemptNo);

        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        /*waits for the promise to resolve*/
        /*promise - represents if the asynchronous operation succeeds or fails*/

        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();/*fetch makes https request*/
  }, []);

  if (loading) {
    return <Skeleton />;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          thumbnail={product.thumbnail}
        />
      ))}
    </div>
  );
};

export default ProductContainer;