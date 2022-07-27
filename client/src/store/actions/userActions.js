import axios from 'axios'
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
    USER_LOGOUT
} from './types'


export const loginUser = ({ email, password}) =>async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })
    
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        const {data} = await axios.post('/api/users/login', { email, password}, config)
        //console.log(data)
    
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(getState().userLoginReducer.userInfo))
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error
        })
    }
}



export const userRegister = ({ name, email, password}) =>async (dispatch, getState) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST
        })
    
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    
        const {data} = await axios.post('/api/users/register', { name, email, password}, config)
    
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(getState().userLoginReducer.userInfo))
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error
        })
    }
}

export const logout = () =>  (dispatch) => {
    localStorage.removeItem('userInfo')
    localStorage.removeItem('cartItems')
    dispatch({ type: USER_LOGOUT })
}