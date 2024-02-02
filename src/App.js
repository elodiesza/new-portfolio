import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import './App.css';
import './styles.css';
import Portfolio from './portfolio';
import Trackr from './projects/trackr';
import Fleet from './projects/fleet';
import ReactGA from 'react-ga';


function App() {
  useEffect(() => {
    ReactGA.initialize('G-4LLXRHC303');
    ReactGA.pageview(window.location.pathname + window.location.search);
  },[]);
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
