import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutMe from './pages/Home'
import Contact from './pages/Contact'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume' 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<AboutMe/>}/>
          <Route path='/home' element={<AboutMe/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/portfolio' element={<Portfolio/>}/>
          <Route path='/resume' element={<Resume/>}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;

