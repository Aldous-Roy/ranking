import Navbar from './components/Navbar'
import Board from './pages/Board'
import Home from './pages/Home'
import Update from './pages/Update'
import Contact from './pages/Contact'
import About from './pages/About'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/update" element={<Update />} />
          <Route path="/board" element={<Board />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
