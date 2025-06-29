
import Button from "../components/Buttons/Button";
import { SiGithub, SiGmail, SiLinkedin, SiBehance } from "react-icons/si";
import { HiMail } from "react-icons/hi";

const Contact = () => {
    return (
        <>
            <div id="contact" className="sm:pt-20 xs:pt-8 relative flex flex-col items-center justify-center gap-4 lg:max-w-5xl md:max-w-9/10 xs:max-w-9/10 mx-auto sm:mt-20 xs:mt-10">
                <div className="flex flex-col gap-4 bg-accent1/30 p-12 w-full items-center rounded-2xl sm:mb-10 xs:mb-4">
                    <div className="flex items-center gap-2 bg-accent1/30 px-4 py-1.5 rounded-full">
                        <span className="relative flex size-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent3 opacity-75"></span>
                            <span className="relative inline-flex size-2 rounded-full bg-accent3"></span>
                        </span>
                    <p className="font-display text-center font-semibold text-accent3 xs:text-xs sm:text-sm">Available</p>
                    </div>
                    <h1 className="font-display text-center font-bold text-accent4 xs:text-2xl sm:text-4xl">Start Big Collaborate</h1>
                    <p className="text-accent4 font-display text-center sm:max-w-md sm:text-sm xs:text-xs xs:max-w-xs">Ready to New challenges, Creative ideas, and Digital Collaborations, Let&apos;s make something Impactful and Revolutionary</p>                
                    <div className="flex flex-row items-center justify-center bg-accent1/30 rounded-xl px-2.5 py-2 mt-4 sm:gap-x-3 xs:gap-x-1.5">
                        <a href="https://github.com/amntllhz" target="_blank" rel="noopener noreferrer">
                            <button className="py-2 px-2.5 rounded-lg cursor-pointer bg-gradient-to-r from-accent1/60 via-accent3/30 to-accent1/60 hover:-translate-y-2.5 transform duration-300 ease-in-out">
                                <SiGithub className="text-accent4 text-2xl"/>
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/aldiamn" target="_blank" rel="noopener noreferrer">
                            <button className="py-2 px-2.5 rounded-lg cursor-pointer bg-gradient-to-r from-accent1/60 via-accent3/30 to-accent1/60 hover:-translate-y-2.5 transform duration-300 ease-in-out ">
                                <SiLinkedin className="text-accent4 text-2xl"/>
                            </button>
                        </a>
                        <a href="https://www.behance.com/amntllhz" target="_blank" rel="noopener noreferrer">
                            <button className="py-2 px-2.5 rounded-lg cursor-pointer bg-gradient-to-r from-accent1/60 via-accent3/30 to-accent1/60 hover:-translate-y-2.5 transform duration-300 ease-in-out ">
                                <SiBehance className="text-accent4 text-2xl"/>
                            </button>
                        </a>
                        <a href="mailto:amanatullah1904@gmail.com" target="_blank" rel="noopener noreferrer">
                            <button className="py-2 px-2.5 rounded-lg cursor-pointer bg-gradient-to-r from-accent1/60 via-accent3/30 to-accent1/60 hover:-translate-y-2.5 transform duration-300 ease-in-out ">
                                <HiMail className="text-accent4 text-2xl"/>
                            </button>
                        </a>                        
                    </div> 
                </div>
                <div className="flex items-center justify-center gap-4 sm:max-w-5xl xs:max-w-9/10 mx-auto mb-6">
                    <p className="font-display text-center font-medium text-accent4/30 text-xs">&copy; 2024 Muhammad Aldi. All rights reserved</p>
                </div>               
            </div>
        </>
    )
}

export default Contact