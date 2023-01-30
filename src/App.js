import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<h1>Hola</h1>}/>
        <Route exact path="/home" element={<Home/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
