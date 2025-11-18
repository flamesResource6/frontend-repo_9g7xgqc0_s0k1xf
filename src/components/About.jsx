export default function About() {
  return (
    <section id="about" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About Websketch</h2>
          <p className="mt-4 text-white/80">We’re a tight-knit team of strategists, designers, and engineers crafting premium digital experiences. Our approach blends clarity, aesthetics, and measurable results.</p>
          <div className="mt-8 grid sm:grid-cols-3 gap-6">
            {[{k:'Projects',v:'120+'},{k:'Avg. ROI',v:'4.2x'},{k:'Client NPS',v:'72'}].map((m)=>(
              <div key={m.k} className="border border-white/10 rounded-xl p-5 bg-white/[0.02]">
                <p className="text-sm text-white/60">{m.k}</p>
                <p className="text-2xl font-semibold mt-1">{m.v}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="aspect-video rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] p-1">
            <div className="w-full h-full rounded-lg bg-gradient-to-br from-blue-600/30 to-blue-400/10 flex items-center justify-center text-white/70">
              We partner with founders and marketing teams to ship work that moves metrics.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
