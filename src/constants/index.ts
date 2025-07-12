import {RUPESTRE_SOL, CONST_SARG, OBSERVACAO, BURACOS_NEGROS, CERT_MCTI_IMG, MINICURSO_ASTRO, CERT_NOITE_ESTRELAS_IMG} from '@/assets/img';
import {CERT_MCTI,  CERT_NOITE_ESTRELAS} from '@/assets/file';

export const NavBarItens = [
        { name: "Início", id: "home" },
        { name: "Sobre o Projeto", id: "about" },
        { name: "Vivências Cósmicas", id: "vivencias" },
        { name: "Saberes", id: "knowledges" },
        { name: "Contato", id: "contato" }
    ];


export const Images = [
    { src: RUPESTRE_SOL, name: "pedra rupestre", top: "40%", left: "10%" },
    { src: CONST_SARG, name: "Constelacao Sagittarius", top: "15%", left: "85%" }
];


export const Cards = [
  {
    image: OBSERVACAO,
    title: 'Observação astronômica: Uma viagem ao céu noturno',
    description:
      'Com um telescópio, iremos observar de perto a Lua, Saturno com seus anéis, Júpiter com suas luas e outros astros visíveis. Uma viagem mágica sob o céu noturno!',
  },
  {
    image: BURACOS_NEGROS,
    title: 'Apresentação: O Mistério dos Buracos Negros',
    description:
      'Você sabia que as estrelas também nascem, vivem e morrem? Nessa vivência, vamos descobrir como elas se formam, o que acontece quando explodem, e como surgem os fascinantes buracos negros.',
  },
];



export const KnowledgesCard = [
  {
    type: 'presentation',  
    image: MINICURSO_ASTRO,
    title: '5º Minicurso de Astronomia: Buracos Negros',
    description:
      'Apresentação sobre a primeira imagem registrada de um buraco negro na história da humanidade.',
    institutionalLink: 'https://www.ifspcaraguatatuba.edu.br/noticias/5-minicurso-de-astronomia-do-ifsp-caraguatatuba-contou-com-ampla-participacao', // matéria jornalística pela instituição
  },
    {
    type: 'course', 
    image: CERT_MCTI_IMG,
    title: '1º Seminário Internacional: Astronomia e Astronáutica - MCTI',
    description:
      'Participação em evento do MCTI voltado à divulgação científica em astronomia, astronáutica e educação, com especialistas de instituições nacionais e internacionais.',
    institutionalLink: 'https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/noticias/2021/06/1o-seminario-internacional-de-astronomia-e-astronautica-mcti-comeca-nesta-terca-feira-8', // matéria jornalística pela instituição
    certificateLink: CERT_MCTI, // certificado opcional
  },
  {
    type: 'presentation',  
    image: CERT_NOITE_ESTRELAS_IMG,
    title: 'VI Noite com as Estrelas: Buracos Negros',
    description: 'Ministrou a palestra “Buracos Negros” durante a VI Noite com as Estrelas, evento promovida pela EE Alcides de Castro Galvão, em 11 de novembro de 2020.',
    institutionalLink: 'https://youtu.be/TqaeQxkWr50?si=XhpXHh4BGeBag2RS', // matéria jornalística pela instituição
    certificateLink: CERT_NOITE_ESTRELAS, // certificado opcional
    // certificateLink pode existir aqui também, caso tenha certificado
    // institutionalLink pode existir para a matéria da instituição
  },
  // {
  //   type: 'article',  // tipo artigo científico
  //   image: '/images/artigo1.jpg',
  //   title: '',
  //   description: 'Ministrou a palestra “Buracos Negros” durante a VI Noite com as Estrelas, promovida pela EE Alcides de Castro Galvão, em 11 de novembro de 2020.',
  //   articleLink: 'https://revistaeduca.com/astronomia-cultural', // link para ler artigo
  //   // certificateLink pode existir aqui também, caso tenha certificado
  //   // institutionalLink pode existir para a matéria da instituição
  // },
];
