import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import HomePage from './pages/HomePage';
import MovieDetails from './pages/MovieScreen';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
