import React, { Fragment, useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Advice.css'

const types = ['Living Room', 'Bed Room', 'Kitchen', 'Garden']

const Advice = () => {
    const [active, setActive] = useState(types[0])
    const history = useHistory()

    const handleClick = () => {
        history.push('/livingroom')
    }

    return (
        <Fragment>
            <div className='advice__wrapper'>
                <div className='advice__buttons'>
                    {types.map(type => {
                        return <button onClick={handleClick} key={type} active={active === type} onClick={() => setActive(type)}>{type}</button>
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default Advice
