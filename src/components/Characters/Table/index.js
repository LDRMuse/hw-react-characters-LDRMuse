import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

export const Table = ({people}) => {
  return (

    <Fragment>
    <h1>Characters</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Job</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{people.name}</td>
          <td>{people.job}</td>
        </tr>
      </tbody>
    </table>
    </Fragment>
    )
}

Table.propTypes = {
  people: PropTypes.array.isRequired
}
