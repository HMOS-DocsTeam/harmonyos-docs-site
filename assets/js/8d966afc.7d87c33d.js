"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["601081"], {
50627(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_modifier_arkts_common_attributes_content_modifier_arkts_common_attributes_content_modifier_md_8d9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-user-defined-capabilities-arkts-modifier-arkts-common-attributes-content-modifier-arkts-common-attributes-content-modifier-md-8d9.json
var site_docs_arkui_arkts_ui_development_arkts_user_defined_capabilities_arkts_modifier_arkts_common_attributes_content_modifier_arkts_common_attributes_content_modifier_md_8d9_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-common-attributes-content-modifier/arkts-common-attributes-content-modifier","title":"内容修改器 (ContentModifier)","description":"当开发者期望自定义组件的内容区时，比如Checkbox的内部显示一个五角星等场景时，可以使用此功能。","source":"@site/docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-common-attributes-content-modifier/arkts-common-attributes-content-modifier.md","sourceDirName":"arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-common-attributes-content-modifier","slug":"/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-common-attributes-content-modifier/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-common-attributes-content-modifier/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"内容修改器 (ContentModifier)","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-attributes-content-modifier","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"自定义扩展能力概述","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-modifier/"},"next":{"title":"属性修改器 (AttributeModifier)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-user-defined-extension-attributemodifier/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-user-defined-capabilities/arkts-modifier/arkts-common-attributes-content-modifier/arkts-common-attributes-content-modifier.md


const frontMatter = {
	title: '内容修改器 (ContentModifier)',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-common-attributes-content-modifier',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '内容修改器 (ContentModifier)';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
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
        id: "内容修改器-contentmodifier",
        children: "内容修改器 (ContentModifier)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当开发者期望自定义组件的内容区时，比如Checkbox的内部显示一个五角星等场景时，可以使用此功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["仅", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-button/ts-basic-components-button",
        children: "Button"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-checkbox/ts-basic-components-checkbox",
        children: "Checkbox"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-datapanel/ts-basic-components-datapanel",
        children: "DataPanel"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-texttimer/ts-basic-components-texttimer",
        children: "TextTimer"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-slider/ts-basic-components-slider",
        children: "Slider"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-select/ts-basic-components-select",
        children: "Select"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-rating/ts-basic-components-rating",
        children: "Rating"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-radio/ts-basic-components-radio",
        children: "Radio"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-gauge/ts-basic-components-gauge",
        children: "Gauge"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/buttons-and-selections/ts-basic-components-toggle/ts-basic-components-toggle",
        children: "Toggle"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/information-display/ts-basic-components-textclock/ts-basic-components-textclock",
        children: "TextClock"
      }), "组件支持该能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用ContentModifier自定义Checkbox样式，用五边形Checkbox替换默认Checkbox。选中时，五边形内部显示红色三角图案，标题显示“选中”；取消选中时，红色三角图案消失，标题显示“非选中”。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { resourceManager } from '@kit.LocalizationKit';\n\nconst DOMAIN = 0x0000;\n// xxx.ets\nclass MyCheckboxStyle implements ContentModifier<CheckBoxConfiguration> {\n  public selectedColor: Color = Color.White;\n\n  constructor(selectedColor: Color) {\n    this.selectedColor = selectedColor;\n  }\n\n  applyContent(): WrappedBuilder<[CheckBoxConfiguration]> {\n    return wrapBuilder(buildCheckbox);\n  }\n}\n\n@Builder\nfunction buildCheckbox(config: CheckBoxConfiguration) {\n  Column({ space: 10 }) {\n    Text() {\n      Span(config.name)\n      // 请将$r('app.string.checked_context')替换为实际资源文件，在本示例中该资源文件的value值为\"（选中）\"\n      // 请将$r('app.string.unchecked_context')替换为实际资源文件，在本示例中该资源文件的value值为\"（非选中）\"\n      Span(config.selected ? $r('app.string.checked_context') : $r('app.string.unchecked_context'))\n    }\n    Shape() {\n      // 五边形复选框样式\n      Path()\n        .width(200)\n        .height(60)\n        .commands('M100 0 L0 100 L50 200 L150 200 L200 100 Z')\n        .fillOpacity(0)\n        .strokeWidth(3)\n      // 红色三角图案样式\n      Path()\n        .width(10)\n        .height(10)\n        .commands('M50 0 L100 100 L0 100 Z')\n        .visibility(config.selected ? Visibility.Visible : Visibility.Hidden)\n        .fill(config.selected ? (config.contentModifier as MyCheckboxStyle).selectedColor : Color.Black)\n        .stroke((config.contentModifier as MyCheckboxStyle).selectedColor)\n        .margin({ left: 11, top: 10 })\n    }\n    .width(300)\n    .height(200)\n    .viewPort({\n      x: 0,\n      y: 0,\n      width: 310,\n      height: 310\n    })\n    .strokeLineJoin(LineJoinStyle.Miter)\n    .strokeMiterLimit(5)\n    .onClick(() => {\n      // 点击后，触发复选框点击状态变化\n      if (config.selected) {\n        config.triggerChange(false);\n      } else {\n        config.triggerChange(true);\n      }\n    })\n    .margin({ left: 150 })\n  }\n}\n\n@Entry\n@Component\nstruct Index {\n  private resmg: resourceManager.ResourceManager | undefined = this.getUIContext().getHostContext()?.resourceManager\n  build() {\n    Row() {\n      Column() {\n        //选中和不选中按钮\n        // 请将$r('app.string.checkbox_status')替换为实际资源文件，在本示例中该资源文件的value值为\"复选框状态\"\n        Checkbox({ name: this.resmg?.getStringSync($r('app.string.checkbox_status').id), group: 'checkboxGroup' })\n          .select(true)\n          .contentModifier(new MyCheckboxStyle(Color.Red))\n          .onChange((value: boolean) => {\n            hilog.info(DOMAIN, 'testTag', 'Checkbox change is' + value);\n          })\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(961871)/* ["default"] */.A) + "",
        width: "333",
        height: "238"
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
961871(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798378-3bf3382ddc421d281e14c5e4ef59bedc.gif");

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