import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TutorialsPage from './pages/TutorialsPage';
import ChapterPage from './pages/ChapterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tutorials" element={<TutorialsPage />} />
        <Route path="/tutorials/:slug" element={<ChapterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;