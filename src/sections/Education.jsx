import React from "react";
import Timeline from "../components/Timeline/Timeline";


const Education = () => {   
    
    const data = [
    {
      title: "2016",
      content: (
        <div>
          <p
            className="mb-2 font-display font-semibold text-accent4 xs:text-base sm:text-lg">
            State Junior High School 1 Warungasem
          </p>
          <p className="mb-2 font-display sm:text-sm font-normal text-accent4/30 xs:text-xs sm:max-w-md">
            Jl. Raya Cepagan, Karangjati, Cepagan, Kec. Warungasem, Kabupaten Batang, Jawa Tengah 51252
          </p>
          <p className="mb-8 font-display sm:text-sm font-normal text-accent4 xs:text-xs sm:max-w-lg text-justify ">
            During my junior high school years, I discovered a deep interest in creative and analytical subjects. I particularly enjoyed art, mathematics, and music. These interests led me to join the school band extracurricular, where I had the chance to express myself through music while nurturing my creative instincts both inside and outside the classroom.
          </p>
          <div className="grid grid-cols-2 gap-4">            
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />            
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div>
          <p
            className="mb-2 font-display font-semibold text-accent4 xs:text-base sm:text-lg">
            State Senior High School 1 Wonotunggal
          </p>
          <p className="mb-2 font-display sm:text-sm font-normal text-accent4/30 xs:text-xs sm:max-w-md">
            2P7R+Q9R, Kampung Baru, Wates, Kec. Wonotunggal, Kabupaten Batang, Jawa Tengah 51253
          </p>
          <p className="mb-8 font-display sm:text-sm font-normal text-accent4 xs:text-xs sm:max-w-lg text-justify ">
            In high school, my passion for mathematics and music remained strong, and I developed a growing appreciation for physics. Outside of academics, I actively participated in the futsal extracurricular club. Together with my teammates, I was fortunate to achieve several trophies, shaping both my teamwork and competitive spirit.
          </p>
          <div className="grid grid-cols-2 gap-4">            
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />            
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <p
            className="mb-2 font-display font-semibold text-accent4 xs:text-base sm:text-lg">
            Universitas Muhammadiyah Pekajangan Pekalongan
          </p>
          <p className="mb-2 font-display font-normal text-accent4/20 xs:text-xs sm:text-sm sm:max-w-md">
            Jl. Raya Pekajangan No.29, Pekajangan Tengah, Pekajangan, Kec. Kedungwuni, Kabupaten Pekalongan, Jawa Tengah 51173
          </p>
          <p className="mb-8 font-display sm:text-sm font-normal text-accent4 xs:text-xs sm:max-w-lg text-justify">
            Throughout university, I’ve focused on how ideas can be visually communicated and brought to life. My main interests lie in front-end development, UI/UX design, and graphic design. Although I haven't been involved in campus organizations, I’ve chosen to invest time in personal learning at home. I believe education goes beyond the classroom, and I strive to make the most of my time by continuously learning and exploring new things in my field.
          </p>
          <div className="grid grid-cols-2 gap-4">            
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />            
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },

  ];

    return (
        <>        
            <div className="relative w-full overflow-clip max-w-5xl mx-auto xs:-top-52 sm:top-0">
                <Timeline data={data} />
            </div>
        </>

  );
}

export default Education

