import React from 'react'
import PropTypes from 'prop-types'

export const Person = ({ job, name }) => {

  return (
    <tr>
      <td>{name}</td>
      <td>{job}</td>
    </tr>
  )
}

Person.propTypes = {
  job: PropTypes.string,
  name: PropTypes.string
}
