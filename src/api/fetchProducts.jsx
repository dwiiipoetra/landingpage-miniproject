import React, { useEffect, useState } from "react";
import axios from "axios";

export default function fetchProducts(url) {
  // state
  const [products, setProducts] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //fetch all products
    (async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    })();

    //fetch related products
    (async function () {
      try {
        const response = await axios.get(url);
        setRelatedProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [url]);

  return { products, relatedProducts, loading };
}
