
import { useRef } from "react";
import VariableProximity from "../components/TextAnimations/VariableProximity/VariableProximity";
import ShinyText from "../components/TextAnimations/ShinyText/ShinyText";
import Button from "../components/Buttons/Button";
import Aurora from "../components/Backgrounds/Aurora/Aurora";
import { HiOutlineDocumentReport } from "react-icons/hi";
import resume from "../assets/resume.pdf"
import { Link as ScrollLink } from 'react-scroll'


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
        <div id="hero" className="relative flex flex-col items-center lg:justify-center lg:pt-0 md:justify-start md:pt-40 xs:justify-start xs:pt-36 h-screen">               
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
                <ShinyText text="Transforming brilliant ideas using modern Web stacks, Creative visuals, and Good User Experience" disabled={false} speed={5} className='text-center font-display xs:max-w-xs md:max-w-md lg:max-w-lg xs:text-xs md:text-sm lg:text-base' />                
            </div>
            <div className="flex flex-row items-center justify-center bg-accent1/30 rounded-full px-2.5 py-2 mt-4 sm:gap-x-3 xs:gap-x-1.5">
                <a href={resume} download={true}>
                    <Button icon={<HiOutlineDocumentReport />} bgButton="bg-gradient-to-r from-accent1/30 via-accent3/40 to-accent1/30 " text="Resume" />
                </a>
                <ScrollLink to="about" smooth={true} duration={300}>
                    <Button textColor="text-primary" bgButton="bg-gradient-to-r from-accent4/30 via-accent4/80 to-accent4/30 " text="Get In Touch" />
                </ScrollLink>
            </div>            
        </div>
        </>
    );
}

export default Hero