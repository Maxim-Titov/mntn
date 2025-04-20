import React from "react"

class Hero extends React.Component {
    render() {
        const maxScroll = 900
        const offset = Math.min(this.props.scrollOffset, maxScroll)

        const opacity = 1 - offset / maxScroll

        const translateY = 0

        let display = NaN

        if (offset === maxScroll) {
            display = 'none'
        } else {
            display = 'flex'
        }

        const style = this.props.hasAnimated ? {
            opacity: opacity,
            transform: `translateY(${translateY}px)`,
            transition: 'opacity 0.1s ease, transform 0.1s ease',
            willChange: 'opacity, transform',
            display: display
        } : {}

        return (
            <section ref={this.props.innerRef} id="hero" style={style} >
                <div className="container">
                    <h3 className="sub-title">
                        <span className="line"></span>
                        <span>A Hiking guide</span>
                    </h3>

                    <h2 className="title">
                        Be prepared for the <br /> Mountains and beyond!
                    </h2>

                    <div className="scroll-btn">
                        <a href="#get-started">
                            <p>scroll down</p>
                            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z" fill="white" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Hero