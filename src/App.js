
import './App.scss';
import { Route, Router, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
