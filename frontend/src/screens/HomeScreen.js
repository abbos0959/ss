import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Product } from "../components/Product";
import products from "../products";
import axios from "axios";

export const HomeScreen = () => {
   const [product, setProduct] = useState([]);
   useEffect(() => {
      const fetchData = async () => {
         const { data } = await axios.get("/api/product");
         setProduct(data.product);
         
      };
      fetchData();
      // console.log(product);
   }, []);

   return (
      <>
         <h1>Latest Product</h1>
         <Row>
            {product.map((val, index) => (
               <Col key={index} sm={12} md={6} lg={4} xl={3}>
                  <Product product={val} />
               </Col>
            ))}
         </Row>
      </>
   );
};
