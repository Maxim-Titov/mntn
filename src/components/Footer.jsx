import React from "react"

import config from "../siteConfig.json"

import MoreOnBlog from "./MoreOnBlog"
import MoreOnMntn from "./MoreOnMntn"

import Logo from "../images/logo.png"

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="content">
                        <div>
                            <img src={Logo} alt="logo" />
                            <p>{config.footerText}</p>
                        </div>

                        <p className="copyright">{config.footerCopyright}</p>
                    </div>

                    <div className="more">
                        <MoreOnBlog />
                        <MoreOnMntn />
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer