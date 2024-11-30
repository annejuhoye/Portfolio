"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const projets = [
    {
        num: "01",
        title: "SmartSocks",
        description: "Development of smart socks designed to analyze gait for mediacl support to prevent balance loss, and improve sports performance.",
        href:"/smartsocks"
    },
    {
        num: "02",
        title: "HeartBit",
        description: "Design of user-friendly connected pendants for young women, enhancing both their sense of security and daily comfort.",
        href:"/heartbit"
    },
    {
        num: "03",
        title: "PoGoDo",
        description: "Creation of a leather water bottle holder, adaptable to any type of container, launched through a Kickstarter campaign.",
        href:"https://www.kickstarter.com/projects/pogodo/quickstarter-pogodo?ref=user_menu"
    },
    {
        num: "04",
        title: " PIX1,PIX2 ",
        description: "Ideation and team design of objects such as a wind turbine or an automated instrument combining mechanics and electronics.",
        href:""
    },

];

import { easeIn, motion } from "framer-motion";

const Projects = () => {
    return(
    <section className = "min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
            >
            {projets.map((projet,index) => {
                return (
                <div key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
                >
                    {/*top*/}
                    <div className="w-full flex justify-between items-center">
                       <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all">{projet.num}</div> 
                       <Link href={projet.href} className=" w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                       <BsArrowDownRight className="text-primary text-3xl"/>
                       </Link>
                    </div>
                    {/*title*/}
                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{projet.title}</h2>
                    {/*description*/}
                    <p className="text-white/60 text-justify">{projet.description}</p>
                    {/*border*/}
                    <div className="border-b border-white/20 w-full"></div>


                </div>
                );
            })}
        </motion.div>

        </div>
    </section>
    )
};

export default Projects;

