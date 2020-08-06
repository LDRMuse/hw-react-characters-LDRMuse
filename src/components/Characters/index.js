import React, { useState, useEffect } from 'react'
import { Table } from './Table'
import { Form } from './Form'
import api from 'api'

export const Characters = () => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    (async () => {
      const data = await api.index()
      setPeople(data)
    })()
  }, [])

  return (
    <main>
    <Table />
    <Form />
    </main>
  )

}
