import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles.css';
import Portfolio from './portfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio/" exact element={<Portfolio/>} />
      </Routes>
    </Router>
  );
}

export default App;
