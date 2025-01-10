import './App.css';
import Navigation from './Customer/Component/Navigation';
import HomePage from './Customer/Pages/HomePage/HomePage';
import Footer from './Customer/Component/Footer/Footer';
import Product from './Customer/Component/Product/Product';
import ProductDetails from './Customer/Component/ProductDetails/ProductDetails';
import Cart from './Customer/Component/Cart/Cart';
import CheckOut from './Customer/Component/CheckOut/CheckOut';
import Order from './Customer/Component/Order/Order';
import OrderDetails from './Customer/Component/Order/OrderDetails';

function App() {
  return (
    <div>
      <Navigation />
      <div>
        {/* <HomePage /> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart /> */}
        {/* <CheckOut/> */}
        {/* <Order/> */}
        <OrderDetails/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
