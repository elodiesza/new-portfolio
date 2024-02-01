import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles.css';
import Portfolio from './portfolio';
import Trackr from './projects/trackr';
import Fleet from './projects/fleet';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Portfolio/>} />
        <Route path="/trackr" exact element={<Trackr/>} />
        <Route path="/fleet" exact element={<Fleet/>} />
      </Routes>
    </Router>
  );
}

export default App;
