import React, { useRef } from 'react'

function Accordion() {
  const panelInput = useRef()
  const buttonInput = useRef()
  const handleAccordion = (e) => {
    buttonInput.current.classList.toggle('active')

    const panel = panelInput.current

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + 'px'
    }
  }

  return (
    <div className="collapse">
      <div className="container">
        <button
          className="accordion"
          onClick={handleAccordion}
          ref={buttonInput}
        >
          <div>
            <svg viewBox="0 0 24 24" width="24px" height="24px">
              <path d="M14.25 15.75h-.75a.75.75 0 0 1-.75-.75v-3.75a1.5 1.5 0 0 0-1.5-1.5h-.75a.75.75 0 0 0 0 1.5h.75V15a2.25 2.25 0 0 0 2.25 2.25h.75a.75.75 0 0 0 0-1.5zM11.625 6a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25.75.75 0 0 0 0 1.5.375.375 0 1 1 0-.75.375.375 0 0 1 0 .75.75.75 0 0 0 0-1.5zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z"></path>
            </svg>

            <span>Coronavirus (COVID-19) support</span>
          </div>
        </button>

        <div className="panel" ref={panelInput}>
          <p>
            Check for travel restrictions. Travel might only be permitted for
            certain purposes, and touristic travel in particular may not be
            allowed.
          </p>

          <p>
            <a href="#">Read more</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Accordion
