"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["584874"], {
247737(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_ui_system_scenarization_capability_arkts_inspector_overview_arkts_inspector_overview_md_507_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-ui-system-scenarization-capability-arkts-inspector-overview-arkts-inspector-overview-md-507.json
var site_docs_arkui_arkts_ui_development_arkts_ui_system_scenarization_capability_arkts_inspector_overview_arkts_inspector_overview_md_507_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-inspector-overview/arkts-inspector-overview","title":"检查页面布局","description":"inspector用于检查页面布局，通过双向定位功能帮助开发者在DevEco Studio中快速定位组件、修改属性和调试组件，以提高开发效率。","source":"@site/docs/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-inspector-overview/arkts-inspector-overview.md","sourceDirName":"arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-inspector-overview","slug":"/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-inspector-overview/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-inspector-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"检查页面布局","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-inspector-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"感知组件可见性","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-manage-components-visibility/"},"next":{"title":"媒体查询 (@ohos.mediaquery)","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-layout-development-media-query/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-ui-system-scenarization-capability/arkts-inspector-overview/arkts-inspector-overview.md


const frontMatter = {
	title: '检查页面布局',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-inspector-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '检查页面布局';

const assets = {

};



const toc = [{
  "value": "使用约束",
  "id": "使用约束",
  "level": 2
}, {
  "value": "UIContext查询组件树和组件信息能力",
  "id": "uicontext查询组件树和组件信息能力",
  "level": 2
}, {
  "value": "布局回调",
  "id": "布局回调",
  "level": 2
}, {
  "value": "组件标识属性的扩展能力",
  "id": "组件标识属性的扩展能力",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
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
        id: "检查页面布局",
        children: "检查页面布局"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "inspector用于检查页面布局，通过双向定位功能帮助开发者在DevEco Studio中快速定位组件、修改属性和调试组件，以提高开发效率。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI获取当前显示页面中所有组件的信息，包括组件树的父子结构、尺寸、位置、样式、属性和状态。获取组件树信息后，生成并展示为Inspector组件树。DevEco Studio的使用具体可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/ui-debug-optimize/ui-inspector-profiler#inspector%E8%B0%83%E8%AF%95%E8%83%BD%E5%8A%9B",
        children: "Inspector调试能力"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["inspector针对UI组件的布局或绘制送显完成，还提供了注册与取消监听函数的C API接口，具体使用可以参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-use-ndk/arkts-add-event/ndk-inspector-component-observer",
        children: "监听组件布局和绘制送显事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用约束",
      children: "使用约束"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持动效类组件的控件树实时刷新功能。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "支持获取组件的属性和样式，但不支持获取controller和Builder对象。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "不支持获取组件的方法、事件。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uicontext查询组件树和组件信息能力",
      children: "UIContext查询组件树和组件信息能力"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI提供@ohos.arkui.UIContext(UIContext)扩展能力，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getfilteredinspectortree12",
        children: "getFilteredInspectorTree"
      }), "获取组件树及组件属性，通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-uicontext/arkts-apis-uicontext-uicontext/arkts-apis-uicontext-uicontext#getfilteredinspectortreebyid12",
        children: "getFilteredInspectorTreeById"
      }), "获取指定的组件及其子组件的属性。支持设置过滤条件进行查询。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下述示例，展示了getFilteredInspectorTree和getFilteredInspectorTreeById的基本用法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { UIContext } from '@kit.ArkUI';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n\n@Entry\n@Component\nstruct ComponentPage {\n  loopConsole(inspectorStr: string, i: string) {\n    hilog.info(0x0000, `InsTree ${i}| type: ${JSON.parse(inspectorStr).$type}, ID: ${JSON.parse(inspectorStr).$ID}`,\n      'InsTree');\n    if (JSON.parse(inspectorStr).$children) {\n      i += '-';\n      for (let index = 0; index < JSON.parse(inspectorStr).$children.length; index++) {\n        this.loopConsole(JSON.stringify(JSON.parse(inspectorStr).$children[index]), i);\n      }\n    }\n  }\n\n  build() {\n    Column() {\n      Text('Hello World')\n        .fontSize(20)\n        .id('TEXT')\n      Button('content').onClick(() => {\n        const uiContext: UIContext = this.getUIContext();\n        let inspectorStr = uiContext.getFilteredInspectorTree(['content']);\n        hilog.info(0x0000,`InsTree : ${inspectorStr}`, 'InsTree');\n        inspectorStr = JSON.stringify(JSON.parse(inspectorStr));\n        this.loopConsole(inspectorStr, '-');\n      })\n      Button('isLayoutInspector').onClick(() => {\n        const uiContext: UIContext = this.getUIContext();\n        let inspectorStr = uiContext.getFilteredInspectorTree(['isLayoutInspector']);\n        hilog.info(0x0000,`InsTree : ${inspectorStr}`, 'InsTree');\n        inspectorStr = JSON.stringify(JSON.parse(inspectorStr).content);\n        this.loopConsole(inspectorStr, '-');\n      })\n      Button('getFilteredInspectorTreeById').onClick(() => {\n        const uiContext: UIContext = this.getUIContext();\n        try {\n          let inspectorStr = uiContext.getFilteredInspectorTreeById('TEXT', 1, ['id', 'src']);\n          hilog.info(0x0000,`result1: ${inspectorStr}`, 'result1');\n          inspectorStr = JSON.stringify(JSON.parse(inspectorStr)['$children'][0]);\n          hilog.info(0x0000,`result2: ${inspectorStr}`, 'result2');\n          inspectorStr = uiContext.getFilteredInspectorTreeById('TEXT', 1, ['src']);\n          inspectorStr = JSON.stringify(JSON.parse(inspectorStr)['$children'][0]);\n          hilog.info(0x0000,`result3: ${inspectorStr}`, 'result13');\n        } catch (e) {\n          hilog.error(0x0000, `getFilteredInspectorTreeById error: ${e}`, 'error');\n        }\n      })\n\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "布局回调",
      children: "布局回调"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-arkts/ui/js-apis-arkui-inspector/js-apis-arkui-inspector",
        children: "@ohos.arkui.inspector (布局回调)"
      }), "提供注册组件布局和组件绘制完成的回调通知能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下述示例，展示了布局回调的基本用法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { inspector } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct ImageExample {\n  build() {\n    Column() {\n      Flex({ direction: FlexDirection.Column, alignItems: ItemAlign.Start }) {\n        Row({ space: 5 }) {\n          // 请将$r('app.media.startIcon')替换为实际资源文件\n          Image($r('app.media.startIcon'))\n            .width(110)\n            .height(110)\n            .border({ width: 1 })\n            .id('IMAGE_ID')\n        }\n        .id('ROW_ID')\n      }\n    }.height(320).width(360).padding({ right: 10, top: 10 })\n  }\n\n  listenerForImage: inspector.ComponentObserver = this.getUIContext().getUIInspector().createComponentObserver('IMAGE_ID');\n  listenerForRow: inspector.ComponentObserver = this.getUIContext().getUIInspector().createComponentObserver('ROW_ID');\n\n  aboutToAppear() {\n    let onLayoutComplete: () => void = (): void => {\n      // 补充待实现的功能\n    };\n    let onDrawComplete: () => void = (): void => {\n      // 补充待实现的功能\n    };\n    let onDrawChildrenComplete: () => void = (): void => {\n      // 补充待实现的功能\n    };\n    let funcLayout = onLayoutComplete; // 绑定当前js对象\n    let funcDraw = onDrawComplete; // 绑定当前js对象\n    let funcDrawChildren = onDrawChildrenComplete; // 绑定当前js对象\n    let offFuncLayout = onLayoutComplete; // 绑定当前js对象\n    let offFuncDraw = onDrawComplete; // 绑定当前js对象\n    let offFuncDrawChildren = onDrawChildrenComplete; // 绑定当前js对象\n\n    this.listenerForImage.on('layout', funcLayout);\n    this.listenerForImage.on('draw', funcDraw);\n    this.listenerForRow.on('drawChildren', funcDrawChildren);\n\n    // 通过句柄向对应的查询条件取消注册回调，由开发者自行决定在何时调用。\n    // this.listenerForImage.off('layout', offFuncLayout)\n    // this.listenerForImage.off('draw', offFuncDraw)\n    // this.listenerForRow.off('drawChildren', offFuncDrawChildren)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "组件标识属性的扩展能力",
      children: "组件标识属性的扩展能力"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过getInspectorByKey、getInspectorTree、sendEventByKey提供组件标识属性扩展能力，具体如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-component-id/ts-universal-attributes-component-id#getinspectorbykey9",
          children: "getInspectorByKey"
        }), "，获取指定id的组件的所有属性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-component-id/ts-universal-attributes-component-id#getinspectortree9",
          children: "getInspectorTree"
        }), "，获取组件树及组件属性。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/basic-property/ts-universal-attributes-component-id/ts-universal-attributes-component-id#sendeventbykey9",
          children: "sendEventByKey"
        }), "，给指定id的组件发送事件。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "下述示例，展示了getInspectorByKey、getInspectorTree和sendEventByKey的基本用法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct ComponentPage {\n  build() {\n    Column() {\n      Text('Hello World')\n        .fontSize(20)\n        .id('TEXT')\n        .onClick(() => {\n          hilog.info(0x0000,`Text is clicked`, 'isClicked');\n        })\n      Button('getInspectorByKey').onClick(() => {\n        let result = getInspectorByKey('TEXT');\n        hilog.info(0x0000,`result is ${result}`, 'result');\n      })\n      Button('getInspectorTree').onClick(() => {\n        let result = getInspectorTree();\n        hilog.info(0x0000,`result is ${JSON.stringify(result)}`, 'result');\n      })\n      Button('sendEventByKey').onClick(() => {\n        sendEventByKey('TEXT', 10, '');\n      })\n    }\n    .width('100%')\n    .height('100%')\n  }\n}\n"
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