import { Mail, Phone } from 'lucide-react'
import { useState } from 'react'
import Button from '../components/ui/Button.jsx'
import Container from '../components/ui/Container.jsx'
import PageHero from '../components/ui/PageHero.jsx'

const INITIAL_FORM = { name: '', email: '', phone: '', message: '' }

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Please enter your name.'
  if (!form.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.message.trim()) errors.message = 'Please tell us what you’re looking for.'
  return errors
}

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | success

  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)
    if (Object.keys(validationErrors).length > 0) return

    // NOTE: this is a static site with no backend. Wire this up to a form
    // endpoint (e.g. Formspree, Getform) or your own API before going live.
    setStatus('success')
    setForm(INITIAL_FORM)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book your free demo class"
        description="Tell us a bit about your goal and we’ll get back to you to schedule a free assessment."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {status === 'success' && (
              <div
                role="status"
                className="mb-6 rounded-xl border border-brand-blue-200 bg-brand-blue-50 px-4 py-3 text-sm text-brand-blue-900"
              >
                Thanks! Your message has been received — we’ll be in touch shortly.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-ink-900">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-blue-600"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-sm text-brand-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-ink-900">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-blue-600"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-sm text-brand-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-ink-900">
                  Phone number <span className="text-ink-400">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-blue-600"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-ink-900">
                  What are you preparing for?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-brand-blue-600"
                />
                {errors.message && (
                  <p id="message-error" className="mt-1.5 text-sm text-brand-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button type="submit" variant="accent" size="lg" className="w-full sm:w-auto">
                Request Free Demo
              </Button>
            </form>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-3xl bg-brand-blue-50 p-8">
              <h2 className="text-lg font-bold text-ink-900">Prefer to reach out directly?</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <a href="tel:+10000000000" className="flex items-center gap-3 font-medium text-ink-900">
                    <Phone size={18} className="text-brand-blue-700" aria-hidden="true" /> +1 (000) 000-0000
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@ieltsprep.example"
                    className="flex items-center gap-3 font-medium text-ink-900"
                  >
                    <Mail size={18} className="text-brand-blue-700" aria-hidden="true" /> hello@ieltsprep.example
                  </a>
                </li>
              </ul>
              <p className="mt-6 text-sm text-ink-600">
                We typically respond within one business day and can schedule your free demo class at a
                time that works for you.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Contact
