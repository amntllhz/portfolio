import { HoverBorderGradient } from "../HoverBorderGradient/HoverBorderGradient"
import { HiEye } from "react-icons/hi"
import projectList from "../../data/projectList"
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from "react"
import { HiX } from "react-icons/hi";

const ProjectCard = () => {     
    const [isOpenIndex, setIsOpenIndex] = useState(null)

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
                        <button onClick={() => setIsOpenIndex(index)} className="flex items-center gap-1 group cursor-pointer">
                          <HiEye className="text-accent4 group-hover:text-accent3 transition duration-300" />
                          <p className="font-display text-sm font-semibold text-accent4 group-hover:text-accent3 transition duration-300">View</p>
                        </button>
                      </div>
                      
                      <div className="relative rounded-xl p-3">
                        {item.content}
                      </div>

                      <Dialog open={isOpenIndex === index} onClose={() => setIsOpenIndex(null)} className="relative z-50">
                        <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-deep/20 backdrop-blur-xs">
                          <DialogPanel className="sm:h-fit xs:h-screen xs:w-screen xs:rounded-none sm:max-w-3/4 space-y-4 bg-accent4 p-4 sm:rounded-xl xs:overflow-clip">
                            <DialogTitle className="text-xl relative font-bold font-display text-primary">
                              <div className="flex justify-between items-center w-full">
                                <p className=" flex font-display font-extrabold text-primary">{item.title}</p>
                                <button onClick={() => setIsOpenIndex(null)} className="flex cursor-pointer hover:bg-primary/10 px-1.5 py-1.5 rounded-md transition duration-100">
                                  <HiX className="text-primary" />
                                </button>                              
                              </div>
                            </DialogTitle>

                            <Description className="flex sm:h-96 xs:h-[calc(100vh-5rem)] gap-4 w-full xs:flex-col sm:flex-row xs:overflow-y-auto">
                              <div className="flex flex-col sm:overflow-y-auto xs:overflow-visible p-4 rounded-md bg-white gap-2 sm:basis-2/5 xs:basis-full">
                                <p className="font-display text-primary text-sm text-justify">{item.desc}</p>
                                <p className="font-display text-primary font-bold text-sm text-justify">Feature :</p>
                                <p className="font-display text-primary text-sm text-justify">{item.feature}</p>                                                          
                                <p className="font-display text-primary font-bold text-sm text-justify">Tech Stack :</p>
                                <div className="font-display  flex gap-2 flex-wrap text-sm text-justify">
                                  {item.techStack.map((tech, index) => (
                                    <div key={index}>
                                      <p className="font-display text-primary font-semibold text-sm py-1 px-2 w-fit bg-accent3/10 rounded-lg">{tech}</p>
                                    </div>
                                  ))}
                                </div>                                                          
                              </div>
                              <div className="flex flex-col sm:overflow-y-auto xs:overflow-visible p-4 rounded-md bg-white gap-2 xs:gap-y-4 sm:basis-3/5 xs:basis-full">
                                <p>{item.content}</p>
                                <p>{item.content}</p>
                                <p>{item.content}</p>
                              </div>
                            </Description>                            
                            
                          </DialogPanel>
                        </div>
                      </Dialog>
                    </HoverBorderGradient>
                  </div>
                                                      
                ))}
                                
          </div>
        </>
    )
}

export default ProjectCard