import {  makeStyles } from "@material-ui/core";
import { blueGrey } from "@mui/material/colors";

export const useStyles =  makeStyles((theme) =>( {
    title: {
        padding: theme.spacing(6),
        textAlign: 'center',
        color: blueGrey[500],
        letterSpacing: theme.spacing(0.2),
        

        [theme.breakpoints.down("sm")]: {
            fontSize: '24px',
          },
    },
    subtitle: {
        textAlign: 'center',
        padding: '50px 0',
        fontFamily: 'Montserrat',
    }
}))