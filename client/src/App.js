import React from 'react';
import './styles/index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import SearchPage from './pages/SearchPage';
import ImageSearchPage from './pages/ImageSearchPage';
import MainArea from './components/MainArea';

function App() {
  return (
    <Router>
      <main>
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="/home" element={<MainArea />} />
        <Route path="/restaurants/:id" element={<DetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/image-search" element={<ImageSearchPage />} />
      </Routes>
      </main>
    </Router>
  );
}

export default App;
