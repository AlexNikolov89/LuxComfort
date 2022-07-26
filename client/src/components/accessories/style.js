import { makeStyles } from "@material-ui/core";
import { blueGrey, grey } from '@material-ui/core/colors'

export const useStyles = makeStyles((theme) => ({
    accessories: {
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '30px',
        width: '28%'
    },
    image: {
        width: '350px',
    },
    price: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: theme.spacing(3)
    },
    typography: {
        color: blueGrey[600],
        fontSize: '16px'
    }
}))