import React from "react";
import { Row, Col } from "react-bootstrap";
import { Product } from "../components/Product";
import products from "../products";

export const HomeScreen = () => {
   return (
      <>
         <h1>Latest Product</h1>
         <Row>
            {products.map((val, index) => (
               <Col key={index} sm={12} md={6} lg={4} xl={3}>
                  <Product product={val} />
               </Col>
            ))}
         </Row>
      </>
   );
};
