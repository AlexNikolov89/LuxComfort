import {  makeStyles } from "@material-ui/core";
import { blueGrey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
    accessoriespage: {
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        //justifyContent: 'space-between',
        height: '100%',
        alignItems: 'center',

        [theme.breakpoints.down("sm")]: {
            marginTop: theme.spacing(5)
          },
    },
    title: {
        color: blueGrey[400],
        letterSpacing: theme.spacing(0.2),

        [theme.breakpoints.down("sm")]: {
            fontSize: '24px'
          },
    },
    text: {
        color: blueGrey[400],
        textAlign: 'center',
        paddingBottom: theme.spacing(6),

        [theme.breakpoints.down("sm")]: {
            fontSize: '10px',
            padding: '0px 20px'
          },
    },
    gridContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    }
}))