import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50'

const SIZES = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

const VARIANTS = {
  primary: 'bg-brand-blue-700 text-white hover:bg-brand-blue-900',
  accent: 'bg-brand-red-600 text-white hover:bg-brand-red-700',
  outline: 'border-2 border-brand-blue-700 text-brand-blue-700 hover:bg-brand-blue-50',
  ghost: 'text-brand-blue-700 hover:bg-brand-blue-50',
}

/**
 * Shared call-to-action button. Renders a React Router <Link> when `to` is
 * given, a plain <a> when `href` is given, otherwise a native <button>.
 */
function Button({ variant = 'primary', size = 'md', to, href, className = '', children, ...rest }) {
  const classes = `${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type={rest.type ?? 'button'} className={classes} {...rest}>
      {children}
    </button>
  )
}

Button.propTypes = {
  variant: PropTypes.oneOf(Object.keys(VARIANTS)),
  size: PropTypes.oneOf(Object.keys(SIZES)),
  to: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string,
}

export default Button
