import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

export const Form = ({ handler }) => {


  return (
    <Fragment>
      <div className="field" onSubmit = { handler }>
  <label className="label">Name</label>
  <div className="control">
    <input id="firstname" className="input" type="text" placeholder="First Name Only" />
  </div>
</div>

<div className="field">
  <label className="label">Job</label>
  <div className="control">
    <input id='job' className="input" type="email" placeholder="Job Description" />
  </div>
</div>
    </Fragment>

  )
}

Form.propTypes = {
  handler: PropTypes.func,
}
