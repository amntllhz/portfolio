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
          <p className="xs:mb-8 sm:mb-6 font-display sm:text-sm font-normal text-accent4 xs:text-xs sm:max-w-lg text-justify">
            Throughout university, I&apos;ve focused on how ideas can be visually communicated and brought to life. My main interests lie in front-end development, UI/UX design, and graphic design. Although I haven't been involved in campus organizations, I&apos;ve chosen to invest time in personal learning at home. I believe education goes beyond the classroom, and I strive to make the most of my time by continuously learning and exploring new things in my field.
          </p>
          <p
            className="mb-2 font-display font-semibold text-accent4 xs:text-base sm:text-lg">
            Internship Experience
          </p>
          <p className="mb-8 font-display sm:text-sm font-normal text-accent4 xs:text-xs sm:max-w-lg text-justify">
             I had the opportunity to apply these skills during my internship at the <span className="font-bold bg-accent1/90 text-accent4"> Department of Communication and Information (Dinas Komunikasi dan Informatika) of Pekalongan Regency</span> , where I worked as a Front-end Web Developer and Graphic Designer. During the internship, I developed a web application that facilitated service submissions for regional government agencies (OPD) in Pekalongan Regency. I also created various digital visual content for the department&apos;s social media platforms
          </p>          
        </div>
      ),
    },

  ];

    return (
        <>        
            <div id="education" className="pt-20 xs:pt-8 relative w-full overflow-clip max-w-5xl mx-auto sm:mt-20 xs:mt-10">
                <Timeline data={data} />
            </div>
        </>

  );
}

export default Education

