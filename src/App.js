import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/home/home';
import Pay from './components/Landing/pay';
import Dowload from './components/dowload/dowload';
import Login from './components/login/login';
import Info from './components/info/info';

function App() {
  return (
    <div >
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route exact path="/pay" element={<Pay/>}/>
        <Route exact path="/dowload" element={<Dowload/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/info" element={<Info/>}/>
      </Routes>
    </div>
  );
}

export default App;
