import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { chapters } from '../data/tutorials';

function ChapterPage() {
      const { slug } = useParams<{ slug: string }>();
      const chapter = chapters.find((c) => c.slug === slug);

      const [isComplete, setIsComplete] = useState(false);

      if (!chapter) {
            return (
                  <div className="min-h-screen bg-echo-bg text-white">
                        <Nav logoText="Echo Design Labs" />
                        <main className="max-w-4xl mx-auto px-6 py-20">
                              <h2 className="text-4xl font-bold mb-4">Chapter not found</h2>
                              <p className="text-white/60 mb-8">
                                    That chapter doesn't exist. Maybe you meant to go back to the tutorials list?
                              </p>
                              <Link to="/tutorials" className="text-echo-accent hover:underline">
                                    ← Back to all tutorials
                              </Link>
                        </main>
                  </div>
            );
      }

      return (
            <div className="min-h-screen bg-echo-bg text-white">
                  <Nav logoText="Echo Design Labs" />

                  <main className="max-w-4xl mx-auto px-6 py-20">
                        <Link to="/tutorials" className="text-echo-accent hover:underline text-sm mb-8 inline-block">
                              ← All tutorials
                        </Link>

                        <div className="text-sm text-echo-accent font-medium mb-2">
                              Chapter {chapter.order}
                        </div>
                        <h2 className="text-5xl font-bold mb-6">{chapter.title}</h2>
                        <p className="text-xl text-white/60 mb-12">{chapter.description}</p>

                        <div className="text-white/40 italic">
                              Chapter content coming soon. This is where the tutorial body will go.
                        </div>

                        <button
                              onClick={() => setIsComplete(!isComplete)}
                              className={`mt-8 px-6 py-3 rounded-lg font-medium transition-colors ${isComplete
                                          ? 'bg-green-500 hover:bg-green-400 text-black'
                                          : 'bg-echo-accent hover:bg-sky-300 text-black'
                                    }`}
                        >
                              {isComplete ? '✓ Completed' : 'Mark as complete'}
                        </button>
                  </main>
            </div>
      );
}

export default ChapterPage;