"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["200387"], {
266954(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_hp_attribute_update_refresh_scope_ide_hp_attribute_update_refresh_scope_md_9a0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-performance-ide-hp-attribute-update-refresh-scope-ide-hp-attribute-update-refresh-scope-md-9a0.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_hp_attribute_update_refresh_scope_ide_hp_attribute_update_refresh_scope_md_9a0_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-attribute-update-refresh-scope/ide-hp-attribute-update-refresh-scope","title":"@performance/hp-arkui-use-attributeUpdater-control-refresh-scope","description":"建议使用attributeUpdater精准控制组件属性的刷新。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-attribute-update-refresh-scope/ide-hp-attribute-update-refresh-scope.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-attribute-update-refresh-scope","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-attribute-update-refresh-scope/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-attribute-update-refresh-scope/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":33,"frontMatter":{"title":"@performance/hp-arkui-use-attributeUpdater-control-refresh-scope","sidebar_position":33,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hp-attribute-update-refresh-scope","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@performance/hp-arkui-suggest-use-get-anonymousid-async","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-sg-anonymousid-async/"},"next":{"title":"@performance/hp-arkui-use-grid-layout-options","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-use-grid-layout-options/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-attribute-update-refresh-scope/ide-hp-attribute-update-refresh-scope.md


const frontMatter = {
	title: '@performance/hp-arkui-use-attributeUpdater-control-refresh-scope',
	sidebar_position: 33,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hp-attribute-update-refresh-scope',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@performance/hp-arkui-use-attributeUpdater-control-refresh-scope';

const assets = {

};



const toc = [{
  "value": "规则配置",
  "id": "规则配置",
  "level": 2
}, {
  "value": "选项",
  "id": "选项",
  "level": 2
}, {
  "value": "正例",
  "id": "正例",
  "level": 2
}, {
  "value": "反例",
  "id": "反例",
  "level": 2
}, {
  "value": "规则集",
  "id": "规则集",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "performancehp-arkui-use-attributeupdater-control-refresh-scope",
        children: "@performance/hp-arkui-use-attributeUpdater-control-refresh-scope"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议使用attributeUpdater精准控制组件属性的刷新。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通用丢帧场景下，建议优先修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@performance/hp-arkui-use-attributeUpdater-control-refresh-scope\": \"suggestion\",\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "选项",
      children: "选项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该规则无需配置额外选项。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "正例",
      children: "正例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { AttributeUpdater } from '@ohos.arkui.modifier';\n// 源码文件，请以工程实际为准\nimport { MyDataSource } from './MyDataSource';\nimport { FriendMoment } from './data/DataEntry'\n\nexport class MyTextUpdater extends AttributeUpdater<TextAttribute> {\n  private color: string | number | Resource = \"\";\n\n  constructor(color: string | number | Resource) {\n    super();\n    this.color = color\n  }\n\n  initializeModifier(instance: TextAttribute): void {\n    instance.fontColor(this.color)\n  }\n}\n\n@Component\nexport struct UpdaterComponent {\n  private momentData: MyDataSource = new MyDataSource();\n\n  build() {\n    Column() {\n      Text('use MyTextUpdater')\n      List({ space: 5 }) {\n        LazyForEach(this.momentData, (moment: FriendMoment) => {\n          ListItem() {\n            OneMomentNoModifier({ color: moment.color })\n              .onClick(() => {\n                console.log(`my id is ${moment.id}`)\n              })\n          }\n        }, (moment: FriendMoment) => moment.id)\n      }.width('100%')\n      .height('100%')\n      .cachedCount(5)\n    }\n  }\n}\n\n@Reusable\n@Component\nexport struct OneMomentNoModifier {\n  color: string | number | Resource = \"\";\n  textUpdater: MyTextUpdater | null = null;\n\n  aboutToAppear(): void {\n    this.textUpdater = new MyTextUpdater(this.color);\n  }\n\n  aboutToReuse(params: Record<string, Object>): void {\n    this.color = params.color as string | number | Resource;\n    this.textUpdater?.attribute?.fontColor(this.color);\n  }\n\n  build() {\n    Column() {\n      Text('This is the title')\n      Text('This is the internal text')\n        .attributeModifier(this.textUpdater)\n        .textAlign(TextAlign.Center)\n        .fontStyle(FontStyle.Normal)\n        .fontSize(13)\n        .lineHeight(30)\n        .opacity(0.6)\n        .margin({ top: 10 })\n        .fontWeight(30)\n        .clip(false)\n        .backgroundBlurStyle(BlurStyle.NONE)\n        .foregroundBlurStyle(BlurStyle.NONE)\n        .borderWidth(1)\n        .borderColor(Color.Pink)\n        .borderStyle(BorderStyle.Solid)\n        .alignRules({\n          'top': { 'anchor': '__container__', 'align': VerticalAlign.Top },\n          'left': { 'anchor': 'image', 'align': HorizontalAlign.End }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// 源码文件，请以工程实际为准\nimport { MyDataSource } from './MyDataSource';\nimport { FriendMoment } from './data/DataEntry'\n\n@Component\nexport struct UpdaterComponent {\n  private momentData: MyDataSource = new MyDataSource();\n\n  build() {\n    Column() {\n      Text('use nothing')\n      List({ space: 5 }) {\n        LazyForEach(this.momentData, (moment: FriendMoment) => {\n          ListItem() {\n            OneMomentNoModifier({ color: moment.color })\n              .onClick(() => {\n                console.log(`my id is ${moment.id}`)\n              })\n          }\n        }, (moment: FriendMoment) => moment.id)\n      }\n      .width(\"100%\")\n      .height(\"100%\")\n      .cachedCount(5)\n    }\n  }\n}\n\n@Reusable\n@Component\nexport struct OneMomentNoModifier {\n  @State color: string | number | Resource = \"\";\n\n  aboutToReuse(params: Record<string, Object>): void {\n    this.color = params.color as string | number | Resource;\n  }\n\n  build() {\n    Column() {\n      Text('This is the title')\n      Text('This is the internal text')\n        .fontColor(this.color)\n        .textAlign(TextAlign.Center)\n        .fontStyle(FontStyle.Normal)\n        .fontSize(13)\n        .lineHeight(30)\n        .opacity(0.6)\n        .margin({ top: 10 })\n        .fontWeight(30)\n        .clip(false)\n        .backgroundBlurStyle(BlurStyle.NONE)\n        .foregroundBlurStyle(BlurStyle.NONE)\n        .borderWidth(1)\n        .borderColor(Color.Pink)\n        .borderStyle(BorderStyle.Solid)\n        .alignRules({\n          'top': { 'anchor': '__container__', 'align': VerticalAlign.Top },\n          'left': { 'anchor': 'image', 'align': HorizontalAlign.End }\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则集",
      children: "规则集"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "plugin:@performance/all\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Code Linter代码检查规则的配置指导请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-code-edit/ide-code-check/ide-code-linter",
        children: "Code Linter代码检查"
      }), "。"]
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