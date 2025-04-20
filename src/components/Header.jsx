import React from "react"

import SiteBranding from "./SiteBranding"
import MainMenu from "./MainMenu"
import Profile from "./Profile"

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="container">
                    <SiteBranding />

                    <MainMenu />

                    <Profile />
                </div>
            </header>
        )
    }
}

export default Header