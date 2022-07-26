import { makeStyles } from '@material-ui/core/styles'
import { blueGrey, grey } from '@mui/material/colors'

export const useStyles = makeStyles((theme) => ({
    wrapper: {
        marginBottom: theme.spacing(10)
    },
    container: {
        marginTop: theme.spacing(4),
        display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
    },
    avatar: {
        background: blueGrey[500],
        padding : '10px',

        [theme.breakpoints.down("sm")]: {
            padding: '5px',
       },
    },
    icon: {
        fontSize: '28px' ,
        [theme.breakpoints.down("sm")]: {
            fontSize: '6px',
       },
    },
    title: {
        padding: '20px',
        color: blueGrey[800],

        [theme.breakpoints.down("sm")]: {
            fontSize: '18px',
       },
    },
    input: {
        marginBottom: '16px',

        [theme.breakpoints.down("sm")]: {
            width: '100%',
            marginBottom: '10px'
          },
    },
    button: {
        padding: '10px 35px',
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
    },
    links: {
        paddingTop: '20px',

        [theme.breakpoints.down("sm")]: {
            paddingTop: '8px'
       },
    },
    link: {
        textDecoration: 'none',
        color: blueGrey[800],
        fontWeight: '600',
        fontSize: '14px',

        [theme.breakpoints.down("sm")]: {
            fontSize: '10px',
       },
    },
    button: {
        fontSize: '20px !important',
        padding: '10px 35px !important',
        background: '#37474f !important',
        border: '1px solid #455a64 !important',
        color: 'white !important',
        fontWeight: '600 !important',
        
        outline: 'none !important',
        '&:hover': {
            background: '#607d8b !important',
            border: '1px solid #607d8b !important',
            color: 'white !important',
            transition: '0.4s ease !important',
        },
        [theme.breakpoints.down("sm")]: {
            position: 'relative',
            right: '25px',
            bottom: '18px',
            fontSize: '12px !important',
            padding: '5px 22px !important',
          },
    }
}))