import { Star } from 'lucide-react'
import Button from '../components/ui/Button.jsx'
import Card from '../components/ui/Card.jsx'
import Container from '../components/ui/Container.jsx'
import PageHero from '../components/ui/PageHero.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { testimonials } from '../data/testimonials.js'

const STATS = [
  { label: 'Students coached', value: '500+' },
  { label: 'Average band improvement', value: '+1.5' },
  { label: 'Students scoring 7+ / 65+', value: '82%' },
]

function Results() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Real scores from real students"
        description="A snapshot of the outcomes students have reached through structured coaching and consistent mock testing."
      />

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-8 rounded-3xl bg-brand-blue-50 p-8 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-brand-blue-700">{stat.value}</p>
                <p className="mt-1 text-sm text-ink-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <SectionHeading className="mt-16" eyebrow="Testimonials" title="What students say" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <h2 className="text-2xl font-bold text-ink-900">Ready to add your own result here?</h2>
            <Button to="/contact" variant="accent" size="lg">
              Book Your Free Demo
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Results
