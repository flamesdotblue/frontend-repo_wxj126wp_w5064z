import { motion } from 'framer-motion';

const Brand = ({ name }) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.02 }}
    className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_10px_30px_rgba(2,6,23,0.45)]"
  >
    <div className="text-lg font-semibold tracking-wide">{name}</div>
  </motion.div>
);

const Integrations = () => {
  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.12),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Seamless Integrations</h2>
          <p className="mt-3 text-white/70">Connect inventory, orders, and payments across your favorite platforms.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Brand name="AliExpress" />
          <Brand name="Shopify" />
          <Brand name="Amazon" />
          <Brand name="WooCommerce" />
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
            className="flex min-w-[200%] gap-6 p-6"
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-10 w-28 rounded-lg bg-gradient-to-r from-violet-500/30 to-indigo-500/30" />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
