import { makeStyles } from "@material-ui/core";
import { blueGrey, grey } from "@material-ui/core/colors";

export const useStyles = makeStyles((theme) => ({
    button: {
        //padding: '10px 50px',
        // marginTop:theme.spacing(2),
        //border: '1px solid #455a64',
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
            // padding: '5px 50px',
            fontSize: '6px'
          },
    }
}))