
import { useRef } from "react";
import VariableProximity from "../components/TextAnimations/VariableProximity/VariableProximity";
import ShinyText from "../components/TextAnimations/ShinyText/ShinyText";
import Button from "../components/Buttons/Button";
import Aurora from "../components/Backgrounds/Aurora/Aurora";
import { HiOutlineDocumentReport } from "react-icons/hi";


const Hero = () => {
    const containerRef = useRef(null);

    return (

        <>
        <div className="absolute top-0 left-0 w-full h-full">
            <Aurora
                colorStops={["#1e1b4b", "#3b0764", "#6366f1"]}
                blend={0.5}
                amplitude={1.0}
                speed={1.0}
            />
        </div>
        <div id="hero" className="relative flex flex-col items-center md:justify-center md:pt-0 xs:justify-start xs:pt-36 h-screen">               
            <div
            ref={containerRef}
            style={{position: 'relative'}}
            className="flex flex-col items-center justify-center">
            <VariableProximity
                label={'Turn Some Ideas'}
                className={'variable-proximity-demo font-display font-medium text-center text-accent4 lg:text-7xl xs:text-4xl md:text-5xl'}
                fromFontVariationSettings="'wght' 500, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff='linear'
            />
            <VariableProximity
                label={'Into Reality'}
                className={'variable-proximity-demo font-display font-medium text-center text-accent4 lg:text-7xl xs:text-4xl md:text-5xl'}
                fromFontVariationSettings="'wght' 500, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff='linear'
            />
            </div>
            <div className="flex flex-col items-center justify-center mt-2">
                <ShinyText text="Transforming Visionary ideas into refined realities Cutting-edge Technology and Innovation" disabled={false} speed={5} className='text-center font-display xs:max-w-xs sm:max-w-md md:max-w-md xs:text-xs sm:text-sm md:text-base' />                
            </div>
            <div className="flex flex-row items-center justify-center bg-accent1/30 rounded-full px-2.5 py-2 mt-4 sm:gap-x-3 xs:gap-x-1.5">
                <Button icon={<HiOutlineDocumentReport />} bgButton="bg-gradient-to-r from-accent1/30 via-accent3/40 to-accent1/30 " text="Resume" />
                <Button textColor="text-accent1" bgButton="bg-gradient-to-r from-accent4/30 via-accent4/80 to-accent4/30 " text="Get In Touch" />
            </div>            
        </div>
        </>
    );
}

export default Hero