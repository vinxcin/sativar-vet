import {RUPESTRE_SOL, CONST_SARG, OBSERVACAO, BURACOS_NEGROS} from '@/assets/img';

export const NavBarItens = [
        { name: "Início", id: "home" },
        { name: "Sobre o Projeto", id: "about" },
        { name: "Vivências", id: "vivencias" },
        { name: "Contato", id: "contato" }
    ];


export const Images = [
    { src: RUPESTRE_SOL, name: "pedra rupestre", top: "40%", left: "10%" },
    // { src: SOL, name: "SOL", top: "80%", left: "40%"  },
    { src: CONST_SARG, name: "Constelacao Sagittarius", top: "15%", left: "85%" }
];


export const Cards = [
  {
    image: OBSERVACAO,
    title: 'Observação astronômica: Uma viagem ao céu noturno',
    description:
      'Vamos usar telescópios para observar de perto a Lua, Saturno com seus anéis, Júpiter com suas luas e outros astros visíveis. Uma viagem mágica sob o céu noturno!',
  },
  {
    image: BURACOS_NEGROS,
    title: 'Apresentação: O Mistério dos Buracos Negros',
    description:
      'Você sabia que as estrelas também nascem, vivem e morrem? Nessa vivência, vamos descobrir como elas se formam, o que acontece quando explodem, e como surgem os fascinantes buracos negros.',
  },
];
