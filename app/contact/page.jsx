"use client";

// Import des composants UI custom et des icônes
import { Button } from "@/components/ui/button"; // Bouton stylé
import { Input } from "@/components/ui/input"; // Input stylé
import { Textarea } from "@/components/ui/textarea"; // Textarea stylé
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"; // Menu déroulant stylé
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Icônes pour info contact
import { motion } from "framer-motion"; // Animation smooth

// Liste des infos de contact (téléphone, email, adresse)
const info = [
  {
    icon: <FaPhoneAlt />, // Icône téléphone
    title: "Phone", // Titre
    description: "(+33) 6 44 91 77 97", // Détail
  },
  {
    icon: <FaEnvelope />, // Icône email
    title: "Email",
    description: "anne-julie.hoye@edu.devinci.fr",
  },
  {
    icon: <FaMapMarkerAlt />, // Icône adresse
    title: "Address",
    description: "Paris, France",
  },
];

// Composant Contact : Section avec formulaire + infos contact
const Contact = () => {
  return (
    // Section animée avec Framer Motion (smooth fade-in)
    <motion.section
      initial={{ opacity: 0 }} // Animation start invisible
      animate={{
        opacity: 1, // Animation devient visible
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, // Smooth transition
      }}
      className="py-6" // Padding vertical
    >
      <div className="container mx-auto px-4">
        {/* Flex container pour layout form + info */}
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Formulaire contact */}
          <div className="xl:w-[54%] order-2 xl:order-none"> {/* Form d'abord sur mobile, 2e sur desktop */}
            <form className="flex flex-col gap-6 p-10 bg-[#163A42] rounded-xl">
              <h3 className="text-4xl text-accent">Contact me</h3> {/* Titre principal */}
              <p className="text-white/60">
                {/* Intro texte */}
                Feel free to reach out for any inquiries, collaborations, or just to connect. I'm always open to discussing new ideas and opportunities!
              </p>
              {/* Inputs pour le nom, email, etc. */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="Firstname" placeholder="Firstname" /> {/* Input prénom */}
                <Input type="Lastname" placeholder="Lastname" /> {/* Input nom */}
                <Input type="email" placeholder="Email address" /> {/* Input email */}
                <Input type="phone" placeholder="Phone number" /> {/* Input téléphone */}
              </div>
              {/* Sélecteur (dropdown) */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="How can I help you ?" /> {/* Placeholder dropdown */}
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>select an item</SelectLabel> {/* Label du dropdown */}
                    <SelectItem value="est">Internship opportunities</SelectItem> {/* Option stage */}
                    <SelectItem value="cst">Project collaboration</SelectItem> {/* Option collaboration */}
                    <SelectItem value="mst">General questions</SelectItem> {/* Option questions */}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Zone de texte pour message */}
              <Textarea className="h-[200px]" placeholder="Type your message here." />
              {/* Bouton pour envoyer le formulaire */}
              <Button size="md" className="max-w-40">Send message</Button>
            </form>
          </div>

          {/* Infos de contact (téléphone, email, adresse) */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    {/* Icone contact dans une box */}
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#163A42] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div> {/* Icone */}
                    </div>
                    {/* Texte du contact */}
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p> {/* Titre info */}
                      <h3 className="text-xl">{item.description}</h3> {/* Détails info */}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
