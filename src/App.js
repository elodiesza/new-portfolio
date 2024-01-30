import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Portfolio from './portfolio';
import FleetManager from './projects/fleetmanager';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Portfolio/>} />
        <Route path="/autonomous-fleet-manager" element={<FleetManager/>} />
      </Routes>
    </Router>
  );
}

export default App;
