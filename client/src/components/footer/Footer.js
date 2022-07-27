import { Paper, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { Fragment } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { useStyles } from './style';
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const Footer = () => {
    const classes = useStyles()
    return (
        <Fragment>
        <Toolbar className={classes.toolbar}>
            <Paper elevation={0} className={classes.column}>
                <Typography gutterBottom className={classes.typography}>Need Help?</Typography>
                <Typography gutterBottom>Help Center</Typography>
                <Typography gutterBottom>Contact Us</Typography>
                <Typography gutterBottom>Track your Order</Typography>
            </Paper>

            <Paper elevation={0} className={classes.column}>
                <Typography gutterBottom className={classes.typography}>Delivery & Returns</Typography>
                <Typography gutterBottom>Delivery & Collection</Typography>
                <Typography gutterBottom>Returns & refunds</Typography>
                <Typography>FAQs</Typography>
            </Paper>

            <Paper elevation={0} className={classes.column}>
                <Typography gutterBottom className={classes.typography}>About Us</Typography>
                <Typography gutterBottom>About Lux Comfort</Typography>
                <Typography gutterBottom>Contact Us</Typography>
                <Typography gutterBottom>Careers</Typography>
            </Paper>

            <div className={classes.expandInfo}>
            <Accordion style={{ marginBottom: '10px' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <div className={classes.container}>
                        <Typography gutterBottom className={classes.typography}>Need Help?</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.panelDetails}>
                    <Typography variant='subtitle2' gutterBottom>Help Center</Typography>
                    <Typography variant='subtitle2' gutterBottom>Contact Us</Typography>
                    <Typography variant='subtitle2' gutterBottom>Track your Order</Typography>
                </AccordionDetails>
            </Accordion>
        
            <Accordion style={{ marginBottom: '10px' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <div className={classes.container}>
                        <Typography gutterBottom className={classes.typography}>Delivery & Returns</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.panelDetails}>
                    <Typography variant='subtitle2' gutterBottom>Delivery & Collection</Typography>
                    <Typography variant='subtitle2' gutterBottom>Returns & refunds</Typography>
                    <Typography variant='subtitle2'>FAQs</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <div className={classes.container}>
                        <Typography gutterBottom className={classes.typography}>About Us</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.panelDetails}>
                    <Typography gutterBottom>About Lux Comfort</Typography>
                    <Typography gutterBottom>Contact Us</Typography>
                    <Typography gutterBottom>Careers</Typography>
                </AccordionDetails>
            </Accordion>
            </div>
        </Toolbar>

        <Toolbar className={classes.socialIcons}>
            <FacebookIcon className={classes.icon} />
            <InstagramIcon className={classes.icon} />
            <TwitterIcon className={classes.icon} />
            <YouTubeIcon className={classes.icon}  />
            <PinterestIcon className={classes.icon} />
        </Toolbar>
        </Fragment>
    )
}

export default Footer
