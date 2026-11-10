import PropTypes from 'prop-types'

/** Consistent eyebrow + heading + optional supporting copy used atop every page section. */
function SectionHeading({ eyebrow, title, description, align = 'center', className = '' }) {
  const alignment = align === 'left' ? 'text-left' : 'text-center mx-auto'

  return (
    <div className={`max-w-2xl ${alignment} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-red-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-ink-600 sm:text-lg">{description}</p>}
    </div>
  )
}

SectionHeading.propTypes = {
  eyebrow: PropTypes.string,
  title: PropTypes.node.isRequired,
  description: PropTypes.node,
  align: PropTypes.oneOf(['left', 'center']),
  className: PropTypes.string,
}

export default SectionHeading
