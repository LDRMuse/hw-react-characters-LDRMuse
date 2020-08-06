import React, { useState, useEffect } from 'react'
import { Form } from './Form'
import api from 'api'

export const Table = () => {
const [people, setPeople] = useState([])

useEffect(() => {
  (async () => {
    const data = await api.index()
    setPeople(data)
  })()
}, [])



  return <Form />

}
