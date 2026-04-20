import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import { chapters } from '../data/tutorials';

interface TutorialPagePros {
      completedSlugs: Set<string>;
}

function TutorialsPage({ completedSlugs }: TutorialPagePros) {    
      return (
            <div className="min-h-screen bg-echo-bg text-white">
                  <Nav logoText="Echo Design Labs" />

                  <main className="max-w-4xl mx-auto px-6 py-20">
                        <h2 className="text-5xl font-bold mb-6">Tutorials</h2>
                        <p className="text-lg text-white/60">
                              Your learning path starts here. Pick a chapter below.
                        </p>

                        <div className="space-y-4">
                              {chapters.map((chapter) => {
                                    const isComplete = completedSlugs.has(chapter.slug);

                                    return (
                                          <Link
                                                key={chapter.slug}
                                                to={`/tutorials/${chapter.slug}`}
                                                className={`block border rounded-xl p-6 transition-colors ${isComplete
                                                            ? 'border-green-500/40 hover:border-green-500'
                                                            : 'border-white/10 hover:border-echo-accent'
                                                      }`}
                                          >
                                                <div className="flex items-center justify-between gap-3 mt-1">
                                                      <span className="text-sm text-echo-accent font-medium mt-1">
                                                      Chapter {chapter.order}
                                                      </span>
                                                      <span>
                                                            {isComplete && (
                                                                  <span className="text-xs bg-green-500 text-black px-2 py-0.5 rounded-full font-semibold">
                                                                        ✓ Complete
                                                                  </span>
                                                            )}
                                                      </span>
                                                </div>
                                                <h3 className="text-2xl font-bold mb-2">{chapter.title}</h3>
                                                <p className="text-white/60">{chapter.description}</p>
                                          </Link>
                                    );
                              })}
                        </div>
                  </main>
            </div>
      );
}

export default TutorialsPage;