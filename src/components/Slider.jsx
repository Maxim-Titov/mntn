import React from "react"

class Slider extends React.Component {
    render() {
        const { activeSection, scrollToSection } = this.props

        const items = [
            { id: "start", label: "Start" },
            { id: "get-started", label: "1" },
            { id: "hiking-essentials", label: "2" },
            { id: "where-you-go", label: "3" }
        ]

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