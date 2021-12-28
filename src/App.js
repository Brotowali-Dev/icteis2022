import './App.css';
import Navbar from './components/Navbar';

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// PAGES
import Homepage from './pages/Homepage';
import Fees from './pages/Fees';
import Publication from './pages/Publication';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/fees' element={<Fees />} />
          <Route exact path='/publication' element={<Publication />} />

          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
