import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  designContainer: {
    display: 'flex',
    marginTop: '300px',
    marginBottom: '100px',

    [theme.breakpoints.down("sm")]: {
      marginTop: '-50px',
      width: '100%',
      flexDirection: 'column'
    },
  },
  container: {
    [theme.breakpoints.down("sm")]: {
      width: '100%',
    }, 
  },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,

        [theme.breakpoints.down("sm")]: {
          fontSize: '12px !important',
          fontWeight: '600 !important'
        },
      },
    image: {
      [theme.breakpoints.down("sm")]: {
        width: '100%',
        height: '100%'
      },
    },
    title: {
      margin: '40px 0 !important', 
      textAlign: 'center', 
      fontWeight: '600 !important',

      [theme.breakpoints.down("sm")]: {
        fontSize: '14px !important',
      },
    },
    info: {
      [theme.breakpoints.down("sm")]: {
        fontSize: '12px !important',
      },
    }
}))