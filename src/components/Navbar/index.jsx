import { Link } from "react-router-dom"
import { Link as ScrollLink } from 'react-scroll'
import { HiMail } from "react-icons/hi";
import Logo from "../../assets/logo.svg";

const Navbar = () => {
    return (        
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full bg-deep/30 backdrop-blur-md z-50 shadow-lg border border-accent1/50 text rounded-full sm:px-6 sm:py-2.5 xs:px-4 xs:py-2 max-w-xl xs:max-w-72 sm:max-w-80 md:max-w-96">
            <span className="absolute -top-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-accent3/0 via-accent3/90 to-accent3/0" />
            <div className="flex items-center justify-between">
                <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer text-accent4">
                    <img src={Logo} alt="logo" className="xs:h-3 sm:h-4 w-auto"/>
                </ScrollLink>
                <div className="flex gap-4">                
                    <ScrollLink to="about" smooth={true} duration={500} className="font-display cursor-pointer font-medium text-accent4 xs:text-xs sm:text-sm md:text-md hover:text-accent3 transition duration-300 ease-in-out">About</ScrollLink>
                    <ScrollLink to="education" smooth={true} duration={500} className="font-display cursor-pointer font-medium text-accent4 xs:text-xs sm:text-sm md:text-md hover:text-accent3 transition duration-300 ease-in-out">Education</ScrollLink>
                    <ScrollLink to="projects" smooth={true} duration={500} className="font-display cursor-pointer font-medium text-accent4 xs:text-xs sm:text-sm md:text-md hover:text-accent3 transition duration-300 ease-in-out">Projects</ScrollLink>
                </div>
                <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer font-medium text-sm text-accent4 py-1 px-2 bg-accent1/30 hover:bg-accent3/30 transition duration-300 ease-in-out rounded-full">
                    <HiMail size={20} className="text-accent4"/>
                </ScrollLink>                
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-accent3/0 via-accent3/90 to-accent3/0" />
        </div>


    )
}

export default Navbar