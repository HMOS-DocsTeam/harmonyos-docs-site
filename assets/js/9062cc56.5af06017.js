"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["453176"], {
830310(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scenario_fusion_guide_scenario_fusion_api_information_attribute_scenario_fusion_api_followcomponent_scenario_fusion_api_followcomponent_md_906_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scenario-fusion-guide-scenario-fusion-api-information-attribute-scenario-fusion-api-followcomponent-scenario-fusion-api-followcomponent-md-906.json
var site_docs_scenario_fusion_guide_scenario_fusion_api_information_attribute_scenario_fusion_api_followcomponent_scenario_fusion_api_followcomponent_md_906_namespaceObject = JSON.parse('{"id":"scenario-fusion-guide/scenario-fusion-api-information-attribute/scenario-fusion-api-followcomponent/scenario-fusion-api-followcomponent","title":"通过API展示关注组件","description":"场景介绍","source":"@site/docs/scenario-fusion-guide/scenario-fusion-api-information-attribute/scenario-fusion-api-followcomponent/scenario-fusion-api-followcomponent.md","sourceDirName":"scenario-fusion-guide/scenario-fusion-api-information-attribute/scenario-fusion-api-followcomponent","slug":"/scenario-fusion-guide/scenario-fusion-api-information-attribute/scenario-fusion-api-followcomponent/","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-api-information-attribute/scenario-fusion-api-followcomponent/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"通过API展示关注组件","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-api-followcomponent","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过API获取系统设置属性","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-api-information-attribute/scenario-fusion-api-system-setup/"},"next":{"title":"文件路径转换API","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-api-path-conversion/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scenario-fusion-guide/scenario-fusion-api-information-attribute/scenario-fusion-api-followcomponent/scenario-fusion-api-followcomponent.md


const frontMatter = {
	title: '通过API展示关注组件',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-api-followcomponent',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '通过API展示关注组件';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "前提条件",
  "id": "前提条件",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
        id: "通过api展示关注组件",
        children: "通过API展示关注组件"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.1(21)版本开始，支持关注组件API功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Scenario Fusion Kit提供服务号关注组件功能，调用该接口可以在业务应用/元服务页面展示服务号关注组件，用户点击关注按钮可关注上对应服务号。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户关注服务号成功，按钮会变为已关注并置灰，在1.5秒后关注组件会自动消失。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "用户关注服务号失败，则会出现错误提示。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(604348)/* ["default"] */.A) + "",
            width: "188",
            height: "385"
          }), " ", (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(615304)/* ["default"] */.A) + "",
            width: "187",
            height: "385"
          })]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/console/service/FastService/service/1063",
        children: "华为开发者联盟服务号管理首页"
      }), "，申请华为服务号，并获取服务号id。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用企业开发者账号登录，并完成企业认证。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "申请服务号并完成认证。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "元服务/应用须与服务号处于同一个开发者账号下。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下是关注组件的接口说明，更多接口及使用方法请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scenario-fusion-api/scenario-fusion-arktsapi/scenario-fusion-atomicservice/scenario-fusion-atomicservice",
        children: "atomicService（融合场景化API）"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scenario-fusion-api/scenario-fusion-arktsapi/scenario-fusion-atomicservice/scenario-fusion-atomicservice#showfollowcomponent",
              children: "showFollowComponent"
            }), "(ctx: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/custom-comp/ts-custom-component-api/ts-custom-component-api#uicontext",
              children: "UIContext"
            }), ", params: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scenario-fusion-api/scenario-fusion-arktsapi/scenario-fusion-atomicservice/scenario-fusion-atomicservice#followcomponentparams",
              children: "FollowComponentParams"
            }), ", callback: ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scenario-fusion-api/scenario-fusion-arktsapi/scenario-fusion-atomicservice/scenario-fusion-atomicservice#followcomponentcallback",
              children: "FollowComponentCallback"
            }), "): Promise<void>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "调用该方法展示关注组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入Scenario Fusion Kit模块以及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { atomicService } from '@kit.ScenarioFusionKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在需要添加关注组件的页面，调用接口展示关注组件，示例代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  aboutToAppear(): void {\n    // 一键关注组件。\n    // pubId: 服务号id，此处以官方小助手服务号id为例。\n    const pubId: string = '0cca1c645526449fb89d4a83e3bc25df';\n    // channelId：渠道id，长度限制32，只能是数字或字母组成; offset：设置关注组件的位置坐标。\n    const params: atomicService.FollowComponentParams =\n      { pubId: pubId, channelId: '', offset: { x: 0, y: 300 } };\n    // 点击关注按钮的关注结果回调。\n    const callbacks: atomicService.FollowComponentCallback = {\n      onFollowComplete: (err, result) => {\n        if (err) {\n          // 错误日志处理。\n          hilog.error(0x0000, \"testTag\", \"error: %{public}d %{public}s\", err.code, err.message);\n          return;\n        }\n        hilog.info(0x0000, \"testTag\", \"follow result: %{public}d\", result.code);\n        if (result.code === atomicService.FollowResult.SUCCESS) {\n          hilog.info(0x0000, \"testTag\", \"follow succeeded handle\");\n        } else {\n          hilog.info(0x0000, \"testTag\", \"follow failed handle\");\n        }\n      }\n    }\n    // 展示关注组件。\n    atomicService.showFollowComponent(this.getUIContext(), params, callbacks).catch((error: BusinessError<void>) => {\n      hilog.error(0x0000, 'testTag', 'showFollowComponent failReason: %{public}d %{public}s:', error.code,\n        error.message);\n    })\n  }\n\n  build() {\n  }\n}\n"
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
604348(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439191-fbba51c39e7ed3d72c33d60b39badee1.png");

},
615304(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959146-f96369859f322ffdc4f2ce1004d9f2aa.png");

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