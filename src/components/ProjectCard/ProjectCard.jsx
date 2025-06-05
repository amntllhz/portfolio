import { HoverBorderGradient } from "../HoverBorderGradient/HoverBorderGradient"
import { HiEye } from "react-icons/hi"
import projectList from "../../data/projectList"


const ProjectCard = () => {    

    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-3 justify-center sm:max-w-5xl mx-auto text-center gap-4 w-full xs:max-w-9/10">

              {projectList.map((item, index) => (
                <div key={index}>
                  <HoverBorderGradient
                    containerClassName="rounded-2xl w-full"
                    as="div"
                    className="relative justify-center items-center space-x-2 w-full"
                  >
                    <div className="flex mt-2 justify-between w-full px-6">
                      <p className="font-display text-sm font-semibold text-accent4">Project.io</p>
                      <button onClick={() => setOpenModal(true)} className="flex items-center gap-1 group cursor-pointer">
                        <HiEye className="text-accent4 group-hover:text-accent3 transition duration-300" />
                        <p className="font-display text-sm font-semibold text-accent4 group-hover:text-accent3 transition duration-300">View</p>
                      </button>
                    </div>
                    
                    <div className="relativerounded-xl p-3">
                      {item.content}
                    </div>
                  </HoverBorderGradient>
                </div>
              ))}
                
        </div>
        </>
    )
}

export default ProjectCard