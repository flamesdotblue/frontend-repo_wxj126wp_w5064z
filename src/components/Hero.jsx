import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Sparkles, Link as LinkIcon } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const MagneticButton = ({ children, onClick }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(Math.min(relX, 50), -50));
    y.set(Math.max(Math.min(relY, 50), -50));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ x, y, rotateX, rotateY }}
      className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-6 py-3 font-semibold shadow-[0_10px_40px_rgba(109,40,217,0.45)] transition-transform focus:outline-none focus:ring-2 focus:ring-violet-400/70 focus:ring-offset-0"
    >
      <Sparkles className="h-5 w-5" />
      {children}
      <span className="pointer-events-none absolute inset-0 rounded-xl bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
    </motion.button>
  );
};

const BuildDemo = () => {
  const [url, setUrl] = useState('https://www.aliexpress.com/item/100500...');
  const [stage, setStage] = useState('idle'); // idle | building | preview
  const [progress, setProgress] = useState(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    let timer; let prog;
    if (stage === 'building') {
      prog = setInterval(() => setProgress((p) => Math.min(100, p + Math.random() * 8)), 180);
      timer = setTimeout(() => {
        setFlipped(true);
        setTimeout(() => setStage('preview'), 420);
      }, 2600);
    }
    return () => { clearInterval(prog); clearTimeout(timer); };
  }, [stage]);

  const startBuild = () => {
    setProgress(0);
    setFlipped(false);
    setStage('building');
  };

  return (
    <div className="w-full">
      <div className="relative">
        <div className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-2 sm:p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_20px_60px_rgba(2,6,23,0.6)]">
          <div className="flex items-center gap-2">
            <div className="shrink-0 hidden sm:block rounded-lg bg-gradient-to-b from-violet-500/40 to-indigo-600/40 p-2 text-white/90">
              <LinkIcon className="h-5 w-5" />
            </div>
            <input
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Paste product URL"
              className="w-full rounded-xl bg-black/20 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500/60"
            />
            <MagneticButton onClick={startBuild}>Generate My Store</MagneticButton>
          </div>
        </div>
      </div>

      <div className="mt-5 perspective-[2000px]">
        <div className="relative h-64 sm:h-72 md:h-80">
          <motion.div
            initial={false}
            animate={{ rotateY: flipped ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 140, damping: 18 }}
            className="absolute inset-0 [transform-style:preserve-3d]"
          >
            {/* Front: building */}
            <div className="absolute inset-0 backface-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-indigo-900/30 backdrop-blur-xl p-6 flex flex-col justify-between overflow-hidden">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/60">AI Building</span>
                <span className="text-sm text-white/60">{Math.round(progress)}%</span>
              </div>
              <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                <motion.div className="h-full bg-gradient-to-r from-violet-500 to-indigo-500" animate={{ width: `${progress}%` }} />
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <motion.span
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 1.2 }}
                >Analyzing product details</motion.span>
                <motion.span
                  className="flex gap-1"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ repeat: Infinity, duration: 1.6 }}
                >
                  <span>•</span><span>•</span><span>•</span>
                </motion.span>
              </div>
            </div>

            {/* Back: preview */}
            <div className="absolute inset-0 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-0 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden">
              <div className="grid h-full grid-cols-1 md:grid-cols-2">
                <div className="p-6 flex flex-col gap-3 bg-gradient-to-b from-slate-900/60 to-slate-900/20">
                  <div className="text-xs text-white/50 uppercase tracking-wider">StoreGenie Theme</div>
                  <div className="text-white text-2xl font-semibold">Aurora Sonic Toothbrush</div>
                  <div className="text-white/70 text-sm">AI-generated copy, pricing synced, payments connected.</div>
                  <div className="mt-2 flex items-center gap-3">
                    <div className="h-10 w-28 rounded-lg bg-white/10" />
                    <div className="h-10 w-10 rounded-lg bg-white/10" />
                  </div>
                  <div className="mt-auto">
                    <button className="rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 text-sm shadow-[0_8px_30px_rgba(16,185,129,0.35)]">Preview Store</button>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(124,58,237,0.25),transparent_60%)] pointer-events-none" />
                  <div className="h-full w-full bg-gradient-to-br from-white/10 to-white/0" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[70vh] py-14">
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
            >
              <span className="bg-gradient-to-r from-indigo-200 via-white to-violet-200 bg-clip-text text-transparent">
                Turn Any Product URL Into a Complete Store — Instantly.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="mt-5 text-lg text-white/70"
            >
              Just paste a link. StoreGenie builds your store, connects inventory, pricing, and payments automatically.
            </motion.p>

            <div className="mt-8">
              <BuildDemo />
            </div>

            <div className="mt-6 flex items-center gap-4 text-white/60 text-sm">
              <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Live AI automation preview</span>
            </div>
          </div>

          <div className="relative h-[420px] sm:h-[520px] lg:h-[620px] rounded-3xl overflow-hidden">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
