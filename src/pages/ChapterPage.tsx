import { useParams, Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { chapters } from '../data/tutorials';

function ChapterPage() {
      const { slug } = useParams<{ slug: string }>();
      const chapter = chapters.find((c) => c.slug === slug);

      if (!chapter) {
            return (
                  <div className="min-h-screen bg-echo-bg text-white">
                        <Nav logoText="Echo Design Labs" />
                        <main className="max-w-4xl mx-auto px-6 py-20">
                              <h2 className="text-4xl font-bold mb-4">Chapter Not Found</h2>
                              <p className="text-white/60 mb-8">
                                    The chapter you're looking for doesn't exist. Please select a chapter from the tutorials page.
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
                  </main>
            </div>
      );
}

export default ChapterPage;