import { makeStyles } from "@material-ui/core";
import { blueGrey, grey } from '@material-ui/core/colors'

export const useStyles = makeStyles((theme) => ({
    sofa: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '30px',
        width: '28%',

        [theme.breakpoints.down("sm")]: {
            width: '100%',
          },
    },
    image: {
        width: '350px',

        [theme.breakpoints.down("sm")]: {
           width: '280px'
        },
    },
    price: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(3),

        [theme.breakpoints.down("sm")]: {
            display: 'flex',
          flexDirection: 'row'
        },
    },
    typography: {
        color: blueGrey[600],
        fontSize: '16px',

        [theme.breakpoints.down("sm")]: {
           fontSize: '12px',
        },
    }
}))