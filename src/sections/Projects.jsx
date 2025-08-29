
import ProjectCard from "../components/ProjectCard/ProjectCard";

const Projects = () => {

    return (
        <>            
          <div id="projects" className="relative pt-14 sm:mt-20 xs:pt-8 xs:mt-10">
            <div className="relative flex flex-col items-center p-12">
                  <h1 className="flex font-display mb-4 text-center font-semibold text-accent4 xs:text-2xl sm:text-4xl">Showcase & Highlights</h1>
                  <p className="text-accent4 font-display text-center sm:max-w-md sm:text-sm xs:text-xs xs:max-w-xs">Some of the projects I have worked on is a Web development, UI Design, and Graphic Design</p>
            </div>            

            <ProjectCard />
          </div>
        </>
    )

}

export default Projects
