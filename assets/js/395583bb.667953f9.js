"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["712171"], {
540523(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_accessibility_kit_accessibility_approve_experience_improve_screen_reader_experience_scenario_card_automatically_centered_scenario_card_automatically_centered_md_395_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-accessibility-kit-accessibility-approve-experience-improve-screen-reader-experience-scenario-card-automatically-centered-scenario-card-automatically-centered-md-395.json
var site_docs_accessibility_kit_accessibility_approve_experience_improve_screen_reader_experience_scenario_card_automatically_centered_scenario_card_automatically_centered_md_395_namespaceObject = JSON.parse('{"id":"accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-card-automatically-centered/scenario-card-automatically-centered","title":"卡片自动居中的场景","description":"设计场景","source":"@site/docs/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-card-automatically-centered/scenario-card-automatically-centered.md","sourceDirName":"accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-card-automatically-centered","slug":"/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-card-automatically-centered/","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-card-automatically-centered/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"title":"卡片自动居中的场景","sidebar_position":13,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-card-automatically-centered","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"重新设置新焦点位置的场景","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-focus-position-setting/"},"next":{"title":"测试屏幕朗读功能","permalink":"/harmonyos-docs-site/accessibility-kit/test-app-accessibility/test-screen-reader/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-card-automatically-centered/scenario-card-automatically-centered.md


const frontMatter = {
	title: '卡片自动居中的场景',
	sidebar_position: 13,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-card-automatically-centered',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '卡片自动居中的场景';

const assets = {

};



const toc = [{
  "value": "设计场景",
  "id": "设计场景",
  "level": 2
}, {
  "value": "开发实例",
  "id": "开发实例",
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
        id: "卡片自动居中的场景",
        children: "卡片自动居中的场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设计场景",
      children: "设计场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在横向滚动容器中，通过居中限位来突出中心卡片的详细信息和操作选项。为了确保屏幕朗读场景下聚焦卡片的可访问性，需要将获得焦点的卡片自动居中显示，以凸显其重要性。为此，需要应用通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-foreach/ts-rendering-control-foreach",
        children: "ForEach"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/state-management-and-rendering-control/ts-rendering-control-lazyforeach/ts-rendering-control-lazyforeach",
        children: "LazyForEach"
      }), "获取卡片索引，在可聚焦的卡片控件上注册无障碍聚焦回调函数", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/accessibility-related/ts-universal-accessibility-event/ts-universal-accessibility-event#onaccessibilityfocus",
        children: "onAccessibilityFocus"
      }), "，在回调函数中调用滚动容器的", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/doc/harmonyos-references-V5/ts-container-scroll-V5#scrolltoindex",
        children: "scrollToIndex"
      }), "接口并指定卡片索引，将聚焦的卡片控件居中显示。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发实例",
      children: "开发实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如下示例实现一个横向滚动容器，卡片被聚焦时自动居中显示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "class ListDataSource implements IDataSource {\n  private list: number[] = [];\n\n  constructor(list: number[]) {\n    this.list = list;\n  }\n\n  totalCount(): number {\n    return this.list.length;\n  }\n\n  getData(index: number): number {\n    return this.list[index];\n  }\n\n  registerDataChangeListener(listener: DataChangeListener): void {\n  }\n\n  unregisterDataChangeListener(listener: DataChangeListener): void {\n  }\n}\n\n@Entry\n@Component\nstruct Rule_2_1_18 {\n  private arr: ListDataSource = new ListDataSource([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);\n  private scrollerForList: Scroller = new Scroller();\n  build() {\n    Column() {\n      List({ space: 20, initialIndex: 0, scroller: this.scrollerForList }) {\n        LazyForEach(this.arr, (index: number) => {\n          ListItem() {\n            Text('' + index)\n              .width('100%')\n              .height(100)\n              .fontSize(16)\n              .textAlign(TextAlign.Center)\n              .borderRadius(10)\n              .backgroundColor(0xFFFFFF)\n          }\n          .width('60%') // 设置高占比item\n          .onClick( () => {\n            // 设置点击事件，使组件可被无障碍聚焦\n          })\n          // 设置无障碍聚焦回调\n          .onAccessibilityFocus((isFocus: boolean) => {\n            if (isFocus) {\n              // 如果聚焦则滚动List，使当前的ListItem居中\n              this.scrollerForList.scrollToIndex(index, false, ScrollAlign.CENTER)\n            }\n          })\n        }, (item: string) => item)\n      }.width('90%')\n      .scrollBar(BarState.Off)\n      .scrollSnapAlign(ScrollSnapAlign.CENTER) // 设置居中对齐\n      .listDirection(Axis.Horizontal) // 设置横向list\n    }.width('100%').height('100%').backgroundColor(0xDCDCDC).padding({ top: 5 })\n  }\n}\n"
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