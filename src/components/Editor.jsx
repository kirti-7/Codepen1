
import { Box, styled } from '@mui/material';
import { CloseFullscreen } from '@mui/icons-material';
import {OpenInFull} from '@mui/icons-material';

import { Controlled as ControlledEditor } from 'react-codemirror2';



import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import '../App.css'
import { useState } from 'react';


const Container = styled(Box)`
flex-grow:1;
flex-basic: 0;
display: flex;
flex-direction: column;
padding: 0 1px 1px;
max-width: 1318px;
`



const Heading = styled(Box)`
background: #1d1e22;
display: flex;
padding: 9px 12px;
`

const Header = styled(Box)`
display: flex;
background: #060606;
color: #aaaebc;
justify-content: space-between;
font-weight: 700;
align-items: center;
`


const Editor = (props) => {

    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        props.onChange(value);
    }

    return (
        <Container style={ open ? null : {flexGrow: 0} } >
            <Header>
                <Heading>
                    <Box
                        component="span"
                        style={{
                            background: props.color,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            placeContent: 'center',
                            borderRadius: 5,
                            marginRight: 5,
                            paddingBottom: 2,
                            color: 'black'
                        }}
                    >{props.icon}</Box>
                    {open ? props.heading  : ''}
                    
                </Heading>
                
                {open ? <CloseFullscreen onClick={() => setOpen((prevState) => !prevState)} /> : <OpenInFull onClick={() => setOpen((prevState) => !prevState)} />}
            </Header>
            <ControlledEditor
                className='controlled-editor'
                options={{
                    lineWrapping: true,
                    theme: "material",
                    lineNumbers: true,
                }}
                value={props.value}
            onBeforeChange = {handleChange}
            />
        </Container>
    )
}

export default Editor;