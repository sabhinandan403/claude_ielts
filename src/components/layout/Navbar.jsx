import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../ui/Button.jsx'
import Container from '../ui/Container.jsx'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Results', to: '/results' },
  { label: 'Contact', to: '/contact' },
]

function navLinkClasses({ isActive }) {
  return `text-sm font-semibold transition-colors ${
    isActive ? 'text-brand-blue-700' : 'text-ink-600 hover:text-brand-blue-700'
  }`
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <NavLink to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
          <span className="font-heading text-xl font-bold text-brand-blue-900 sm:text-2xl">
            IELTS<span className="text-brand-red-600">Prep</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClasses}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button to="/contact" variant="accent">
            Book Free Demo
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-ink-900 md:hidden"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </Container>

      {isMenuOpen && (
        <nav id="mobile-nav" aria-label="Primary" className="border-t border-slate-100 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2.5 text-base font-semibold ${
                    isActive ? 'bg-brand-blue-50 text-brand-blue-700' : 'text-ink-600'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
            <Button to="/contact" variant="accent" className="mt-3 w-full" onClick={() => setIsMenuOpen(false)}>
              Book Free Demo
            </Button>
          </Container>
        </nav>
      )}
    </header>
  )
}

export default Navbar
