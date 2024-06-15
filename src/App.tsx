import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Button, Card, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import Routes from './Routes';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import VrpanoIcon from '@mui/icons-material/Vrpano';
import { Padding } from '@mui/icons-material';


function App() {


  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <div className="App">
      <AppBar position="static" style={{ background: "linear-gradient(270deg, rgba(2,0,36,1) 0%, rgba(3,44,48,1) 39%, rgba(0,212,255,1) 100%)", padding: '10px 0px' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setOpenSideBar(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{ fontSize: '35px', fontFamily: 'sans' }}>
            APP INVENTORY
          </Typography>
        </Toolbar>
        <Drawer
          anchor="left"
          open={openSideBar}
          onClose={() => setOpenSideBar(false)}
        >
          <div>
            <Toolbar />
            <Divider />
            <List style={{ padding: ' 0px 30px 0px 30px' }}>
              {['Home', 'AR', 'VR'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton href={index === 0 ? "/" : (index === 1 ? "/arApps" : "/vrApps")}>
                    <ListItemIcon>
                      {index === 0 ? <HomeIcon /> : (index === 1 ? <ViewInArIcon /> : <VrpanoIcon />)}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      </AppBar>
      <Routes />

    </div>
  );
}

export default App;
