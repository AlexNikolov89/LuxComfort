import { blue, grey, red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";
import { blueGrey } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: blueGrey[800],
            '&:hover': {
                main: '#161616'
            }
        },
        secondary: {
            main: blueGrey[50],
            '&:hover': {
                main: '#fafafa'
            }
        }
    },
    typography: {
        
    }
})