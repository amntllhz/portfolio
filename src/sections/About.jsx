

const About = () => {
    return (
        <div className="grid md:grid-cols-3 xs:grid-cols-1 px-20 gap-10 h-screen xs:px-0">                                             
            <div className="flex flex-col">                
            </div>
            <div className="col-span-2 flex flex-col gap-2">
                <h1 className="font-display font-bold text-accent4 lg:text-4xl xs:text-2xl md:text-3xl">M. Aldi Amanatullah Syahputra</h1>
                <div className="flex gap-x-8">
                    <p className="font-display text-justify font-medium text-accent3 xs:text-xs sm:text-sm md:text-md">Front-End Web Developer</p>
                    <p className="font-display text-justify font-medium text-accent3 xs:text-xs sm:text-sm md:text-md">UI/UX Designer</p>
                    <p className="font-display text-justify font-medium text-accent3 xs:text-xs sm:text-sm md:text-md">Graphic Designer</p>
                    <p className="font-display text-justify font-medium text-accent3 xs:text-xs sm:text-sm md:text-md">Motion Designer</p>
                </div>
                <p className="font-display pr-2 text-justify font-medium text-accent4 xs:text-xs sm:text-sm md:text-md xs:max-w-md sm:max-w-lg md:max-w-full">I am a sixth-semester university student with a strong passion for graphic and digital design. This interest has naturally led me to explore the fields of UI design and front-end web development. I focus on crafting visually appealing and user-friendly interfaces that merge aesthetics with functionality. As a front-end developer and UI designer, I enjoy turning creative ideas into seamless digital experiences. I’m always eager to take on new challenges and explore different aspects of coding, believing that continuous learning and curiosity are essential to growth and innovation in the ever-evolving world of web development.</p>
                <p className="font-display pr-2 text-justify font-medium text-accent4 xs:text-xs sm:text-sm md:text-md xs:max-w-md sm:max-w-lg md:max-w-full">With a growing foundation in both design and development, I strive to bridge the gap between visual creativity and functional code. Every project is an opportunity to refine my skills, embrace new technologies, and create meaningful digital experiences.</p>
            </div>
        </div>
    );
};

export default About;