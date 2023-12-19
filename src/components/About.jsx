import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Visão Geral.</h2>
      </motion.div>

      <motion.p
    variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
     Sou um programador iniciante apaixonado por tecnologia e sempre buscando aprender novas habilidades. Estou me formando em T.I e tenho experiência com (HTML/CSS, JavaScript, Python, C#, Flutter, PhP, ReactJS).
     <br></br>
<br></br>
Possuo habilidades como resolução de problemas, pensamento lógico e capacidade de aprendizado rápido, habilidades excepcionais de comunicação verbal e escrita, demonstradas por minha capacidade de apresentar ideias de forma clara e eficaz, experiência comprovada em colaboração eficaz em equipes multidisciplinares para alcançar metas comuns eficácia na gestão do tempo, com a capacidade de priorizar tarefas e cumprir prazos rigorosos.
<br></br>
<br></br>
E sempre estou buscando aprender e aplicar novos conhecimentos e habilidades. Sou uma pessoa dedicada e persistente, sempre buscando soluções criativas para os desafios enfrentados. Estou ansioso para trabalhar em equipes e colaborar com outros profissionais para construir projetos incríveis.
    </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
