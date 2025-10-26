import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Integrations from './components/Integrations';
import FeaturesAndCTA from './components/FeaturesAndCTA';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1f] text-white">
      {/* Global background gradients */}
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_20%_10%,rgba(91,33,182,0.18),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.14),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.12),transparent_50%)]" />

      <Hero />
      <HowItWorks />
      <Integrations />
      <FeaturesAndCTA />

      <footer className="relative border-t border-white/10 py-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.12),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white/70">© {new Date().getFullYear()} StoreGenie. All rights reserved.</div>
            <div className="flex items-center gap-4 text-sm text-white/60">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
