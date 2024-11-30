import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const socials = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={35} />,
    path: "https://www.linkedin.com/in/anne-julie-hoye/",
  },
  {
    name: "Github",
    icon: <FaGithub size={35} />,
    path: "https://github.com/annejuhoye",
  },
];

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
        <Link  key={index} href={item.path} className={iconStyles}>
          {item.icon}
        </Link>
        );
      })}
    </div>
  )
}

export default Socials;
