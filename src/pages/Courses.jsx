import { Check } from 'lucide-react'
import Button from '../components/ui/Button.jsx'
import Container from '../components/ui/Container.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import { courses } from '../data/courses.js'

function Courses() {
  return (
    <>
      <PageHero
        eyebrow="Courses"
        title="Find the right course for your goal"
        description="Every course is taught live, includes graded mock tests, and adapts to your current level."
      />

      <section className="py-16 sm:py-24">
        <Container className="space-y-16">
          {courses.map((course, index) => (
            <article
              key={course.id}
              id={course.id}
              className={`grid scroll-mt-24 gap-10 lg:grid-cols-2 lg:items-center ${
                index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div>
                <p className="text-sm font-semibold text-brand-red-600">{course.tagline}</p>
                <h2 className="mt-1 text-2xl font-bold text-ink-900 sm:text-3xl">{course.name}</h2>
                <p className="mt-4 text-ink-600">{course.description}</p>

                <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="font-semibold text-ink-900">Duration</dt>
                    <dd className="text-ink-600">{course.duration}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink-900">Format</dt>
                    <dd className="text-ink-600">{course.format}</dd>
                  </div>
                </dl>

                <Button to="/contact" variant="primary" className="mt-6">
                  Book a Free Demo
                </Button>
              </div>

              <div className="rounded-3xl bg-brand-blue-50 p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-blue-700">
                  What&apos;s included
                </h3>
                <ul className="mt-4 space-y-3">
                  {course.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-sm text-ink-900">
                      <Check size={18} className="mt-0.5 shrink-0 text-brand-blue-700" aria-hidden="true" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </Container>
      </section>
    </>
  )
}

export default Courses
