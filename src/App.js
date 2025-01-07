import './App.css';
import Navigation from './Customer/Component/Navigation';
import HomePage from './Customer/Pages/HomePage/HomePage';

function App() {
  return (
    <div>
      <Navigation />
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
