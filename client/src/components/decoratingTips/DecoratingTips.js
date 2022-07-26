import React, { Fragment } from 'react'
import {Container, ImageList, ImageListItem, ImageListItemBar, ListSubheader, Typography} from '@material-ui/core'
import Livingroom from '../../assets/categories/livingroom.jpeg'
import Bedroom from '../../assets/categories/bedroom.jpg'
import Diningroom from '../../assets/categories/diningroom.jfif'
import Kitchen from '../../assets/categories/kitchen.jpg'
import Kidsroom from '../../assets/categories/kidsroom.jfif'
import Bathroom from '../../assets/categories/bathroom.jpg'
import {useHistory} from 'react-router-dom'
import { useStyles } from './style'



const DecoratingTips = () => {
    const classes = useStyles()
    const history = useHistory()

    const itemData = [
        {img: Livingroom, title: 'Livingroom Decor', onClick: () => history.push('/livingroom-ideas')},
        {img: Diningroom, title: 'Diningroom Decor', onClick: () => history.push('/diningroom-ideas')},
        {img: Kitchen, title: 'Kitchen Decor', onClick: () => history.push('/kitchen-ideas')},
        {img: Bedroom, title: 'Bedroom Decor', onClick: () => history.push('/bedroom-ideas')},
        {img: Kidsroom, title: 'Kidsroom Decor', onClick: () => history.push('/kidsroom-ideas')},
        {img: Bathroom, title: 'Bathroom Decor', onClick: () => history.push('/bathroom-ideas')},
        
    ]

    return (
        <Container className={classes.container}>
        <Typography className={classes.typography} variant='h4'>We've got your Style</Typography>
            <ImageList>
                {itemData.map((item) => {
                    const {text, onClick} = item;
                   return  <ImageListItem onClick={onClick} rows={2} key={item.img} className={classes.img}>
                        <img src={item.img} alt={item.title} loading='lazy' />
                        <ImageListItemBar position='bottom' title={item.title} className={classes.title} />
                    </ImageListItem>
                })}
            </ImageList>
        </Container>
    )
}

export default DecoratingTips
