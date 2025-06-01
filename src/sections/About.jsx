import PixelCard from "../components/Components/PixelCard/PixelCard";
import profile from "../assets/profile.JPG";

const About = () => {
    return (
        <>
            <div className="flex w-full mx-6 justify-center">
                <PixelCard variant="default" imageUrl={profile}>
                    // your card content (use position: absolute)
                </PixelCard>
            </div>
        </>
    );
};

export default About;