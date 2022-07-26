import { makeStyles } from "@material-ui/core";
import { blueGrey, grey } from "@mui/material/colors";

export const useStyles =  makeStyles((theme) =>({
    container: {
        padding: '30px 100px',

        [theme.breakpoints.down("sm")]: {
            //height: '100vh',
            padding: '30px 20px',
          },
    },
    card: {
        display: 'flex',
        width: '100%',
        //padding: '50px',

        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column'
            
          },
    },
    image: {
        width: '65%',

        [theme.breakpoints.down("sm")]: {
               
          },
    },
    content: {
        width: '50%',

        [theme.breakpoints.down("sm")]: {
           width: '100%'
        },
    },
    cardInfo: {
        marginBottom: '30px', 
        justifyContent: 'space-between',

        [theme.breakpoints.down("sm")]: {
            marginBottom: '-30px'
         },
    },
    typography: {
        color: 'inherit',
        margin: '20px 0',

        [theme.breakpoints.down("sm")]: {
            fontSize: '14px !important',
            margin: '5px 0',
         },
    },
    formWrapp: {
        justifyContent: 'space-between', 
        marginTop: '30px'
    },
    form: {
        width: '100px',

        [theme.breakpoints.down("sm")]: {
            width: '70px'
         },
    },
    button: {
        //width: '60%', 
        padding: '15px 80px',
        border: '1px solid #455a64',
        color: blueGrey[800],
        fontWeight: 600,
        outline: 'none',

        '&:hover': {
            background: blueGrey[700],
            border: '1px solid #607d8b',
            color: grey[50],
            transition: '0.4s ease',
        },
        [theme.breakpoints.down("sm")]: {
            padding: '15px 40px'
         },
    }
}))