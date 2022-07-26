import { makeStyles } from "@material-ui/core";
import { blueGrey, grey } from "@mui/material/colors";

export const useStyles = makeStyles((theme) => ({
    container: {        
        padding : '80px 0', 
        background: '#cfd8dc',
        display: 'flex',
        

        [theme.breakpoints.down("sm")]: {
            padding : '50px 20px', 
            flexDirection: 'column',
            justifyContent: 'center'
          },
    },
    title: {
        fontWeight: '600 !important',

        [theme.breakpoints.down("sm")]: {
            fontSize: '16px !important',
          },
    },
    subtitle: {
        [theme.breakpoints.down("sm")]: {
            fontSize: '14px !important'
          },
    },
    inputContainer: {
        width: '100%', 
        display: 'flex', 
        padding : '10px 100px',

        // [theme.breakpoints.down("sm")]: {
        //     height: '30px',
        //   },
    },
    textField: {
        fontSize: '20px',

        // [theme.breakpoints.down("sm")]: {
        //     fontSize: '14px !important',
        //     height: '30px !important'
        //   },
    },
    button: {
        width: '30%',
        padding: '0 35px !important',
        border: '1px solid #455a64 !important',
        color: '#37474f !important',
        fontWeight: '600 !important',
        outline: 'none',
        marginLeft: '20px !important',
        '&:hover': {
            background: '#455a64 !important',
            border: '1px solid #607d8b',
            color: '#fafafa !important',
            transition: '0.4s ease',
        },

        [theme.breakpoints.down("sm")]: {
            padding: '3px 10px !important',
          },
    }
}))
