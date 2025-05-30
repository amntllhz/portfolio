
import { useRef } from "react";
import VariableProximity from "../components/TextAnimations/VariableProximity/VariableProximity";
import ShinyText from "../components/TextAnimations/ShinyText/ShinyText";
import Button from "../components/Buttons/Button";


const Hero = () => {
    const containerRef = useRef(null);

    return (
        <div className="flex flex-col items-center md:justify-center md:pt-0 xs:justify-start xs:pt-36 h-screen ">                                 
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
            <div className="flex flex-col items-center justify-center mt-3">
                <Button text="Get In Touch" />
            </div>
        </div>
    );
}

export default Hero