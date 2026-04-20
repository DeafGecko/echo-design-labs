import { Link } from 'react-router-dom';
import Nav from '../components/Nav';

function HomePage() {
      return (
            <div className="min-h-screen bg-echo-bg text-white">
                  <Nav logoText="Echo Design Labs" />

                  <main className="max-w-4xl mx-auto px-6 py-20">
                        <h2 className="text-5xl font-bold mb-6">
                              Learn to build. Learn by building.
                        </h2>
                        <p className="text-lg text-white/60 mb-8">
                              A hands-on path through React, design, and the projects that get you hired.
                        </p>
                        <Link
                        to="/tutorials"
                        className="bg-echo-accent hover:bg-sky-300 text-black px-6 py-3 rounded-lg font-medium transition-colors">
                              Start Chapter 1
                        </Link>
                  </main>
            </div>
      );
}

export default HomePage;