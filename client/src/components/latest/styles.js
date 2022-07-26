import { makeStyles } from "@material-ui/core";
import { blueGrey, grey } from "@material-ui/core/colors";


export const useStyles = makeStyles((theme) => ({
    container: {
        width: '100vw',
        height: '50vh',

        [theme.breakpoints.down("sm")]: {
            width: '100vw',
            
           },
    },
    header: {
        color: blueGrey[500],
        display: 'flex',
        justifyContent: 'center',
        margin: theme.spacing(7, 0),
        letterSpacing: '1px',
        textDecorationLine: 'underline',
        textDecorationThickness: '2px' ,
        textUnderlineOffset: '10px',
        textDecorationColor: blueGrey[100],
        padding: '30px 0',
        fontFamily: 'Montserrat, sans-serif !important',
        // textDecorationLine: 'underline',
        // textDecorationThickness: '4px' ,
        // textUnderlineOffset: '10px',
        // textDecorationColor: blueGrey[100],
        // letterSpacing: '1px',

        [theme.breakpoints.down("sm")]: {
            fontSize: '18px !important',
            textDecorationThickness: '2px' ,
            textUnderlineOffset: '6px',
          },
    },

    [theme.breakpoints.down("sm")]: {
        fontSize: '18px !important',
        textDecorationThickness: '2px' ,
        textUnderlineOffset: '6px',
      },
    slider: {
        paddingBottom: '30px',

        [theme.breakpoints.down("sm")]: {
            margin:'30px 0' 
          },
    },
    img: {
        width: '400px',

        [theme.breakpoints.down("sm")]: {
            width: '100px'
          },
    },
    info: {
        marginTop: '15px',
        //margin: '30px 0 30px 0',
    },
    rating: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: theme.spacing(1),

        [theme.breakpoints.down("sm")]: {
            fontSize: '10px'
          },
    },
    name: {
        fontSize: '18px',

        [theme.breakpoints.down("sm")]: {
            fontSize: '14px'
          },
    },
    price: {
        fontWeight: 600, 
        
        [theme.breakpoints.down("sm")]: {
            fontSize: '14px'
          },
    },
    link: {
        textDecoration: 'none',
        color: blueGrey[800],
    },
    button: {
        padding: '10px 35px',
        marginTop:theme.spacing(2),
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
            padding: '5px 18px',
            fontSize: '8px'
          },
    }
}))