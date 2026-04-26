"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["82762"], {
506284(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_agent_ide_agent_model_ide_agent_model_md_041_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-agent-ide-agent-model-ide-agent-model-md-041.json
var site_docs_ide_agent_ide_agent_model_ide_agent_model_md_041_namespaceObject = JSON.parse('{"id":"ide-agent/ide-agent-model/ide-agent-model","title":"模型（Model）配置","description":"CodeGenie支持通过Anthropic-API、Gemini-API和OpenAI-API协议接入第三方模型，为自定义Agent提供多样化的模型选择。","source":"@site/docs/ide-agent/ide-agent-model/ide-agent-model.md","sourceDirName":"ide-agent/ide-agent-model","slug":"/ide-agent/ide-agent-model/","permalink":"/harmonyos-docs-site/ide-agent/ide-agent-model/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"模型（Model）配置","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-agent-model","kit":"devtools/ai-coding","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"模型上下文协议（MCP）配置","permalink":"/harmonyos-docs-site/ide-agent/ide-agent-mcp/"},"next":{"title":"规则（Rules）配置","permalink":"/harmonyos-docs-site/ide-agent/ide-agent-rules/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-agent/ide-agent-model/ide-agent-model.md


const frontMatter = {
	title: '模型（Model）配置',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-agent-model',
	kit: 'devtools/ai-coding',
	last_updated: '2026-04-24'
};
const contentTitle = '模型（Model）配置';

const assets = {

};



const toc = [{
  "value": "操作步骤",
  "id": "操作步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "模型model配置",
        children: "模型（Model）配置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CodeGenie支持通过Anthropic-API、Gemini-API和OpenAI-API协议接入第三方模型，为自定义Agent提供多样化的模型选择。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.1 Beta1开始，CodeGenie支持通过OpenAI-API协议接入第三方模型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.2 Beta1开始，CodeGenie支持通过Anthropic-API、Gemini-API协议接入第三方模型，以及新增Built-in Models内置模型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.2 Release（6.0.2.646）开始， 支持通过服务提供商接入三方模型，URL接入时支持使用Ollama协议的三方模型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作步骤",
      children: "操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击界面右上方", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(372787)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "24",
            height: "23"
          }), "按钮，或者点击界面右上方", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Settings"
            })
          }), (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(107619)/* ["default"] */.A) + "",
            width: "22",
            height: "20"
          }), "按钮，选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Model"
            })
          }), "，进入配置页面。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(799875)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "633",
            height: "248"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(605411)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "20",
            height: "20"
          }), "按钮添加模型，当前支持通过Service Provider（服务提供商）和URL两种方式添加。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["通过服务提供商添加。填写", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Name"
                })
              }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Provider"
                })
              }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "API Key"
                })
              }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Model"
                })
              }), "字段后，点击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Add"
                })
              }), "，校验成功后模型将被添加到列表中。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Name"
                  })
                }), "：模型名称。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Provider"
                  })
                }), "：模型的提供商，可选项包括OpenAI、Gemini、Anthropic、DeepSeek、Alibaba Cloud、Z.ai。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "API Key"
                  })
                }), "：模型的访问密钥，在提供商网站申请。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Model"
                  })
                }), "：模型的标识。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(488344)/* ["default"] */.A) + "",
                title: "点击放大",
                width: "633",
                height: "412"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["通过URL添加。填写", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Name"
                })
              }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Protocol"
                })
              }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Url"
                })
              }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "API Key"
                })
              }), "、", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Model"
                })
              }), "字段后，点击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Add"
                })
              }), "，校验成功后模型将被添加到列表中。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Name"
                  })
                }), "：模型名称。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Url"
                  })
                }), "：模型的访问地址。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Protocol"
                  })
                }), "：模型的协议，可选项包括OpenAI、Anthropic、Gemini、Ollama。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "API Key"
                  })
                }), "：模型的访问密钥，在提供商网站申请。"]
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: [(0,jsx_runtime.jsx)(_components.strong, {
                  children: (0,jsx_runtime.jsx)(_components.strong, {
                    children: "Model"
                  })
                }), "：模型的标识。"]
              }), "\n"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(865355)/* ["default"] */.A) + "",
                title: "点击放大",
                width: "631",
                height: "458"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "All Models"
            })
          }), "下展示所有添加成功的模型，Built-in Models为内置模型，Custom Models为三方模型（自定义模型）。将鼠标悬浮在三方模型上会显示两个操作按钮：编辑、删除，方便开发者管理三方模型。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(887248)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "628",
            height: "277"
          })
        }), "\n"]
      }), "\n"]
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



},
488344(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002544365866-806177ffcfeee7114c2df1717f34ba5c.png");

},
865355(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002575046075-1fa24de3c13f5f0074b7558b28f8a105.png");

},
799875(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002574886089-589eb6792e6226368b5c317e4b83cb5e.png");

},
372787(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAIAAACeQxh6AAAB6UlEQVR4AbSUPUgbYRzG33svfRtO0nZo2q1Tl5ZCC8WppdAOUkoJ0kInoXVoKQVpEMVZcRAUURQERRDFRUFBHETEQcRZRFyV82OIiij4Qc7c+bvckryeFzgxPLz8n4//8ybkOGnvHdh7uc0tezPeZ8tmnRIphHDzF8IrMMSBV/DXhfCLvNgtxZuDdb+oSG97RBUVXGN2Nfm9Pw0YoBG3hRed5Y2xlarPXenp1Uct35KAAYqIFVqnFx2dyr6FVE3nk7XdBwN/1XhWfXhpAAYoIhYBYlqdXvSlOz26XNVTr/p+33v1rMyFImIRIFah6OTcqP8ksyNOw5CzbrulaSgiFgFipRZz2Z1w0JhJLLWrt8/Nf4OXdT3O0oYHGKCIWASIaQgpImEp8eujXGxVP96ZbRMOYIAiYhG4jvCiIJcwRaZaZqrNIiQ00EPPqKLQhZvEOyt6aHltk87OoXfTzVgEiGkB/RvN/N9X3mlth5Mddja2y/5+KCIWAWIVih6n3GzNyXxz7sXT4z8DTl1vnscHMEARsQgQq1AU2JZyf74/m2vK1b4+3jm4BAxQRKwgo536Tyu1E9L7+uZ8qmEfMEBLXW2OKtKi0dQvMgwzOhTtBut+kVRJEbvLMP314J3NaSrLvJ+KA2WxLoS4AgAA//+qQP+iAAAABklEQVQDAEiCBx6/PX/2AAAAAElFTkSuQmCC");

},
605411(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAU0lEQVR4AdyQUQoAIAhDw3P36Yk7QeBE/JJAJXAfqxb1WnQSopXQwMNbFPzJkM5SUw1tdSEDEvPSzuwEggsYiXkp2W59mbSR0TZ4Qhs5YGLrH/kCAAD//5lYOW4AAAAGSURBVAMAiUFW4WyHXRQAAAAASUVORK5CYII=");

},
887248(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002544206214-5ae3a8b6f8554171ba03960ffd980905.png");

},
107619(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAIAAAAGHlpnAAACIElEQVR4AbSRz0/TcBjGDYd2bCc3xG3sB4gJbi2NC5CAM8wlHpyRGZ0XuOoNPOmfoSfhple4OI3DOA8mc8QJCZCZ0m6SiLBudBO3eXHQ9sRDmjS0oSQEaJ588/Z53vfTt22bINZPqbYLp77OGbGw8P3Fyxkom80ds6vpFo16k10rTE0+fjr1ZI0r1v82zChGRKlU/pT+AiXfpW5FwhaLhSTJaCScfP8RJoQGA0uH2G3tplKfXc5On7drbCxG0wG1m6ID9+MxmIjQ0PrfUn311CH4wvqV3u5QiKHpgMt1udn8l8l8gxqNptPZCRNR79Uenl9Xh9VTh/B43KUtQZEVZJifnX2L92hvJ+fmkqDAVBSltCl4vG7UmnQIPNnv93L8T8Qsyw8MXB8ZGRoeHhocDLFsASae7/V1ud1O1Jp0CM09UaFDVKt/8MFp6hoQDEOtrv5YXFxeWlpeWckzTBAmRfWVhW1RrKHWpENUKqK/20eQBGK7/eLExCNJkvf25PHxhMNhh0kQhL/HVymLqDXpEFSw7/fGVj7PclwRG4ESjd6EMF+r7cBEtPFrk6IP1jwaYbVZ4/E71dqOUN6en09jRu3jueKHVBomIjTYbFbVV0/dFrDwR+7GbkOJh/Gv2ZwkSbIsZ7K5xIN7MCE0oO2wjAgtc3TYmf7g9MybV9Ov++lAxyWHFhkKUwT6RkdvPH82CUUiYdya6TiE2YzBPwPEPgAAAP//5yPDwwAAAAZJREFUAwBd0BOwqAJ7PwAAAABJRU5ErkJggg==");

},
28453(__unused_rspack___webpack_module__, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  R: () => (useMDXComponents),
  x: () => (MDXProvider)
});
/* import */ var react__rspack_import_0 = __webpack_require__(296540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__rspack_import_0.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__rspack_import_0.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__rspack_import_0.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__rspack_import_0.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


},

}]);