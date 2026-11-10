import PropTypes from 'prop-types'
import Container from './Container.jsx'

/** Compact banner used atop secondary (non-Home) pages. */
function PageHero({ eyebrow, title, description }) {
  return (
    <section className="bg-brand-blue-900 py-14 sm:py-20">
      <Container className="text-center">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-red-500">{eyebrow}</p>
        )}
        <h1 className="text-3xl font-bold text-white sm:text-4xl">{title}</h1>
        {description && <p className="mt-4 text-brand-blue-100 mx-auto max-w-2xl">{description}</p>}
      </Container>
    </section>
  )
}

PageHero.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
}

export default PageHero
