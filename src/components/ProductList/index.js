import products from "../../data/product";
import ProductItem from "./ProductItem";

function ProductList() {
  return (
    <>
      {products.map((product, idx) => (
        <ProductItem item={product} key={idx} />
      ))}
    </>
  );
}

export default ProductList;
