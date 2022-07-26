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
        width: '300px !important',

        [theme.breakpoints.down("sm")]: {
            height: '180px !important'
          },
    },
    title: {
        height: '70px',
    }
    // container: {
    //     width: '100vw',
    //     height: '50vh',

    //     [theme.breakpoints.down("sm")]: {
    //         width: '100vw',
    //         height: '26vh',
           
    //        },
    // },
    // title: {
    //     color: blueGrey[500],
    //     display: 'flex',
    //     justifyContent: 'center',
    //     margin: theme.spacing(7, 0),
    //     letterSpacing: '1px',
    //     textDecorationLine: 'underline',
    //     textDecorationThickness: '2px' ,
    //     textUnderlineOffset: '10px',
    //     textDecorationColor: blueGrey[100],
    //     padding: '30px 0',
    //     fontFamily: 'Montserrat, sans-serif !important',
    //     // textDecorationLine: 'underline',
    //     // textDecorationThickness: '4px' ,
    //     // textUnderlineOffset: '10px',
    //     // textDecorationColor: blueGrey[100],
    //     // letterSpacing: '1px',

    //     [theme.breakpoints.down("sm")]: {
    //         fontSize: '18px !important',
    //         textDecorationThickness: '2px' ,
    //         textUnderlineOffset: '6px',
    //       },
    // },
    // gridContainer: {

    //     [theme.breakpoints.down("sm")]: {
    //         display: 'none',
    //       },
    // },
    // grid: {
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     textAlign: 'center',
    //     padding: '20px 0',

    //     '&:hover': {
    //         background: '#cfd8dc !important',
    //        borderRadius: '5px',
    //         color: '#37474f !important',
    //         transition: '0.4s ease',
    //     },
    //     [theme.breakpoints.down("sm")]: {
    //         padding: '15px 0',
    //         border:'1px solid lightgrey'
    //       },
    // },
    // link: {
    //     textDecoration: 'none', 
    //     color: 'inherit',

    //     // [theme.breakpoints.down("sm")]: {
    //     //     width: '80px !important',
    //     //     height: '40px !important',
    //     //   },
    // },
    // image: {
    //     width: '60px',

    //     [theme.breakpoints.down("sm")]: {
    //         width: '30px',
            
    //       },
    // },
    // text: {
    //  color: 'inherit',
    //  textAlign: 'center',

    //  [theme.breakpoints.down("sm")]: {
    //     display: 'none'
    //   },
    // }
    
}))