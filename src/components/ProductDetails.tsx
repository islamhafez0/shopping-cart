import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../interface";
import Loader from "./Loader";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        if (data) {
          const product = data;
          setProduct(product);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="product-details">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="child-1">
            <img src={product?.image} alt={product?.title} />
          </div>
          <div className="child-2">
            <h3>{product?.title}</h3>
            <p>{product?.description}</p>
            <div className="product_details-info">
              <span>
                <small>Price: </small>${product?.price}
              </span>
              <span>
                <small>Category: </small>
                {product?.category}
              </span>
              <span>
                <small>Rates: </small>
                {product?.rating?.count}
              </span>
              <span className="rate">{product?.rating?.rate}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetails;
