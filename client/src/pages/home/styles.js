import { makeStyles } from '@material-ui/core'
import { blueGrey, grey } from '@material-ui/core/colors'

export const useStyles = makeStyles((theme) => ({
    bannerText: {
        position: 'absolute',
        top: '200px',
        left: '100px',

        [theme.breakpoints.down("sm")]: {
            position: "absolute",
            top: '50px',
          },
    },
    typography: {
        [theme.breakpoints.up("sm")]: {
            display: '14px'
          },
        [theme.breakpoints.down("sm")]: {
            display: 'none'
          },
    },
    mobileBanner: {
        [theme.breakpoints.up("sm")]: {
            display: 'none',
          },
        [theme.breakpoints.down("sm")]: {
            position: 'relative',
            top: '18px',
            right: '28px',
            fontSize: '12px',
            fontWeight: 700,
            display: 'flex',
          },
    },
    img: {
        width: '100%',

        [theme.breakpoints.down("sm")]: {
            width: "100%",
            marginTop: theme.spacing(12)
          },
    },
    navBottom: {
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 60px',
        marginTop: '60px',

        [theme.breakpoints.down("sm")]: {
            display: 'none',
          },
    },
    categories: {
        textDecoration: 'none',
        color: grey[600],
        fontWeight: '600',
        letterSpacing: theme.spacing(0.2),
        padding: '20px 40px',

        '&:hover': {
          background: blueGrey[50]
        //   color: '#5588A3',
        //   textDecoration: 'none',
        // textDecorationLine: 'underline',
        // textDecorationThickness: '2px' ,
        // textUnderlineOffset: '5px',
        // transitionDuration: '1.2s',
        // textDecorationColor: '#5588A3',
        },
    },
    button: {
        fontSize: '20px',
        padding: '10px 35px',
        marginTop: '18px',
        border: '1px solid #455a64',
        color: blueGrey[800],
        fontWeight: 600,
        backgroundColor: 'transparent',
        outline: 'none',
        '&:hover': {
            background: blueGrey[700],
            border: '1px solid #607d8b',
            color: grey[50],
            transition: '0.4s ease',
        },
        [theme.breakpoints.down("sm")]: {
            position: 'relative',
            right: '85px',
            top: '30px',
            fontSize: '12px',
            padding: '5px 22px',
          },
    }
}))