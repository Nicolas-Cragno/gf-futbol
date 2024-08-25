import '../assets/css/App.css';
import Layout from '../components/Layout.js';
import Home from '../containers/Home.js';
import About from '../containers/About.js';
import Teams from '../containers/Teams.js';
import Uniform from '../containers/Uniform.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/nosotros' element={<About/>}></Route>
            <Route exact path='/selectivos' element={<Teams/>}></Route>
            <Route exact path='/indumentaria' element={<Uniform/>}></Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
