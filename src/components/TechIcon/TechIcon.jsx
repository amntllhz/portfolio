

const TechIcon = ({ icon: Icon, name }) => {
  return (
    <>    
      <div className="flex items-center sm:mx-18 sm:py-10 xs:py-6 xs:mx-8">
        <Icon className="xs:text-xl sm:text-2xl text-accent4 font-display font-medium" />
        <span className="xs:text-xl sm:text-2xl text-accent4 font-display font-medium mt-1 text-center px-4">{name}</span>
      </div>    
    </>
  );
};

export default TechIcon;