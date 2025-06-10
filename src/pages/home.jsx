import Navbar from "../components/Navbar"
import Education from "../sections/Education"
import Hero from "../sections/Hero"
import FadeContent from "../components/Animations/FadeContent/FadeContent"
import About from "../sections/About"
import Projects from "../sections/Projects"
import Contact from "../sections/Contact"



const Home = () => {
    return (
        <>  
            <Navbar />

            {/* Section Hero */}

            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                {/* Anything placed inside this container will be fade into view */}
                <Hero />                                    
            </FadeContent>                                   
            <div className="relative xs:-mt-96 md:-mt-[50rem] lg:mt-0 gap-10">
                {/* Section About */}
                <About />

                {/* Section Education */}
                <Education />

                {/* Section Projects  */}
                <Projects />
                
                {/* Section Contact */}
                <Contact />
            </div>
        </>
    )
}

export default Home