"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["769641"], {
985388(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_page_generation_ide_page_generation_md_8b6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-page-generation-ide-page-generation-md-8b6.json
var site_docs_ide_page_generation_ide_page_generation_md_8b6_namespaceObject = JSON.parse('{"id":"ide-page-generation/ide-page-generation","title":"页面生成","description":"CodeGenie当前支持生成美食、旅游、购物、新闻和教育五大垂域的页面。通过自由输入、快捷模板、上传页面参考图片的方式生成应用/元服务可用的页面代码，生成结果支持实时预览，帮助开发者快速完成页面搭建。","source":"@site/docs/ide-page-generation/ide-page-generation.md","sourceDirName":"ide-page-generation","slug":"/ide-page-generation/","permalink":"/harmonyos-docs-site/ide-page-generation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"页面生成","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-page-generation","kit":"devtools/ai-coding","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"代码续写","permalink":"/harmonyos-docs-site/ide-codegenie-code-edit/ide-code-continuation/"},"next":{"title":"万能卡片生成","permalink":"/harmonyos-docs-site/ide-codegenie-service-widget/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-page-generation/ide-page-generation.md


const frontMatter = {
	title: '页面生成',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-page-generation',
	kit: 'devtools/ai-coding',
	last_updated: '2026-04-24'
};
const contentTitle = '页面生成';

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
        id: "页面生成",
        children: "页面生成"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "CodeGenie当前支持生成美食、旅游、购物、新闻和教育五大垂域的页面。通过自由输入、快捷模板、上传页面参考图片的方式生成应用/元服务可用的页面代码，生成结果支持实时预览，帮助开发者快速完成页面搭建。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.1 Beta1开始，在输入框新增页面生成的入口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.0.2 Beta1开始，在模块右键新增页面生成的入口Generate Pages with AI。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta1开始，生成页面后，预览时支持切换亮色和暗色模式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从DevEco Studio 6.1.0 Beta2开始，不支持在对话框输入\"/\"调出命令，选择Generate UI Code进入页面生成窗口的功能；页面生成时支持使用和切换模型。使用三方模型，预览时仅支持亮色模式；使用内置模型，预览时支持暗色和亮色模式切换；用户完成一轮会话，保存工程或清空会话后，可切换模型；支持查看历史生成信息，以及支持生成文件信息查看。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "操作步骤",
      children: "操作步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "点击页面右侧菜单栏CodeGenie图标完成登录后，可以通过如下三种方式进入页面生成窗口："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在对话框输入\"/\"调出命令，选择", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Generate UI Code"
              })
            }), "。从DevEco Studio 6.1.0 Beta2开始不支持。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在对话框左下角下拉框选择", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Generate UI Code********。"
              })
            })]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在模块右键选择", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "New > Page"
              })
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: ">"
              })
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Generate Pages with AI"
              })
            }), "。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(343)/* ["default"] */.A) + "",
            width: "1377",
            height: "980"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "可以通过如下方式生成页面："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["在对话框输入页面主题要求，点击", (0,jsx_runtime.jsx)(_components.img, {
              src: (__webpack_require__(902470)/* ["default"] */.A) + "",
              width: "21",
              height: "20"
            }), "图标，等待生成页面；"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["勾选模板中的APP分类（APP Category）和功能模块（Feature Modules），点击", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "Generate Prompt"
              })
            }), "，根据提示信息生成页面；"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["点击对话框中 ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "@Add Context"
              })
            }), " ", (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "> Add Image"
              })
            }), "，直接上传一张页面参考图片，等待生成页面。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(22374)/* ["default"] */.A) + "",
            width: "570",
            height: "880"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["对生成的页面进行预览，预览时支持切换亮色和暗色模式；点击历史对话中的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Back to Current Session"
            })
          }), "回退到之前的页面；点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Generate"
            })
          }), " ", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "UI files"
            })
          }), "查看生成的UI文件内容；新增和修改页面/页面中的关键信息，通过多轮对话完善页面。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(167837)/* ["default"] */.A) + "",
            width: "1382",
            height: "981"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Save to Project"
            })
          }), "，在弹窗中设置页面名称及指定页面所保存的模块。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(305119)/* ["default"] */.A) + "",
            width: "786",
            height: "543"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Next"
            })
          }), "将生成的代码文件及资源保存至工程中。弹窗中绿色文件为新增，蓝色文件表示该文件存在更改，点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Finish"
            })
          }), "完成添加。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(422417)/* ["default"] */.A) + "",
            width: "786",
            height: "543"
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
902470(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAABU0lEQVQ4EbWTPUsDQRCG84MtbALaHJgigsWhKBZB0wSvklgZU0UriRZKtAhoYaFgFexi+cqzMJd1s94HcgPLfezsM+/Me9dSA9FqgKl/Qd8/PjW9f9RofK3l8jvXVxm6WHxp9jx3gIOjvjY2E7eSnVSs3klWDA0B7e1uDuDw5dVEL69vQim5+4d9Dc6G61ASeqeZ/gL47XEaMGt696D2VjfePgqoiIIQkEuQ3P7u3rFmT3OXh4jJza2fsjKKisxpkF1EoRRiDyBdEefDkXv+RZRWUDZQiVqq46gFqnhHN9YFs0QEZ8KIuo9q52onlTnN/PwIzfH3olBLAIQaivjhlAfm+PuFUBKB2gx5pv2kk66ZUwvKGFBmgXrMKopSpczO5llkjl+kFArQ/pYic2pBMQlYmTm1oJiEWXynNgYfELsvbZ9DqAw/qxjM3lWCWnLVayPQH2KPIsVkFs5dAAAAAElFTkSuQmCC");

},
422417(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753661-69c74176fce46c5278c1d480b4c701c1.png");

},
167837(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913714-39bba0fc5b96defd53cce5a6dba8658d.png");

},
343(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753720-0f017abfca3c81d42b3527f5f9177165.png");

},
22374(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561753659-79364e44609d9437d4aecada685b6ec6.png");

},
305119(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561833639-517844a35f3e1dc92ad1410a92df7eed.png");

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