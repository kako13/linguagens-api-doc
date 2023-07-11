/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "Um ranking customizável",
  "tagline": "das melhores linguagens de programação",
  "favicon": "img/gray/api-icon1.svg",
  "url": "https://kako13.github.io",
  "baseUrl": "/linguagens-api-doc/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "projectName": "linguagens-api-doc",
  "organizationName": "kako13",
  "deploymentBranch": "deployment",
  "trailingSlash": false,
  "presets": [
    [
      "classic",
      {
        "docs": {
          "sidebarPath": "/mnt/e/Dev Repo/Alura/Imersão Alura/linguagens-api-doc/sidebars.js",
          "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          "docLayoutComponent": "@theme/DocPage",
          "docItemComponent": "@theme/ApiItem"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        },
        "theme": {
          "customCss": "/mnt/e/Dev Repo/Alura/Imersão Alura/linguagens-api-doc/src/css/custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "docs": {
      "sidebar": {
        "hideable": true,
        "autoCollapseCategories": false
      },
      "versionPersistence": "localStorage"
    },
    "navbar": {
      "title": "Ranking de linguagens de programação",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/gray/ranking-icon.svg"
      },
      "items": [
        {
          "label": "API",
          "position": "left",
          "to": "/docs/category/linguagens-api"
        },
        {
          "href": "https://github.com/kako13/linguagens-api",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "API",
              "to": "/docs/category/linguagens-api"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Linkedin",
              "href": "https://www.linkedin.com/in/kaue-oliveira-ko/"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "GitHub",
              "href": "https://github.com/kako13/linguagens-api"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2023 Linguagens API. Built with Docusaurus."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [
        "ruby",
        "csharp",
        "php"
      ],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "plugins": [
    [
      "docusaurus-plugin-openapi-docs",
      {
        "id": "openapi",
        "docsPluginId": "classic",
        "config": {
          "linguagens": {
            "specPath": "swagger/swagger.json",
            "outputDir": "docs/linguagens",
            "downloadUrl": "https://imersao-alura-linguagens.fly.dev/ranking/v3/api-docs",
            "sidebarOptions": {
              "groupPathsBy": "tag",
              "categoryLinkSource": "tag"
            }
          }
        }
      }
    ]
  ],
  "themes": [
    "docusaurus-theme-openapi-docs"
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "path": "i18n",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "scripts": [],
  "headTags": [],
  "stylesheets": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "mermaid": false
  }
};
