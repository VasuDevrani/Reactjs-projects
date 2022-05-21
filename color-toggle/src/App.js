import './App.css';
import Navbar from './component/navbar';
import Color from './component/color';
import Counter from './component/counter';
import { Routes, Route, Link } from "react-router-dom";

function App() {

  function toggleColor1()
  {
    document.body.style.backgroundColor='rgb(35, 33, 33)';
    document.title='Color'
  }
  function toggleColor2()
  {
    document.body.style.backgroundColor='white'
    document.title='Counter'
  }

  return (
      <>
        <Navbar toggleColor={toggleColor1} toggleColour={toggleColor2}/>
        <Routes>
        <Route path="/" element={<Color/>} />
        <Route path="Counter" element={<Counter />} />
        </Routes>
      </>
  );
}

export default App;
