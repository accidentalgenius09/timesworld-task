import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom'; 
import Home from './components/Home';
import Signin from './components/Signin';

function App() {
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
