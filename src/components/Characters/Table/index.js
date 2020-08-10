import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import { Person } from './Person'

export const Table = ({people, filterTxt}) => {


  const renderPeople = () => {
    return people.filter(({name}) =>
    filterTxt ?
    name.toLowerCase().startsWith(filterTxt.toLowerCase())
    : true
    ).map(({ job, name }, i) => {
      return <Person job={job} key={i} name={name} />
    })
  }
// TODO: Center table with flexbox?
  return (

    <Fragment>
    <h1 className='title is-2 has-background-primary'>Characters</h1>
    <table className="table">
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
  people: PropTypes.array.isRequired,
  filterTxt: PropTypes.string
}
