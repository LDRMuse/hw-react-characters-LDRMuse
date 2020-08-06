import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

export const Form = ({ handler }) => {


  return (
    <Fragment>
      <form onSubmit={handler}>
        <input placeholder="First Name Only" type="text"
          id="firstName" />
        <input placeholder="Job Description" type="text"
          id="email" />
        <button type="Submit">Add Character</button>
      </form>
    </Fragment>

  )
}

Form.propTypes = {
  handler: PropTypes.func,
}
