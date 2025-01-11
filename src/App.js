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
import { Route, Routes } from 'react-router-dom';
import CustomerRoutes from './Routers/CustomerRoutes';

function App() {
  return (
    <div>
      <Routes>
        <Route>
          <Route path="/*" element={<CustomerRoutes />} />
        </Route> 
      </Routes>
    </div>
  );
}

export default App;
