import React from 'react'
import { Route, Routes } from 'react-router-dom';
import HomePage from '../Customer/Pages/HomePage/HomePage'
import Cart from '../Customer/Component/Cart/Cart';
import Navigation from '../Customer/Component/Navigation';
import Footer from '../Customer/Component/Footer/Footer';
import Product from '../Customer/Component/Product/Product';
import ProductDetails from '../Customer/Component/ProductDetails/ProductDetails';
import CheckOut from '../Customer/Component/CheckOut/CheckOut';
import Order from '../Customer/Component/Order/Order';
import OrderDetails from '../Customer/Component/Order/OrderDetails';
const CustomerRoutes = () => {
  return (
    <div>

        <div>
          <Navigation/>
        </div>
        <Routes>
            <Route path = "/login" element = {<HomePage/>}></Route>
            <Route path = "/register" element = {<HomePage/>}></Route>
            <Route path = "/" element = {<HomePage/>}></Route>
            <Route path = "/cart" element = {<Cart/>}></Route>
            <Route path = "/:lavelOne/:lavelTwo/:lavelThree" element = {<Product/>}></Route>
            <Route path = "/product/:productId" element = {<ProductDetails/>}></Route>
            <Route path = "/checkout" element = {<CheckOut/>}></Route>
            <Route path = "/account/order" element = {<Order/>}></Route>
            <Route path = "/account/order/:orderId" element = {<OrderDetails/>}></Route>
        {/* <Order/> */}
        {/* <OrderDetails/> */}
        </Routes>

        <div>
          <Footer/>
        </div>
    </div>
  )
}

export default CustomerRoutes