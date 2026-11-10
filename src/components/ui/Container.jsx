import PropTypes from 'prop-types'

/** Centers and constrains page content to a consistent max width with responsive side padding. */
function Container({ as: Tag = 'div', className = '', children }) {
  return (
    <Tag className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Tag>
  )
}

Container.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Container
