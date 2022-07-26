import { makeStyles } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";


export const useStyles = makeStyles((theme) => ({
    container: {
        marginBottom: '100px'
    },
    typography: {
        color: '#607d8b !important',
        display: 'flex',
        justifyContent: 'center !important',
        margin: theme.spacing(7, 0),
        letterSpacing: '1px',
        textDecorationLine: 'underline !important',
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
    img: {
        cursor: 'pointer',
        [theme.breakpoints.down("sm")]: {
            height: '180px !important'
          },
    },
    title: {
        height: '70px'
    }
}))