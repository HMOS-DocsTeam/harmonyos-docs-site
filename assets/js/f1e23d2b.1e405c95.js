"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["598677"], {
652389(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_codegenie_code_edit_ide_edit_area_code_generation_ide_edit_area_code_generation_md_f1e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-codegenie-code-edit-ide-edit-area-code-generation-ide-edit-area-code-generation-md-f1e.json
var site_docs_ide_codegenie_code_edit_ide_edit_area_code_generation_ide_edit_area_code_generation_md_f1e_namespaceObject = JSON.parse('{"id":"ide-codegenie-code-edit/ide-edit-area-code-generation/ide-edit-area-code-generation","title":"编辑区对话","description":"CodeGenie提供Inline Edit能力，支持在ArkTS文件的编辑窗口中通过自然语言进行问答，基于上下文智能生成代码片段，提升代码可读性。","source":"@site/docs/ide-codegenie-code-edit/ide-edit-area-code-generation/ide-edit-area-code-generation.md","sourceDirName":"ide-codegenie-code-edit/ide-edit-area-code-generation","slug":"/ide-codegenie-code-edit/ide-edit-area-code-generation/","permalink":"/harmonyos-docs-site/ide-codegenie-code-edit/ide-edit-area-code-generation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"编辑区对话","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-edit-area-code-generation","kit":"devtools/ai-coding","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"代码修改","permalink":"/harmonyos-docs-site/ide-harmonyos-act/ide-code-modify/"},"next":{"title":"代码续写","permalink":"/harmonyos-docs-site/ide-codegenie-code-edit/ide-code-continuation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-codegenie-code-edit/ide-edit-area-code-generation/ide-edit-area-code-generation.md


const frontMatter = {
	title: '编辑区对话',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-edit-area-code-generation',
	kit: 'devtools/ai-coding',
	last_updated: '2026-04-24'
};
const contentTitle = '编辑区对话';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
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
        id: "编辑区对话",
        children: "编辑区对话"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CodeGenie提供Inline Edit能力，支持在ArkTS文件的编辑窗口中通过自然语言进行问答，基于上下文智能生成代码片段，提升代码可读性。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.2 Beta1开始，Inline Edit支持选择三方模型，根据指定的模型进行生成代码。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta1开始，Inline Edit入口名称变更为Inline Chat。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta2版本开始，需要在设置中勾选Show Inline Chat tips开启编辑区Inline Chat浮窗。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当前有以下两种方式唤醒Inline Chat对话框："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["若未选中代码片段，在代码编辑区域右键选择", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "CodeGenie > Inline Chat"
                })
              }), "（或使用快捷键", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Alt+I"
                })
              }), "，macOS中为", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Command+I"
                })
              }), "）。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(394107)/* ["default"] */.A) + "",
                width: "965",
                height: "591"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["若选中一段代码，点击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsxs)(_components.strong, {
                  children: ["Inline Chat（", (0,jsx_runtime.jsx)(_components.strong, {
                    children: (0,jsx_runtime.jsx)(_components.strong, {
                      children: "或使用快捷键"
                    })
                  }), "Alt+I"]
                })
              }), "，macOS中为****Command+I）****浮框。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["在DevEco Studio 6.1.0 Beta2之前版本，如未出现浮框，可在", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "File"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Settings"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "CodeGenie"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Code Generation"
                })
              }), "（macOS中为", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "DevEco Studio"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Prefe********rences/Settings"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "CodeGenie"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Code Generation"
                })
              }), "）中取消勾选", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Hide Inline Chat Overlay"
                })
              }), "选项。"]
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["从DevEco Studio 6.1.0 Beta2版本开始，如未出现浮框，可在", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "File"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Settings"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "CodeGenie > Code Completion"
                })
              }), " ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "& Inline Chat"
                })
              }), "（macOS中为", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "DevEco Studio"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Prefe********rences/Settings"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "CodeGenie"
                })
              }), " > ", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Code Completion & Inline Chat"
                })
              }), "）中勾选", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Show Inline Chat tips"
                })
              }), "启用浮窗。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(379869)/* ["default"] */.A) + "",
                width: "841",
                height: "546"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["选择在CodeGenie中已配置的三方模型，或者使用默认模型。三方模型配置具体请参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-agent/ide-agent-model",
            children: "模型（Model）配置"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(384894)/* ["default"] */.A) + "",
            title: "点击放大",
            width: "1171",
            height: "791"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若选择默认模型，在对话框中输入所需要的代码功能描述，在键盘输入回车或点击发送，开始生成代码。点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Stop Generation"
            })
          }), "，中断本轮代码生成过程。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["若选择三方模型，支持分析当前代码文件和生成分析报告，以及进行参数校验（", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Parameter Validation"
            })
          }), "）、代码注释（", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Code Explanation"
            })
          }), "）、代码优化（", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Code Optimization"
            })
          }), "），分析报告和参数校验等结果跟模型有关，具体操作如下："]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["未选中代码片段，在对话框中输入\"/\"，在键盘输入回车或点击发送，对当前代码文件开始分析。点击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Stop Generation"
                })
              }), "，中断本轮代码生成过程。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(323692)/* ["default"] */.A) + "",
                width: "689",
                height: "479"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["选中一段代码，在对话框中输入\"/\"，选择", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Parameter Validation"
                })
              }), "/", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Code Explanation"
                })
              }), "/", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Code Optimization"
                })
              }), "，可输入或不输入所需的功能描述，在键盘输入回车或点击发送后开始生成。点击", (0,jsx_runtime.jsx)(_components.strong, {
                children: (0,jsx_runtime.jsx)(_components.strong, {
                  children: "Stop Generation"
                })
              }), "，中断本轮代码生成过程。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: (0,jsx_runtime.jsx)(_components.img, {
                src: (__webpack_require__(696520)/* ["default"] */.A) + "",
                width: "887",
                height: "610"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "生成完毕将在编辑区展示本轮生成的代码内容，并通过不同颜色体现与当前代码的对比差异。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "绿色区域：新生成的代码内容。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "蓝色区域：对现有代码进行修改的内容。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "红色区域：删除的代码内容。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(89868)/* ["default"] */.A) + "",
            width: "934",
            height: "692"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["点击Inline Chat对话框中", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Accept All"
              })
            }), "（或使用快捷键", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Alt+Enter"
              })
            }), "），接受当前生成的全部内容；"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["点击Inline Chat对话框中", (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(735270)/* ["default"] */.A) + "",
              width: "18",
              height: "16"
            }), "刷新按钮****/****", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Regenerate"
              })
            }), "，将根据当前描述重新生成代码片段；"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["点击编辑区中", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Accept"
              })
            }), "（或使用快捷键", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Shift+Ctrl+Y"
              })
            }), "，macOS上为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Shift+Command+Y"
              })
            }), "），分段逐一接受并保留生成内容；"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["点击编辑区中", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Reject"
              })
            }), "（或使用快捷键", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Shift+Ctrl+N"
              })
            }), "，macOS上为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Shift+Command+N"
              })
            }), "），分段逐一拒绝并删除当前生成内容；"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Further Edit"
              })
            }), "（或使用快捷键", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Ctrl+K"
              })
            }), "，macOS上为", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Command+K"
              })
            }), "），重新进行输入，开始新一轮问答。"]
          }), "\n"]
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
696520(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833211-d255bbb1dc99f5585c66213358f05778.png");

},
394107(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753294-25eed8082e2e39c148350239c75a5a74.png");

},
384894(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753296-e7e9eb4ddbe8b0d321aa9653f1702c0d.png");

},
89868(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913290-8dc3c3ab37d0f8668ed01110ac499f24.png");

},
735270(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAQCAIAAACUZLgLAAAB70lEQVR4AXxSTUvjUBTNe9AMDg7Yyah11q1TR4V2p3bhV2PQjdGNuPTjZxl1KVItCl2ltfkFibu2aitYQW0lUhSVaKsn3vIQF4bDzbnnnvPyXhL+9Ow9PvkAIXxuwYVIBBUilySJMQnX2xvKdxAG+P2Y8LZarVKpZFlH21ubhrGxv79XKBSazRYMsAJIEtoxSA8P96lU6vy8Mjg4tLK6ura2PjaWqFYvyuUyYgTYiHBK4zlZ0xwY+K9ps93dPSSGQiFN0/r7I9RSgJKcbthb56/O4eEhtAQyiep5HsLUwtDe5NnpaSwWxwCgGSpx1Fqttru7U6/dgJPODw8P6vW667o4eiaTwUo0QCXuure5rPnieWbWvLtzSeeJRAKnajZfczlzdHQE6hfYtjM+MRmQfySnVce2acoV5U9STQZkWVVnFEUhFc8BiKuqyhgLBn/39PZOTSchYqv+2fDqlpaWUdETMAMEPzkp4n1CYR8/Bqofw02WA6gAZl/gOHaj0QiHw9CxECrgx0RTLBYsK39ZvcAAuL6+svL5SrmC/TPmO8W6/uemBuFI5F+wq8u2bcMw0un0seP0/e3TFxY7On5iFWGDs/25oQKc81g8Pq/r+Ld0fWF2bi4ajUJEAIBBwH8a0oCQQGACQABBwAG0jEnvAAAA//909Zk5AAAABklEQVQDADZkC4gsa302AAAAAElFTkSuQmCC");

},
323692(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753231-baa580f51d1db654c7caa8e3fa982ae5.png");

},
379869(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913284-4a094df5a1820404f3cd3972f07c052a.png");

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