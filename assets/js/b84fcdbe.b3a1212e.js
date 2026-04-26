"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["798118"], {
576112(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_scenario_fusion_guide_scenario_fusion_intelligent_filling_scenario_fusion_licenseplateno_scenario_fusion_licenseplateno_md_b84_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-scenario-fusion-guide-scenario-fusion-intelligent-filling-scenario-fusion-licenseplateno-scenario-fusion-licenseplateno-md-b84.json
var site_docs_scenario_fusion_guide_scenario_fusion_intelligent_filling_scenario_fusion_licenseplateno_scenario_fusion_licenseplateno_md_b84_namespaceObject = JSON.parse('{"id":"scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-licenseplateno/scenario-fusion-licenseplateno","title":"推荐车牌号场景","description":"从5.1.0(18)开始，支持智能填充的推荐车牌号场景。","source":"@site/docs/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-licenseplateno/scenario-fusion-licenseplateno.md","sourceDirName":"scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-licenseplateno","slug":"/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-licenseplateno/","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-licenseplateno/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"推荐车牌号场景","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-licenseplateno","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自动补全地址表单所在地区","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-intelligentfilling-autocomplete/"},"next":{"title":"推荐数据源及推荐逻辑说明","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-intelligentfilling-explain/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/scenario-fusion-guide/scenario-fusion-intelligent-filling/scenario-fusion-licenseplateno/scenario-fusion-licenseplateno.md


const frontMatter = {
	title: '推荐车牌号场景',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-fusion-licenseplateno',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '推荐车牌号场景';

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
        id: "推荐车牌号场景",
        children: "推荐车牌号场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.1.0(18)开始，支持智能填充的推荐车牌号场景。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在填写车牌号表单场景时，智能填充可从用户的历史表单输入中提供输入建议，开发者可以参考如下代码进行开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(332703)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "只推荐机主本人历史表单信息的车牌号信息（与登录设备的账号信息，实名姓名+手机号或邮箱信息相同）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "效果图",
      children: "效果图"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(753883)/* ["default"] */.A) + "",
        width: "1043",
        height: "676"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { display } from '@kit.ArkUI';\n\nconst NEW_ENERGY_TEXT = '新能源';\n\n@Extend(Text)\nfunction extendStyles(value: string, width: number, height: number, active: boolean) {\n  .fontSize(value === NEW_ENERGY_TEXT ? 10 : 18)\n  .fontWeight(FontWeight.Medium)\n  .textAlign(TextAlign.Center)\n  .width(width)\n  .height(height)\n  .borderWidth('3px')\n  .borderColor(active ? Color.Blue : '#ccc')\n  .borderRadius(5)\n}\n\n@Entry\n@Component\nstruct LicensePlate {\n  // 车牌号输入框的数量。\n  private length = 8;\n  private licenseItemId = '_license_item';\n  @State licensePlateVal: string[] = [];\n  @State activeIndex: number = -1;\n  @State itemWidth: number = 30;\n  @State itemHeight: number = 30;\n  @State inputText: string = '';\n  // 用户是否已经触发输入。\n  @State isUserInput: boolean = false;\n  // 匹配历史输入的上一个输入框的值\n  private beforeValue: string = '';\n\n  aboutToAppear(): void {\n    this.licensePlateVal = new Array(this.length).fill('');\n    let displayClass = display.getDefaultDisplaySync();\n    let width = displayClass.width;\n    // 每个框的宽度根据屏幕宽度计算。\n    this.itemWidth = this.getUIContext().px2vp(width) / (this.length + 1) - 4;\n    this.itemHeight = this.itemWidth * 1.2;\n  }\n\n  setValue(val: string): void {\n    if (!this.isUserInput) {\n      // 根据智能填充填写车牌号输入框。\n      this.handleAutoFill(val);\n      this.beforeValue = val;\n      return;\n    }\n    if (!val || val.length === 0 || this.beforeValue.length > val.length) {\n      let licensePlate = this.getLicensePlate();\n      if (licensePlate.length > 0) {\n        this.inputText = licensePlate;\n      }\n      this.beforeValue = this.inputText;\n      return;\n    }\n    let inputData = val.substring(this.beforeValue.length);\n    if (inputData.length > this.length) {\n      inputData = inputData.substring(0, this.length);\n    }\n    // 用户输入仅替换选定的输入框，而智能填充则替换所有输入框中的所有值。\n    this.handleUserInput(inputData);\n    this.beforeValue = val;\n  }\n\n  getLicensePlate(): string {\n    return this.licensePlateVal.join('');\n  }\n\n  handleUserInput(val: string): void {\n    if (val.length > this.length - this.activeIndex) {\n      val = val.substring(0, this.length - this.activeIndex);\n    }\n    for (let i = 0; i < val.length; i++) {\n      this.licensePlateVal[this.activeIndex] = val[i];\n      this.activeIndex = Math.min(this.activeIndex + 1, this.length - 1);\n    }\n  }\n\n  handleAutoFill(val: string): void {\n    let value = val.split('');\n    this.licensePlateVal.fill('');\n    for (let i = 0; i < this.length; i++) {\n      this.licensePlateVal[i] = i < value.length ? value[i] : this.licensePlateVal[i];\n    }\n    this.activeIndex = Math.min(value.length + 1, this.length - 1);\n  }\n\n  handleDelete() {\n    if (!this.licensePlateVal[this.activeIndex]) {\n      this.licensePlateVal[this.activeIndex - 1] = '';\n    } else {\n      this.licensePlateVal[this.activeIndex] = '';\n    }\n    this.activeIndex = Math.max(0, this.activeIndex - 1);\n  }\n\n  getValue(index: number): string {\n    return (index === this.length - 1 && !this.licensePlateVal[index]) ? NEW_ENERGY_TEXT : this.licensePlateVal[index];\n  }\n\n  handleLicenseClick(screenX: number) {\n    for(let index = 0; index <= 7; index++) {\n      let id = index + this.licenseItemId;\n      let position = this.getUIContext().getComponentUtils().getRectangleById(id);\n      // 相对于屏幕的位置信息,单位px\n      let left = position?.screenOffset?.x ?? 0;\n      let right = left + (position?.size?.width ?? 0);\n      if (screenX >= left && screenX <= right) {\n        this.activeIndex = index;\n      }\n    }\n  }\n\n  @Builder\n  displayItem(index: number) {\n    Column() {\n      Text(this.getValue(index))\n        .extendStyles(this.getValue(index), this.itemWidth, this.itemHeight, this.activeIndex === index)\n    }\n    .id(index + this.licenseItemId)\n    .padding({\n      left: 2,\n      right: 2\n    })\n  }\n\n  @Builder\n  buildLicensePlateNumber() {\n    Flex({\n      direction: FlexDirection.Row,\n      alignItems: ItemAlign.Center,\n      justifyContent: FlexAlign.SpaceBetween\n    }) {\n      Column() {\n        Row() {\n          Text(\"车牌号码\")\n        }.height(30)\n\n        Stack({ alignContent: Alignment.BottomStart }) {\n          Row() {\n            this.displayItem(0)\n            this.displayItem(1)\n            Text('·')\n              .fontSize(22)\n              .fontWeight(600)\n              .height(this.itemHeight)\n            this.displayItem(2)\n            this.displayItem(3)\n            this.displayItem(4)\n            this.displayItem(5)\n            this.displayItem(6)\n            this.displayItem(7)\n          }\n\n          TextInput({ text: $$this.inputText })\n            .width('100%')\n            .height('100%')\n            .opacity(0)\n            .contentType(ContentType.LICENSE_PLATE)\n            .onClick((event) => {\n              // 相对于屏幕的X轴坐标,单位px\n              let displayX = this.getUIContext().vp2px(event.displayX);\n              this.handleLicenseClick(displayX);\n              if (this.activeIndex < 0) {\n                this.activeIndex = 0;\n              }\n            })\n            .onChange((val: string) => {\n              if (val === this.beforeValue) {\n                return;\n              }\n              this.setValue(val);\n              this.isUserInput = false;\n            })\n            .onDidInsert(() => {\n              // 当使用输入法输入数据时触发。如果输入法是自定义的，则在用户输入数据时将isUserInput设置为true。\n              this.isUserInput = true;\n            })\n            .onDidDelete((val: DeleteValue) => {\n              // 当使用输入方法删除数据时触发。如果输入方法是自定义的，当用户删除数据时，将`isUserInput`设置为`true`，并调用相应的处理函数。\n              if (val?.deleteValue?.length > 0) {\n                this.isUserInput = true;\n              }\n              this.handleDelete();\n            })\n        }\n        .height(this.itemHeight)\n        .margin({ top: 20 })\n      }\n    }\n    .backgroundColor(Color.White)\n    .height(50)\n    .margin({ left: 15, right: 15 })\n    .id(\"customInput\")\n    .defaultFocus(false)\n  }\n\n  build() {\n    Column() {\n      this.buildLicensePlateNumber()\n    }\n  }\n}\n"
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
753883(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959158-8b8f9e888bbe21e2f0f55d3725333512.png");

},
332703(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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