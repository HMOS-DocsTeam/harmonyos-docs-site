"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["45615"], {
803564(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scenario_fusion_guide_scenario_fusion_intelligent_filling_scenario_fusion_intelligentfilling_amend_scenario_fusion_intelligentfilling_amend_md_4f5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scenario-fusion-guide-scenario-fusion-intelligent-filling-scenario-fusion-intelligentfilling-amend-scenario-fusion-intelligentfilling-amend-md-4f5.json
var site_docs_scenario_fusion_guide_scenario_fusion_intelligent_filling_scenario_fusion_intelligentfilling_amend_scenario_fusion_intelligentfilling_amend_md_4f5_namespaceObject = JSON.parse('{"id":"scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-intelligentfilling-amend/scenario-fusion-intelligentfilling-amend","title":"动态修改ContentType值","description":"在填写实名信息表单的场景，表单中存在身份证和其他证件输入，其中，多种证件号共用一个输入框，ContentType.ID\\\\CARD\\\\NUMBER目前只支持身份证号的推荐、填充，不支持其他类型的证件，需要开发者根据输入场景动态配置输入框的ContentType，只在身份证输入场景下使用ContentType.ID\\\\CARD\\\\NUMBER。","source":"@site/docs/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-intelligentfilling-amend/scenario-fusion-intelligentfilling-amend.md","sourceDirName":"scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-intelligentfilling-amend","slug":"/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-intelligentfilling-amend/","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-intelligentfilling-amend/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"动态修改ContentType值","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-intelligentfilling-amend","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"典型场景展示","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-introduction-typical-scenario/"},"next":{"title":"自动补全地址表单所在地区","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-intelligentfilling-autocomplete/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-intelligentfilling-amend/scenario-fusion-intelligentfilling-amend.md


const frontMatter = {
	title: '动态修改ContentType值',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-intelligentfilling-amend',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '动态修改ContentType值';

const assets = {

};



const toc = [{
  "value": "效果图",
  "id": "效果图",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "动态修改contenttype值",
        children: "动态修改ContentType值"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在填写实名信息表单的场景，表单中存在身份证和其他证件输入，其中，多种证件号共用一个输入框，ContentType.ID_CARD_NUMBER目前只支持身份证号的推荐、填充，不支持其他类型的证件，需要开发者根据输入场景动态配置输入框的ContentType，只在身份证输入场景下使用ContentType.ID_CARD_NUMBER。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "效果图",
      children: "效果图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(962505)/* ["default"] */.A) + "",
        width: "1710",
        height: "681"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { autoFillManager } from '@kit.AbilityKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct SmartFill {\n  // 与证件号码类型对应的ContentType。在此情况下，默认将ContentType设置为身份证号码对应的类型值。\n  @State type: ContentType | undefined = ContentType.ID_CARD_NUMBER;\n  @State isClicked: boolean = false;\n\n  build() {\n    Column({ space: 5 }) {\n      Row() {\n        Text('证件类型：').textAlign(TextAlign.End).width('25%')\n        Select([{ value: '身份证' }, { value: '港澳通行证' }])\n          .width('75%')\n          .selected(0)\n          .value('身份证')\n          .onSelect((index: number, value: string) => {\n            // 当用户选择ID类型时，更改与证件号码输入组件对应的ContentType值。\n            hilog.info(0x000, 'testTag', 'Select item changed, value: ' + value + ', index: ' + index);\n            if (value === \"身份证\") {\n              this.type = ContentType.ID_CARD_NUMBER;\n            } else if (value === \"港澳通行证\") {\n              this.type = undefined;\n            }\n            hilog.info(0x000, 'testTag', 'ContentType changed, current type: ' + this.type);\n          })\n      }\n\n      Row() {\n        Text('姓名：').textAlign(TextAlign.End).width('25%')\n        TextInput().width('75%').contentType(ContentType.PERSON_FULL_NAME)\n      }\n\n      Row() {\n        Text('手机号码：').textAlign(TextAlign.End).width('25%')\n        TextInput().width('75%').contentType(ContentType.PHONE_NUMBER)\n      }\n\n      Row() {\n        Text('证件号码').textAlign(TextAlign.End).width('25%')\n        TextInput().width('75%').contentType(this.type)\n      }\n\n      Button('保存')\n        .onClick(() => {\n          if (!this.isClicked) {\n            // 主动触发保存历史表单输入。\n            try {\n              autoFillManager.requestAutoSave(this.getUIContext())\n            } catch (err) {\n              let e: BusinessError = err as BusinessError;\n              hilog.error(0x0000, 'DemoTest', 'error: %{public}d %{public}s', e.code, e.message);\n            }\n            this.isClicked = true;\n            // 设置超时时间以防止重复点击按钮保存历史表单输入。\n            setTimeout(() => {\n              this.isClicked = false;\n            }, 1000)\n            // 或者通过路由跳转其他页面触发保存历史表单输入。\n            this.getUIContext().getRouter().pushUrl({\n              url: 'xxx'\n            })\n          }\n        })\n        .width(\"50%\")\n    }\n    .alignItems(HorizontalAlign.Center)\n    .height('100%')\n    .width('100%')\n  }\n}\n"
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
962505(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799508-a9db41343da4c707be00dce36e6e0a91.png");

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