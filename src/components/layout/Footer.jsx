import { Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../ui/Container.jsx'
import SocialIcon from '../ui/SocialIcon.jsx'

// Computed once at module load, not per render — the footer never needs to
// reflect a year change without a page reload anyway.
const CURRENT_YEAR = new Date().getFullYear()

const COURSE_LINKS = [
  { label: 'IELTS Preparation', to: '/courses#ielts' },
  { label: 'PTE Preparation', to: '/courses#pte' },
  { label: 'Spoken English', to: '/courses#spoken-english' },
]

const COMPANY_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Results', to: '/results' },
  { label: 'Contact Us', to: '/contact' },
]

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://facebook.com', platform: 'facebook' },
  { label: 'Instagram', href: 'https://instagram.com', platform: 'instagram' },
  { label: 'LinkedIn', href: 'https://linkedin.com', platform: 'linkedin' },
  { label: 'YouTube', href: 'https://youtube.com', platform: 'youtube' },
]

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-brand-blue-900 text-slate-200">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-heading text-xl font-bold text-white">
            IELTS<span className="text-brand-red-500">Prep</span>
          </span>
          <p className="mt-3 text-sm text-slate-300">
            Personalised coaching for IELTS, PTE and Spoken English, with structured lessons and
            honest feedback to help you hit your target score.
          </p>
          <div className="mt-4 flex gap-3">
            {SOCIAL_LINKS.map(({ label, href, platform }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
              >
                <SocialIcon platform={platform} size={18} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Courses">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Courses</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {COURSE_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-slate-300 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Company</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {COMPANY_LINKS.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-slate-300 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">Get in touch</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href="tel:+10000000000" className="flex items-center gap-2 text-slate-300 hover:text-white">
                <Phone size={16} aria-hidden="true" /> +1 (000) 000-0000
              </a>
            </li>
            <li>
              <a
                href="mailto:hello@ieltsprep.example"
                className="flex items-center gap-2 text-slate-300 hover:text-white"
              >
                <Mail size={16} aria-hidden="true" /> hello@ieltsprep.example
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 text-xs text-slate-400 sm:flex-row">
          <p>&copy; {CURRENT_YEAR} IELTS Prep. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
