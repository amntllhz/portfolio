
import { useRef } from "react";
import VariableProximity from "../components/TextAnimations/VariableProximity/VariableProximity";

const handleAnimationComplete = () => {
    console.log('Animation completed!');
}



const Hero = () => {
    const containerRef = useRef(null);

    return (
        <div className="flex flex-col items-center justify-center h-screen">                                 

            <div
            ref={containerRef}
            style={{position: 'relative'}}
            className="flex flex-col items-center justify-center">
            <VariableProximity
                label={'Turn Some Ideas'}
                className={'variable-proximity-demo text-7xl font-display font-medium text-center text-accent4'}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff='linear'
            />
            <VariableProximity
                label={'Into Reality'}
                className={'variable-proximity-demo text-7xl font-medium text-center text-accent4'}
                fromFontVariationSettings="'wght' 400, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                containerRef={containerRef}
                radius={100}
                falloff='linear'
            />
            </div>
        </div>
    );
}

export default Hero