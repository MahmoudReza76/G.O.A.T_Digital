import fs from "fs/promises";
import { ProductContext } from "../components/productContext";
import React, { useContext, useEffect } from "react";
import path from "path";
import Hero from "../components/Hero";
import NewProducts from "../components/NewProducts";
import Banner from "../components/Banner";
import Products from "../components/Products";

export default function Home({ products }) {
  const { setProducts } = useContext(ProductContext);
  useEffect(() => {
    setProducts(products);
  }, [setProducts, products]);
  return (
    <main>
      <Hero />

      <NewProducts products={products} />

      <Products products={products} />
      <Banner />
    </main>
  );
}
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data,
    },
  };
}
