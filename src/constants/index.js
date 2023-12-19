import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Sobre",
    },
    {
      id: "work",
      title: "Experiências",
    },
    {
      id: "contact",
      title: "Contato",
    },
  ];
  
  const services = [
    {
      title: "Desenvolvedor Web",
      icon: web,
    },
    {
      title: "Desenvolvedor React",
      icon: mobile,
    },
    {
      title: "Desenvolvedor Backend",
      icon: backend,
    },
    {
      title: "Designer UX/UI",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Aluno/Estagiário",
      company_name: "Ensino Médio T.I",
      icon: starbucks,
      iconBg: "#383E56",
      date: "Fev 2021 - Dez 2023",
      points: [
        "Participação ativa em projetos de desenvolvimento web durante o ensino médio, utilizando tecnologias diversas para construir aplicações interativas e funcionais.",
        "Colaboração eficaz em equipes multidisciplinares, incluindo colegas de design, gestores de produtos e outros desenvolvedores, para criar soluções web de alta qualidade.",
        "Resolução de desafios técnicos durante projetos, demonstrando habilidades analíticas e a capacidade de superar obstáculos para alcançar soluções eficientes, usando também a metodologia SCRUM",
        "Implementação de designs responsivos, garantindo uma experiência consistente e agradável para os usuários em diferentes dispositivos.",
      ],
    },
    {
      title: "Desenvolvedor React Native",
      company_name: "Docket",
      icon: tesla,
      iconBg: "#383E56",
      date: "Mar 2021 - Jan 2022",
      points: [
        "Liderança no desenvolvimento do aplicativo móvel Docket, uma solução inovadora para armazenamento seguro e prático de documentos internacionais.",
        "Desenvolvimento de funcionalidades avançadas, como reconhecimento óptico de caracteres (OCR), facilitando a rápida digitalização e organização de documentos.",
        "Implementação de recursos de sincronização em nuvem, permitindo aos usuários acessar seus documentos de forma segura em diferentes dispositivos.",
        "Testes rigorosos para garantir a estabilidade e confiabilidade do aplicativo, identificando e corrigindo problemas para proporcionar uma experiência livre de bugs.",
      ],
    },
    {
      title: "Desenvolvedor Web",
      company_name: "CatalogX",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Concepção e desenvolvimento do site CatalogX, um PDV inovador que simplifica o processo de impressão de nota fiscal e ticket para compradores, proporcionando uma solução eficiente e amigável.",
        "Integração eficiente com sistemas de emissão de nota fiscal, assegurando a precisão e conformidade com regulamentações fiscais durante o processo de impressão.",
        "Implementação de recursos de relatórios financeiros, permitindo aos usuários analisar o desempenho de vendas e tomar decisões informadas.",
        "Assim como no projeto acima havia trabalhado usando a metodologia SCRUM, nesse trabalhei com a metodologia Kanban.",
      ],
    },
    {
      title: "Desenvolvedor Full Stack",
      company_name: "Norteam",
      icon: meta,
      iconBg: "#383E56",
      date: "Jan 2023 - Presente",
      points: [
        "Norteam é um time criado para desenvolver sites, sistemas e soluções, um time de freelancers se ajudando.",
        "Desenvolvimento de aplicações web completas, utilizando tecnologias front-end e back-end para criar soluções personalizadas e eficientes para os clientes.",
        "Participação em todas as fases do ciclo de vida do desenvolvimento de software, desde a concepção até a implementação, garantindo entregas de alta qualidade e dentro dos prazos estabelecidos.",
        "Implementação de práticas de segurança em todas as camadas da aplicação, garantindo a proteção dos dados e a confiabilidade das soluções desenvolvidas.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Pensei que era impossível criar um Website tão bonito como o nosso produto, mas o João provou que eu estava errado.",
      name: "Isaque Castriani",
      designation: "Dev",
      company: "Norteam",
      image: "https://media-gru2-1.cdn.whatsapp.net/v/t61.24694-24/408139403_875662507271686_2001450651825848055_n.jpg?ccb=11-4&oh=01_AdSl8eAQ3isrCiRG77sPZmltVEABs42EMipY6lSYfGNwZw&oe=658EB2C7&_nc_sid=e6ed6c&_nc_cat=107",
    },
    {
      testimonial:
        "Nunca conheci um Dev que se preocupasse verdadeiramente com o sucesso dos seus clientes como o João.",
      name: "Taynara Kuwomi",
      designation: "Dev",
      company: "DEF Corp",
      image: "https://i.pinimg.com/564x/35/47/67/3547677e6a089d79004136164a1f0228.jpg",
    },
    {
      testimonial:
        "o João tem uma capacidade única de traduzir complexidades técnicas em soluções visualmente atraentes e funcionais.",
      name: "Luan Dias",
      designation: "Designer",
      company: "Beyond",
      image: "https://catalogx.com.br/img/luan.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Aluguel de Carros",
      description:
        "Website que permite aos usuários pesquisar, reservar e gerenciar aluguel de carros de diversos fornecedores, fornecendo uma solução conveniente e eficiente para as necessidades de transporte.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Aplicativo da Web que permite aos usuários pesquisar vagas de emprego, visualizar faixas salariais estimadas para cargos e localizar empregos disponíveis com base em sua localização atual.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Guia de Viagens",
      description:
        "Uma plataforma abrangente de reservas de viagens que permite aos usuários reservar voos, hotéis e aluguel de carros e oferece recomendações selecionadas para destinos populares.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };