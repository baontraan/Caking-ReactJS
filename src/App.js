import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import Home from "./Component/Page/Home/Home";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./Component/Global/Footer/Footer";
import ListProduct from "./Component/Page/List Product/ListProduct";
import Detail from "./Component/Page/Detail/Detail";
import ArrowTop from "./Component/Global/ArrowTop/ArrowTop";
import Cart from "./Component/Page/Cart/Cart";
import { CartProvider } from "./Context/CartContext";
import Order from "./Component/Page/Order/Order";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Thời gian hiệu ứng (ms)
      once: true, // Chỉ chạy hiệu ứng một lần khi phần tử xuất hiện
    });

    // window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/list-product"
            element={<ListProduct></ListProduct>}
          ></Route>
          <Route path="/Detail/:id" element={<Detail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<Order />}></Route>
        </Routes>
        <Footer></Footer>
        <ArrowTop></ArrowTop>
        <ToastContainer />
      </CartProvider>
    </div>
  );
}

export default App;
