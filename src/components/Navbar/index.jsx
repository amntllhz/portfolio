import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="flex max-w-xl justify-between mx-auto backdrop-blur-md rounded-full py-4 px-4 bg-accent1 opacity-20 border border-slate-400 mt-4">            
            <div>
                <p className="font-bold text-accent4">AM</p>
            </div>
            <div className="flex gap-4">
                <Link className="font-medium text-accent4">Home</Link>
                <Link className="font-medium text-accent4">About</Link>
                <Link className="font-medium text-accent4">Projects</Link>   
            </div>
            <div>
                <p className="font-bold text-accent4">AM</p>
            </div>
        </div>
    )
}

export default Navbar