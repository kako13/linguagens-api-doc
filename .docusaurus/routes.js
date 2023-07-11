import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/linguagens-api-doc/markdown-page',
    component: ComponentCreator('/linguagens-api-doc/markdown-page', '254'),
    exact: true
  },
  {
    path: '/linguagens-api-doc/docs',
    component: ComponentCreator('/linguagens-api-doc/docs', '69e'),
    routes: [
      {
        path: '/linguagens-api-doc/docs/category/linguagens-api',
        component: ComponentCreator('/linguagens-api-doc/docs/category/linguagens-api', '5c1'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/linguagens-api-doc/docs/linguagens/adicionar',
        component: ComponentCreator('/linguagens-api-doc/docs/linguagens/adicionar', 'a3d'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/linguagens-api-doc/docs/linguagens/atualizar',
        component: ComponentCreator('/linguagens-api-doc/docs/linguagens/atualizar', 'a44'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/linguagens-api-doc/docs/linguagens/linguagens-api',
        component: ComponentCreator('/linguagens-api-doc/docs/linguagens/linguagens-api', '751'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/linguagens-api-doc/docs/linguagens/listar',
        component: ComponentCreator('/linguagens-api-doc/docs/linguagens/listar', '933'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/linguagens-api-doc/docs/linguagens/obter-por-id',
        component: ComponentCreator('/linguagens-api-doc/docs/linguagens/obter-por-id', '0f0'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/linguagens-api-doc/docs/linguagens/remover',
        component: ComponentCreator('/linguagens-api-doc/docs/linguagens/remover', '83d'),
        exact: true,
        sidebar: "openApiSidebar"
      }
    ]
  },
  {
    path: '/linguagens-api-doc/',
    component: ComponentCreator('/linguagens-api-doc/', 'b49'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
