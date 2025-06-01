import PixelCard from "../components/Components/PixelCard/PixelCard";
import profile from "../assets/profile.JPG";
import AnimatedContent from "../components/Animations/AnimatedContent/AnimatedContent";

const About = () => {
    return (
        <>
            <div className="relative flex flex-wrap w-full mx-6 justify-center gap-x-8 xs:mx-auto xs:gap-y-4 xs:-top-56 sm:top-0">
                <div>
                    <PixelCard variant="default" imageUrl={profile}>
                        
                    </PixelCard>
                </div>

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
                delay={0}
                >
                    <div className="xs:mx-6 sm:mx-0">
                        <h2 className=" text-accent4 font-bold mb-4 xs:text-center sm:text-left xs:text-3xl sm:text-4xl">Halo! , Is Cristiano Rojali Here </h2>
                        <div className="flex flex-wrap gap-2 xs:justify-center sm:justify-start">
                            <p className="text-accent3 xs:text-xs sm:text-sm font-semibold bg-accent1/20 px-3 py-1 w-fit rounded-full">Front-End Web Developer</p>                        
                            <p className="text-accent3 xs:text-xs sm:text-sm font-semibold bg-accent1/20 px-3 py-1 w-fit rounded-full">UI/UX Designer</p>                            
                        </div>
                        <p className="text-accent4 mt-4 max-w-2xl text-justify xs:text-xs sm:text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum est eum maiores obcaecati nesciunt, eaque dolores tenetur sed officiis repudiandae aut cupiditate beatae dicta libero esse id tempora, reprehenderit quisquam adipisci! Atque veritatis alias adipisci voluptatibus, autem saepe temporibus dolor, cupiditate quis magni consectetur pariatur a recusandae illum delectus! Incidunt!</p>
                        <p className="text-accent4 mt-4 max-w-2xl text-justify xs:text-xs sm:text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita consequuntur labore hic ducimus enim, quas natus minus in, voluptatem error, dolor atque quo? Reiciendis voluptatem nulla blanditiis soluta nisi, harum quos corrupti nobis debitis et nemo est corporis impedit ullam tempora ipsum veritatis recusandae aperiam dolorem aut inventore veniam non! Voluptate a id rerum magni enim quae eius atque vel saepe doloribus expedita maiores, sit distinctio, laborum veniam aliquid esse odio hic deleniti cum magnam? Quasi omnis dolores iste id!</p>
                    </div>
                </AnimatedContent>
                


            </div>                
            
        </>
    );
};

export default About;