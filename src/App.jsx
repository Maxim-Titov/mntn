import React from "react"

import Slider from "./components/Slider"
import FollowUs from "./components/FollowUs"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Section from "./components/Section"
import Footer from "./components/Footer"

import HeroHG from "./images/HG.svg"
import HeroMG from "./images/MG.svg"
import HeroVG from "./images/VG.svg"
import ContentBG from "./images/BG_Content.svg"
import GetStartedImage from "./images/01.png"
import HikingEssentialsImage from "./images/02.png"
import WhereYouGoImage from "./images/03.png"

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            scrollOffset: 0,
            activeSection: "start",
            hasAnimated: false
        }

        this.sectionRefs = {}
        this.heroRef = React.createRef()

        this.sectionsList = [
            {
                sectionId: "get-started",
                subTitle: "Get Started",
                title: "What level of hiker are you?",
                content: "Determining what level of hiker you are can be an important tool when planning future hikes...",
                sectionImage: GetStartedImage
            },

            {
                sectionId: "hiking-essentials",
                subTitle: "Hiking Essentials",
                title: "Picking the right Hiking Gear!",
                content: "The nice thing about beginning hiking is that you don’t really need any special gear...",
                sectionImage: HikingEssentialsImage
            },

            {
                sectionId: "where-you-go",
                subTitle: "Where you go is the key",
                title: "Understand Your Map & Timing",
                content: "To start, print out the hiking guide and map...",
                sectionImage: WhereYouGoImage
            }
        ]

        this.sectionsList.forEach(section => {
            this.sectionRefs[section.sectionId] = React.createRef()
        })

        this.handleScroll = this.handleScroll.bind(this)
        this.scrollToSection = this.scrollToSection.bind(this)
    }

    async componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible')
                    observer.unobserve(entry.target)
                }
            })
        }, {
            threshold: 0.1
        })

        const heroHg = document.querySelector('.hero-hg')
        const heroMg = document.querySelector('.hero-mg')
        const heroVg = document.querySelector('.hero-vg')
        const siteBranding = document.querySelector('.site-branding')
        const mainMenu = document.querySelector('.main-menu')
        const profile = document.querySelector('.profile')
        const slider = document.querySelector('.slider')
        const followUs = document.querySelector('.follow-us')
        const heroTitle = document.querySelector('#hero .title')
        const heroSubTitle = document.querySelector('#hero .sub-title')
        const heroScrollBtn = document.querySelector('#hero .scroll-btn')

        if (heroHg) {
            observer.observe(heroHg)
        }

        if (heroMg) {
            observer.observe(heroMg)
        }

        if (heroVg) {
            observer.observe(heroVg)
        }

        if (siteBranding) {
            observer.observe(siteBranding)
        }

        if (mainMenu) {
            observer.observe(mainMenu)
        }

        if (profile) {
            observer.observe(profile)
        }

        if (slider) {
            observer.observe(slider)
        }

        if (followUs) {
            observer.observe(followUs)
        }

        if (heroTitle) {
            observer.observe(heroTitle)
        }

        if (heroSubTitle) {
            observer.observe(heroSubTitle)
        }

        if (heroScrollBtn) {
            observer.observe(heroScrollBtn)
        }

        setTimeout(() => {
            this.setState({ hasAnimated: true })
        }, 1000)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }

    handleScroll() {
        const offset = window.scrollY;
        this.setState({ scrollOffset: offset })

        const getStartedRef = this.sectionRefs["get-started"]
        let currentSection = "start"

        if (getStartedRef && getStartedRef.current) {
            const rect = getStartedRef.current.getBoundingClientRect()

            if (rect.top <= window.innerHeight / 2) {
                currentSection = "get-started"
            }
        }

        for (const [id, ref] of Object.entries(this.sectionRefs)) {
            if (ref.current && id !== "get-started") {
                const rect = ref.current.getBoundingClientRect()
                if (rect.top <= window.innerHeight / 2) {
                    currentSection = id
                }
            }
        }

        if (currentSection !== this.state.activeSection) {
            this.setState({ activeSection: currentSection })
        }
    }

    scrollToSection(sectionId) {
        if (sectionId === "start") {
            window.scrollTo({ top: 0, behavior: "smooth" })
            return
        }

        const ref = this.sectionRefs[sectionId]
        if (ref && ref.current) {
            const offsetTop = ref.current.offsetTop;
            window.scrollTo({ top: offsetTop, behavior: "smooth" })
        }
    }

    render() {
        const maxScrollForHg = 200
        const offsetForHg = Math.min(this.state.scrollOffset, maxScrollForHg)

        const translateYForHg = -offsetForHg * 1.3

        const maxScrollForMg = 125
        const offsetForMg = Math.min(this.state.scrollOffset, maxScrollForMg)

        const translateYForMg = -offsetForMg

        const styleForHg = this.state.hasAnimated ? {
            transform: `translateY(${translateYForHg}px)`,
            transition: 'transform 0.1s ease',
            willChange: 'transform'
        } : {}

        const styleForMg = this.state.hasAnimated ? {
            transform: `translateY(${translateYForMg}px)`,
            transition: 'transform 0.1s ease',
            willChange: 'transform'
        } : {}

        return (
            <>
                <img className="hero-hg" src={HeroHG} alt="hg" style={styleForHg} />
                <img className="hero-mg" src={HeroMG} alt="mg" style={styleForMg} />
                <img className="hero-vg" src={HeroVG} alt="vg" />
                <img className="content-bg" src={ContentBG} alt="content bg" />

                <div className="hero-gradient"></div>

                <Header />

                <FollowUs />

                <Slider activeSection={this.state.activeSection} scrollToSection={this.scrollToSection} />

                <div className="main-wrapper">
                    <main>
                        <Hero hasAnimated={this.state.hasAnimated} innerRef={this.heroRef} scrollOffset={this.state.scrollOffset} />
                        <div className="hero-wrapper"></div>

                        {this.sectionsList.map((section, index) => (
                            <Section
                                key={index}
                                innerRef={this.sectionRefs[section.sectionId]}
                                sectionNumber={index < 9 ? `0${index + 1}` : index + 1}
                                isReversed={(index + 1) % 2 === 0}
                                sectionId={section.sectionId}
                                subTitle={section.subTitle}
                                title={section.title}
                                content={section.content}
                                sectionImage={section.sectionImage}
                            />
                        ))}
                    </main>
                </div>

                <Footer />
            </>
        )
    }
}

export default App