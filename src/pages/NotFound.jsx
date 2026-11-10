import Button from '../components/ui/Button.jsx'
import Container from '../components/ui/Container.jsx'

function NotFound() {
  return (
    <section className="py-24">
      <Container className="flex flex-col items-center gap-5 text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-red-600">404</p>
        <h1 className="text-3xl font-bold text-ink-900 sm:text-4xl">Page not found</h1>
        <p className="max-w-md text-ink-600">
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <Button to="/" variant="primary">
          Back to Home
        </Button>
      </Container>
    </section>
  )
}

export default NotFound
