"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["697572"], {
170512(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_scenario_fusion_api_scenario_fusion_kit_arkts_components_scenario_fusion_functionalinput_scenario_fusion_functionalinput_md_68a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-scenario-fusion-api-scenario-fusion-kit-arkts-components-scenario-fusion-functionalinput-scenario-fusion-functionalinput-md-68a.json
var site_docs_ref_scenario_fusion_api_scenario_fusion_kit_arkts_components_scenario_fusion_functionalinput_scenario_fusion_functionalinput_md_68a_namespaceObject = JSON.parse('{"id":"scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalinput/scenario-fusion-functionalinput","title":"FunctionalInput（Input组件）","description":"本模块提供FunctionalInput组件，开发者可调用对应FunctionalInput组件快速拉起选择地区页面，供用户选择地区信息。","source":"@site/docs-ref/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalinput/scenario-fusion-functionalinput.md","sourceDirName":"scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalinput","slug":"/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalinput/scenario-fusion-functionalinput","permalink":"/harmonyos-docs-site/ref/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalinput/scenario-fusion-functionalinput","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"FunctionalInput（Input组件）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-functionalinput","kit":"应用服务","last_updated":"2026-04-22","slug":"scenario-fusion-functionalinput"},"sidebar":"ref","previous":{"title":"functionalButtonComponentManager(场景化融合Button组件管理)","permalink":"/harmonyos-docs-site/ref/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalbuttoncomponentmanager/scenario-fusion-functionalbuttoncomponentmanager"},"next":{"title":"functionalInputComponentManager(场景化融合Input组件管理)","permalink":"/harmonyos-docs-site/ref/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalinputcomponentmanager/scenario-fusion-functionalinputcomponentmanager"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalinput/scenario-fusion-functionalinput.md


const frontMatter = {
	title: 'FunctionalInput（Input组件）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/scenario-fusion-functionalinput',
	kit: '应用服务',
	last_updated: '2026-04-22',
	slug: 'scenario-fusion-functionalinput'
};
const contentTitle = 'FunctionalInput（Input组件）';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "FunctionalInput",
  "id": "functionalinput",
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
        id: "functionalinputinput组件",
        children: "FunctionalInput（Input组件）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供FunctionalInput组件，开发者可调用对应FunctionalInput组件快速拉起选择地区页面，供用户选择地区信息。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FunctionalInput需要配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalinputcomponentmanager/scenario-fusion-functionalinputcomponentmanager",
        children: "functionalInputComponentManager"
      }), "一起使用，完成相应功能。"]
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
      }), " 从版本5.1.0(18)开始，该接口支持在元服务中使用。"]
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
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FunctionalInput, functionalInputComponentManager } from '@kit.ScenarioFusionKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "functionalinput",
      children: "FunctionalInput"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "场景化Input组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供FunctionalInput组件，HarmonyOS应用和元服务通过集成FunctionalInput组件完成省市区选择，输入框显示文本修改，样式修改等功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["FunctionalInput组件需要配合", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalinputcomponentmanager/scenario-fusion-functionalinputcomponentmanager",
        children: "functionalInputComponentManager"
      }), "一起使用，完成相应功能。"]
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
      }), " 从版本5.1.0(18)开始，该接口支持在元服务中使用。"]
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
      }), " 5.1.0(18)"]
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
            children: ["functionalInputComponentManager.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalinputcomponentmanager/scenario-fusion-functionalinputcomponentmanager#functionalinputparams",
              children: "FunctionalInputParams"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "@Prop"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FunctionalInput组件参数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "controller"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["functionalInputComponentManager.", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalinputcomponentmanager/scenario-fusion-functionalinputcomponentmanager#functionalinputcontroller",
              children: "FunctionalInputController"
            })]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "FunctionalInput组件控制器，用来接收组件的点击事件。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "build",
      children: "build"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "build(): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用于创建FunctionalInput对象的构造函数。"
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
      }), " 从版本5.1.0(18)开始，该接口支持在元服务中使用。"]
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
      }), " 5.1.0(18)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { FunctionalInput, functionalInputComponentManager } from '@kit.ScenarioFusionKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { SymbolGlyphModifier, TextInputModifier } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State inputContent: string = '';\n\n  build() {\n    Column() {\n      Row() {\n        Text('所在地区').width(64)\n        // 构建FunctionalInput组件实例。\n        FunctionalInput({\n          params: {\n            // InputType.SELECT_DISTRICT表示输入类型为省/市/区选择器类型。\n            inputType: functionalInputComponentManager.InputType.SELECT_DISTRICT,\n            textInputValue: {\n              text: this.inputContent,\n              placeholder: '省、市、区、街道地址',\n            },\n            // 调整TextInput样式。\n            inputAttributeModifier: new TextInputModifier()\n              .fontColor($r('sys.color.ohos_id_color_badge_red'))\n              .onChange((value) => {\n                if (value !== this.inputContent) {\n                  this.inputContent = value;\n                }\n              }),\n            // 将图标设置在末尾。\n            icon: $r('sys.symbol.xmark'),\n            // 设置符号图标的事件和样式。\n            iconSymbolModifier: new SymbolGlyphModifier()\n              .onClick(() => {\n                this.inputContent = '';\n              })\n              .fontSize(32),\n          },\n          // 当InputType为SELECT_DISTRICT时，回调必须为onSelectDistrict。\n          controller: new functionalInputComponentManager.FunctionalInputController().onSelectDistrict((err,\n            data: functionalInputComponentManager.DistrictSelectResult) => {\n            if (err) {\n              // 错误日志处理。\n              hilog.error(0x0000, \"testTag\", \"error: %{public}d %{public}s\", err.code, err.message);\n              return;\n            }\n            // 成功日志处理。\n            hilog.info(0x0000, \"testTag\", \"succeeded in selecting district\");\n            // 在输入组件中显示所选区域信息。\n            this.inputContent = data.inputContent;\n          })\n        })\n          .layoutWeight(1)\n      }.height('100%')\n    }.width('100%')\n  }\n}\n"
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