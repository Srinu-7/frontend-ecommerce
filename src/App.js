import './App.css';
import Navigation from './Customer/Component/Navigation';
import HomePage from './Customer/Pages/HomePage/HomePage';
import Footer from './Customer/Component/Footer/Footer';

function App() {
  return (
    <div>
      <Navigation />
      <div>
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
