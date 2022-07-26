import { makeStyles } from "@material-ui/core";
import { blueGrey, grey } from "@mui/material/colors";

export const useStyles =  makeStyles((theme) =>({
    container: {
        height: '100vh'
    },
    linkContainer: {
        display: 'flex', 
        justifyContent: 'center'
    },
    emptyCart: {
        display: 'flex', 
        justifyContent: 'center', 
        fontSize: '26px',  
        padding : '30px 0',

        [theme.breakpoints.down("sm")]: {
            fontSize: '16px',
            fontWeight: 600
        },
    },
    link: {
        margin: '23px 0',
        padding: '10px 30px',
        marginLeft:' 20px', 
        textDecoration:'none', 
        color: 'inherit',
        fontWeight: 500,
        fontSize: '26px',
        outline: 'none',

        '&:hover': {
            background: blueGrey[700],
            border: '1px solid #607d8b',
            color: grey[50],
            transition: '0.4s ease',
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: '16px'
        },
    },
    table: {
        marginTop: '50px', 
        borderTop: '0.5px solid lightgrey',

        [theme.breakpoints.down("sm")]: {
            display: 'none'
        },
    },
    tableHeader: {
        fontSize: '16px',
        color: 'inherit',
        fontWeight: 600
    },
    image: {
        width: '180px'
    },
    tableBody: {
        fontSize: '16px',
        color: 'inherit',
    },
    form: {
        width: '100px'
    },
    checkout: {
        justifyContent: 'flex-end',

        [theme.breakpoints.down("sm")]: {
            justifyContent: 'flex-start',
            alignItems: 'center'
        },
    },
    gridItem: {
        display: 'flex', 
        flexDirection: 'column !important', 
        padding: '40px 40px'
    },
    subtotal: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginBottom: '50px',

        
    },
    button: {
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
            
          },
    },
    typography: {
        color: 'inherit',

    },
    info: {
        display: 'flex',
    },
    typographyDown: {
        marginLeft: '5px',
        color: 'grey'
    },
    gridInfo: {
        border: '1px solid lightgrey'
    },
    gridInfoItem: {
        width: '100%', 
        display: 'flex', 
        padding: '60px 30px', 
        justifyContent: 'space-between'
    },
    mobile: {
        [theme.breakpoints.up("sm")]: {
            display: 'none',
        },
    }
}))