"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["908429"], {
442317(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_hp_arkui_reduce_ges_distance_ide_hp_arkui_reduce_ges_distance_md_918_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-code-edit-ide-code-check-ide-codelinter-rule-ide-performance-ide-hp-arkui-reduce-ges-distance-ide-hp-arkui-reduce-ges-distance-md-918.json
var site_docs_ide_code_edit_ide_code_check_ide_codelinter_rule_ide_performance_ide_hp_arkui_reduce_ges_distance_ide_hp_arkui_reduce_ges_distance_md_918_namespaceObject = JSON.parse('{"id":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-reduce-ges-distance/ide-hp-arkui-reduce-ges-distance","title":"@performance/hp-arkui-reduce-pangesture-distance","description":"建议设置合理的拖动距离。","source":"@site/docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-reduce-ges-distance/ide-hp-arkui-reduce-ges-distance.md","sourceDirName":"ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-reduce-ges-distance","slug":"/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-reduce-ges-distance/","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-reduce-ges-distance/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":24,"frontMatter":{"title":"@performance/hp-arkui-reduce-pangesture-distance","sidebar_position":24,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hp-arkui-reduce-ges-distance","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"@performance/hp-arkui-replace-nested-reusable-component-by-builder","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui--replace-reusable-by-builder/"},"next":{"title":"@performance/hp-arkui-remove-redundant-nest-container","permalink":"/harmonyos-docs-site/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide_hp-arkui-no-redundant-nest/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-code-edit/ide-code-check/ide-codelinter-rule/ide-performance/ide-hp-arkui-reduce-ges-distance/ide-hp-arkui-reduce-ges-distance.md


const frontMatter = {
	title: '@performance/hp-arkui-reduce-pangesture-distance',
	sidebar_position: 24,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hp-arkui-reduce-ges-distance',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '@performance/hp-arkui-reduce-pangesture-distance';

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
        id: "performancehp-arkui-reduce-pangesture-distance",
        children: "@performance/hp-arkui-reduce-pangesture-distance"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议设置合理的拖动距离。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用内点击响应时延场景下，建议优先修改。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则配置",
      children: "规则配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// code-linter.json5\n{\n  \"rules\": {\n    \"@performance/hp-arkui-reduce-pangesture-distance\": \"suggestion\",\n  }\n}\n"
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
        children: "import { hiTraceMeter } from '@kit.PerformanceAnalysisKit'\n\n@Entry\n@Component\nstruct PanGestureExample {\n  @State offsetX: number = 0\n  @State offsetY: number = 0\n  @State positionX: number = 0\n  @State positionY: number = 0\n  private panOption: PanGestureOptions = new PanGestureOptions({ direction: PanDirection.Left | PanDirection.Right })\n\n  build() {\n    Column() {\n      Column() {\n        Text('PanGesture offset:\\nX: ' + this.offsetX + '\\n' + 'Y: ' + this.offsetY)\n      }\n      .height(200)\n      .width(300)\n      .padding(20)\n      .border({ width: 3 })\n      .margin(50)\n      .translate({ x: this.offsetX, y: this.offsetY, z: 0 }) // 以组件左上角为坐标原点进行移动\n      // 左右拖动触发该手势事件\n      .gesture(\n        PanGesture(this.panOption)\n          .onActionStart((event: GestureEvent) => {\n            console.info('Pan start')\n            hiTraceMeter.startTrace(\"PanGesture\", 1)\n          })\n          .onActionUpdate((event: GestureEvent) => {\n            if (event) {\n              this.offsetX = this.positionX + event.offsetX\n              this.offsetY = this.positionY + event.offsetY\n            }\n          })\n          .onActionEnd(() => {\n            this.positionX = this.offsetX\n            this.positionY = this.offsetY\n            console.info('Pan end')\n            hiTraceMeter.finishTrace(\"PanGesture\", 1)\n          })\n      )\n\n      Button('修改PanGesture触发条件')\n        .onClick(() => {\n          // 设定的距离在阈值10以内\n          this.panOption.setDistance(4)\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "反例",
      children: "反例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { hiTraceMeter } from '@kit.PerformanceAnalysisKit'\n\n@Entry\n@Component\nstruct PanGestureExample {\n  @State offsetX: number = 0\n  @State offsetY: number = 0\n  @State positionX: number = 0\n  @State positionY: number = 0\n  private panOption: PanGestureOptions = new PanGestureOptions({ direction: PanDirection.Left | PanDirection.Right })\n\n  build() {\n    Column() {\n      Column() {\n        Text('PanGesture offset:\\nX: ' + this.offsetX + '\\n' + 'Y: ' + this.offsetY)\n      }\n      .height(200)\n      .width(300)\n      .padding(20)\n      .border({ width: 3 })\n      .margin(50)\n      .translate({ x: this.offsetX, y: this.offsetY, z: 0 })\n      // 左右拖动触发该手势事件\n      .gesture(\n        PanGesture(this.panOption)\n          .onActionStart((event: GestureEvent) => {\n            console.info('Pan start')\n            hiTraceMeter.startTrace(\"PanGesture\", 1)\n          })\n          .onActionUpdate((event: GestureEvent) => {\n            if (event) {\n              this.offsetX = this.positionX + event.offsetX\n              this.offsetY = this.positionY + event.offsetY\n            }\n          })\n          .onActionEnd(() => {\n            this.positionX = this.offsetX\n            this.positionY = this.offsetY\n            console.info('Pan end')\n            hiTraceMeter.finishTrace(\"PanGesture\", 1)\n          })\n      )\n\n      Button('修改PanGesture触发条件')\n        .onClick(() => {\n          // 设定的距离超过阈值10\n          this.panOption.setDistance(100)\n        })\n    }\n  }\n}\n"
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