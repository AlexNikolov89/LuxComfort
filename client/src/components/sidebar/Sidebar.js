import React, { Fragment, useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useHistory } from 'react-router';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  sidebar: {
    [theme.breakpoints.up("sm")]: {
      display: 'none',
    },
  },
}))



const Sidebar = ({children}) => {
  const classes = useStyles()
    const history = useHistory()
    const [state, setState] = useState({
        left: false,
      });

      const userLoginReducer = (state => state.userLoginReducer)
      const {userInfo} = userLoginReducer

      const categoriesData = [
         {text: 'Sofas', onClick: () => history.push('/sofas')},
        {text: 'Chairs', onClick: () => history.push('/chairs')},
        {text: 'Dining', onClick: () => history.push('/dining')},
        {text: 'Beds', onClick: () => history.push('/beds')},
        {text: 'Light', onClick: () => history.push('/lightening')},
        {text: 'Kitchen', onClick: () => history.push('/kitchen')},
        {text: 'outdoors', onClick: () => history.push('/outdoors')},
        {text: 'Office', onClick: () => history.push('/office')},
        {text: 'Accessories', onClick: () => history.push('/accessories')},
        {text: 'All Products', onClick: () => history.push('/all-products')},
      ]

      const loginData = [
        {text: 'Sign In', onClick: () => history.push('/login')},
        {text: 'Sign Up', onClick: () => history.push('/register')},
      ]
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
    
      const list = (anchor) => (
        <Box
          className={classes.sidebar}
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            {categoriesData.map((category, index) => {
                const {text, onClick} = category;
                return (
                    <ListItem button key={text} onClick={onClick}>
                        
                        <ListItemText primary={text} className={classes.categories} />
                    </ListItem>
                )
              
            })}
            </List>

            <Divider />

            <List>
            {loginData.map((data, index) => {
              const {text, onClick} = data;
              return (
                  <ListItem button key={text} onClick={onClick}>
                      
                      <ListItemText primary={text} />
                  </ListItem>
              )
                })}
            </List>
        </Box>
      );
    
      return (
        <div>
            <Fragment key={'left'}>
              <Button onClick={toggleDrawer('left', true)}>{children}</Button>
              <Drawer
                anchor={'left'}
                open={state['left']}
                onClose={toggleDrawer('left', false)}
              >
                {list('left')}
              </Drawer>
            </Fragment>
        </div>
      );
}

export default Sidebar
