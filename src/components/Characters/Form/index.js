import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

export const Form = ({ handler }) => {


  return (
    <Fragment>
      <form className="field" onSubmit={handler}>
      <div></div>
        <label className="label">Name</label>
        <div className="control">
          <input id="firstname" className="input is-primary" type="text" placeholder="First Name Only" />
        </div>



        <label className="label">Job</label>
        <div className="control">
          <input id="job" className="input is-primary" type="text" placeholder="Job Description" />
        </div>
        <button className="button" type="Submit">Add Character</button>
      </form>
    </Fragment>

  )
}

Form.propTypes = {
  handler: PropTypes.func.isRequired,
}
