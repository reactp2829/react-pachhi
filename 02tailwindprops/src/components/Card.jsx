import React from 'react'

function Card({userDetails,btnText = "Visit Me"}) {
    return (
<div className="cookieCard">
<p className="cookieHeading">{userDetails}</p>
<p className="cookieDescription">By using this website you automatically accept that we use cookies. <a href="#">What for?</a></p>
<button class="acceptButton">{btnText}</button>
</div>

  )
}

export default Card