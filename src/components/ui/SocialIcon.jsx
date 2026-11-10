import PropTypes from 'prop-types'

/**
 * Minimal outline social-platform glyphs, drawn to match lucide-react's
 * stroke style (lucide dropped brand/logo icons from its icon set).
 */
const PATHS = {
  facebook: (
    <path d="M14 9h2V6h-2c-1.66 0-3 1.34-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9.5c0-.28.22-.5.5-.5z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="8" y1="11" x2="8" y2="16" />
      <line x1="8" y1="8" x2="8" y2="8" />
      <path d="M12 16v-3a2 2 0 0 1 4 0v3" />
      <line x1="12" y1="11" x2="12" y2="16" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="3.5" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5z" fill="currentColor" stroke="none" />
    </>
  ),
}

function SocialIcon({ platform, size = 18, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[platform]}
    </svg>
  )
}

SocialIcon.propTypes = {
  platform: PropTypes.oneOf(Object.keys(PATHS)).isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
}

export default SocialIcon
