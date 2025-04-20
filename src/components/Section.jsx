import React from "react"

import ArrowRight from "../images/arrow_right.png"

class Section extends React.Component {
    render() {
        return (
            <section ref={this.props.innerRef} id={this.props.sectionId} className={this.props.isReversed ? "reverse" : undefined}>
                <div className="container">
                    <div className="section-content">
                        <p className="count">
                            {this.props.sectionNumber}
                        </p>

                        <h3 className="sub-title">
                            <span className="line"></span>
                            <span>{this.props.subTitle}</span>
                        </h3>

                        <h2 className="title">
                            {this.props.title}
                        </h2>

                        <p className="content">{this.props.content}</p>

                        <div className="more-btn">
                            <p>read more</p>
                            <img src={ArrowRight} alt="arrow right" />
                        </div>
                    </div>

                    <img className="section-img" src={this.props.sectionImage} alt="section image" />
                </div>
            </section>
        )
    }
}

export default Section