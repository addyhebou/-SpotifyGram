import React from 'react'
import '../Login.css'


/*
    1. Click LOGIN Button
    2. Redirect to SPOTIFY login page
    3. Redirect to homepage once logged in

*/

function Login() {
    return (
        <div className="login">
            <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt = "Spotify Logo"/>
            <a href = "https:www.spotify.com">LOGIN WITH SPOTIFY</a>
        </div>
    )
}

export default Login
