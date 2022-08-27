import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, ListGroup, Image, Form, Button, Card } from "react-bootstrap";

import { addToCart, removeFromCart } from "../actions/cartAction";

const CartScreen = () => {
   const location = useLocation();
   const params = useParams();

   const productId = params.id;
   const cart = useSelector((state) => state.cart);
   const { cartItems } = cart;
   const [qale, setqale] = useState(cartItems);

   const dispatch = useDispatch();
   const qty = location.search ? Number(location.search.split("=")[1]) : 1;

   useEffect(() => {
      if (productId) {
         dispatch(addToCart(productId, qty));
      }
      //   console.log(productId,qty);
   }, [dispatch, productId, qty]);

   const removeHandler = async (id) => {
      dispatch(removeFromCart(id));
   };
   const checkoutHandler = () => {
      console.log("checkout");
   };
   return (
      <Row>
         <Col md={8}>
            <h1>Shopping Cart</h1>
            {cartItems.length === 0 ? (
               <h1>Sizning kartangiz bo`sh</h1>
            ) : (
               <ListGroup variant="flush">
                  {cartItems.map((val) => (
                     <ListGroup.Item key={val.product}>
                        <Row>
                           <Col md={2}>
                              <Image src={val.image} alt={val.name} fluid rounded></Image>
                           </Col>
                           <Col md={3}>
                              <Link to={`/product/${val.product}`}> {val.name}</Link>
                           </Col>
                           <Col md={2}>{val.price}</Col>
                           <Col md={2}>
                              <Form.Control
                                 as="select"
                                 value={val.qty}
                                 onChange={(e) =>
                                    dispatch(addToCart(val.product, Number(e.target.value)))
                                 }
                              >
                                 {[...Array(val.countInStock).keys()].map((x) => (
                                    <option key={x + 1} value={x + 1}>
                                       {x + 1}
                                    </option>
                                 ))}
                              </Form.Control>
                           </Col>

                           <Col md={2}>
                              <Button
                                 type="button"
                                 variant="light"
                                 onClick={() => {
                                    removeHandler(val.product);
                                 }}
                              >
                                 <i className="fas fa-trash"></i>
                              </Button>
                           </Col>
                        </Row>
                     </ListGroup.Item>
                  ))}
               </ListGroup>
            )}
         </Col>

         <Col md={4}>
            <Card>
               <ListGroup variant="flush">
                  <ListGroup.Item>
                     <h2>SubTotal ( {cartItems.reduce((a, b) => a + b.qty, 0)}) Items</h2>$
                     {cartItems.reduce((a, b) => a + b.price * b.qty, 0).toFixed(2)}
                  </ListGroup.Item>
               </ListGroup>
               <Button
                  onClick={checkoutHandler}
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length === 0}
               >
                  checkout
               </Button>
            </Card>
         </Col>
      </Row>
   );
};

export default CartScreen;
