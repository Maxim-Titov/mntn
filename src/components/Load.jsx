import React from "react"

import Logo from "../images/logo.png"

class Load extends React.Component {
    render() {
        return (
            <div className="load">
                <img src={Logo} alt="logo" />
            </div>
        )
    }
}

export default Load