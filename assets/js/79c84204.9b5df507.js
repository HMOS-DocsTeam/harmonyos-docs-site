"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["137385"], {
1837(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_agent_ide_agent_use_ide_agent_use_md_79c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-agent-ide-agent-use-ide-agent-use-md-79c.json
var site_docs_ide_agent_ide_agent_use_ide_agent_use_md_79c_namespaceObject = JSON.parse('{"id":"ide-agent/ide-agent-use/ide-agent-use","title":"自定义智能体（Agent）配置和调用","description":"从DevEco Studio 6.0.1 Beta1开始，CodeGenie支持用户添加模型和自定义Agent，增强AI问答能力，提升AI辅助编程和分析能力。","source":"@site/docs/ide-agent/ide-agent-use/ide-agent-use.md","sourceDirName":"ide-agent/ide-agent-use","slug":"/ide-agent/ide-agent-use/","permalink":"/harmonyos-docs-site/ide-agent/ide-agent-use/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"自定义智能体（Agent）配置和调用","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-agent-use","kit":"devtools/ai-coding","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"规则（Rules）配置","permalink":"/harmonyos-docs-site/ide-agent/ide-agent-rules/"},"next":{"title":"本地知识库配置","permalink":"/harmonyos-docs-site/ide-ocal-knowledge/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-agent/ide-agent-use/ide-agent-use.md


const frontMatter = {
	title: '自定义智能体（Agent）配置和调用',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-agent-use',
	kit: 'devtools/ai-coding',
	last_updated: '2026-04-24'
};
const contentTitle = '自定义智能体（Agent）配置和调用';

const assets = {

};



const toc = [{
  "value": "Agent配置",
  "id": "agent配置",
  "level": 2
}, {
  "value": "Agent调用",
  "id": "agent调用",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "自定义智能体agent配置和调用",
        children: "自定义智能体（Agent）配置和调用"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.1 Beta1开始，CodeGenie支持用户添加模型和自定义Agent，增强AI问答能力，提升AI辅助编程和分析能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.2 Beta1开始，自定义Agent配置时支持添加DevEco Studio内置的工具Built-in Tools、Auto Run和Blocklist。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.2 Release（6.0.2.646）开始，DevEco Studio内置工具新增To Do工具；支持Agent智能体切换模型和配置三方模型。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.2 Beta1开始，DevEco Studio内置工具新增Web Rag工具；Blocklist变更为AllowList，在调用命令行工具执行命令时，白名单中的命令会自动执行；不支持在对话区域输入\"/\"调出命令，选择自定义的Agent功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "agent配置",
      children: "Agent配置"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击界面右上方", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(764584)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "25",
            height: "24"
          }), "按钮；或者点击界面右上方", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Settings"
            })
          }), (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(419333)/* ["default"] */.A) + "",
            width: "22",
            height: "20"
          }), "按钮，选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Agent"
            })
          }), "；或者在输入框左下角下拉框选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Create Agent"
            })
          }), "，进入配置页面。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(835578)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "629",
            height: "930"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(583110)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "20",
            height: "20"
          }), "按钮，填写自定义Agent的相关信息。点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Add"
            })
          }), "，将创建自定义Agent。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Name"
              })
            }), "：必填，自定义Agent的名称。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Prompt Description"
              })
            }), "：可选，自定义Agent的提示词。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "MCP Tools"
              })
            }), "：可选，添加MCP工具，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-agent/ide-agent-mcp",
              children: "MCP配置"
            }), "。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Built-in Tools"
              })
            }), "：可选，开启或关闭File Manager、Terminal、Compile and Build、Web Rag、To Do，默认开启。。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "File Manager开启后，支持读写本地的代码文件；"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Terminal开启后，在CodeGenie对话框执行命令时可自动拉起Terminal终端；"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Compile and Build开启后，支持编译与构建项目；"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "Web Rag开启后，支持在问答过程中检索鸿蒙相关的资料，提升答复准确性；"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "To Do开启后，支持把一个复杂任务拆解成多步执行，帮助CodeGenie聚焦任务，避免遗忘任务，提升答复准确性。"
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Select Model"
              })
            }), "：必填，选择需要使用的模型，具体请参考", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-agent/ide-agent-model",
              children: "模型（Model）配置"
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(109861)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "626",
            height: "779"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "All Agents"
            })
          }), "下展示所有智能体。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(505318)/* ["default"] */.A) + "",
            width: "572",
            height: "211"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置自动执行开关和白名单列表。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Auto Run"
              })
            }), "：内置工具（命令行工具除外）和MCP工具被调用过程中，自动执行的开启开关。开启时，工具被调用可自动执行和输出内容；关闭时，工具被调用需开发者授权。默认关闭。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "AllowList"
              })
            }), "：白名单列表，开启Auto Run后，白名单中的命令同样会自动执行。点击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Enter Command"
              })
            }), "中输入命令，点击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Add"
              })
            }), "可将命令添加至白名单列表；点击命令后×，可将命令从白名单列表中删除。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(281349)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "637",
            height: "247"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择自定义智能体后，开发者可以切换模型，包括内置模型/默认模型（deepseek-v3.2、glm-5）和三方模型（如deepseek）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击置灰的三方模型会跳转到Service Provider配置界面（如", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "deepseek-chat"
            })
          }), "），填写", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "API Key"
            })
          }), "字段即可添加模型。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(348629)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "629",
            height: "411"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "agent调用",
      children: "Agent调用"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Agent配置完成后，可以通过如下两种方式开启调用："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在对话区域输入\"/\"调出命令，选择自定义的Agent（如", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "figma2code"
              })
            }), "）。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在输入框左下角HarmonyOS Ask处下拉框中选择自定义的Agent（如", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "figma2code"
              })
            }), "）。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(3574)/* ["default"] */.A) + "",
            width: "537",
            height: "220"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "选择自定义Agent后，在右侧可以切换模型，默认使用配置Agent时添加的模型。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(126061)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "552",
            height: "138"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "根据业务需要，进行智能问答、代码生成、代码智能解读等，CodeGenie将会调用自定义Agent和选择的模型生成内容。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(924232)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "584",
            height: "409"
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
924232(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833103-920e6236c1c548c048f85dd1a2a3be09.png");

},
419333(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAIAAAAGHlpnAAACIElEQVR4AbSRz0/TcBjGDYd2bCc3xG3sB4gJbi2NC5CAM8wlHpyRGZ0XuOoNPOmfoSfhple4OI3DOA8mc8QJCZCZ0m6SiLBudBO3eXHQ9sRDmjS0oSQEaJ588/Z53vfTt22bINZPqbYLp77OGbGw8P3Fyxkom80ds6vpFo16k10rTE0+fjr1ZI0r1v82zChGRKlU/pT+AiXfpW5FwhaLhSTJaCScfP8RJoQGA0uH2G3tplKfXc5On7drbCxG0wG1m6ID9+MxmIjQ0PrfUn311CH4wvqV3u5QiKHpgMt1udn8l8l8gxqNptPZCRNR79Uenl9Xh9VTh/B43KUtQZEVZJifnX2L92hvJ+fmkqDAVBSltCl4vG7UmnQIPNnv93L8T8Qsyw8MXB8ZGRoeHhocDLFsASae7/V1ud1O1Jp0CM09UaFDVKt/8MFp6hoQDEOtrv5YXFxeWlpeWckzTBAmRfWVhW1RrKHWpENUKqK/20eQBGK7/eLExCNJkvf25PHxhMNhh0kQhL/HVymLqDXpEFSw7/fGVj7PclwRG4ESjd6EMF+r7cBEtPFrk6IP1jwaYbVZ4/E71dqOUN6en09jRu3jueKHVBomIjTYbFbVV0/dFrDwR+7GbkOJh/Gv2ZwkSbIsZ7K5xIN7MCE0oO2wjAgtc3TYmf7g9MybV9Ov++lAxyWHFhkKUwT6RkdvPH82CUUiYdya6TiE2YzBPwPEPgAAAP//5yPDwwAAAAZJREFUAwBd0BOwqAJ7PwAAAABJRU5ErkJggg==");

},
126061(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913190-453a7884c454a0979f19d0af29adf559.png");

},
348629(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002544201944-06d9600980ffc86591a77d463fa24281.png");

},
109861(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753184-f0ed200731923e9768d8d605328cb9d3.png");

},
764584(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAYCAIAAACA18GRAAABf0lEQVR4AeyQzUsCURTFy2bo65+oRTkVFYJtgqCiRURUE1pE4KoWmgamKANBH0KuSvqCoH8gUKJdgWQqLYMgKN20aVFgQbMZipmIDg208c5jjFn6ODzOuffdH+8929Pzm1Wy1Vi3qqzK/pL1X/lC3eBmkxBqhmAQ2WwWay1Vn/B8FrcVCAbx/6wXudbR8q3PwyDq3min7zUab8S7MIP9T3pEC4YUzbqQPvCu1ru+XOQRBoJBhEGLBKFIs9CAxsYntmLrr6USBIOIIkMsltcXaGu3e+ZnIBhEBggtFovjef9y8DydhWAQMcCQIUuW3/d3d2ZdkwP9TgjmYC+BYsWsYuFhzi1qmrYRi6cz1xCMqqooomWEI+71pWlSNByRVlfCUaGjs+F3wSCiGAoGFEUhcQQrmTyxC8LQ8Ej5AIrdPb1np6nyFioEK5u5FKfd6JGaEl353BXZIlgcxy95F5yOLlJ+3yIOmGUdHh3f3N4zhANmWeQ5M0XijWbGyDNWsn4AAAD//xiZkYEAAAAGSURBVAMAkGnrxRqgZn0AAAAASUVORK5CYII=");

},
835578(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002544361586-682d79071233e536bad60c3acdc049e4.png");

},
505318(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002575106855-2ddb41a210bb4f2f9971924e4f5cd9be.png");

},
583110(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAAU0lEQVR4AdyQUQoAIAhDw3P36Yk7QeBE/JJAJXAfqxb1WnQSopXQwMNbFPzJkM5SUw1tdSEDEvPSzuwEggsYiXkp2W59mbSR0TZ4Qhs5YGLrH/kCAAD//5lYOW4AAAAGSURBVAMAiUFW4WyHXRQAAAAASUVORK5CYII=");

},
281349(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913186-dffd466ed151bcd472fe81e5b4fee66c.png");

},
3574(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753131-17bafa605dfd7c93a68d5e4a5d7e6326.png");

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