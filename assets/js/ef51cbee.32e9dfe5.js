"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["47014"], {
325253(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scenario_fusion_guide_scenario_fusion_input_scenario_fusion_input_zone_selectors_scenario_fusion_input_zone_selectors_md_ef5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scenario-fusion-guide-scenario-fusion-input-scenario-fusion-input-zone-selectors-scenario-fusion-input-zone-selectors-md-ef5.json
var site_docs_scenario_fusion_guide_scenario_fusion_input_scenario_fusion_input_zone_selectors_scenario_fusion_input_zone_selectors_md_ef5_namespaceObject = JSON.parse('{"id":"scenario-fusion-guide/scenario-fusion-input/scenario-fusion-input-zone-selectors/scenario-fusion-input-zone-selectors","title":"省市区选择器Input","description":"场景介绍","source":"@site/docs/scenario-fusion-guide/scenario-fusion-input/scenario-fusion-input-zone-selectors/scenario-fusion-input-zone-selectors.md","sourceDirName":"scenario-fusion-guide/scenario-fusion-input/scenario-fusion-input-zone-selectors","slug":"/scenario-fusion-guide/scenario-fusion-input/scenario-fusion-input-zone-selectors/","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-input/scenario-fusion-input-zone-selectors/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"省市区选择器Input","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-input-zone-selectors","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取手机号和风险等级Button","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-button/scenario-fusion-button-get-risklevel/"},"next":{"title":"通过API获取系统信息属性","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-api-information-attribute/scenario-fusion-api-system-info/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scenario-fusion-guide/scenario-fusion-input/scenario-fusion-input-zone-selectors/scenario-fusion-input-zone-selectors.md


const frontMatter = {
	title: '省市区选择器Input',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-input-zone-selectors',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '省市区选择器Input';

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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "省市区选择器input",
        children: "省市区选择器Input"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.1.0(18)开始，支持省市区选择器Input功能。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "省市区选择器Input功能可以帮助开发者调用对应FunctionalInput组件快速拉起选择地区页面，供用户选择地区信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "运行示例代码后单击“所在地区”文本框，拉起选择地区页面，按照需求选择地址信息，选择完成后将所选地址回填至文本框中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(415033)/* ["default"] */.A) + "",
        width: "1020",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "前提条件",
      children: "前提条件"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/map-kit-guide/map-config-agc",
        children: "开发准备"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入Scenario Fusion Kit模块以及相关公共模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { FunctionalInput, functionalInputComponentManager } from '@kit.ScenarioFusionKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\nimport { SymbolGlyphModifier, TextInputModifier } from '@kit.ArkUI';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在容器中声明FunctionalInput，指定FunctionalInput的inputType，并设置对应的回调函数，代码如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index {\n  @State inputContent: string = '';\n\n  build() {\n    Column() {\n      Row() {\n        Text('所在地区').width(64)\n        // 构建FunctionalInput组件实例。\n        FunctionalInput({\n          params: {\n            // InputType.SELECT_DISTRICT表示输入类型为省/市/区选择器类型。\n            inputType: functionalInputComponentManager.InputType.SELECT_DISTRICT,\n            textInputValue: {\n              text: this.inputContent,\n              placeholder: '省、市、区、街道地址',\n            },\n            // 调整TextInput样式。\n            inputAttributeModifier: new TextInputModifier()\n              .fontColor($r('sys.color.ohos_id_color_badge_red'))\n              .onChange((value) => {\n                if (value !== this.inputContent) {\n                  this.inputContent = value;\n                }\n              }),\n            // 将图标设置在末尾。\n            icon: $r('sys.symbol.xmark'),\n            // 设置符号图标的事件和样式。\n            iconSymbolModifier: new SymbolGlyphModifier()\n              .onClick(() => {\n                this.inputContent = '';\n              })\n              .fontSize(32),\n          },\n          // 当InputType为SELECT_DISTRICT时，回调必须为onSelectDistrict。\n          controller: new functionalInputComponentManager.FunctionalInputController().onSelectDistrict((err,\n            data: functionalInputComponentManager.DistrictSelectResult) => {\n            if (err) {\n              // 错误日志处理。\n              hilog.error(0x0000, \"testTag\", \"error: %{public}d %{public}s\", err.code, err.message);\n              return;\n            }\n            // 成功日志处理。\n            hilog.info(0x0000, \"testTag\", \"succeeded in selecting district\");\n            // 在输入组件中显示所选区域信息。\n            this.inputContent = data.inputContent;\n          })\n        })\n          .layoutWeight(1)\n      }.height('100%')\n    }.width('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(269933)/* ["default"] */.A) + "",
            width: "102",
            height: "38"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "inputType参数填写\"functionalInputComponentManager.InputType.SELECT_DISTRICT\"指定Input为省市区选择器类型。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "controller参数必须对应填写\"new functionalInputComponentManager.FunctionalInputController().onSelectDistrict\"。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "可从返回结果中自行处理结果回填至组件中。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["组件支持显示两种类型的图标：symbol和image，\"icon\"设置为symbol资源时，请使用\"", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalinputcomponentmanager/scenario-fusion-functionalinputcomponentmanager#functionalinputparams",
              children: "iconSymbolModifier"
            }), "\"进行图标事件、样式的设置；设置为image资源时，请使用\"", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalinputcomponentmanager/scenario-fusion-functionalinputcomponentmanager#functionalinputparams",
              children: "iconImgModifier"
            }), "\"进行图标事件、样式的设置。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["functionalInput支持", (0,jsx_runtime.jsx)(_components.a, {
              href: "/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-introduction-to-smart-fill",
              children: "智能填充"
            }), "，对应支持的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-intelligentfilling-appendix",
              children: "ContentType"
            }), "为\"ADDRESS_CITY_AND_STATE\"。"]
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["其他参数请参考：", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/scenario-fusion-api/scenario-fusion-kit-arkts-components/scenario-fusion-functionalinput/scenario-fusion-functionalinput",
            children: "FunctionalInput（Input组件）"
          }), "。"]
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
415033(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799496-588648560b1567b55c8a52d104636d82.png");

},
269933(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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