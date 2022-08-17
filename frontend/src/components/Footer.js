import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
   return (
      <footer>
         <Container>
            <Row>
               <Col className="text-center py-3">Copyright &copy; Abbos Akromovich</Col>
            </Row>
         </Container>
      </footer>
   );
};
