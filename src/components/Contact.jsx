import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // Simulate sending
    setTimeout(() => setStatus('Thanks! We will get back to you within 24 hours.'), 800)
  }

  return (
    <section id="contact" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_50%_0%,rgba(59,130,246,0.15),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Tell us about your project</h2>
          <p className="mt-3 text-white/70">We’ll review your goals and send a tailored proposal.</p>
          <div className="mt-8 border border-white/10 rounded-xl p-6 bg-white/[0.02]">
            <p className="text-sm text-white/60">Prefer email?</p>
            <a href="mailto:hello@websketch.studio" className="text-lg font-semibold text-blue-400 hover:text-blue-300">hello@websketch.studio</a>
          </div>
        </div>

        <div className="md:col-span-7">
          <form onSubmit={handleSubmit} className="border border-white/10 rounded-xl p-6 bg-white/[0.02] grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <label className="text-sm text-white/70">Name</label>
              <input required className="mt-1 w-full bg-black border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm text-white/70">Email</label>
              <input type="email" required className="mt-1 w-full bg-black border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-white/70">Company</label>
              <input className="mt-1 w-full bg-black border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-white/70">Project details</label>
              <textarea rows={5} required className="mt-1 w-full bg-black border border-white/10 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between gap-4">
              <p className="text-sm text-white/60">We respect your privacy. No spam.</p>
              <button className="inline-flex items-center px-5 py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-400">Send</button>
            </div>
            {status && <p className="sm:col-span-2 text-green-400">{status}</p>}
          </form>
        </div>
      </div>

      <div className="relative mt-20 max-w-7xl mx-auto px-6">
        <div className="rounded-xl overflow-hidden border border-white/10 bg-gradient-to-r from-blue-600 to-blue-400 p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">Have a vision? Let’s sketch it into reality.</h3>
            <p className="text-white/80">We’ll turn your ideas into a performant, elegant product.</p>
          </div>
          <a href="#contact" className="inline-flex items-center px-5 py-2 rounded-md bg-black text-white font-semibold hover:bg-black/80">Start a Project</a>
        </div>
      </div>
    </section>
  )
}
