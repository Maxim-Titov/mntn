import React from "react"

class Slider extends React.Component {
    render() {
        const { activeSection, scrollToSection, items } = this.props

        return (
            <div className="slider">
                <nav>
                    <ul>
                        {items.map((item) => (
                            <li
                                key={item.id}
                                className={activeSection === item.id ? "active" : ""}
                                onClick={() => scrollToSection(item.id)}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Slider