import { CalendarClock, LineChart, Star, Target, Users } from 'lucide-react'
import Accordion from '../components/ui/Accordion.jsx'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import Container from '../components/ui/Container.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { courses } from '../data/courses.js'
import { faqs } from '../data/faqs.js'
import { testimonials } from '../data/testimonials.js'

const STATS = [
  { label: 'Students coached', value: '500+' },
  { label: 'Average band improvement', value: '+1.5' },
  { label: 'Avg. student rating', value: '4.8/5' },
]

const BENEFITS = [
  {
    Icon: Target,
    title: 'Personalised study plan',
    description: 'A plan built around your current level, target score and timeline — not a generic syllabus.',
  },
  {
    Icon: Users,
    title: 'Expert instructors',
    description: 'Learn from trainers experienced in IELTS, PTE and Spoken English scoring criteria.',
  },
  {
    Icon: LineChart,
    title: 'Progress you can track',
    description: 'Weekly mock tests and band-wise feedback show exactly where you’re improving.',
  },
  {
    Icon: CalendarClock,
    title: 'Flexible scheduling',
    description: '1-on-1 or small-group sessions that fit around your work, college or travel plans.',
  },
]

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-gradient-to-b from-brand-blue-50 to-white">
        <Container className="grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex items-center rounded-full bg-brand-red-50 px-4 py-1.5 text-sm font-semibold text-brand-red-600">
              Free demo class available
            </p>
            <h1 className="text-4xl font-bold leading-tight text-ink-900 sm:text-5xl">
              Reach your target <span className="text-brand-blue-700">IELTS</span>,{' '}
              <span className="text-brand-red-600">PTE</span> or Spoken English score
            </h1>
            <p className="mt-5 text-lg text-ink-600">
              Personalised coaching, weekly mock tests and honest feedback — built around how you learn
              best, not a one-size-fits-all course.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact" variant="accent" size="lg">
                Book Free Demo
              </Button>
              <Button to="/courses" variant="outline" size="lg">
                Explore Courses
              </Button>
            </div>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-6 rounded-[2.5rem] bg-brand-blue-700" aria-hidden="true" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4/5 rounded-3xl bg-white p-6 shadow-xl">
                <p className="text-sm font-semibold text-ink-600">Your target band</p>
                <p className="mt-2 text-5xl font-bold text-brand-blue-700">7.5+</p>
                <div className="mt-4 flex items-center gap-1 text-brand-red-600">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
                  ))}
                  <span className="ml-2 text-sm font-medium text-ink-600">4.8/5 from 200+ students</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-100 bg-white">
        <Container className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold text-brand-blue-700">{stat.value}</p>
              <p className="mt-1 text-sm text-ink-600">{stat.label}</p>
            </div>
          ))}
        </Container>
      </section>

      {/* Courses */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Courses"
            title="Choose the course that fits your goal"
            description="Every course includes structured lessons, graded mock tests and one-on-one feedback."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
              <Card key={course.id} className="flex flex-col">
                <p className="text-sm font-semibold text-brand-red-600">{course.tagline}</p>
                <h3 className="mt-1 text-xl font-bold text-ink-900">{course.name}</h3>
                <p className="mt-3 flex-1 text-sm text-ink-600">{course.description}</p>
                <Button to={`/courses#${course.id}`} variant="ghost" className="mt-5 self-start px-0!">
                  Learn more &rarr;
                </Button>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-brand-blue-50/60 py-16 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="Why IELTS Prep"
            title="Learn smarter, not just harder"
            description="A focused approach built from what actually moves test scores."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map(({ Icon, title, description }) => (
              <div key={title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue-700 text-white">
                  <Icon size={22} aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink-900">{title}</h3>
                <p className="mt-2 text-sm text-ink-600">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionHeading eyebrow="Results" title="What students say" />
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name}>
                <div className="flex items-center gap-1 text-brand-red-600">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-4 text-sm text-ink-600">&ldquo;{testimonial.quote}&rdquo;</p>
                <p className="mt-4 text-sm font-semibold text-ink-900">
                  {testimonial.name} <span className="text-brand-blue-700">&middot; {testimonial.result}</span>
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-brand-blue-50/60 py-16 sm:py-24">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
          <div className="mt-12">
            <Accordion items={faqs} />
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-brand-blue-900 py-16 sm:py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to reach your target score?</h2>
          <p className="max-w-xl text-brand-blue-100">
            Start with a free demo class and a personalised assessment of where you stand today.
          </p>
          <Button to="/contact" variant="accent" size="lg">
            Book Your Free Demo
          </Button>
        </Container>
      </section>
    </>
  )
}

export default Home
