import Container from '../components/ui/Container.jsx'
import PageHero from '../components/ui/PageHero.jsx'

function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="py-16 sm:py-24">
        <Container className="max-w-3xl space-y-6 text-ink-600">
          <p>
            This is placeholder privacy policy content. Replace it with your actual policy covering what
            data you collect (e.g. contact form submissions), how it’s used, and how students can
            request it be deleted, before taking this site live.
          </p>
          <p>
            At minimum, a real policy should cover: what personal data is collected, why it’s
            collected, how long it’s retained, whether it’s shared with third parties (e.g. a
            form or email provider), and how someone can contact you to access or delete their data.
          </p>
        </Container>
      </section>
    </>
  )
}

export default Privacy
