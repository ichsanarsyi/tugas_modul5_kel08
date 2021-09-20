import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


export default function BottomAppBar() {
    return (    
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }} style={{ backgroundColor:"#0d0d0f" }}>
            <Toolbar style={{ textAlign:"center" }}>
                <Box sx={{ flexGrow: 1 }}></Box>
                <Box component="span" sx={{ flexGrow: 4, border: 1, borderRadius:2, borderColor: "#ededed" }}>
                    <Button href="/home" style={{ color:"#ededed" }} >Home</Button>
                </Box>
                <Box sx={{ flexGrow: 2 }}></Box>
                <Box component="span" sx={{ flexGrow: 4, border: 1, borderRadius:2, borderColor: "#ededed" }}>
                    <Button href="/list" style={{ color:"#ededed" }}>
                        Recipes List
                    </Button>
                </Box>
                <Box sx={{ flexGrow: 1 }}></Box>
            </Toolbar>
        </AppBar>
    )
}