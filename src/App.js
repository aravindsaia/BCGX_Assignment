import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import TabularPage from './pages/TabularPage';

function App() {
  return (
    <>
    <Routes>
      <Route element={<LandingPage/>} path='/'/>
      <Route element={<TabularPage/>} path='/detailview/:id' />
    </Routes>
    </>
  );
}

export default App;
