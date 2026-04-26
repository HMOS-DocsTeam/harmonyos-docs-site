"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["720389"], {
883536(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_scenario_fusion_api_scenario_fusion_kit_arkts_components_scenario_fusion_functionalbutton_scenario_fusion_functionalbutton_md_7d6_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-scenario-fusion-api-scenario-fusion-kit-arkts-components-scenario-fusion-functionalbutton-scenario-fusion-functionalbutton-md-7d6.json
var site_docs_ref_scenario_fusion_api_scenario_fusion_kit_arkts_components_scenario_fusion_functionalbutton_scenario_fusion_functionalbutton_md_7d6_namespaceObject = JSON.parse('{"id":"scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalbutton/scenario-fusion-functionalbutton","title":"FunctionalButton（Button组件）","description":"本模块提供FunctionalButton组件，为开发者提供场景化开发能力，包括：快速验证手机号、实时验证手机号、选择头像、打开授权设置页、打开App、选择收货地址、选择发票抬头、打开地图选点、实名信息校验、人脸核身、实况窗订阅、权限设置、服务动态授权码、元服务分享、反馈与投诉和获取手机号和风险等级。","source":"@site/docs-ref/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalbutton/scenario-fusion-functionalbutton.md","sourceDirName":"scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalbutton","slug":"/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalbutton/scenario-fusion-functionalbutton","permalink":"/harmonyos-docs-site/ref/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalbutton/scenario-fusion-functionalbutton","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"FunctionalButton（Button组件）","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-functionalbutton","kit":"应用服务","last_updated":"2026-04-22","slug":"scenario-fusion-functionalbutton"},"sidebar":"ref","previous":{"title":"ArkTS API错误码","permalink":"/harmonyos-docs-site/ref/scenario-fusion-api/scenario-fusion-arktsapi/scenario-fusion-arkts-api-error-code/scenario-fusion-arkts-api-error-code"},"next":{"title":"functionalButtonComponentManager(场景化融合Button组件管理)","permalink":"/harmonyos-docs-site/ref/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalbuttoncomponentmanager/scenario-fusion-functionalbuttoncomponentmanager"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalbutton/scenario-fusion-functionalbutton.md


const frontMatter = {
	title: 'FunctionalButton（Button组件）',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-functionalbutton',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'scenario-fusion-functionalbutton'
};
const contentTitle = 'FunctionalButton（Button组件）';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "FunctionalButton",
  "id": "functionalbutton",
  "level": 2
}, {
  "value": "build",
  "id": "build",
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
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "functionalbuttonbutton组件",
        children: "FunctionalButton（Button组件）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供FunctionalButton组件，为开发者提供场景化开发能力，包括：快速验证手机号、实时验证手机号、选择头像、打开授权设置页、打开App、选择收货地址、选择发票抬头、打开地图选点、实名信息校验、人脸核身、实况窗订阅、权限设置、服务动态授权码、元服务分享、反馈与投诉和获取手机号和风险等级。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FunctionalButton需要配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalbuttoncomponentmanager/scenario-fusion-functionalbuttoncomponentmanager",
        children: "functionalButtonComponentManager"
      }), "一起使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AtomicserviceComponent.UIComponent"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FunctionalButton, functionalButtonComponentManager } from '@kit.ScenarioFusionKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "functionalbutton",
      children: "FunctionalButton"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景化Button组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供FunctionalButton场景化Button组件，HarmonyOS应用和元服务通过集成Button组件完成相应功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Button组件需要", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalbuttoncomponentmanager/scenario-fusion-functionalbuttoncomponentmanager",
        children: "functionalButtonComponentManager"
      }), "配合一起使用，完成相应功能。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "装饰器类型："
        })
      }), " @Component"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AtomicserviceComponent.UIComponent"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "装饰器类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "params"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["functionalButtonComponentManager.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalbuttoncomponentmanager/scenario-fusion-functionalbuttoncomponentmanager#functionalbuttonparams",
              children: "FunctionalButtonParams"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FunctionalButton组件参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "controller"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["functionalButtonComponentManager.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalbuttoncomponentmanager/scenario-fusion-functionalbuttoncomponentmanager#functionalbuttoncontroller",
              children: "FunctionalButtonController"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FunctionalButton组件控制器，用来接收组件的点击事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "build",
      children: "build"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "build(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于创建FunctionalButton对象的构造函数。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从版本4.1.0(11)开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.AtomicserviceComponent.UIComponent"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 4.1.0(11)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FunctionalButton, functionalButtonComponentManager } from '@kit.ScenarioFusionKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct Index {\n  build() {\n    Row() {\n      Column() {\n        // 构建FunctionalButton组件实例。\n        FunctionalButton({\n          params: {\n            // OpenType.GET_PHONE_NUMBER表示该按钮用于快速验证手机号码。\n            openType: functionalButtonComponentManager.OpenType.GET_PHONE_NUMBER,\n            label: '快速验证手机号',\n            // 调整按钮样式。\n            styleOption: {\n              bgColor:functionalButtonComponentManager.ColorType.DEFAULT,\n              size: functionalButtonComponentManager.SizeType.DEFAULT,\n              plain: false,\n              disabled:false,\n              loading: false,\n              hoverClass: functionalButtonComponentManager.HoverClassType.HOVER_CLASS,\n              hoverStartTime: 0,\n              hoverStayTime: 0,\n              styleConfig: new functionalButtonComponentManager.ButtonConfig()\n                .fontSize(20)\n            },\n          },\n          // 当OpenType为GET_PHONE_NUMBER时，回调必须为onGetPhoneNumber。\n          controller: new functionalButtonComponentManager.FunctionalButtonController()\n            .onGetPhoneNumber((err, data) => {\n              if (err) {\n                // 错误日志处理。\n                hilog.error(0x0000, \"testTag\", \"error: %{public}d %{public}s\", err.code, err.message);\n                return;\n              }\n              // 成功日志处理。\n              hilog.info(0x0000, \"testTag\", \"succeeded in authenticating\");\n              // 获取授权码。\n              let authorizationCode = data.code;\n            })\n        })\n      }.width('100%')\n    }.height('100%')\n  }\n}\n"
      })
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