"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[273],{59585:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>d,default:()=>k,frontMatter:()=>g,metadata:()=>c,toc:()=>y});var i=t(87462),n=(t(67294),t(3905)),s=t(26389),r=t(94891),o=(t(75190),t(47507)),l=t(24310),m=t(63303),p=(t(75035),t(85162));const g={id:"adicionar",title:"Realiza o cadastro de uma linguagem",description:"Realiza o cadastro de uma linguagem",sidebar_label:"Realiza o cadastro de uma linguagem",hide_title:!0,hide_table_of_contents:!0,api:{tags:["linguagens"],operationId:"adicionar",requestBody:{content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},title:{type:"string"},image:{type:"string"},ranking:{type:"integer",format:"int32"}},title:"Linguagem"}}},required:!0},responses:{201:{description:"Cadastro relizado com sucesso",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},title:{type:"string"},image:{type:"string"},ranking:{type:"integer",format:"int32"}},title:"Linguagem"}}}},400:{description:"Par\xe2metros inv\xe1lidos",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},title:{type:"string"},image:{type:"string"},ranking:{type:"integer",format:"int32"}},title:"Linguagem"}}}},422:{description:"Dados da requisi\xe7\xe3o inv\xe1lidos",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},title:{type:"string"},image:{type:"string"},ranking:{type:"integer",format:"int32"}},title:"Linguagem"}}}},500:{description:"Erro ao cadastrar linguagem",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},title:{type:"string"},image:{type:"string"},ranking:{type:"integer",format:"int32"}},title:"Linguagem"}}}}},description:"Realiza o cadastro de uma linguagem",method:"post",path:"/linguagens",servers:[{url:"https://imersao-alura-linguagens.fly.dev/ranking",description:"Generated server url"}],jsonRequestBodyExample:{id:"string",title:"string",image:"string",ranking:0},info:{title:"Linguagens API",description:"Swagger Ranking linguagens JSON \n\n## Introduction  \nEste \xe9 um exemplo do Ranking de linguagens. \n\n## Especifica\xe7\xe3o OpenAPI  \nEssa API \xe9 documentada no **formato OpenAPI**. O projeto foi **extendido** e utiliza as features deste [template](https://github.com/PaloAltoNetworks/docusaurus-template-openapi-docs) e do [Docusaurus](https://docusaurus.io). A depend\xeancia utilizada doi a `springdoc-openapi-starter-webmvc-ui` na `vers\xe3o v2` (https://springdoc.org/v2/), conforme a recomenda\xe7\xe3o da [documenta\xe7\xe3o](https://springdoc.org/v2/), quando utilizado `spring-boot v3`. \n\nEncontre mais sobre o Swagger em [http://swagger.io](http://swagger.io) ou em [irc.freenode.net, #swagger](http://swagger.io/irc/). \n\n## Proposta  \nA proposta desta API \xe9 fornecer um ranking fict\xedcio customiz\xe1vel das melhores linguagens de programa\xe7\xe3o. \n\nAdministre o ranking conforme seus crit\xe9rios. \n\n\n\nSim! \xc9 simples mesmo!",version:"1.0"},postman:{name:"Realiza o cadastro de uma linguagem",description:{type:"text/plain"},url:{path:["linguagens"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/linguagens/linguagens-api",custom_edit_url:null},d=void 0,c={unversionedId:"linguagens/adicionar",id:"linguagens/adicionar",title:"Realiza o cadastro de uma linguagem",description:"Realiza o cadastro de uma linguagem",source:"@site/docs/linguagens/adicionar.api.mdx",sourceDirName:"linguagens",slug:"/linguagens/adicionar",permalink:"/linguagens-api-doc/docs/linguagens/adicionar",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"adicionar",title:"Realiza o cadastro de uma linguagem",description:"Realiza o cadastro de uma linguagem",sidebar_label:"Realiza o cadastro de uma linguagem",hide_title:!0,hide_table_of_contents:!0,api:{tags:["linguagens"],operationId:"adicionar",requestBody:{content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},title:{type:"string"},image:{type:"string"},ranking:{type:"integer",format:"int32"}},title:"Linguagem"}}},required:!0},responses:{201:{description:"Cadastro relizado com sucesso",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},title:{type:"string"},image:{type:"string"},ranking:{type:"integer",format:"int32"}},title:"Linguagem"}}}},400:{description:"Par\xe2metros inv\xe1lidos",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},title:{type:"string"},image:{type:"string"},ranking:{type:"integer",format:"int32"}},title:"Linguagem"}}}},422:{description:"Dados da requisi\xe7\xe3o inv\xe1lidos",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},title:{type:"string"},image:{type:"string"},ranking:{type:"integer",format:"int32"}},title:"Linguagem"}}}},500:{description:"Erro ao cadastrar linguagem",content:{"application/json":{schema:{type:"object",properties:{id:{type:"string"},title:{type:"string"},image:{type:"string"},ranking:{type:"integer",format:"int32"}},title:"Linguagem"}}}}},description:"Realiza o cadastro de uma linguagem",method:"post",path:"/linguagens",servers:[{url:"https://imersao-alura-linguagens.fly.dev/ranking",description:"Generated server url"}],jsonRequestBodyExample:{id:"string",title:"string",image:"string",ranking:0},info:{title:"Linguagens API",description:"Swagger Ranking linguagens JSON \n\n## Introduction  \nEste \xe9 um exemplo do Ranking de linguagens. \n\n## Especifica\xe7\xe3o OpenAPI  \nEssa API \xe9 documentada no **formato OpenAPI**. O projeto foi **extendido** e utiliza as features deste [template](https://github.com/PaloAltoNetworks/docusaurus-template-openapi-docs) e do [Docusaurus](https://docusaurus.io). A depend\xeancia utilizada doi a `springdoc-openapi-starter-webmvc-ui` na `vers\xe3o v2` (https://springdoc.org/v2/), conforme a recomenda\xe7\xe3o da [documenta\xe7\xe3o](https://springdoc.org/v2/), quando utilizado `spring-boot v3`. \n\nEncontre mais sobre o Swagger em [http://swagger.io](http://swagger.io) ou em [irc.freenode.net, #swagger](http://swagger.io/irc/). \n\n## Proposta  \nA proposta desta API \xe9 fornecer um ranking fict\xedcio customiz\xe1vel das melhores linguagens de programa\xe7\xe3o. \n\nAdministre o ranking conforme seus crit\xe9rios. \n\n\n\nSim! \xc9 simples mesmo!",version:"1.0"},postman:{name:"Realiza o cadastro de uma linguagem",description:{type:"text/plain"},url:{path:["linguagens"],host:["{{baseUrl}}"],query:[],variable:[]},header:[{key:"Content-Type",value:"application/json"},{key:"Accept",value:"application/json"}],method:"POST",body:{mode:"raw",raw:'""',options:{raw:{language:"json"}}}}},sidebar_class_name:"post api-method",info_path:"docs/linguagens/linguagens-api",custom_edit_url:null},sidebar:"openApiSidebar",previous:{title:"Realiza a consulta das linguagens cadastradas",permalink:"/linguagens-api-doc/docs/linguagens/listar"}},u={},y=[{value:"Realiza o cadastro de uma linguagem",id:"realiza-o-cadastro-de-uma-linguagem",level:2}],h={toc:y};function k(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"realiza-o-cadastro-de-uma-linguagem"},"Realiza o cadastro de uma linguagem"),(0,n.kt)("p",null,"Realiza o cadastro de uma linguagem"),(0,n.kt)(r.Z,{mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Request Body"),(0,n.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"image",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"ranking",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}))))),(0,n.kt)("div",null,(0,n.kt)(s.Z,{mdxType:"ApiTabs"},(0,n.kt)(p.Z,{label:"201",value:"201",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Cadastro relizado com sucesso")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"image",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"ranking",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "id": "string",\n  "title": "string",\n  "image": "string",\n  "ranking": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(p.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Par\xe2metros inv\xe1lidos")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"image",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"ranking",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "id": "string",\n  "title": "string",\n  "image": "string",\n  "ranking": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(p.Z,{label:"422",value:"422",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Dados da requisi\xe7\xe3o inv\xe1lidos")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"image",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"ranking",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "id": "string",\n  "title": "string",\n  "image": "string",\n  "ranking": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,n.kt)(p.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,n.kt)("div",null,(0,n.kt)("p",null,"Erro ao cadastrar linguagem")),(0,n.kt)("div",null,(0,n.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,n.kt)(p.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,n.kt)(m.Z,{mdxType:"SchemaTabs"},(0,n.kt)(p.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,n.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,n.kt)("summary",{style:{textAlign:"left"}},(0,n.kt)("strong",null,"Schema")),(0,n.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,n.kt)("ul",{style:{marginLeft:"1rem"}},(0,n.kt)(l.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"title",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"image",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,n.kt)(l.Z,{collapsible:!1,name:"ranking",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"})))),(0,n.kt)(p.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,n.kt)(o.Z,{responseExample:'{\n  "id": "string",\n  "title": "string",\n  "image": "string",\n  "ranking": 0\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}k.isMDXComponent=!0}}]);