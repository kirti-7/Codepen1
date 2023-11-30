import React from 'react'

import { AppBar, Toolbar, styled} from '@mui/material';
import codepenIMG from '../assets/codepenIMG.png'

const Header = () => {

    const Container = styled(AppBar)`
        background: #060606
    `


  return (
      
      <Container position='static'>
          <Toolbar>
                <img src={codepenIMG} alt="logo" style={{width: 40}}/>
          </Toolbar>
      </Container>
     
  )
}

export default Header