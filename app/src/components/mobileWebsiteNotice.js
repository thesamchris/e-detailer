import React from 'react'
import './mobileWebsiteNotice.css'

/*
MobileWebsiteNotice: Visual Component to display notice to users with screen sizes <= 640 px
*/

const MobileWebsiteNotice = () => (
    <div className="mobile__notice">
        <div className="nav__logo" />
        <h1>
            Our website does not support your screen size yet!
            Please use your laptop / desktop to visit the website.
        </h1>
    </div>
)

export default MobileWebsiteNotice