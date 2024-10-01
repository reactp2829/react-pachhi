import React, {useContext, } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    //data access
    const {user} = useContext(UserContext)
    if(!user) return <div>Please Login</div>
    return <div>WelCome {user.username}</div>
}

export default Profile