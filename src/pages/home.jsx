import Navbar from "../components/Navbar"
import { DotBackgroundDemo } from "../components/DotBackground/DotBackgroundDemo"
import Hero from "../sections/Hero"
import FadeContent from "../components/Animations/FadeContent/FadeContent"
import About from "../sections/About"


const Home = () => {
    return (
        <>  
            {/* Section Hero */}
            <DotBackgroundDemo>
                <Navbar />
                <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                    {/* Anything placed inside this container will be fade into view */}
                    <Hero />                                    
                </FadeContent>                
            </DotBackgroundDemo>

            {/* Section About */}
            <DotBackgroundDemo color="bg-primary">
                <About />
            </DotBackgroundDemo>
        </>
    )
}

export default Home