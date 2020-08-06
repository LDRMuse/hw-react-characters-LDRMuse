import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { Person } from './Person'

export const Table = ({people}) => {


  const renderPeople = () => {
    return people.map(({ job, name }, i) => {
      return <Person job={job} key={i} name={name} />
    })
  }

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
      {renderPeople()}
      </tbody>
    </table>
    </Fragment>
    )
}

Table.propTypes = {
  people: PropTypes.array.isRequired
}
