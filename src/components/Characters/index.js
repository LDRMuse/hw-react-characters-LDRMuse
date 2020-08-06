import React, { useState, useEffect } from 'react'
import { Table } from './Table'
import { Form } from './Form'

import api from 'api'

export const Characters = () => {
  const [people, setPeople] = useState([])
  const [filterTxt, setFilterTxt] = useState('')

useEffect(() => {
    (async () => {
      const data = await api.index()
      setPeople(data)
    })()
  }, [])


  const handleSearchChange = ({target: {value}}) => {
    setFilterTxt(value)

  }


  const submitHandler = (event) => {
    event.preventDefault()
    console.log('clicked')

  }

  return (
    <main>
    <Table people={people}/>
    <input type='search' onChange={handleSearchChange} />
    <Form handler={submitHandler}/>
    </main>
  )

}
