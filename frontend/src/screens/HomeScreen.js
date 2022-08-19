import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Product } from "../components/Product";
import products from "../products";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { listProducts } from "../actions/productAction";
export const HomeScreen = () => {
   const dispatch = useDispatch();

   const productList = useSelector((state) => state.productList);
   const { loading, error, products } = productList;
   // const state = useSelector((sta) => sta);
   useEffect(() => {
      dispatch(listProducts());

      // const fetchData = async () => {
      //    const { data } = await axios.get("/api/product");
      //    setProduct(data.product);

      // };
      // fetchData();
      // console.log(product);
   }, [dispatch]);
   // const products = [];
   return (
      <>
         <h1>Latest Product</h1>
         {loading ? (
            <h2>loading...</h2>
         ) : error ? (
            <h3>{error}</h3>
         ) : (
            <Row>
               {products.map((val, index) => (
                  <Col key={index} sm={12} md={6} lg={4} xl={3}>
                     <Product product={val} />
                  </Col>
               ))}
            </Row>
         )}
      </>
   );
};
