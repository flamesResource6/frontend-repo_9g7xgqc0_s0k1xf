import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-28 grid md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]"
          >
            Premium web experiences for ambitious brands
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="mt-6 text-lg text-white/80 max-w-xl"
          >
            Websketch designs and builds high-impact websites that convert. Strategy, design, and development—done right.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-400 transition-colors">
              Start a Project
            </a>
            <a href="#work" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/10 transition-colors">
              See Our Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-10 flex items-center gap-6 text-sm text-white/70"
          >
            <span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Web Design</span>
            <span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> WordPress</span>
            <span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Branding</span>
            <span className="inline-flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> SEO</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
