import React from "react"

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
                            <p>Get out there & discover your next slope, mountain & destination!</p>
                        </div>

                        <p className="copyright">Copyright 2023 MNTN, Inc. Terms & Privacy</p>
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