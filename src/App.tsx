import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TutorialsPage from './pages/TutorialsPage';
import ChapterPage from './pages/ChapterPage';

function App() {
  const [completedSlugs, setCompletedSlugs] = useState<Set<string>>(new Set());

  const toggleComplete = (slug: string) => {
    setCompletedSlugs((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      return next;
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tutorials"
          element={<TutorialsPage completedSlugs={completedSlugs} />} />
        <Route path="/tutorials/:slug" 
          element={<ChapterPage 
            completedSlugs={completedSlugs}
            toggleComplete={toggleComplete}
          />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;