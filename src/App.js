import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Journey from './components/Journey';
import Store from './components/Store';
import Team from './components/Team';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/journey' element={<Journey/>} />
          <Route exact path='/team' element={<Team/>} />
          <Route exact path='/store' element={<Store/>} />
          <Route exact path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
