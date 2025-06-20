
// secondmarket images
import secondmarket1 from "../assets/secondmarket/Artboard 1.webp"
import secondmarket2 from "../assets/secondmarket/Artboard 2.webp"
import secondmarket3 from "../assets/secondmarket/Artboard 3.webp"
import secondmarket4 from "../assets/secondmarket/Artboard 4.webp"
import secondmarket5 from "../assets/secondmarket/Artboard 5.webp"
import secondmarket6 from "../assets/secondmarket/Artboard 6.webp"
import secondmarket7 from "../assets/secondmarket/Artboard 7.webp"
import secondmarket8 from "../assets/secondmarket/Artboard 8.webp"
import secondmarket9 from "../assets/secondmarket/Artboard 9.webp"

// egoversedesign images
import egoversedesign1 from "../assets/egoversedesign/egoversedesign1.webp"
import egoversedesign2 from "../assets/egoversedesign/egoversedesign2.webp"
import egoversedesign3 from "../assets/egoversedesign/egoversedesign3.webp"
import egoversedesign4 from "../assets/egoversedesign/egoversedesign4.webp"
import egoversedesign5 from "../assets/egoversedesign/egoversedesign5.webp"
import egoversedesign6 from "../assets/egoversedesign/egoversedesign6.webp"

// egoverse images
import egoverse1 from "../assets/egoverse/egoverse1.webp"
import egoverse2 from "../assets/egoverse/egoverse2.webp"
import egoverse3 from "../assets/egoverse/egoverse3.webp"

// anaksehat images
import anaksehat1 from "../assets/anaksehat/anaksehat1.webp"
import anaksehat2 from "../assets/anaksehat/anaksehat2.webp"
import anaksehat3 from "../assets/anaksehat/anaksehat3.webp"
import anaksehat4 from "../assets/anaksehat/anaksehat4.webp"
import anaksehat5 from "../assets/anaksehat/anaksehat5.webp"
import anaksehat6 from "../assets/anaksehat/anaksehat6.webp"

// internval images
import internval1 from "../assets/internval/internval1.webp"
import internval2 from "../assets/internval/internval2.webp"
import internval3 from "../assets/internval/internval3.webp"
import internval4 from "../assets/internval/internval4.webp"
import internval5 from "../assets/internval/internval5.webp"
import internval6 from "../assets/internval/internval6.webp"
import internval7 from "../assets/internval/internval7.webp"

// cover images
import egoversecover from "../assets/egoverse/egoversecover.webp"
import anaksehatcover from "../assets/anaksehat/anaksehatcover.webp"
import internvalcover from "../assets/internval/internvalcover.webp"


const projectList = [
  
    { 
      id : 1,
      section : "website",
      title: "Internval",
      category : ["Web Development","UI Design"],
      role : ["Fullstack Web Developer","UI/UX Designer"],
      link : "https://github.com/amntllhz/internval",
      desc : "Internval is a web-based application designed to streamline the internship application and tracking process for university students. This platform allows students to submit internship applications to various institutions and monitor the status of their submissions in real-time. Administrators and faculty can manage and verify submissions efficiently through an intuitive Filament-powered dashboard.",
      feature : (
        <div>          
          <ul className="list-disc pl-4 font-display text-primary xs:text-xs sm:text-sm text-justify">
            <li>Student internship submission form</li>
            <li>Submission real-time tracking</li>
            <li>Modern and intuitive dashboard</li>
            <li>Automatic input validation</li>
            <li>Indonesian regional data integration</li>
            <li>Responsive and clean UI</li>
          </ul>
        </div>
      ),
      techStack : ["Blade","PHP", "Laravel","AlpineJS", "MySQL", "Filament" ,"TailwindCSS","Figma", "Adobe Illustrator"],
      cover : ( <img
              src={internvalcover}
              alt="startup template"
              width={500}
              height={500}
              className=" h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-full lg:h-full" />                                    
      ),      
      content: (
        <div>                    
          <div>            
            <img
              src={internval1}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />                                    
            <img
              src={internval2}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />
            <img
              src={internval3}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />
            <img
              src={internval4}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />
            <img
              src={internval5}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />                                    
            <img
              src={internval6}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />
            <img
              src={internval7}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />                       
          </div>
        </div>
      ),
    },
    { 
      id : 2,
      section : "website",
      title: "Egoverse",
      category : ["Web Development", "UI Design"],
      role : ["Front-End Developer", "UI/UX Designer"],
      link : "https://egoverse.vercel.app",
      desc : "eGoverse or E-Government Services is an innovative OPD (Regional Apparatus Organization) Digitalization Service Portal designed to facilitate the submission of Clearance, Server, Device services, and other support to enhance the efficiency and performance of Regional Apparatus Organizations (OPD) in Pekalongan Regency. This system is built using Laravel and Tailwind CSS.",
      feature : (
        <div>          
          <ul className="list-disc pl-4 font-display text-primary xs:text-xs sm:text-sm text-justify">
            <li>Intuitive and user-friendly interface</li>
            <li>Secure and reliable platform</li>
            <li>Efficient and streamlined workflow</li>
            <li>Real-time updates and notifications</li>
            <li>Customizable and extendable</li>
          </ul>
        </div>
      ),
      techStack : ["Blade", "PHP", "Laravel", "Javascript", "TailwindCSS", "MySQL"],
      cover : ( <img
              src={egoversecover}
              alt="startup template"
              width={500}
              height={500}
              className=" h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-full lg:h-full" />                                    
      ),
      content: (
        <div>                    
          <div>            
            <img
              src={egoverse1}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />
            <img
              src={egoverse2}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " /> 
            <img
              src={egoverse3}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />
          </div>
        </div>
      ),
    },
    { 
      id : 3,
      section : "website",
      title: "Anaksehat",
      category : ["Web Development", "UI Design"],
      role : ["Fullstack Web Developer", "UI/UX Designer"],
      link : "https://github.com/amntllhz/anaksehat",
      desc : "Anaksehat is a website that contains nutritional information equipped with a toddler nutritional status calculation system using the z-score method according to standards. This website was created as an effort to reduce stunting in Indonesia through the dissemination of nutritional information and flexibility in checking the nutritional status of toddlers.",
      feature : (
        <div>          
          <ul className="list-disc pl-4 font-display text-primary xs:text-xs sm:text-sm text-justify">
            <li>User-friendly Interface</li>
            <li>Nutrition Status Calculator</li>
            <li>Nutrition Information Page</li>            
            <li>Admin Dashboard</li>
            <li>Article Management</li>
          </ul>
        </div>
      ),
      techStack : ["Blade","PHP", "Laravel", "MySQL", "Filament" ,"TailwindCSS","Javascript","Figma","Adobe Illustrator"],
      cover : ( <img
              src={anaksehatcover}
              alt="startup template"
              width={500}
              height={500}
              className=" h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-full lg:h-full" />                                    
      ),
      content: (
        <div>                    
          <div>            
            <img
              src={anaksehat1}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />
            <img
              src={anaksehat2}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />
            <img
              src={anaksehat3}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />
            <img
              src={anaksehat4}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />
            <img
              src={anaksehat5}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />
            <img
              src={anaksehat6}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " /> 
          </div>
        </div>
      ),
    },
    { 
      id : 4,
      section : "design",
      title: "Secondmarket",
      category : ["UI Design"],
      role : ["UI/UX Designer"],
      link : "https://www.behance.net/gallery/190849733/SECONDMARKET-User-Interface",
      desc : "Secondmarket is an interface design for an application for buying and selling used clothes in a condition that is still very suitable for sale. This is because sellers of such items often sell them on inappropriate platforms, which can lead to misunderstandings for some customers who are not careful and think that the item is new.",
      feature : (
        <div>          
          <ul className="list-disc pl-4 font-display text-primary xs:text-xs sm:text-sm text-justify">
            <li>User-friendly Interface</li>
            <li>Visually Appealing Home & Product Browsing</li>
            <li>Clear and Informative Product Detail Pages</li>            
            <li>Seamless Selling Experience</li>
            <li>Good Color Contrast</li>
          </ul>
        </div>
      ),
      techStack : ["Figma", "Adobe Illustrator","Adobe Photoshop"],
      cover : ( <img
              src={secondmarket1}
              alt="startup template"
              width={500}
              height={500}
              className=" h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-full lg:h-full" />                                    
      ),      
      content: (
        <div>                    
          <div>            
            <img
              src={secondmarket1}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />                                    
            <img
              src={secondmarket2}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />
            <img
              src={secondmarket3}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />
            <img
              src={secondmarket4}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />
            <img
              src={secondmarket5}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />                                    
            <img
              src={secondmarket7}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />
            <img
              src={secondmarket8}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />
            <img
              src={secondmarket9}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />     
            <img
              src={secondmarket6}
              alt="startup template"
              width={500} 
              height={500}
              className="block h-full w-full object-cover " />                                         
          </div>
        </div>
      ),
    },
    { 
      id : 5,
      section : "design",
      title: "Egoverse",
      category : ["Logo Design","Brand Identity"],
      role : ["Logo Designer","Graphic Designer"],
      link : "https://www.behance.net/gallery/228593107/e-Government-Services",
      desc : "eGoverse or E-Government Services is a digitalization service portal for Regional Apparatus Organizations (OPD) which is innovatively designed to facilitate the submission of Clearance, Server, Device and other support services with the aim of increasing the efficiency and performance of Regional Apparatus Organizations (OPD) in Pekalongan Regency.",
      feature : (
        <div>          
          <ul className="list-disc pl-4 font-display text-primary xs:text-xs sm:text-sm text-justify">
            <li>Easy to apply</li>
            <li>Beautiful and meaningful shape</li>
            <li>Describes convenience and availability</li>
            <li>Responsive in several media</li>            
            <li>Good Color Contrast</li>
          </ul>
        </div>
      ),
      techStack : ["Figma", "Adobe Illustrator","Adobe Photoshop"],
      cover : ( <img
              src={egoversedesign1}
              alt="startup template"
              width={500}
              height={500}
              className=" h-full w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-full lg:h-full" />                                    
      ),      
      content: (
        <div>                    
          <div>            
            <img
              src={egoversedesign1}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />                                    
            <img
              src={egoversedesign2}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />
            <img
              src={egoversedesign3}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />
            <img
              src={egoversedesign4}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />
            <img
              src={egoversedesign5}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />                                    
            <img
              src={egoversedesign6}
              alt="startup template"
              width={500}
              height={500}
              className="block h-full w-full object-cover " />                                                    
          </div>
        </div>
      ),
    },    
];

export default projectList