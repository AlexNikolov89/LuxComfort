import { makeStyles } from '@material-ui/core/styles'
import { blueGrey } from '@mui/material/colors'

export const useStyles = makeStyles((theme) => ({
    titleContainer: {
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'center', 
        textAlign: 'center', 
        padding: '50px 100px',
    },
    title: {
        fontFamily: 'Montserrat, sans-serif !important',
        fontWeight: 900, 
        marginBottom: '50px', 
        letterSpacing: '1px',
        color: blueGrey[800],
    },
    subtitle: {
        fontFamily: 'Montserrat, sans-serif !important',
        color: blueGrey[500], 
        padding: '0 60px',
    },
    image: {
        width: '80%', 
        margin: '0 150px'
    },
    gridContainer: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '40vh',
        margin: '0 130px',
        padding: '0 180px',
        width: '50%',
        marginBottom: '60px'
    },
    grid: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px 0',
    },
    text: {
        marginTop: '20px !important',
        textAlign: 'center',
        color: blueGrey[800],
        fontFamily: 'Montserrat, sans-serif !important',
    },
    boxContainer: {
        width: '100%', 
        background: '#cfd8dc', 
        display: 'flex',  
        alignItems: 'center'
    },
    box: {
        display: 'flex', 
        flexDirection: 'column', 
        padding: '0 80px', 
        alignItems: 'center'
    },
    button: {
        fontSize: '20px !important',
        padding: '10px 35px !important',
        border: '1px solid #455a64 !important',
        color: '#37474f !important',
        fontWeight: '600 !important',
        backgroundColor: 'transparent !important',
        outline: 'none !important',
        fontFamily: 'Montserrat, sans-serif !important',
        letterSpacing: '1px',
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