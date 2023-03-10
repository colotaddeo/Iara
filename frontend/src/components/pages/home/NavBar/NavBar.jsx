import * as React from 'react';
import './NavBar.css'
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../../../../assets/logo-login.png'
import Imagen from './fondoHome.png'
import useUserInfo from '../../../../hooks/useInfoProvider';
import Typography from '@mui/material/Typography';


const categories = [
  {
    id: 'Escritorio',
    children: [

      { 
        id: 'Recientes', 
        icon: <TimerIcon />
      },

      {
        id: 'Pacientes',
        icon: <PeopleIcon />
      }

    ],
  }

];

const item = {
  py: '2px',
  px: 3,
  my: 1,
  mx: 2,
  color: 'rgba(255, 255, 255, 0.7)',
  overflow: 'none'
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {

  const { ...other } = props;

  return (
  <>
    <Drawer variant="permanent" {...other}>
      <List disablePadding>

        <ListItem sx={{ ...item, ...itemCategory, fontSize: 20, color: '#fff', my:2}}>
          <img src={Logo}/><h2>IARA</h2>
        </ListItem>
      
        {categories.map(({ id, children }) => (

          <Box key={id} sx={{ bgcolor: '#101F33'}}>

            <ListItem sx={{ py: 2, px: 3}}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>

            {children.map(({ id: childId, icon, active }) => (

              <ListItem disablePadding key={childId}>

                <ListItemButton selected={active} sx={item}>

                  <ListItemIcon>{icon}</ListItemIcon>

                  <ListItemText>{childId}</ListItemText>

                </ListItemButton>

              </ListItem>
            ))}

            <Divider sx={{ mt: 2 }} />
          </Box>
          
        ))}
      </List>
    </Drawer>
    <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Box>
    <img className='home__deco' src={Imagen} alt="" />
  </>          
  );
  
}
