import React from 'react'
import Datepicker from '../components/datepicker'
import Popup from '../components/popup'
import Checkbox from '@material-ui/core/Checkbox'
function Form() {
  return (
    <div className="form">
      <div className="form-container container">
        <div className="form-header">
          <h1>Find deals on hotels, homes, and much more... </h1>
          <h2>From cozy country homes to funky city apartments </h2>
        </div>

        <form>
          <div className="text">
            <svg viewBox="0 0 24 24" width="24px" height="24px">
              <path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z"></path>
            </svg>
            <input type="text" placeholder="Where are you going?" />
          </div>

          <div className="datepicker">
            <Datepicker />
          </div>

          <div className="popup">
            <Popup />
          </div>

          <button className="form-button">
            <span>Search</span>
          </button>
        </form>

        <div className="form-input-checkbox">
          <Checkbox
            inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
            color="primary"
            id="adam"
          />
          <label htmlFor="adam">I'm traveling for work</label>
        </div>
      </div>
    </div>
  )
}

export default Form
