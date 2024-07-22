import '../assets/css/App.css';
import Layout from '../components/Layout.js';
import Home from '../containers/Home.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            {/* 
            <Route exact path='/'></Route>
            <Route exact path='/'></Route>
            <Route exact path='/'></Route>
            */}
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
