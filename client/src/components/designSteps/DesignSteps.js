import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core'
import { Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStyles } from './style';

const DesignSteps = () => {
    const classes = useStyles()
    return (
        <div className={classes.designContainer}>

                <img className={classes.image} src="/images/three-steps.jpg" alt="design" />
            <div style={{ padding: '0 60px' }}>
                <Typography variant='h5' className={classes.title}>Get your Home fully Furnished in 3 simple steps</Typography>
                <div>
                    <Accordion style={{ marginBottom: '10px' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <div className={classes.container}>
                                <Typography className={classes.heading}>1. Personalized interior design</Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.info}>
                                Go through our onboarding questionnaire and let our professional interior designers know what interior style suits you.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    
                    <Accordion style={{ marginBottom: '10px' }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <div className={classes.container}>
                                <Typography className={classes.heading}>2. Your home in 3D</Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.info}>
                                Based on your floor plan, we generate a 3D model of your apartment and show you exactly how your new interior will look like.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <div className={classes.container}>
                                <Typography className={classes.heading}>3. Lets jump to work</Typography>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography className={classes.info}>
                            Happy with our proposal? Lay back and relax! We’ll ship the furniture and assemble it for you.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
            </div>
        </div>
    )
}

export default DesignSteps
