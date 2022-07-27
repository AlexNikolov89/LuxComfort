import React, { Fragment, useState } from 'react'
import {Container, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Typography} from '@material-ui/core'
import Livingroom from '../../assets/livingroom.jpg'
import Bedroom from '../../assets/bedroom.jpg'
import Diningroom from '../../assets/diningroom.jpeg'
import Kitchen from '../../assets/kitchen.jpg'
import Kidsroom from '../../assets/kidsroom.jpg'
import Bathroom from '../../assets/bathroom.jpg'
import {useHistory} from 'react-router-dom'
import {useStyles} from './styles'



const Categories = () => {
    const classes = useStyles()
    const history = useHistory()

    const itemData = [
        {img: Livingroom, title: 'Livingroom', onClick: () => history.push('/livingroom')},
        {img: Diningroom, title: 'Diningroom', onClick: () => history.push('/diningroom')},
        {img: Kitchen, title: 'Kitchen', onClick: () => history.push('/kitchen')},
        {img: Bedroom, title: 'Bedroom', onClick: () => history.push('/bedroom')},
        {img: Kidsroom, title: 'Kidsroom', onClick: () => history.push('/kidsroom')},
        {img: Bathroom, title: 'Bathroom', onClick: () => history.push('/bathroom')},
        
    ]

    return (
        <Container maxWidth='md' className={classes.container}>
        <Typography className={classes.typography} variant='h4'>Shop By Rooms</Typography>
        <ImageList>
        {itemData.map((item) => {
            const {text, onClick} = item;
          return <ImageListItem key={item.img} onClick={onClick} cols={2} className={classes.img}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              className={classes.title}
              position="bottom"
            />
          </ImageListItem>
        })}
      </ImageList>
        </Container>
    )
}

export default Categories



// import React from 'react'
// import { Container, Grid, Typography } from '@mui/material'
// import { Link } from 'react-router-dom'
// import sofa from '../../assets/svg/sofa-black.svg'
// import chair from '../../assets/svg/chair-black.svg'
// import table from '../../assets/svg/table-black.svg'
// import bed from '../../assets/svg/bed-black.svg'
// import light from '../../assets/svg/lightenning-black.svg'
// import garden from '../../assets/svg/garden-black.svg'
// import office from '../../assets/svg/office-chair-black.svg'
// //import accessories from '../../assets/svg/accessories.svg'
// import kitchen from '../../assets/svg/kitchen.svg'
// import toys from '../../assets/svg/toys.svg'
// //import curtains from '../../assets/svg/curtains.svg'
// import {useStyles} from './styles'


// const Categories = () => {
//     const classes = useStyles()
//     return (
//         <Container maxWidth='md' className={classes.container}>
//             <Typography variant='h4' className={classes.title}>Shop By Rooms</Typography>
//         <Grid container className={classes.gridContainer}>

//         <Grid lg={3} sm={3} xs={3} item className={classes.grid}>
//         <Link to='/livingroom' className={classes.link}>
//             <img src={sofa} alt='' className={classes.image} />
//             <Typography color='inherit' variant='h6' className={classes.text}>Livingroom</Typography>
//         </Link> 
//         </Grid>

//         <Grid lg={3} sm={3} xs={3} item className={classes.grid}>
//             <Link to='/bedroom' className={classes.link}>
//                 <img src={bed} alt='' className={classes.image} />
//                 <Typography color='inherit' variant='h6' className={classes.text}>Bedroom</Typography>
//             </Link> 
//         </Grid>

//         <Grid lg={3} sm={3} xs={3} item className={classes.grid}>
//             <Link to='/diningroom' className={classes.link}>
//                 <img src={table} alt='' className={classes.image} />
//                 <Typography color='inherit' variant='h6' className={classes.text}>Diningroom</Typography>
//             </Link> 
//         </Grid>

//         <Grid lg={3} sm={3} xs={3} item className={classes.grid}>
//             <Link to='/garden' className={classes.link}>
//                 <img src={garden} alt='' className={classes.image} />
//                 <Typography color='inherit' variant='h6' className={classes.text}>Outdoors</Typography>
//             </Link> 
//         </Grid>

//         <Grid lg={3} sm={3} xs={3} item className={classes.grid}>
//             <Link to='/kitchen' className={classes.link}>
//                 <img src={kitchen} alt='' className={classes.image} />
//                 <Typography color='inherit' variant='h6' className={classes.text}>Kitchen</Typography>
//             </Link> 
//         </Grid>

//         <Grid lg={3} sm={3} xs={3} item className={classes.grid}>
//             <Link to='/lightening' className={classes.link}>
//                 <img src={light} alt='' className={classes.image} />
//                 <Typography color='inherit' variant='h6' className={classes.text}>Lightening</Typography>
//             </Link> 
//         </Grid>

//         <Grid lg={3} sm={3} xs={3} item className={classes.grid}>
//             <Link to='/office' className={classes.link}>
//                 <img src={office} alt='' className={classes.image} />
//                 <Typography color='inherit' variant='h6' className={classes.text}>Office</Typography>
//             </Link> 
//         </Grid>

//         <Grid lg={3} sm={3} xs={3} item className={classes.grid}>
//             <Link to='/kidsroom' className={classes.link}>
//                 <img src={toys} alt='' className={classes.image} />
//                 <Typography color='inherit' variant='h6' className={classes.text}>Kidsroom</Typography>
//             </Link> 
//         </Grid>

//         {/*<Grid lg={3} sm={3} xs={3} item className={classes.grid}>
//             <Link to='/accessoriess' className={classes.link}>
//                 <img src={accessories} alt='' />
//                 <Typography color='inherit' variant='h6' className={classes.text}>Accessories</Typography>
//             </Link> 
//         </Grid>

//         <Grid lg={3} sm={3} xs={3} item className={classes.grid}>
//             <Link to='/curtains' className={classes.link}>
//                 <img src={curtains} alt='' />
//                 <Typography color='inherit' variant='h6' className={classes.text}>Curtains</Typography>
//             </Link> 
//         </Grid>*/}
//         </Grid>
//         </Container>
//     )
// }

// export default Categories

