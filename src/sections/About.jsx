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
                
                <div>
                    <PixelCard noFocus={false} variant="default" imageUrl={profile}>
                        
                    </PixelCard>
                </div>

                <div className="xs:max-w-9/10 sm:mx-0">

                    <Animation delay={0}>
                        <h2 className=" text-accent4 font-display font-bold mb-4 xs:max-w-9/10 xs:mx-auto sm:mx-0 xs:text-center sm:text-left xs:text-3xl sm:text-4xl">Halo! , Is Cristiano Rojali Here </h2>                    
                    </Animation>                 
                    <Animation delay={0.1}>
                        <div className="flex flex-wrap gap-2 xs:justify-center sm:justify-start">
                            <p className="text-accent3 font-display xs:text-xs sm:text-sm font-semibold bg-accent1/20 px-3 py-1 w-fit rounded-full">Front-End Web Developer</p>                        
                            <p className="text-accent3 font-display xs:text-xs sm:text-sm font-semibold bg-accent1/20 px-3 py-1 w-fit rounded-full">UI/UX Designer</p>                            
                        </div>                    
                    </Animation>
                    <Animation delay={0.2}>
                        <p className="text-accent4 font-display mt-4 max-w-2xl text-justify xs:text-xs sm:text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum est eum maiores obcaecati nesciunt, eaque dolores tenetur sed officiis repudiandae aut cupiditate beatae dicta libero esse id tempora, reprehenderit quisquam adipisci! Atque veritatis alias adipisci voluptatibus, autem saepe temporibus dolor, cupiditate quis magni consectetur pariatur a recusandae illum delectus! Incidunt!</p>                    
                    </Animation>
                    <Animation delay={0.3}>
                        <p className="text-accent4 font-display mt-4 max-w-2xl text-justify xs:text-xs sm:text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita consequuntur labore hic ducimus enim, quas natus minus in, voluptatem error, dolor atque quo? Reiciendis voluptatem nulla blanditiis soluta nisi, harum quos corrupti nobis debitis et nemo est corporis impedit ullam tempora ipsum veritatis recusandae aperiam dolorem aut inventore veniam non! Voluptate a id rerum magni enim quae eius atque vel saepe doloribus expedita maiores, sit distinctio, laborum veniam aliquid esse odio hic deleniti cum magnam? Quasi omnis dolores iste id!</p>
                    </Animation>
                </div> 

                <Marquee speed={50} gradient={true} gradientColor={'#010914'} gradientWidth={100} className="mt-10 bg-gradient-to-r from-accent1/0 via-accent1/10 to-accent1/0">
                    {techList.map((tech, index) =>
                        <TechIcon key={index} icon={tech.icon} name={tech.nameTech} />
                    )}
                </Marquee>         


            </div>
          
            
        </>
    );
};

export default About;