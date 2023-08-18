import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"     
import Profile from "./components/Profile";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About-Me' element={<Profile />} />
        <Route path='/Projects' element={<Projects />} />
        
      </Routes>
      
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
