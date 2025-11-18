import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'They delivered a site that not only looks world-class but also doubled our conversions within a month.',
    name: 'Alex Carter', role: 'CMO, Orbit Finance'
  },
  {
    quote: 'The process was seamless. Strategy-first thinking with pixel-perfect execution.',
    name: 'Maya Lin', role: 'Founder, Nova Studio'
  },
  {
    quote: 'Fast, SEO-friendly, and easy for our team to manage. A genuine growth partner.',
    name: 'Daniel Kim', role: 'Head of Growth, Lumen Labs'
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">What clients say</h2>
          <p className="mt-3 text-white/70">Real words from teams we’ve partnered with.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <figure key={i} className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
              <div className="flex gap-1 text-blue-400">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={16} fill="#60a5fa" className="text-blue-400" />
                ))}
              </div>
              <blockquote className="mt-4 text-white/80">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-white/60">{t.name} — {t.role}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
