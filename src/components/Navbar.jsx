import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#services', label: 'Services' },
    { href: '#work', label: 'Work' },
    { href: '#about', label: 'About' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="inline-flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-gradient-to-tr from-blue-600 to-blue-400 shadow-lg"></div>
          <span className="text-white font-bold text-lg tracking-tight">Websketch</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-md bg-white text-black font-semibold hover:bg-blue-500 hover:text-white transition-colors">
            Let's Talk
          </a>
        </div>

        <button aria-label="Toggle menu" onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-6 space-y-3 bg-black/80 backdrop-blur-md border-t border-white/10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="block text-white/90 py-2" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center px-4 py-2 rounded-md bg-white text-black font-semibold">
            Let's Talk
          </a>
        </div>
      )}
    </header>
  )
}
