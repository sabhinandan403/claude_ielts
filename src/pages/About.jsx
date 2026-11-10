import { Heart, ShieldCheck, Target } from 'lucide-react'
import Container from '../components/ui/Container.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'

const VALUES = [
  {
    Icon: Target,
    title: 'Outcome-focused',
    description: 'Every lesson maps back to your target band or score — no busywork, no filler.',
  },
  {
    Icon: ShieldCheck,
    title: 'Honest feedback',
    description: 'You’ll always know exactly where you stand, even when the feedback is hard to hear.',
  },
  {
    Icon: Heart,
    title: 'Student-first',
    description: 'Pacing, scheduling and material adapt to you, not the other way around.',
  },
]

function About() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Coaching built around your target score"
        description="We help students prepare for IELTS, PTE and everyday English fluency with structure, honest feedback and real practice — not just theory."
      />

      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading align="left" eyebrow="Our story" title="Why IELTS Prep exists" />
            <p className="mt-5 text-ink-600">
              Most test-prep courses teach English in general. We focus specifically on how IELTS, PTE
              and real-world spoken English are actually scored — and build every lesson, mock test
              and feedback session around closing the exact gap between where you are and where you
              need to be.
            </p>
            <p className="mt-4 text-ink-600">
              That means fewer generic worksheets, and more weekly mock tests, recorded speaking
              practice, and writing corrections you can act on immediately.
            </p>
          </div>
          <div className="rounded-3xl bg-brand-blue-50 p-8">
            <dl className="grid grid-cols-2 gap-6 text-center">
              <div>
                <dt className="text-sm text-ink-600">Students coached</dt>
                <dd className="mt-1 text-3xl font-bold text-brand-blue-700">500+</dd>
              </div>
              <div>
                <dt className="text-sm text-ink-600">Avg. band improvement</dt>
                <dd className="mt-1 text-3xl font-bold text-brand-blue-700">+1.5</dd>
              </div>
              <div>
                <dt className="text-sm text-ink-600">Courses offered</dt>
                <dd className="mt-1 text-3xl font-bold text-brand-blue-700">3</dd>
              </div>
              <div>
                <dt className="text-sm text-ink-600">Avg. student rating</dt>
                <dd className="mt-1 text-3xl font-bold text-brand-blue-700">4.8/5</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>

      <section className="bg-brand-blue-50/60 py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="What we value" title="How we coach" />
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {VALUES.map(({ Icon, title, description }) => (
              <div key={title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-red-600 text-white">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-900">{title}</h3>
                <p className="mt-2 text-sm text-ink-600">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export default About
