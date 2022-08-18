import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import product from "../products";
import Rating from "../components/Rating";
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from "react-bootstrap";
export const ProductScreen = ({ match }) => {
   const params = useParams();
   const mahsulot = product.find((val) => val._id == params.id);

   return (
      <>
         <Link to="/" className="btn btn-light  my-3">
            Go Back
         </Link>
         <Row>
            <Col md={6}>
               <Image src={mahsulot.image} alt={mahsulot.name} fluid />
            </Col>
            <Col md={3}>
               <ListGroup variant="flush">
                  <ListGroup.Item>
                     <h2>{mahsulot.name}</h2>
                  </ListGroup.Item>
               </ListGroup>
               <ListGroup.Item>
                  <Rating value={mahsulot.rating} text={`${mahsulot.numReviews} reviews`} />
               </ListGroup.Item>
               <hr />
               <ListGroup.Item>Price:${mahsulot.price}</ListGroup.Item>
               <hr />
               <ListGroup.Item>Description:{mahsulot.description}</ListGroup.Item>
            </Col>
            <Col md={3}>
               <Card>
                  <ListGroup variant="flush">
                     <ListGroup.Item>
                        <Row>
                           <Col>Price:</Col>
                           <Col>
                              <strong>${mahsulot.price}</strong>
                           </Col>
                        </Row>
                     </ListGroup.Item>
                     <ListGroup.Item>
                        <Row>
                           <Col>Status:</Col>
                           <Col>{mahsulot.countInStock > 0 ? "In Stock" : "Out Of Stock"}</Col>
                        </Row>
                     </ListGroup.Item>
                     <ListGroup.Item>
                        <Button
                           style={{ width: "100%" }}
                           className="btn-block"
                           type="button"
                           disabled={mahsulot.countInStock === 0}
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
