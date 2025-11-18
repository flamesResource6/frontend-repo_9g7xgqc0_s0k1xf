import { Code2, Palette, WordPress, LineChart } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'Web Design',
    desc: 'Conversion-focused design systems, prototypes, and UI kits that elevate your brand.',
  },
  {
    icon: WordPress,
    title: 'WordPress Development',
    desc: 'Custom, fast, and secure builds with Gutenberg, ACF, and headless architectures.',
  },
  {
    icon: Code2,
    title: 'Branding',
    desc: 'Identity, guidelines, and assets that communicate your value with clarity.',
  },
  {
    icon: LineChart,
    title: 'SEO & Performance',
    desc: 'Technical SEO, Core Web Vitals, and content strategies that drive results.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative bg-black">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.07),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Services</h2>
          <p className="mt-3 text-white/70">Built to scale with your business — designed to impress your audience.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.06] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 ring-1 ring-inset ring-blue-300/20 flex items-center justify-center text-blue-400">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
