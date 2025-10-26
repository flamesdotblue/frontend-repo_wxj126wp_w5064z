import { motion, useScroll, useTransform } from 'framer-motion';
import { Rocket, Sparkles, Database, CreditCard } from 'lucide-react';
import { useRef } from 'react';

const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay }}
    className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl hover:border-violet-400/30 hover:shadow-[0_10px_40px_rgba(99,102,241,0.25)] transition-all"
  >
    <div className="flex items-start gap-3">
      <div className="rounded-xl bg-gradient-to-b from-violet-500/40 to-indigo-600/40 p-2 text-white">
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <div className="text-white font-semibold">{title}</div>
        <div className="text-white/60 text-sm">{desc}</div>
      </div>
    </div>
  </motion.div>
);

const ParallaxDemo = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-20, 40]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.98, 1.04]);

  return (
    <div ref={ref} className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-indigo-950/40 p-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.18),transparent_50%)] pointer-events-none" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.div style={{ y: y1, scale }} className="p-8">
          <div className="text-sm text-white/60 mb-2">Before</div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="h-3 w-36 rounded bg-white/10 mb-4" />
            <div className="space-y-2">
              <div className="h-2 w-full rounded bg-white/10" />
              <div className="h-2 w-5/6 rounded bg-white/10" />
              <div className="h-2 w-2/3 rounded bg-white/10" />
            </div>
          </div>
        </motion.div>
        <motion.div style={{ y: y2, scale }} className="p-8">
          <div className="text-sm text-white/60 mb-2">After (StoreGenie)</div>
          <div className="rounded-2xl border border-emerald-300/20 bg-white/5 p-6 shadow-[0_10px_40px_rgba(16,185,129,0.25)]">
            <div className="flex items-center justify-between">
              <div className="h-8 w-40 rounded-lg bg-gradient-to-r from-violet-400/60 to-indigo-400/60" />
              <div className="h-8 w-24 rounded-lg bg-emerald-400/60" />
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/10 h-24" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <div className="mt-14">
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-white">Loved by early builders</h3>
        <p className="text-white/70 mt-2">Creators launched 1,000+ instant stores with StoreGenie.</p>
      </div>
      <div className="mt-6 overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex min-w-[200%] gap-6"
        >
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="shrink-0 rounded-2xl border border-white/10 bg-white/5 p-4 w-72">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500" />
                <div>
                  <div className="text-white text-sm font-semibold">@builder{i + 1}</div>
                  <div className="text-white/60 text-xs">Created a store in minutes</div>
                </div>
              </div>
              <p className="mt-3 text-white/80 text-sm">“The fastest way to spin up a beautiful product site. Mind-blowing.”</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const CTA = () => (
  <div className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 to-violet-600/10 p-8 text-center backdrop-blur-xl">
    <h3 className="text-2xl sm:text-3xl font-bold text-white">Get Early Access</h3>
    <p className="text-white/70 mt-2">Join the waitlist to be first to generate stores from any link.</p>
    <form className="mt-6 mx-auto flex max-w-md items-center gap-2">
      <input type="email" required placeholder="you@company.com" className="w-full rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500/60" />
      <button type="submit" className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-5 py-3 font-semibold shadow-[0_10px_40px_rgba(109,40,217,0.45)]">Join</button>
    </form>
  </div>
);

const FeaturesAndCTA = () => {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(15,23,42,0.6),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for conversion</h2>
            <p className="mt-2 text-white/70">AI design, live inventory sync, and one-click payments out of the box.</p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureCard icon={Rocket} title="AI Store Design" desc="Auto layouts, copy, and color systems tailored to your product." delay={0.05} />
              <FeatureCard icon={Sparkles} title="Auto Product Import" desc="Pull images, SKUs, specs, variations, and reviews." delay={0.1} />
              <FeatureCard icon={Database} title="Inventory Sync" desc="Real-time stock updates from your sources." delay={0.15} />
              <FeatureCard icon={CreditCard} title="Payment Integration" desc="Stripe and PayPal ready — just connect." delay={0.2} />
            </div>
          </div>
          <div>
            <ParallaxDemo />
          </div>
        </div>

        <Testimonials />
        <CTA />
      </div>
    </section>
  );
};

export default FeaturesAndCTA;
