
import ProjectCard from "../components/ProjectCard/ProjectCard";

const Projects = () => {

    return (
        <>            
          <div className="relative sm:top-40 xs:-top-40">
            <div className="relative flex flex-col items-center mb-10">
                  <h1 className="flex font-display mb-4 text-center font-semibold text-accent4 xs:text-2xl sm:text-4xl">Some of My Projects</h1>
                  <p className="text-accent4 font-display text-center sm:max-w-md sm:text-sm xs:text-xs xs:max-w-xs">Some of the projects I have worked on is a Web development, UI Design, and Design Graphic</p>
            </div>            

            <ProjectCard />
          </div>
        </>
    )

}

export default Projects
