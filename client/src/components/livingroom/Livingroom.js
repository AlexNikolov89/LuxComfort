import React, { Fragment } from 'react'
import blue from '../../images/style/livingroomcover.jpg'
import './Livingroom.css'

const Livingroom = () => {
    return (
        <Fragment>
            <div className='livingroom__wrapper'>
                <div className='livingroom__blue'>
                    <img src={blue} alt="terquize"/>
                    <h2>Blue Rush</h2>
                    <p>Kick up the energy dose! <br/>
                    Blue makes you feel safe and relaxed.
                    </p>
                </div>
            </div>
        </Fragment>
    )
}

export default Livingroom
