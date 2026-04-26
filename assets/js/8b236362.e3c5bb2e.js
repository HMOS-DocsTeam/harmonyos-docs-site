"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["287858"], {
937317(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_store_kit_guide_store_attribution_store_attribution_test_store_attribution_test_md_8b2_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-store-kit-guide-store-attribution-store-attribution-test-store-attribution-test-md-8b2.json
var site_docs_store_kit_guide_store_attribution_store_attribution_test_store_attribution_test_md_8b2_namespaceObject = JSON.parse('{"id":"store-kit-guide/store-attribution/store-attribution-test/store-attribution-test","title":"接入调试功能","description":"应用归因服务为开发者提供接入调试能力，支持开发者在接入过程中进行自助调试，通过调用调试接口验证接入的准确性及归因结果回传等基础能力，从而提升接入效率。","source":"@site/docs/store-kit-guide/store-attribution/store-attribution-test/store-attribution-test.md","sourceDirName":"store-kit-guide/store-attribution/store-attribution-test","slug":"/store-kit-guide/store-attribution/store-attribution-test/","permalink":"/harmonyos-docs-site/store-kit-guide/store-attribution/store-attribution-test/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"接入调试功能","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-attribution-test","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"归因结果回传","permalink":"/harmonyos-docs-site/store-kit-guide/store-attribution/store-attribution-receive/"},"next":{"title":"隐私管理服务","permalink":"/harmonyos-docs-site/store-kit-guide/store-privacy/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/store-kit-guide/store-attribution/store-attribution-test/store-attribution-test.md


const frontMatter = {
	title: '接入调试功能',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/store-attribution-test',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '接入调试功能';

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
  "value": "验证归因来源",
  "id": "验证归因来源",
  "level": 3
}, {
  "value": "设置归因结果回传",
  "id": "设置归因结果回传",
  "level": 3
}, {
  "value": "触发归因结果回传",
  "id": "触发归因结果回传",
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
        id: "接入调试功能",
        children: "接入调试功能"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用归因服务为开发者提供接入调试能力，支持开发者在接入过程中进行自助调试，通过调用调试接口验证接入的准确性及归因结果回传等基础能力，从而提升接入效率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用归因服务接入调试功能支持的场景如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "校验接口调用是否准确"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用调试接口，校验接口请求及业务逻辑，如参数校验、签名校验等，并提示相应错误码，支持开发者自行发现问题。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主动触发归因接口回传"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开发者设置归因数据后，调用调试接口主动、实时触发归因结果回传，验证完整的归因流程。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用归因服务接入调试功能提供以下接口，具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/store-api/store-arkts/store-attributiontestmanager/store-attributiontestmanager",
        children: "接口文档"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "validateSource(adSourceInfo: AdSourceInfo, publicKey: string): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "验证归因来源接口，用于媒体App/分发平台验证adSourceInfo入参的合法性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "setPostback(postbackInfo: PostbackInfo): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置归因结果回传接口，用于应用生态伙伴：  - 验证triggerData是否合法。  - 设置调试使用的回传数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "flushPostbacks(adTechId: string): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主动、实时触发归因结果回传接口，用于应用生态伙伴验证接收及处理回传的逻辑是否正确。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "验证归因来源",
      children: "验证归因来源"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { attributionTestManager } from '@kit.AppGalleryKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError,deviceInfo} from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造参数，入参为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-attributiontestmanager/store-attributiontestmanager#adsourceinfo",
            children: "AdSourceInfo"
          }), "、publickey。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 注册归因角色时提供给应用归因服务云侧的公钥\nlet publicKey: string = '';\nlet adSourceInfo: attributionTestManager.AdSourceInfo = {\n  // 可以使用虚拟的adTechId\n  adTechId: '2******8',\n  campaignId: '',\n  destinationId: '1*******8',\n  sourceType: attributionTestManager.SourceType.IMPRESSION,\n  mmpIds: ['1******8', '2******9'],\n  serviceTag: 'testServiceTag',\n  nonce: '123***2',\n  timestamp: Date.now(),\n  signature: 'MEQCIEQlmZ****zKBSE8QnhLTIHZZZ****ZpRqRxHss65Ko****JgJKjdrWdkL****juEx2RmFS7da****ZRVZ8RyMyUXg=='\n};\nlet osApiVersion: number = deviceInfo.sdkApiVersion;\nif (osApiVersion >= 22) {\n  adSourceInfo.campaignId = '1*******9';\n} else {\n  adSourceInfo.campaignId = '1****6';\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-attributiontestmanager/store-attributiontestmanager#attributiontestmanagervalidatesource",
            children: "attributionTestManager.validateSource"
          }), "方法验证归因来源。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "attributionTestManager.validateSource(adSourceInfo, publicKey).then(() => {\n  hilog.info(0, \"testTag\", 'Succeeded in validating source.');\n}).catch((error: BusinessError) => {\n  hilog.error(0, \"testTag\", `testValidateSource failed.code is ${error.code}, message is ${error.message}`);\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设置归因结果回传",
      children: "设置归因结果回传"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { attributionTestManager } from '@kit.AppGalleryKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError,deviceInfo } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["构造参数，入参为", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-attributiontestmanager/store-attributiontestmanager#postbackinfo",
            children: "PostbackInfo"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let postbackInfo: attributionTestManager.PostbackInfo = {\n  adTechId: '1******8',\n  campaignId: '',\n  sourceId: '1*******8',\n  destinationId: '1*******8',\n  serviceTag: 'testServiceTag',\n  businessScene: 5,\n  triggerData: 123,\n  postbackUrl: 'https://xxx.com'\n};\nlet osApiVersion: number = deviceInfo.sdkApiVersion;\nif (osApiVersion >= 22) {\n  postbackInfo.campaignId = '1*******9';\n} else {\n  postbackInfo.campaignId = '1****6';\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-attributiontestmanager/store-attributiontestmanager#attributiontestmanagersetpostback",
            children: "attributionTestManager.setPostback"
          }), "方法设置归因结果回传数据。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "attributionTestManager.setPostback(postbackInfo).then(() => {\n  hilog.info(0, \"testTag\", 'Succeeded in setting postback.');\n}).catch((error: BusinessError) => {\n  hilog.error(0, \"testTag\", `setPostback onError.code is ${error.code}, message is ${error.message}`);\n})\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "触发归因结果回传",
      children: "触发归因结果回传"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { attributionTestManager } from '@kit.AppGalleryKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "构造参数adTechId。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let adTechId: string = '1******8';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/store-api/store-arkts/store-attributiontestmanager/store-attributiontestmanager#attributiontestmanagerflushpostbacks",
            children: "attributionTestManager.flushPostbacks"
          }), "方法触发归因结果回传。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "attributionTestManager.flushPostbacks(adTechId).then(() => {\n  hilog.info(0, \"testTag\", 'Succeeded in flushing postbacks.');\n}).catch((error: BusinessError) => {\n  hilog.error(0, \"testTag\", `flushPostbacks onError.code is ${error.code}, message is ${error.message}`);\n})\n"
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