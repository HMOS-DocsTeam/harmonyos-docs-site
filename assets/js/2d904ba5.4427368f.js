"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["945251"], {
707182(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_store_kit_guide_store_attribution_store_attribution_developmentguide_store_attribution_developmentguide_md_2d9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-store-kit-guide-store-attribution-store-attribution-developmentguide-store-attribution-developmentguide-md-2d9.json
var site_docs_store_kit_guide_store_attribution_store_attribution_developmentguide_store_attribution_developmentguide_md_2d9_namespaceObject = JSON.parse('{"id":"store-kit-guide/store-attribution/store-attribution-developmentguide/store-attribution-developmentguide","title":"登记归因来源及转化","description":"6.0.2(22)版本开始，登记归因转化接口新增属性timestamp、serviceTag，支持设置转化事件时间及开发者关注的业务信息。","source":"@site/docs/store-kit-guide/store-attribution/store-attribution-developmentguide/store-attribution-developmentguide.md","sourceDirName":"store-kit-guide/store-attribution/store-attribution-developmentguide","slug":"/store-kit-guide/store-attribution/store-attribution-developmentguide/","permalink":"/harmonyos-docs-site/store-kit-guide/store-attribution/store-attribution-developmentguide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"登记归因来源及转化","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-attribution-developmentguide","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"管理归因策略","permalink":"/harmonyos-docs-site/store-kit-guide/store-attribution/store-attribution-preparations/appgallery-attribution-strategy/"},"next":{"title":"归因结果回传","permalink":"/harmonyos-docs-site/store-kit-guide/store-attribution/store-attribution-receive/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/store-kit-guide/store-attribution/store-attribution-developmentguide/store-attribution-developmentguide.md


const frontMatter = {
	title: '登记归因来源及转化',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-attribution-developmentguide',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '登记归因来源及转化';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
  "level": 2
}, {
  "value": "登记归因来源",
  "id": "登记归因来源",
  "level": 3
}, {
  "value": "登记归因转化",
  "id": "登记归因转化",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "登记归因来源及转化",
        children: "登记归因来源及转化"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(105951)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "6.0.2(22)版本开始，登记归因转化接口新增属性timestamp、serviceTag，支持设置转化事件时间及开发者关注的业务信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用归因服务为媒体App、分发平台提供向端侧应用归因服务登记归因来源（即应用曝光点击事件）、开发者应用登记转化事件的能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "端侧应用归因服务根据媒体应用登记的归因来源，以及开发者应用登记的转化事件，按照系统规则，在端侧完成归因计算。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用归因服务场景提供以下接口，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-arkts/store-attributionmanager/store-attributionmanager",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "registerSource(adSourceInfo: AdSourceInfo): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "登记归因来源信息接口。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "registerTrigger(adTriggerInfo: AdTriggerInfo): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "登记归因转化信息接口。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "登记归因来源",
      children: "登记归因来源"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { attributionManager } from '@kit.AppGalleryKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError,deviceInfo } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-attributionmanager/store-attributionmanager#adsourceinfo",
            children: "AdSourceInfo"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const adSourceInfo: attributionManager.AdSourceInfo = {\n  // 在应用归因云侧注册应用生态伙伴角色时，由应用归因服务分配\n  adTechId: '20****e8',\n  campaignId: '',\n  // 开发者应用上架华为应用市场的appId，不带C\n  destinationId: '10******',\n  sourceType: attributionManager.SourceType.IMPRESSION,\n  // 归因监测平台id\n  mmpIds: ['2f****5','2f7***5'],\n  // 分发平台关注的业务信息\n  serviceTag: '123***2',\n  // 用于计算签名的随机数，不带'-'\n  nonce: '123***2',\n  timestamp: Date.now(),\n  // 签名值\n  signature: 'MEQCIEQlmZ****zKBSE8QnhLTIHZZZ****ZpRqRxHss65Ko****JgJKjdrWdkL****juEx2RmFS7da****ZRVZ8RyMyUXg=='\n};\nlet osApiVersion: number = deviceInfo.sdkApiVersion;\nif (osApiVersion >= 22) {\n  adSourceInfo.campaignId = '1*******9';\n} else {\n  adSourceInfo.campaignId = '1****6';\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-attributionmanager/store-attributionmanager#attributionmanagerregistersource",
            children: "attributionManager.registerSource"
          }), "方法登记归因来源信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  attributionManager.registerSource(adSourceInfo).then(() => {\n    hilog.info(0, 'TAG', 'Succeeded in registering source.');\n  }).catch((error: BusinessError) => {\n    hilog.error(0, 'TAG', `registerSource error.code is ${error.code}, message is ${error.message}`);\n  })\n} catch (error) {\n  hilog.error(0, 'TAG', `registerSource error.code is ${error.code}, message is ${error.message}`);\n}\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "登记归因转化",
      children: "登记归因转化"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { attributionManager } from '@kit.AppGalleryKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError,deviceInfo } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造参数", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-attributionmanager/store-attributionmanager#adtriggerinfo",
            children: "AdTriggerInfo"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const adTriggerInfo: attributionManager.AdTriggerInfo = {\n  businessScene: 5,\n  // 转化事件编码，从应用归因云端管理平台获取\n  triggerData: 123\n};\nlet osApiVersion: number = deviceInfo.sdkApiVersion;\nif (osApiVersion >= 22) {\n  // Since API 22, added the actual occurrence time parameter.\n  adTriggerInfo.timestamp = Date.now();\n  adTriggerInfo.serviceTag = 'testServiceTag';\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-attributionmanager/store-attributionmanager#attributionmanagerregistertrigger",
            children: "attributionManager.registerTrigger"
          }), "方法登记转化信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "try {\n  attributionManager.registerTrigger(adTriggerInfo).then(() => {\n    hilog.info(0, 'TAG', 'Succeeded in registering triggerdata.');\n  }).catch((error: BusinessError) => {\n    hilog.error(0, 'TAG', `registerTrigger error.code is ${error.code}, message is ${error.message}`);\n  })\n} catch (error) {\n  hilog.error(0, 'TAG', `registerTrigger error.code is ${error.code}, message is ${error.message}`);\n}\n"
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
105951(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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