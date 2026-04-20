import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { chapters } from '../data/tutorials';

function TutorialsPage() {
      return (
            <div className="min-h-screen bg-echo-bg text-white">
                  <Nav logoText="Echo Design Labs" />

                  <main className="max-w-4xl mx-auto px-6 py-20">
                        <h2 className="text-5xl font-bold mb-6">Tutorials</h2>
                        <p className="text-lg text-white/60">
                              Your learning path starts here. Pick a chapter below.
                        </p>

                        <div className="space-y-4">
                              {chapters.map((chapter) => (
                                    <Link
                                          key={chapter.slug}
                                          to={`/tutorials/${chapter.slug}`}
                                          className="block border border-white/10 hover:border-echo-accent rounded-xl p-6 transition-colors">
                                          <div className="text-sm text-echo-accent font-medium mb-2">
                                                Chapter {chapter.order}
                                          </div>
                                          <h3 className="text-2xl font-bold mb-2">{chapter.title}</h3>
                                          <p className="text-white/60">{chapter.description}</p>
                                    </Link>
                              ))}
                        </div>
                  </main>
            </div>
      );
}

export default TutorialsPage;