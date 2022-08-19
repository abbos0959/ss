import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import product from "../products";
import Rating from "../components/Rating";
import { Dispatch, useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from "react-bootstrap";
import axios from "axios";
import { listProductDetails } from "../actions/productAction";
export const ProductScreen = ({ match }) => {
   const dispatch = useDispatch();
   const productDetails = useSelector((state) => state.productDetails);
   const { loading, error, product} = productDetails;
   const params = useParams();
   useEffect(() => {
      dispatch(listProductDetails(params.id));
   }, [dispatch]);
   // const mahsulot = product.find((val) => val._id == params.id);
   // const products={}
   return (
      <>
         <Link to="/" className="btn btn-light  my-3">
            Go Back
         </Link>
         <Row>
            <Col md={6}>
               <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
               <ListGroup variant="flush">
                  <ListGroup.Item>
                     <h2>{product.name}</h2>
                  </ListGroup.Item>
               </ListGroup>
               <ListGroup.Item>
                  <Rating value={product.rating} text={`${product.numReviews} reviews`} />
               </ListGroup.Item>
               <hr />
               <ListGroup.Item>Price:${product.price}</ListGroup.Item>
               <hr />
               <ListGroup.Item>Description:{product.description}</ListGroup.Item>
            </Col>
            <Col md={3}>
               <Card>
                  <ListGroup variant="flush">
                     <ListGroup.Item>
                        <Row>
                           <Col>Price:</Col>
                           <Col>
                              <strong>${product.price}</strong>
                           </Col>
                        </Row>
                     </ListGroup.Item>
                     <ListGroup.Item>
                        <Row>
                           <Col>Status:</Col>
                           <Col>{product.countInStock > 0 ? "In Stock" : "Out Of Stock"}</Col>
                        </Row>
                     </ListGroup.Item>
                     <ListGroup.Item>
                        <Button
                           style={{ width: "100%" }}
                           className="btn-block"
                           type="button"
                           disabled={product.countInStock === 0}
                        >
                           Add To Cart
                        </Button>
                     </ListGroup.Item>
                  </ListGroup>
               </Card>
            </Col>
         </Row>
      </>
   );
};
