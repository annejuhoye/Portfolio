"use client";

import { FaPython,FaFileExcel, FaJs, FaReact, FaFigma, FaFileWord, FaFilePowerpoint, FaKickstarter } from "react-icons/fa";
import{ SiTailwindcss, SiNextdotjs} from "react-icons/si";

const about = {
    title: "Who am I ?",
    description: "I am a 5th-year engineering student at ESILV in La Défense-Paris, specializing in the Master Creative Technology. Driven by a passion for innovation, I thrive on designing and developing projects that simplify and enhance daily life for users.",
    info:[ 
        {
            fieldName: "Lastname:",
            fieldValue: "HOYE"
        },
        {
            fieldName: "Fisrtname:",
            fieldValue: "Anne-Julie"
        },
        {
            fieldName: "Age:",
            fieldValue: "22"
        },
        {
            fieldName: "Location:",
            fieldValue: "Paris, France"
        },
        {
            fieldName: "School:",
            fieldValue: "ESILV-IFT"
        },
        {
            fieldName: "Master:",
            fieldValue: "Creative technology"
        },
        {
            fieldName: "Languages:",
            fieldValue: "French (native), English (advanced)"
        },
        {
            fieldName: "Hobbies:",
            fieldValue: "Horse-Riding, Traveling, outdoor sports"
        },
        
    ],
};
//experience data
const experience = {
    icon:"/assets/badge.svg",
    title: "My experience",
    description: "Each experience has contributed to developing my skills, refining my expertise, and preparing me to tackle new challenges with confidence.",
    items: [
        {
            company : "Maison Vendôme",
            position: "Bras droit CEO",
            duration: "April 2024 - August 2024",
            missions: " Designed a tailored CRM and database for high-end clients, optimized the supply chain, reorganized project management tools, and conducted strategic monitoring to enhance operational efficiency.",
        },
        {
            company : "3V ESILV BDE",
            position: "Vice-President of the ESILV BDE",
            duration: "April 2023 - April 2024",
            missions: "Managed a €100,000 budget, organized student events, secured sponsorships, and led a team of 70 members with a focus on decision-making and project execution.",
        },
        {
            company : "Domaine de Saint-Cloud",
            position: "Estate agent",
            duration: "July 2023 - Present",
            missions: "Managed toll operations, ensured visitor reception, and supervised activities within the park.",
        },
        {
            company : "FORCHY PATISSIER",
            position: "Intern",
            duration: "June 2022 - August 2022",
            missions: "Handled sales and marketing management, monitored product quality during manufacturing, and led research and development of new products.",
        },
        {
            company : "Home workplace",
            position: "Tutoring for students",
            duration: "September 2020 - Present",
            missions: "Guided students in improving their organization and study methodology.",
        },

    ],
};
// education data
const education = {
    icon:"/assets/cap.svg",
    title: "My education",
    items: [
        {
            instit : "Institute for future technologies",
            degree: "Master of Creative Technology",
            duration: "September 2023 - Present",
        },
        {
            instit : "ESILV",
            degree: "Engineering degree",
            duration: "September 2020 - Present",
        },
        {
            instit : "EMLV",
            degree: "Double degree in Management - Master of Finance",
            duration: "September 2020 - Present",
        },
        {
            instit : "University of Management, Varna",
            degree: "Erasmus semester",
            duration: "September 2022 - January 2023",
        },
        {
            instit : "Lycée Privé Jean XXIII",
            degree: "Baccalauréat S - Mention Bien",
            duration: "June 2020",
        },

    ],
};
// skills data
const skills = {
    title: "Welcome to my Skills page !",
    description: "Here, you'll discover the key competencies I've developed throughout my academic and professional experiences.",
    skillList: [
        {
            icon: <FaFigma/>,
            name: "Figma",
        },
        {
            icon: <FaReact/>,
            name: "React",
        },
        {
            icon: <FaJs/>,
            name: "javascript",
        },
        {
            icon: <FaPython/>,
            name: "Python",
        },
        {
            icon: <FaFileExcel/>,
            name: "Excel",
        },
        {
            icon: <FaFileWord/>,
            name: "Word",
        },
        {
            icon: <FaFilePowerpoint/>,
            name: "Powerpoint",
        },
        {
            icon: <FaKickstarter/>,
            name: "Kickstarter",
        },
    ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { ScrollArea} from "@/components/ui/scroll-area";

const About = () => {
    return (
        <motion.div 
            initial = {{opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">

            <div className="container mx-auto">
                <Tabs 
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px]">

                    <TabsList className = "flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="about">About me</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                    </TabsList>

                    {/*content */}
                    <div className="min-h-[70vh] w-full">
                        {/* about me */}
                        <TabsContent value="about" className="w-full">
                           <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold ">{about.title}</h3>
                            <p className="max-w-[800px] text-white/60  text-justify mx-auto xl:mx-0 py-1">{about.description}</p>
                            <ul className="grid xl:grid-cols-2 gap-y-6 items-center justify-center mx-auto xl: mx-0">
                                {about.info.map((item,index) => {
                                    return(
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-10">
                                            <span className=" text-accent">{item.fieldName}</span>
                                            <span className=" text-white">{item.fieldValue}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                            </div>
                        </TabsContent>
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:center xl:text-left ">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <ScrollArea className="h-auto xl:h-[400px]"> {/* ajout d'une zonne scroll bar */}
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return (
                                                <li 
                                                    key={index}
                                                    className=" relative bg-[#163A42] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 group overflow-hidden"
                                                >
                                                    <span className="text-accent">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/*dot*/}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60">{item.company}</p>
                                                    </div>

                                                    {/* Encadré au survol */} {/* Ajout d'informations sur les expériences */}
                                                    <div className="absolute inset-0 bg-accent flex flex-col justify-start items-center text-[#27272C] rounded-xl opacity-0 group-hover:opacity-95 backdrop-blur-sm transition-opacity duration-300 p-4">
                                                        <h3 className="text-xl font-bold mb-2 text-center">Assignments</h3>

                                                        <div className="flex items-center gap-2">
                                                            <p className="text-sm font-bold text-[#163A42] text-justify">{item.missions}</p>
                                                        </div>

                                                    </div>

                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* education */} {/* Même structure que la zone expérience*/}
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:center xl:text-left ">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <ScrollArea className="h-auto xl:h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => {
                                            return (
                                                <li 
                                                    key={index}
                                                    className="bg-[#163A42] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-accent text-sm">{item.duration}</span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-sm text-center lg:text-left">{item.degree}</h3>
                                                    <div className="flex items-center gap-3">
                                                        {/*dot*/}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                        <p className="text-white/60 py-2 text-xs">{item.instit}</p>
                                                    </div>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full xl:h-[500px] ">
                            <div className=" flex flex-col gap-[30px]">
                                <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className=" text-4xl font-bold">{skills.title}</h3>
                                    <p className=" max-w-[700px] text-white/60 text-justify mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap[60px]">
                                    {skills.skillList.map((skill, index) =>{
                                        return(
                                            <li key={index}> {/* ajout de mes skills avec les icones */}
                                                <TooltipProvider delayDuration={100}> 
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#163A42] rounded-xl flex justify-center items-center group">
                                                            <div className=" text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>

                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
};

export default About;


