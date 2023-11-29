import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Sidebar />
      <main className="main-content">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
