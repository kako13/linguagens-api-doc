"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7],{26397:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>y,contentTitle:()=>c,default:()=>b,frontMatter:()=>d,metadata:()=>u,toc:()=>h});var i=t(87462),n=(t(67294),t(3905)),s=t(26389),r=t(94891),l=t(75190),m=t(47507),o=t(24310),p=t(63303),g=(t(75035),t(85162));const d={id:"atualizar",title:"Realiza a altera\xe7\xe3o de uma linguagem cadastrada",description:"Realiza a altera\xe7\xe3o de uma linguagem cadastrada",sidebar_label:"Realiza a altera\xe7\xe3o de uma linguagem cadastrada",hide_title:!0,hide_table_of_contents:!0,api:{tags:["linguagens"],operationId:"atualizar",parameters:[{name:"linguagemId",in:"path",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},title:{type:"string"},image:{type:"string"},ranking:{type:"integer",format:"int32"}},title:"Linguagem"}}},required:!0},responses:{200:{description:"Altera\xe7\xe3o relizada com sucesso",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},title:{type:"string"},image:{type:"string"},ranking:{type:"integer",format:"int32"}},title:"Linguagem"}}}},400:{description:"Par\xe2metros inv\xe1lidos",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},title:{type:"string"},image:{type:"string"},ranking:{type:"integer",format:"int32"}},title:"Linguagem"}}}},422:{description:"Dados da requisi\xe7\xe3o inv\xe1lidos",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},title:{type:"string"},image:{type:"string"},ranking:{type:"integer",format:"int32"}},title:"Linguagem"}}}},500:{description:"Erro ao realizar a altera\xe7\xe3o da linguagem",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},title:{type:"string"},image:{type:"string"},ranking:{type:"integer",format:"int32"}},title:"Linguagem"}}}}},description:"Realiza a altera\xe7\xe3o de uma linguagem cadastrada",method:"put",path:"/linguagens/{linguagemId}",servers:[{url:"https://imersao-alura-linguagens.fly.dev/ranking",description:"Generated server url"}],jsonRequestBodyExample:{id:"string",title:"string",image:"string",ranking:0},info:{title:"Linguagens API",description:"Swagger Ranking linguagens JSON \n\n## Introduction  \nEste \xe9 um exemplo do Ranking de linguagens. \n\n## Especifica\xe7\xe3o OpenAPI  \nEssa API \xe9 documentada no **formato OpenAPI**. O projeto foi **extendido** e utiliza as features deste [template](https://github.com/PaloAltoNetworks/docusaurus-template-openapi-docs) e do [Docusaurus](https://docusaurus.io). A depend\xeancia utilizada doi a `springdoc-openapi-starter-webmvc-ui` na `vers\xe3o v2` (https://springdoc.org/v2/), conforme a recomenda\xe7\xe3o da [documenta\xe7\xe3o](https://springdoc.org/v2/), quando utilizado `spring-boot v3`. \n\nEncontre mais sobre o Swagger em [http://swagger.io](http://swagger.io) ou em [irc.freenode.net, #swagger](http://swagger.io/irc/). \n\n## Proposta  \nA proposta desta API \xe9 fornecer um ranking fict\xedcio customiz\xe1vel das melhores linguagens de programa\xe7\xe3o. \n\nAdministre o ranking conforme seus crit\xe9rios. \n\n\n\nSim! \xc9 simples mesmo!",version:"1.0"},postman:{name:"Realiza a altera\xe7\xe3o de uma linguagem cadastrada",description:{type:"text/plain"},url:{path:["linguagens",":linguagemId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"linguagemId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/linguagens/linguagens-api",custom_edit_url:null},c=void 0,u={unversionedId:"linguagens/atualizar",id:"linguagens/atualizar",title:"Realiza a altera\xe7\xe3o de uma linguagem cadastrada",description:"Realiza a altera\xe7\xe3o de uma linguagem cadastrada",source:"@site/docs/linguagens/atualizar.api.mdx",sourceDirName:"linguagens",slug:"/linguagens/atualizar",permalink:"/linguagens-api-doc/docs/linguagens/atualizar",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"atualizar",title:"Realiza a altera\xe7\xe3o de uma linguagem cadastrada",description:"Realiza a altera\xe7\xe3o de uma linguagem cadastrada",sidebar_label:"Realiza a altera\xe7\xe3o de uma linguagem cadastrada",hide_title:!0,hide_table_of_contents:!0,api:{tags:["linguagens"],operationId:"atualizar",parameters:[{name:"linguagemId",in:"path",required:!0,schema:{type:"string"}}],requestBody:{content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},title:{type:"string"},image:{type:"string"},ranking:{type:"integer",format:"int32"}},title:"Linguagem"}}},required:!0},responses:{200:{description:"Altera\xe7\xe3o relizada com sucesso",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},title:{type:"string"},image:{type:"string"},ranking:{type:"integer",format:"int32"}},title:"Linguagem"}}}},400:{description:"Par\xe2metros inv\xe1lidos",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},title:{type:"string"},image:{type:"string"},ranking:{type:"integer",format:"int32"}},title:"Linguagem"}}}},422:{description:"Dados da requisi\xe7\xe3o inv\xe1lidos",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},title:{type:"string"},image:{type:"string"},ranking:{type:"integer",format:"int32"}},title:"Linguagem"}}}},500:{description:"Erro ao realizar a altera\xe7\xe3o da linguagem",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},title:{type:"string"},image:{type:"string"},ranking:{type:"integer",format:"int32"}},title:"Linguagem"}}}}},description:"Realiza a altera\xe7\xe3o de uma linguagem cadastrada",method:"put",path:"/linguagens/{linguagemId}",servers:[{url:"https://imersao-alura-linguagens.fly.dev/ranking",description:"Generated server url"}],jsonRequestBodyExample:{id:"string",title:"string",image:"string",ranking:0},info:{title:"Linguagens API",description:"Swagger Ranking linguagens JSON \n\n## Introduction  \nEste \xe9 um exemplo do Ranking de linguagens. \n\n## Especifica\xe7\xe3o OpenAPI  \nEssa API \xe9 documentada no **formato OpenAPI**. O projeto foi **extendido** e utiliza as features deste [template](https://github.com/PaloAltoNetworks/docusaurus-template-openapi-docs) e do [Docusaurus](https://docusaurus.io). A depend\xeancia utilizada doi a `springdoc-openapi-starter-webmvc-ui` na `vers\xe3o v2` (https://springdoc.org/v2/), conforme a recomenda\xe7\xe3o da [documenta\xe7\xe3o](https://springdoc.org/v2/), quando utilizado `spring-boot v3`. \n\nEncontre mais sobre o Swagger em [http://swagger.io](http://swagger.io) ou em [irc.freenode.net, #swagger](http://swagger.io/irc/). \n\n## Proposta  \nA proposta desta API \xe9 fornecer um ranking fict\xedcio customiz\xe1vel das melhores linguagens de programa\xe7\xe3o. \n\nAdministre o ranking conforme seus crit\xe9rios. \n\n\n\nSim! \xc9 simples mesmo!",version:"1.0"},postman:{name:"Realiza a altera\xe7\xe3o de uma linguagem cadastrada",description:{type:"text/plain"},url:{path:["linguagens",":linguagemId"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) ",type:"text/plain"},type:"any",value:"",key:"linguagemId"}]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"PUT",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"put api-method",info_path:"docs/linguagens/linguagens-api",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Realiza a consulta de uma linguagem cadastradas",permalink:"/linguagens-api-doc/docs/linguagens/obter-por-id"},next:{title:"Realiza a exclus\xe3o de uma linguagem cadastradas",permalink:"/linguagens-api-doc/docs/linguagens/remover"}},y={},h=[{value:"Realiza a altera\xe7\xe3o de uma linguagem cadastrada",id:"realiza-a-altera\xe7\xe3o-de-uma-linguagem-cadastrada",level:2}],k={toc:h};function b(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"realiza-a-altera\xe7\xe3o-de-uma-linguagem-cadastrada"},"Realiza a altera\xe7\xe3o de uma linguagem cadastrada"),(0,n.kt)("p",null,"Realiza a altera\xe7\xe3o de uma linguagem cadastrada"),(0,n.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{}},(0,n.kt)("strong",null,"Path Parameters")),(0,n.kt)("div",null,(0,n.kt)("ul",null,(0,n.kt)(l.Z,{className:"paramsItem",param:{name:"linguagemId",in:"path",required:!0,schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,n.kt)(r.Z,{mdxType:"MimeTabs"},(0,n.kt)(g.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"image",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"ranking",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(g.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Altera\xe7\xe3o relizada com sucesso")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(g.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(p.Z,{mdxType:"SchemaTabs"},(0,n.kt)(g.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"image",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"ranking",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"})))),(0,n.kt)(g.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "id": "string",\n  "title": "string",\n  "image": "string",\n  "ranking": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(g.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Par\xe2metros inv\xe1lidos")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(g.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(p.Z,{mdxType:"SchemaTabs"},(0,n.kt)(g.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"image",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"ranking",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"})))),(0,n.kt)(g.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "id": "string",\n  "title": "string",\n  "image": "string",\n  "ranking": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(g.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Dados da requisi\xe7\xe3o inv\xe1lidos")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(g.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(p.Z,{mdxType:"SchemaTabs"},(0,n.kt)(g.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"image",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"ranking",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"})))),(0,n.kt)(g.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "id": "string",\n  "title": "string",\n  "image": "string",\n  "ranking": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(g.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Erro ao realizar a altera\xe7\xe3o da linguagem")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(g.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(p.Z,{mdxType:"SchemaTabs"},(0,n.kt)(g.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(o.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"image",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(o.Z,{collapsible:!1,name:"ranking",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"})))),(0,n.kt)(g.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(m.Z,{responseExample:'{\n  "id": "string",\n  "title": "string",\n  "image": "string",\n  "ranking": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);