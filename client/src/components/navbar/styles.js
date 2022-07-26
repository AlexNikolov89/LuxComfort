import { makeStyles } from '@material-ui/styles';
import { blueGrey } from '@mui/material/colors';

export const useStyles = makeStyles((theme) => ({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    title: {
      [theme.breakpoints.down("sm")]: {
        fontSize: '26px!important',
      },
    },
    tagline: {
        fontSize: 20,
        textDecoration: 'none',
        justifyContent: 'space-between',
        textTransform: 'uppercase',
        fontFamily: 'Monserrat',
        padding: '0 50px',

        [theme.breakpoints.down("sm")]: {
            display: 'none !important',
          },
    },
    links: {
        textDecoration: 'none',
        color: blueGrey[400],
        fontFamily: 'Montserrat, sans-serif !important',
        fontWeight: '600',
        fontSize: '14px',
    },
    about: {
        display: 'flex',

        [theme.breakpoints.down("sm")]: {
            display: 'none',
          },
    },
    search: {
        display: 'flex',
       flexDirection: 'row',
       width: '30%',
       border: '1px solid #CED4DA',
       borderRadius: '30px',
       height: '30px',
       outline: 'none',
       alignItems: 'center',
       justifyContent: 'flex-start',

       [theme.breakpoints.down("sm")]: {
        display: (props) => props.open ? 'flex' : 'none',
        width: '60%',
        fontSize: '16px'
      },
    },
    cancel: {
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    searchButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    icons: {
      alignItems: 'center',
        display: (props) => props.open ? 'none' : 'flex',

    },
    mobileBanner: {
        [theme.breakpoints.down("sm")]: {
            //position: 'relative',
            // top: '18px',
            // right: '28px',
            fontSize: '12px !important',
            textAlign: 'center',
            fontWeight: 'bold !important',
            padding: '10px 0'
          },

          [theme.breakpoints.up("sm")]: {
            display: 'none'
          },
    },
    dropdownContainer: {
      display: 'flex',
    flexDirection: 'column',
    border: '1px solid grey',
    backgroundColor: 'red',
    width: '150px',
    height: '150px',
    position: 'absolute',
    top: '60px',
    right: '5px',
    borderBottomLeftRadius: '4px',
	  borderBottomRightRadius: '4px',
    justifyContent: 'center',
    alignItems: 'center'
    }
}))