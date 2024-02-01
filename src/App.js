import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './styles.css';
import Portfolio from './portfolio';
import TrackrOvw from './overviews/trackr-ovw';
import Trackr from './projects/trackr';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Portfolio/>} />
        <Route path="/trackr-ovw" exact element={<TrackrOvw/>} />
        <Route path="/trackr" exact element={<Trackr/>} />
      </Routes>
    </Router>
  );
}

export default App;
