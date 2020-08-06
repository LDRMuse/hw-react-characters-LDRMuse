import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

export const Form = ({ handler }) => {


  return (
    <Fragment>
      <form onSubmit={handler}>
        <label htmlFor="firstName"></label>
        <input placeholder="First Name" type="text"
          id="firstName" />
        <label htmlFor="lastName"></label><input placeholder="Last Name" type="text"
          id="lastName" />
        <label htmlFor="job"></label><input placeholder="Job Description" type="text"
          id="email" />
        <button type="Submit">Add Character</button>
      </form>
    </Fragment>

  )
}

Form.propTypes = {
  handler: PropTypes.func,
}
