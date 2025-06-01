import Navbar from "../components/Navbar"

import Hero from "../sections/Hero"
import FadeContent from "../components/Animations/FadeContent/FadeContent"
import About from "../sections/About"
import Aurora from "../components/Backgrounds/Aurora/Aurora"



const Home = () => {
    return (
        <>  
            <Navbar />

            {/* Section Hero */}

            <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                {/* Anything placed inside this container will be fade into view */}
                <Hero />                                    
            </FadeContent>                                   

            {/* Section About */}
            <About />
            
        </>
    )
}

export default Home