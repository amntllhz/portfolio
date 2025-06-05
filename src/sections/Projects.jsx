import React from "react"
import { HoverBorderGradient } from "../components/HoverBorderGradient/HoverBorderGradient";
import { Link } from "react-router-dom";
import { HiEye } from "react-icons/hi";

const Projects = () => {

    const data = [
    {
      title: "2016",
      content: (
        <div>                    
          <div>            
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 xs:h-56 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />                        
          </div>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>                  
          <div>            
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 xs:h-56 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />                        
          </div>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>                  
          <div>            
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 xs:h-56 w-full rounded-lg object-cover relative shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />                        
          </div>
        </div>
      ),
    },
];

    return (
        <>            
          <div className="relative sm:top-40 xs:-top-40">
            <div className="relative flex flex-col items-center mb-10">
                  <h1 className="flex font-display mb-4 text-center font-semibold text-accent4 xs:text-2xl sm:text-4xl">Some of My Projects</h1>
                  <p className="text-accent4 font-display text-center sm:text-sm xs:text-xs xs:max-w-xs">Some of the projects I have worked on is a Web development, UI Design, and Design Graphic</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 justify-center sm:max-w-5xl mx-auto text-center gap-4 w-full xs:max-w-9/10">

              {data.map((item, index) => (
                <div key={index}>
                  <HoverBorderGradient
                    containerClassName="rounded-2xl w-full"
                    as="div"
                    className="relative justify-center items-center space-x-2 w-full"
                  >
                    <div className="flex mt-2 justify-between w-full px-6">
                      <p className="font-display text-sm font-semibold text-accent4">Project.io</p>
                      <Link className="flex items-center gap-1 group">
                        <HiEye className="text-accent4 group-hover:text-accent3 transition duration-300" />
                        <p className="font-display text-sm font-semibold text-accent4 group-hover:text-accent3 transition duration-300">View</p>
                      </Link>
                    </div>
                    
                    <div className="relativerounded-xl p-3">
                      {item.content}
                    </div>
                  </HoverBorderGradient>
                </div>
              ))}
            </div>
          </div>
        </>
    )

}

export default Projects

const AceternityLogo = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3 text-black dark:text-white"
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
      />
    </svg>
  );
};