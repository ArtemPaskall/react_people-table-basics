import { Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import { HomePage } from './Components/HomePage/HomePage';
import { PeoplePage } from './Components/PeoplePage/PeoplePage';

const App = () => (
  <div className="App">
    <h1>People table</h1>
    <header>
      <nav>
        <Link to="/home" className="nav-link"> Home page </Link>
        <Link to="/people" className="nav-link">People page</Link>
      </nav>
    </header>

    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/people" element={<PeoplePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<h3>Page not found</h3>} />
    </Routes>
  </div>
);

export default App;
