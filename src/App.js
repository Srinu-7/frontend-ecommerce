import './App.css';
import Navigation from './Customer/Component/Navigation';
import HomePage from './Customer/Pages/HomePage/HomePage';
import Footer from './Customer/Component/Footer/Footer';
import Product from './Customer/Component/Product/Product';

function App() {
  return (
    <div>
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <Product/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
