import Container from '../components/ui/Container.jsx'
import PageHero from '../components/ui/PageHero.jsx'

function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl space-y-6 text-ink-600">
          <p>
            This is placeholder terms &amp; conditions content. Replace it with your actual terms
            covering enrolment, payment, rescheduling/cancellation, and acceptable use, before taking
            this site live.
          </p>
          <p>
            Consider covering: what’s included in each course, refund/cancellation conditions,
            rescheduling policy for live sessions, and any disclaimers about guaranteed outcomes (test
            scores can’t be guaranteed).
          </p>
        </Container>
      </section>
    </>
  )
}

export default Terms
