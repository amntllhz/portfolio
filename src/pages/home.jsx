import Navbar from "../components/Navbar"
import { DotBackgroundDemo } from "../components/DotBackground/DotBackgroundDemo"
import Hero from "../sections/Hero"

const Home = () => {
    return (
        <>  
            <DotBackgroundDemo>
                <Navbar />
                <Hero />
            </DotBackgroundDemo>
        </>
    )
}

export default Home