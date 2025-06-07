
import Button from "../components/Buttons/Button";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

const Contact = () => {
    return (
        <>
            <div id="contact" className="sm:pt-20 xs:pt-8 relative flex flex-col items-center justify-center gap-4 sm:max-w-5xl xs:max-w-9/10 mx-auto sm:mt-20 xs:mt-10">
                <div className="flex flex-col gap-4 bg-accent1/30 p-12 w-full items-center rounded-2xl sm:mb-10 xs:mb-4">
                    <div className="flex items-center gap-2 bg-accent1/30 px-4 py-1.5 rounded-full">
                        <span className="relative flex size-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent3 opacity-75"></span>
                            <span className="relative inline-flex size-2 rounded-full bg-accent3"></span>
                        </span>
                    <p className="font-display text-center font-semibold text-accent3 xs:text-xs sm:text-sm">Available</p>
                    </div>
                    <h1 className="font-display text-center font-bold text-accent4 xs:text-2xl sm:text-4xl">Start Big Collaborate</h1>
                    <p className="text-accent4 font-display text-center sm:max-w-md sm:text-sm xs:text-xs xs:max-w-xs">I am interested in freelance opportunities.if you have other requests or questions, don't hesitate to contact me.</p>                
                    <div className="flex flex-row items-center justify-center bg-accent1/30 rounded-full px-2.5 py-2 mt-4 sm:gap-x-3 xs:gap-x-1.5">
                        <a href="https://github.com/amntllhz" target="_blank" rel="noopener noreferrer">
                            <Button icon={<SiGithub />} bgButton="bg-gradient-to-r from-accent1/30 via-accent3/40 to-accent1/30 " text="Github" />
                        </a>
                        <a href="https://www.linkedin.com/in/aldiamn" target="_blank" rel="noopener noreferrer">
                            <Button icon={<SiLinkedin />} bgButton="bg-gradient-to-r from-accent1/30 via-accent3/40 to-accent1/30 " text="LinkedIn" />
                        </a>
                        <a href="mailto:amanatullah1904@gmail.com">                            
                            <Button icon={<SiGmail />} bgButton="bg-gradient-to-r from-accent1/30 via-accent3/40 to-accent1/30 " text="Email" />
                        </a>
                    </div> 
                </div>
                <div className="flex items-center justify-center gap-4 sm:max-w-5xl xs:max-w-9/10 mx-auto mb-6">
                    <p className="font-display text-center font-medium text-accent4/30 text-xs">&copy; 2023 Muhammad Aldi. All rights reserved</p>
                </div>               
            </div>
        </>
    )
}

export default Contact