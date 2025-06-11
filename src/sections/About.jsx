import PixelCard from "../components/Components/PixelCard/PixelCard";
import profile from "../assets/profile.JPG";
import AnimatedContent from "../components/Animations/AnimatedContent/AnimatedContent";
import Marquee from "react-fast-marquee";
import TechIcon from "../components/TechIcon/TechIcon";
import techList from "../data/techList";

const About = () => {
    const Animation = ({ children, delay = 0  }) => {
        return (
            <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={2.0}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1.0}
            threshold={0.1}
            delay={delay}
            >
                {children}
            </AnimatedContent>
        )
    };  

    return (
        <>
            <div id="about" className="sm:pt-20 xs:pt-8 relative flex flex-wrap w-full mx-6 justify-center gap-x-8 xs:mx-auto xs:gap-y-4 sm:mt-20 xs:mt-10">
                
                <div className="relative flex xs:flex-wrap md:flex-nowrap lg:flex-row xs:w-full md:w-full lg:mx-6 md:max-w-9/10 justify-center gap-x-8 xs:mx-auto xs:gap-y-4">                    
                    <div>
                        <PixelCard noFocus={false} variant="default" imageUrl={profile}>
                            
                        </PixelCard>
                    </div>

                    <div className="xs:max-w-9/10 sm:mx-0">

                        <Animation delay={0}>
                            <h2 className=" text-accent4 font-display font-bold lg:mb-4 md:mb-2 xs:mb-4 xs:max-w-9/10 xs:mx-auto sm:mx-0 xs:text-center sm:text-left xs:text-3xl md:text-2xl lg:text-4xl">Halo! , Is Aldi Here </h2>                    
                        </Animation>                 
                        <Animation delay={0.1}>
                            <div className="flex flex-wrap gap-2 xs:justify-center sm:justify-start">
                                <p className="text-accent3 font-display xs:text-xs md:text-xs lg:text-sm font-semibold bg-accent1/30 px-3 py-1 w-fit rounded-full">Front-End Web Developer</p>                        
                                <p className="text-accent3 font-display xs:text-xs md:text-xs lg:text-sm font-semibold bg-accent1/30 px-3 py-1 w-fit rounded-full">UI/UX Designer</p>                            
                            </div>                    
                        </Animation>
                        <Animation delay={0.2}>
                            <p className="text-accent4 font-display lg:mt-4 md:mt-2 xs:mt-4 max-w-2xl text-justify xs:text-xs md:text-xs lg:text-sm">Hello! I&apos;m M Aldi Amanatullah Syahputra, a passionate individual with a deep enthusiasm for visual technology and modern design. As a front-end web developer, graphic designer, and UI designer, I focus on creating digital products that are not only functional but also visually balanced and aesthetically pleasing. I always strive to deliver modern interfaces with seamless user experience, while keeping innovation and usability in harmony. I value teamwork highly — I believe collaboration creates more efficient and effective solutions.</p>                    
                        </Animation>
                        <Animation delay={0.3}>
                            <p className="text-accent4 font-display lg:mt-4 md:mt-2 xs:mt-4 max-w-2xl text-justify xs:text-xs md:text-xs lg:text-sm">Each challenge is an opportunity to grow, and I enjoy stepping into unfamiliar territory to discover meaningful insights. I remind myself daily of the purpose I’m working toward, which fuels my commitment to continuous learning. My learning process is always intentional and structured, helping me sharpen both technical and creative skills. With a solutions-oriented mindset, I aim to contribute impactful work in the evolving world of digital technology.</p>
                        </Animation>
                    </div> 
                </div>

                <Marquee speed={50} gradient={true} gradientColor={'#010914'} gradientWidth={100} className="mt-10 bg-gradient-to-r from-accent1/0 via-accent1/30 to-accent1/0">
                    {techList.map((tech, index) =>
                        <TechIcon key={index} icon={tech.icon} name={tech.nameTech} />
                    )}
                </Marquee>         


            </div>
          
            
        </>
    );
};

export default About;