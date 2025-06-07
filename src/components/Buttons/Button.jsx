

const Button = ({text, bgButton = "bg-deep", icon = "", textColor = "text-accent4"}) => {
    return (
        <button className="bg-primary no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(99,102,241,0.6)_0%,rgba(99,102,241,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className={`relative flex space-x-2 items-center z-10 rounded-full py-0.5 px-4 ring-1 ring-white/10 ${bgButton}`}>
                <span className="flex items-center gap-x-0.5">
                    <p className={`font-medium font-display ${textColor} xs:px-0 sm:px-1 xs:py-0.5 sm:py-1 xs:text-xs sm:text-xs md:text-sm`}>{text}</p>
                    <p className="text-accent4 text-lg xs:text-sm">{icon}</p>
                </span>        
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-accent3/0 via-accent3/90 to-accent3/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
    )
}

export default Button