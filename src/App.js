import "./App.css";
import { Route,Routes } from "react-router-dom";
import Mockman from "mockman-js"
import { ProductList } from "./Pages/ProductList";
import { Login } from "./Pages/Login";
import { Profile } from "./Pages/Profile";
import { Signup } from "./Pages/SignUp";
import { Home } from "./Pages/Home";
import { SingleProduct } from "./componenets/SingleProduct/SingleProduct";
import { CartPage } from "./Pages/CartPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequiresAuth from "./componenets/RequiresAuth";
import { Nav } from "./layouts/Nav/Nav";
import { WishListPage } from "./Pages/WishlistPage";
import Checkout from "./Pages/Checkout";
import Footer from "./layouts/Nav/Footer/Footer";


function App() {

  return (
    <div className="App" >
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mockman" element={<Mockman/>}/>
        <Route path="/productlist" element={<ProductList/>}/>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route element={<RequiresAuth/>}>
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/wishlist" element={<WishListPage/>}/>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
