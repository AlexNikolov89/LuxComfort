import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
    toolbar: {
        border: '1px solid lightgrey', 
        flexDirection: 'row',  
        padding: '70px 0', 
        justifyContent: 'space-around',

        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column !important',
            padding: '30px 0',
          },        
    },
    expandInfo: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',

        [theme.breakpoints.up("sm")]: {
            padding: '30px 0',
            display: 'none !important'
          },
    },
    column: {
        [theme.breakpoints.down("sm")]: {
            padding: '30px 0',
            display: 'none !important'
          },
    },
    typography: {
        fontWeight: '700 !important', 
        fontSize: '18px !important',

        [theme.breakpoints.down("sm")]: {
            fontWeight: '600 !important',
            fontSize: '14px !important'
          },
    },
    panelDetails: {
        flexDirection: 'column',
    },
    socialIcons: {
        justifyContent: 'center',
         padding: '60px 0',

         [theme.breakpoints.down("sm")]: {
            padding: '10px 0'
          },
    },
    icon: {
        marginRight: '20px !important', 
        fontSize: '40px !important', 
        color: '#455a64',

        [theme.breakpoints.down("sm")]: {
           fontSize: '22px !important'
          },
    }
}))