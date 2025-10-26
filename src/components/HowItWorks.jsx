import { motion } from 'framer-motion';
import { Link, Cpu, Store } from 'lucide-react';

const Step = ({ icon: Icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
    className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_40px_rgba(2,6,23,0.45)]"
  >
    <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-violet-600/20 blur-2xl" />
    <div className="relative flex items-center gap-3">
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

const TypingBar = () => {
  const text = 'https://www.amazon.com/your-product';
  return (
    <div className="relative w-full rounded-xl bg-black/30 border border-white/10 p-3">
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-red-400" />
        <div className="h-2 w-2 rounded-full bg-amber-400" />
        <div className="h-2 w-2 rounded-full bg-emerald-400" />
      </div>
      <div className="mt-3 font-mono text-sm text-white/80">
        <motion.span
          initial={{ width: 0 }}
          whileInView={{ width: 'auto' }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
          className="inline-block overflow-hidden whitespace-nowrap align-bottom border-r-2 border-white/60 pr-1"
        >
          {text}
        </motion.span>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(76,29,149,0.18),transparent_55%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How It Works</h2>
          <p className="mt-3 text-white/70">Three simple steps from a link to a live store.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Step icon={Link} title="1. Paste a URL" desc="Drop any product link from AliExpress, Amazon, or Shopify." delay={0.05} />
          <Step icon={Cpu} title="2. AI scans details" desc="We parse images, specs, pricing and availability." delay={0.15} />
          <Step icon={Store} title="3. Store auto-generates" desc="A beautiful, conversion-optimized store is created." delay={0.25} />
        </div>

        <div className="mt-8">
          <TypingBar />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
