import PropTypes from 'prop-types'

/** Generic elevated surface used for course, feature and testimonial cards. */
function Card({ className = '', children }) {
  return (
    <div
      className={`rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md ${className}`}
    >
      {children}
    </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Card
