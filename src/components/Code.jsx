import React from 'react'
import { useContext } from 'react';
import {DataContext} from '../context/DataProvider'

import Editor from './Editor'

import { Box, styled } from '@mui/material';

const Container = styled(Box)`
display: flex;
background-color: black;
`

const Code = () => {

  const { html, setHtml, css, setCss, javascript, setJavascript } = useContext(DataContext);


  return (
      <Container>
      <Editor heading='HTML' icon='/' color='#ff3c41' value={html} onChange={(e) => setHtml(e)} />
      <Editor heading='CSS' icon='*' color='#0ebeff' value={css} onChange={setCss} />
      <Editor heading='JS' icon='()' color='#fcd000' value={javascript} onChange={(e) => setJavascript(e.target.value)} />
      </Container>
      
  )
}
export default Code



// In both cases, the goal is to respond to the onChange event, but the first method (onChange={(e) => setHtml(e)}) allows for more explicit manipulation or preprocessing of the event object before passing it to the function, while the second method (onChange={setCss}) assumes that setCss can directly handle the event or value.