import { ChevronDown } from 'lucide-react'
import PropTypes from 'prop-types'
import { useState } from 'react'

/** Single-open accordion for FAQ-style content. `items` is [{ question, answer }]. */
function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
      {items.map((item, index) => {
        const isOpen = index === openIndex
        const panelId = `accordion-panel-${index}`
        const buttonId = `accordion-button-${index}`

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-ink-900"
              >
                {item.question}
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className={`shrink-0 text-brand-blue-700 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </h3>
            {isOpen && (
              <div id={panelId} role="region" aria-labelledby={buttonId} className="px-5 pb-4 text-sm text-ink-600">
                {item.answer}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    }),
  ).isRequired,
}

export default Accordion
