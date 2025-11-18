const projects = [
  {
    title: 'Nimbus Analytics',
    tag: 'SaaS Platform',
    desc: 'Scalable web app with crisp UI and powerful dashboards.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Arteo Studio',
    tag: 'Creative Agency',
    desc: 'Portfolio that blends motion, grids, and editorial type.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Mori Health',
    tag: 'D2C Brand',
    desc: 'Headless storefront with blazing performance.',
    image: 'https://images.unsplash.com/photo-1557825835-a526744f6fc6?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-black">
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Selected Work</h2>
            <p className="mt-3 text-white/70 max-w-xl">A snapshot of projects where strategy, design, and engineering meet to drive outcomes.</p>
          </div>
          <a href="#contact" className="inline-flex h-10 items-center rounded-full bg-white/5 hover:bg-white/10 text-white px-4 text-sm border border-white/10">
            Request case study
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="text-xs text-blue-300/80">{p.tag}</span>
                <h3 className="mt-1 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-1 text-sm text-white/70">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
