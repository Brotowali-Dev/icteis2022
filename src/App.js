import './App.css';
import Navbar from './components/Navbar';

// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// PAGES
import Homepage from './pages/Homepage';
import Fees from './pages/Fees';
import Publication from './pages/Publication';
import Footer from './components/Footer';
import CallForPaper from './pages/Call-for-paper';
import Abstract from './pages/Abstract-guideline';
import Presentation from './pages/Presentation-guideline';
import FullPaper from './pages/Full-paper-guideline';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/fees' element={<Fees />} />
          <Route exact path='/publication' element={<Publication />} />
          <Route exact path='/call-for-paper' element={<CallForPaper />} />
          <Route exact path='/abstract-guideline' element={<Abstract />} />
          <Route
            exact
            path='/presentation-guideline'
            element={<Presentation />}
          />
          <Route exact path='/full-paper-guideline' element={<FullPaper />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
