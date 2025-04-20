import React from "react"

import Logo from "../images/logo.png"

class SiteBranding extends React.Component {
    render() {
        return (
            <div className="site-branding">
                <img src={Logo} alt="logo" />
            </div>
        )
    }
}

export default SiteBranding