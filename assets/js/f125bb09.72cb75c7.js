"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["378743"], {
638026(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scan_kit_guide_scan_directservice_scan_directservice_md_f12_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scan-kit-guide-scan-directservice-scan-directservice-md-f12.json
var site_docs_scan_kit_guide_scan_directservice_scan_directservice_md_f12_namespaceObject = JSON.parse('{"id":"scan-kit-guide/scan-directservice/scan-directservice","title":"接入“扫码直达”服务","description":"扫码直达能力仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）接入使用。","source":"@site/docs/scan-kit-guide/scan-directservice/scan-directservice.md","sourceDirName":"scan-kit-guide/scan-directservice","slug":"/scan-kit-guide/scan-directservice/","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-directservice/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"接入“扫码直达”服务","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-directservice","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开发准备","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-config-agc/"},"next":{"title":"默认界面扫码","permalink":"/harmonyos-docs-site/scan-kit-guide/scan-scanbarcode/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scan-kit-guide/scan-directservice/scan-directservice.md


const frontMatter = {
	title: '接入“扫码直达”服务',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scan-directservice',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '接入“扫码直达”服务';

const assets = {

};



const toc = [{
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "开发后验证",
  "id": "开发后验证",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "接入扫码直达服务",
        children: "接入“扫码直达”服务"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(490015)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "扫码直达能力仅支持中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）接入使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在日常生活中，人们会使用各种应用扫各式各样的码，而“扫码直达”服务则为用户带来一种全新的扫码体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者将域名注册到“扫码直达”服务后，用户可通过控制中心等系统级的常驻入口，扫应用的二维码、条形码并跳转到应用对应服务页，实现一步直达服务的体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者接入“扫码直达”服务，能为应用带来："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "更浅层的扫码入口和更便捷的“扫码直达”服务体验。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS强大的扫码能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "更容易触达用户的全新渠道。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(755433)/* ["default"] */.A) + "",
        width: "867",
        height: "352"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "开发者参考App Linking指导完成域名注册。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "用户通过HarmonyOS扫码入口发起扫码请求。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HarmonyOS扫码入口调用系统能力解析码值，查询码值对应的应用信息后拉起应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "解析码值结果跳转应用服务页。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/scan-kit-guide/scan-config-agc",
            children: "开发准备"
          }), "完成必要的准备工作。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "处理接收到的码值，完成应用内页面跳转逻辑。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { router, window } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { UIAbility, Want } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n\nexport default class EntryAbility extends UIAbility {\n  private page: string = 'pages/Index';\n  private uiContext?: UIContext;\n\n  // 冷启动场景通过onCreate回调获取码值信息\n  onCreate(want: Want): void {\n    hilog.info(0x0001, '[Scan Access]', 'Succeeded in getting want in onCreate');\n    // 从want中获取传入的链接信息。\n    // 如传入的url为：https://www.example.com/programs?router=Access\n    this.getRouterUri(want);\n  }\n\n\n  // 热启动场景通过onNewWant回调获取码值信息\n  onNewWant(want: Want): void {\n    hilog.info(0x0001, '[Scan Access]', 'Succeeded in getting want in onNewWant');\n    // 从want中获取传入的链接信息\n    this.getRouterUri(want);\n  }\n\n\n  onWindowStageCreate(windowStage: window.WindowStage): void {\n    hilog.info(0x0001, '[Scan Access]', 'Ability onWindowStageCreate');\n    try {\n      windowStage.getMainWindow().then((windowObj: window.Window) => {\n        try {\n          windowStage.loadContent(this.page).then(() => {\n            hilog.info(0x0001, '[Scan Access]', 'Succeeded in loading the content.');\n            try {\n              this.uiContext = windowObj.getUIContext();\n              hilog.info(0x0001, '[Scan Access]', 'Succeeded in getting UIContext.');\n            } catch (err) {\n              hilog.error(0x0001, '[Scan Access]', `Failed to get UIContext by windowObj. Code: ${err.code}.`);\n            }\n          }).catch((err: BusinessError) => {\n            hilog.error(0x0001, '[Scan Access]', `Failed to load the content. Code: ${err.code}.`);\n          })\n        } catch (err) {\n          hilog.error(0x0001, '[Scan Access]', `Failed to load the content. Code: ${err.code}.`);\n        }\n      }).catch((err: BusinessError) => {\n        hilog.error(0x0001, '[Scan Access]', `Failed to get MainWindow. Code: ${err.code}.`);\n      })\n    } catch (err) {\n      hilog.error(0x0001, '[Scan Access]', `Failed to get MainWindow. Code: ${err.code}.`);\n    }\n  }\n\n\n  // 解析扫码结果，跳转相应页面\n  private getRouterUri(want: Want) {\n    const uri: string | undefined = want?.uri;\n    if (uri && this.uiContext) {\n      // 开发者根据解析的uri跳转至相应页面，例如需要跳转页面为\"pages/Access\"\n      const status: router.RouterState = this.uiContext.getRouter().getState();\n      if (status && status.name !== 'Access' && uri) {\n        try {\n          // 根据uri参数做业务处理\n          this.uiContext.getRouter().pushUrl({\n            url: 'pages/Access'\n          }).catch((err: BusinessError) => {\n            hilog.error(0x0001, '[Scan Access]', `Failed to pushUrl by getRouter. Code: ${err.code}.`);\n          });\n        } catch (err) {\n          hilog.error(0x0001, '[Scan Access]', `Failed to pushUrl by getRouter. Code: ${err.code}.`);\n        }\n      }\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "验证“扫码直达”服务。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "将配置好域名映射关系的测试应用安装到本地。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "打开HarmonyOS扫码入口（控制中心扫码入口），扫描应用发行的二维码。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "确认能否拉起应用并跳转目标服务页。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "集成效果，以美团单车场景为例："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(800880)/* ["default"] */.A) + "",
        width: "348",
        height: "720"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发后验证",
      children: "开发后验证"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "集成扫码直达能力应用用户体验质量建议"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用完成开发后，可参照以下标准检查集成扫码直达后的用户体验是否符合预期："
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "标准编号"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "标准项名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "标准详细描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用已安装跳转体验"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "规则"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过系统扫一扫扫描码图可以跳转到履约页面。履约页面指的是扫码后的目标服务页面，例如，扫支付码跳转到应用的支付页面，而非首页。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "2"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用未安装跳转体验"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "建议"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通过系统扫一扫扫描码图会拉起浏览器加载码值所对应的网页，请设计网页满足用户诉求、指导用户安装应用等。"
          })]
        })]
      })]
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
755433(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478611-2a790b973dacaff37c4695ce8658039f.png");

},
800880(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798962-778a6c5a50b0e1c8244576bc803c09ae.gif");

},
490015(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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