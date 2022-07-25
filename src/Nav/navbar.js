import { Tabs, Button, Tab } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function Navbar() {

  // const navigate = useNavigate();

  const [value, setValue] = useState();


  function handleChange() {

  }

  return (
    <Tabs textColor='primary' onChange={handleChange} aria-label="nav tabs">
      <Tab label="About me" href="/about" />
      <Tab label="Contact me" href="/contact" />
      <Tab label="Personal Projects" href="/projects" />
    </Tabs>
  )
}

