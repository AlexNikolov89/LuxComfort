import { makeStyles } from "@material-ui/core";
import { blueGrey } from "@mui/material/colors";


export const useStyles =  makeStyles((theme) =>( {
    title: {
    fontSize: '30px !important',
    letterSpacing: '3px !important'
    },
    textContainer: {
        [theme.breakpoints.down("sm")]: {   
           display: 'none'
          },
   
    },
    cover: {
        background: `url(/images/pozadina4.jfif)`,
        backgroundPosition: 'center',
        backgroundSize: '100%',
        height: '40vh',
        backgroundRepeat: 'no-repeat',

        [theme.breakpoints.down("sm")]: {
            width: '100%',
            height: '69px'
          },
    },
    container: {
    width: '35%',
    margin: '25px 50px',
    
    },
    title: {
        fontSize: '30px !important',
        color: blueGrey[800],

        [theme.breakpoints.down("sm")]: {
            fontSize: '10px !important'
        },
    },
    button: {
        //fontSize: '20px !important',
        padding: '10px 35px !important',
        border: '1px solid #455a64 !important',
        // color: '#37474f !important',
        fontWeight: '600 !important',
        backgroundColor: 'transparent !important',
        outline: 'none !important',
        '&:hover': {
            background: '#607d8b !important',
            border: '1px solid #607d8b !important',
            //color: 'white !important',
            transition: '0.4s ease !important',
        },
        [theme.breakpoints.down("sm")]: {
            position: 'relative',
            right: '45px',
            bottom: '15px',
            fontSize: '12px !important',
            padding: '5px 22px !important',
          },
    },
    link: {
        fontSize: '20px !important',
        color: '#37474f !important',
        textDecoration: 'none',

        '&:hover': {
           
            color: 'white !important',
        },
        [theme.breakpoints.down("sm")]: {
      
            fontSize: '12px !important',
            //padding: '5px 22px !important',
          },
    }
}))
