import React, { useContext, useEffect, useState } from 'react'


import {Box, styled} from '@mui/material'
import { DataContext } from '../context/DataProvider'

const Result = () => {

    const Container = styled(Box)`
    height:39vh;
    `

    
    const [src, setSrc] = useState('')
    const { html, css, javascript } = useContext(DataContext);

    useEffect(() => {
      const timeOut = setTimeout(() => {
          setSrc(srcCode);
      }, 1500);
    

        return () => clearTimeout(timeOut);
    }, [html, css, javascript])
    

    const srcCode = `
    <html>
    <body>${html} </body>
    <style> ${css} </style>
    <script> ${javascript}  </script>
    </html>
    `


  return (
      <Container>
        <iframe srcDoc={src} title='Result' sandbox='allow-scripts' frameBorder={0} width={'100%'} height={'100%'}  />
      </Container>
  )
}

export default Result