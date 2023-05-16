import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/linguagens-api-doc/markdown-page/',
    component: ComponentCreator('/linguagens-api-doc/markdown-page/', '844'),
    exact: true
  },
  {
    path: '/linguagens-api-doc/docs/',
    component: ComponentCreator('/linguagens-api-doc/docs/', '0e3'),
    routes: [
      {
        path: '/linguagens-api-doc/docs/category/linguagens-api/',
        component: ComponentCreator('/linguagens-api-doc/docs/category/linguagens-api/', '2ea'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/linguagens-api-doc/docs/linguagens/adicionar/',
        component: ComponentCreator('/linguagens-api-doc/docs/linguagens/adicionar/', '499'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/linguagens-api-doc/docs/linguagens/atualizar/',
        component: ComponentCreator('/linguagens-api-doc/docs/linguagens/atualizar/', '696'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/linguagens-api-doc/docs/linguagens/linguagens-api/',
        component: ComponentCreator('/linguagens-api-doc/docs/linguagens/linguagens-api/', '144'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/linguagens-api-doc/docs/linguagens/listar/',
        component: ComponentCreator('/linguagens-api-doc/docs/linguagens/listar/', '907'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/linguagens-api-doc/docs/linguagens/obter-por-id/',
        component: ComponentCreator('/linguagens-api-doc/docs/linguagens/obter-por-id/', 'bfc'),
        exact: true,
        sidebar: "openApiSidebar"
      },
      {
        path: '/linguagens-api-doc/docs/linguagens/remover/',
        component: ComponentCreator('/linguagens-api-doc/docs/linguagens/remover/', 'cdf'),
        exact: true,
        sidebar: "openApiSidebar"
      }
    ]
  },
  {
    path: '/linguagens-api-doc/',
    component: ComponentCreator('/linguagens-api-doc/', 'fe1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
