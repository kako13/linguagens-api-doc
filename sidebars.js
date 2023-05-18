/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{ type: "autogenerated", dirName: "." }],
  openApiSidebar: [
//    {
//      type: "category",
//      label: "Petstore",
//      link: {
//        type: "generated-index",
//        title: "Petstore API",
//        description:
//          "This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
//        slug: "/category/petstore-api"
//      },
//      // @ts-ignore
//      items: require("./docs/petstore/sidebar.js")
//    },
        {
          type: "category",
          label: "API",

          link: {
            type: "generated-index",
            title: "Linguagens API",
            description:
              '**Bem-vindo(a)!**************************** \\nEste é um projeto que desenvolvi como proposto pela Imersão Java - Alura. Ele fornece uma API para ser consumida pela aplicação [alura-stickers](https://github.com/kako13/alura-stickers). \\n\\nA API foi criada usando Spring Rest, Spring Data MongoDB, MongoDB Atlas e Openapi 3. Permite listar as melhores linguagens de programação em um ranking customizável de acordo com o critério do usuário. \\n\\nPara melhorar o layout da documentação  utilizei o Docusaurus. \\n\\nEspero que você goste do projeto e fique à vontade para sugerir melhorias! \\n\\n## Proposta  \\nA proposta desta API é fornecer um ranking fictício customizável das melhores linguagens de programação. \\n\\nAdministre o ranking conforme seus critérios. \\n\\n\\n\\nSim! É simples mesmo!',
            slug: "/category/linguagens-api"
          },
          // @ts-ignore
          items: require("./docs/linguagens/sidebar.js")
        }
  ]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};

module.exports = sidebars;
