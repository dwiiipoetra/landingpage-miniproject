import React, { useEffect, useState } from "react";
import axios from "axios";

export default function fetchProducts(url) {
  // state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
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
  }, [url]);
  return { products, loading };
}
