import "./App.css";
import "./bootstrap.min.css";
import { Container } from "react-bootstrap";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HomeScreen } from "./screens/HomeScreen";
import { ProductScreen } from "./screens/productScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./screens/cartScreen";

function App() {
   return (
      <Router>
         <Header />
         <main className="py-3">
            <Container>
               <Routes>
                  <Route path="/" exact element={<HomeScreen />} />
                  <Route path="/product/:id" element={<ProductScreen />} />
                  <Route path="/cart/:id" element={<Cart />} />
                  <Route path="/cart" element={<Cart />} />
               </Routes>
            </Container>
         </main>
         <Footer />
      </Router>
   );
}

export default App;
