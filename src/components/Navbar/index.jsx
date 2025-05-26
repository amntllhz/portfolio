import { Link } from "react-router-dom"

const Navbar = () => {
    return (        
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-xl bg-primary/30 backdrop-blur-md z-50 shadow-lg border border-accent1 text rounded-full px-6 py-3">
            <div className="flex items-center justify-between">
                <p className="font-bold text-accent4">AM</p>
                <div className="flex gap-4">
                <Link className="font-medium text-accent4 hover:text-accent3 transition duration-300 ease-in-out">Home</Link>
                <Link className="font-medium text-accent4 hover:text-accent3 transition duration-300 ease-in-out">About</Link>
                <Link className="font-medium text-accent4 hover:text-accent3 transition duration-300 ease-in-out">Projects</Link>
                </div>
                <p className="font-bold text-accent4">AM</p>
            </div>
        </div>


    )
}

export default Navbar