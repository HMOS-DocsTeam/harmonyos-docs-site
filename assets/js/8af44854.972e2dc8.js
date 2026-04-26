"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["836548"], {
828836(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_js_framework_overview_js_framework_lifecycle_js_framework_lifecycle_md_8af_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-js-framework-overview-js-framework-lifecycle-js-framework-lifecycle-md-8af.json
var site_docs_arkui_ui_js_dev_js_framework_overview_js_framework_lifecycle_js_framework_lifecycle_md_8af_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/js-framework-overview/js-framework-lifecycle/js-framework-lifecycle","title":"生命周期","description":"应用生命周期","source":"@site/docs/arkui/ui-js-dev/js-framework-overview/js-framework-lifecycle/js-framework-lifecycle.md","sourceDirName":"arkui/ui-js-dev/js-framework-overview/js-framework-lifecycle","slug":"/arkui/ui-js-dev/js-framework-overview/js-framework-lifecycle/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/js-framework-overview/js-framework-lifecycle/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"生命周期","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/js-framework-lifecycle","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"JS语法参考","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/js-framework-overview/js-framework-syntax/js-framework-syntax-js/"},"next":{"title":"资源限定与访问","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/js-framework-overview/js-framework-resource-restriction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/js-framework-overview/js-framework-lifecycle/js-framework-lifecycle.md


const frontMatter = {
	title: '生命周期',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/js-framework-lifecycle',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '生命周期';

const assets = {

};



const toc = [{
  "value": "应用生命周期",
  "id": "应用生命周期",
  "level": 2
}, {
  "value": "页面生命周期",
  "id": "页面生命周期",
  "level": 2
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "生命周期",
        children: "生命周期"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用生命周期",
      children: "应用生命周期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在app.js中可以定义如下应用生命周期函数："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "触发时机"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onCreate"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用创建"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当应用创建时调用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onShow6+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用处于前台"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当应用处于前台时触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onHide6+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用处于后台"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当应用处于后台时触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDestroy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用销毁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当应用退出时触发。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "页面生命周期",
      children: "页面生命周期"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在页面JS文件中可以定义如下页面生命周期函数："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "触发时机"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onInit"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面初始化"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面数据初始化完成时触发，只触发一次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onReady"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面创建完成"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面创建完成时触发，只触发一次。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onShow"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面显示"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面显示时触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onHide"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面消失"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面消失时触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onDestroy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面销毁"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面销毁时触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onBackPress"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回按钮动作"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当用户点击返回按钮时触发。  - 返回true表示页面自己处理返回逻辑。  - 返回false表示使用默认的返回逻辑。  - 不返回值会作为false处理。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onActive()5+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面激活"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面激活时触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onInactive()5+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面暂停"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "页面暂停时触发。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onNewRequest()5+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "() => void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FA重新请求"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FA已经启动时收到新的请求后触发。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "生命周期函数的一般调用顺序如下所示："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 生命周期函数调用顺序图示"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(186401)/* ["default"] */.A) + "",
        width: "725",
        height: "662"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过以下示例，详细说明生命周期函数的调用顺序。首先创建两个页面，分别为pageA和pageB，并在config.json中配置页面路由信息："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    // ...\n    \"pages\": [\n        \"pages/pageA/pageA\",\n        \"pages/pageB/pageB\"\n    ],\n    // ...\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pageA实现代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- pageA.hml -->\n<div class=\"container\">\n  <text class=\"title\">This is PageA</text>\n  <input type=\"button\" value=\"Go to the PageB\" onclick=\"launch\"></input>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* pageA.css */\n.container {\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.title {\n  font-size: 38px;\n  text-align: center;\n  width: 100%;\n  height: 40%;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pageA.js\nimport router from '@ohos.router';\nexport default {\n  launch() {\n    router.push ({\n      url: 'pages/pageB/pageB'\n    });\n  },\n  onInit() {\n    console.info('PageA onInit');\n  },\n  onReady() {\n    console.info('PageA onReady');\n  },\n  onShow() {\n    console.info('PageA onShow');\n  },\n  onHide() {\n    console.info('PageA onHide');\n  },\n  onDestroy() {\n    console.info('PageA onDestroy');\n  },\n  onBackPress() {\n    console.info('PageA onBackPress');\n  },\n  onActive() {\n    console.info('PageA onActive');\n  },\n  onInactive() {\n    console.info('PageA onInactive');\n  },\n  onNewRequest() {\n    console.info('PageA onNewRequest');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pageB实现代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- pageB.hml -->\n<div class=\"container\">\n  <text class=\"title\">This is PageB</text>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* pageB.css */\n.container {\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n.title {\n  font-size: 38px;\n  text-align: center;\n  width: 100%;\n  height: 40%;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// pageB.js\nexport default {\n  onInit() {\n    console.info('PageB onInit');\n  },\n  onReady() {\n    console.info('PageB onReady');\n  },\n  onShow() {\n    console.info('PageB onShow');\n  },\n  onHide() {\n    console.info('PageB onHide');\n  },\n  onDestroy() {\n    console.info('PageB onDestroy');\n  },\n  onBackPress() {\n    console.info('PageB onBackPress');\n  },\n  onActive() {\n    console.info('PageB onActive');\n  },\n  onInactive() {\n    console.info('PageB onInactive');\n  },\n  onNewRequest() {\n    console.info('PageB onNewRequest');\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行程序，通过日志观察生命周期函数的调用顺序。其中pageA的生命周期函数的调用顺序为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "打开应用进入页面A：onInit() -> onReady() -> onActive() -> onShow()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在页面A打开页面B：onHide()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从页面B返回页面A：onShow()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "退出页面A：onBackPress() -> onInactive() -> onHide()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "页面A隐藏到后台运行：onInactive() -> onHide()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "页面A从后台运行恢复到前台：onNewRequest() -> onShow() -> onActive()"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "pageB的生命周期函数的调用顺序为："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在页面A打开页面B：onInit() -> onReady() -> onShow()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从页面B返回页面A：onBackPress() -> onHide() -> onDestroy()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "页面B隐藏到后台运行：onInactive() -> onHide()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "页面B从后台运行恢复到前台：onNewRequest() -> onShow() -> onActive()"
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
186401(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478081-7ab79ad2a9044a8cce9ee9b19c137753.png");

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