import { Routes, Route, Link } from 'react-router-dom';
import Header from './views/header';
import Home from './views/home';

function App() {
  return (
    <>
      <Header />
      {/* TODO Container Will Be Here */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
