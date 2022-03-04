import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import { Routes, Route} from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>PAGE NOT FOUND 404</h1>} />
      </Routes>
    </>
  );
}

export default App;
