import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TutorialsPage from './pages/TutorialsPage';
import ChapterPage from './pages/ChapterPage';

const STORAGE_KEY = 'echo-completed-chapters';

function loadCompletedSlugs(): Set<string> {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return new Set();
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) return new Set();
    return new Set(parsed);
  } catch {
      return new Set();
    }
}

function App() {
  const [completedSlugs, setCompletedSlugs] = useState<Set<string>>(loadCompletedSlugs);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...completedSlugs]));
  }, [completedSlugs]);

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