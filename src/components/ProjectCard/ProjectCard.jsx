import { HoverBorderGradient } from "../HoverBorderGradient/HoverBorderGradient"
import { HiEye } from "react-icons/hi"
import projectList from "../../data/projectList"
import { Description, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { useState, Fragment } from "react"
import { HiX, HiExternalLink } from "react-icons/hi";

const ProjectCard = () => {     
    const [activeTab, setActiveTab] = useState('website')
    const [isOpenIndex, setIsOpenIndex] = useState(null)

    const filteredProjects = projectList.filter((project) => project.section === activeTab)

    return (
        <>
          {/* Basic Tabs */}
          {/* <div className="flex justify-center mb-6">
            <div className="inline-flex gap-2 rounded-full bg-accent1/30 p-1.5">
              {["website", "design"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1 rounded-full font-display text-sm cursor-pointer font-medium capitalize transition-all duration-300
                    ${activeTab === tab ? "bg-gradient-to-r from-accent1/30 via-accent3/40 to-accent1/30 text-white" : "text-gray-400 hover:text-white"}`}
                >
                  {tab === "website" ? "Website" : "Design"}
                </button>
              ))}
            </div>
          </div> */}

          {/* Sliding Tabs */}
          <div className="flex justify-center mb-6">
            <div className="relative inline-flex rounded-full bg-accent1/30 p-1.5">
              
              {/* Sliding background */}
              <span
                className={`absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-0.375rem)] rounded-full bg-gradient-to-r from-accent1/30 via-accent3/40 to-accent1/30 transition-transform duration-300 ease-in-out`}
                style={{
                  transform: activeTab === "website" ? "translateX(0%)" : "translateX(100%)",
                }}
              />

              {/* Tabs */}
              {["website", "design"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative z-10 px-4 py-1 rounded-full font-display text-sm cursor-pointer font-medium capitalize transition-colors duration-300 ${
                    activeTab === tab ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab === "website" ? "Website" : "Design"}
                </button>
              ))}
            </div>
          </div>


          <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center lg:max-w-5xl md:max-w-9/10 mx-auto text-center gap-4 w-full xs:max-w-9/10">

                {filteredProjects.map((item, id) => (
                  <div key={id}>
                    <HoverBorderGradient
                      containerClassName="rounded-2xl w-full"
                      as="div"
                      className="relative justify-center items-center space-x-2 w-full"
                    >
                      <div className="flex mt-2.5 justify-between w-full px-5 ">
                        <p className="font-display text-sm font-semibold text-accent4">{item.title}</p>
                        <button onClick={() => setIsOpenIndex(id)} className="flex items-center gap-1 group cursor-pointer">
                          <HiEye className="text-accent4 group-hover:text-accent3 transition duration-300" />
                          <p className="font-display text-sm font-semibold text-accent4 group-hover:text-accent3 transition duration-300">View</p>
                        </button>
                      </div>
                      
                      <div className="relative rounded-xl pl-3.5 pr-3.5 pb-3.5 pt-2 ">
                        {item.cover}
                      </div>                                                                                      

                      <Transition appear show={isOpenIndex === id} as={Fragment}>
                        <Dialog as="div" className="relative z-50" onClose={() => setIsOpenIndex(null)}>
                          <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <div className="fixed inset-0 bg-deep/20 backdrop-blur-xs" />
                          </TransitionChild>

                          <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center text-center">
                              <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                              >
                                <DialogPanel className="sm:h-fit xs:h-screen xs:w-screen xs:rounded-none sm:max-w-3/4 space-y-4 bg-white p-4 sm:rounded-xl xs:overflow-clip">
                                  {/* Dialog Title and Description here */}
                                  <DialogTitle className="text-xl relative font-bold font-display text-primary">
                                    <div className="flex justify-between items-center w-full">
                                      <div className="flex items-center gap-2">
                                        <p className=" flex font-display font-extrabold text-primary">{item.title}</p>
                                        <a href={item.link} target="_blank" rel="noreferrer" className="flex cursor-pointer rounded-md transition duration-100">
                                          <HiExternalLink className="text-primary/20 lg:text-2xl md:text-xl xs:text-lg hover:text-accent3 transition duration-200 ease-in-out" />
                                        </a> 
                                      </div>
                                      <button onClick={() => setIsOpenIndex(null)} className="flex cursor-pointer hover:bg-primary/10 px-1.5 py-1.5 rounded-md transition duration-100">
                                        <HiX className="text-primary" />
                                      </button>                              
                                    </div>
                                  </DialogTitle>

                                  <Description as="div" className="flex sm:h-96 xs:h-[calc(100vh-5rem)] gap-4 w-full xs:flex-col sm:flex-row xs:overflow-y-auto">
                                    <div className="flex flex-col sm:overflow-y-auto xs:overflow-visible p-4 rounded-md bg-white gap-2 sm:basis-2/5 xs:basis-full">
                                      <p className="font-display text-primary xs:text-xs sm:text-sm text-justify">{item.desc}</p>
                                      <p className="font-display text-primary xs:text-xs font-bold sm:text-sm text-justify">Project Category :</p>
                                      <div className="font-display flex gap-2 flex-wrap text-sm text-justify">
                                        {item.category.map((cat, id) => (
                                          <div key={id}>
                                            <p className="font-display text-accent3 font-semibold text-xs py-1 px-2 w-fit bg-accent3/10 rounded-lg">{cat}</p>
                                          </div>
                                        ))}
                                      </div>                                
                                      <p className="font-display text-primary xs:text-xs font-bold sm:text-sm text-justify">Feature :</p>
                                      <p className="font-display text-primary xs:text-xs sm:text-sm text-justify">{item.feature}</p>                                                          
                                      <p className="font-display text-primary xs:text-xs font-bold sm:text-sm text-justify">Tech Stack :</p>
                                      <div className="font-display flex gap-2 flex-wrap text-sm text-justify">
                                        {item.techStack.map((tech, id) => (
                                          <div key={id}>
                                            <p className="font-display text-accent3 font-semibold text-xs py-1 px-2 w-fit bg-accent3/10 rounded-lg">{tech}</p>
                                          </div>
                                        ))}
                                      </div>
                                      <p className="font-display text-primary xs:text-xs font-bold sm:text-sm text-justify">Role :</p>                                                        
                                      <div className="font-display flex gap-2 flex-wrap text-sm text-justify">
                                        {item.role.map((role, id) => (
                                          <div key={id}>
                                            <p className="font-display text-accent3 font-semibold text-xs py-1 px-2 w-fit bg-accent3/10 rounded-lg">{role}</p>
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                    <div className="flex flex-col sm:overflow-y-auto xs:overflow-visible p-4 rounded-md bg-white gap-2 xs:gap-y-4 sm:basis-3/5 xs:basis-full">
                                      <div>{item.content}</div>                                      
                                    </div>
                                  </Description>
                                </DialogPanel>
                              </TransitionChild>
                            </div>
                          </div>
                        </Dialog>
                      </Transition>
                      

                    </HoverBorderGradient>
                  </div>
                                                      
                ))}
                                
          </div>
        </>
    )
}

export default ProjectCard