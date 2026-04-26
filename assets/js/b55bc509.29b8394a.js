"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["61729"], {
506230(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_arkts_interaction_capability_overview_arkts_interaction_capability_overview_md_b55_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-arkts-ui-development-arkts-interaction-development-guide-overview-arkts-interaction-capability-overview-arkts-interaction-capability-overview-md-b55.json
var site_docs_arkui_arkts_ui_development_arkts_interaction_development_guide_overview_arkts_interaction_capability_overview_arkts_interaction_capability_overview_md_b55_namespaceObject = JSON.parse('{"id":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-capability-overview/arkts-interaction-capability-overview","title":"交互响应概述","description":"ArkUI框架提供了丰富的交互功能，支持直接处理基础输入事件，以及由这些事件驱动的手势系统，同时支持拖拽、焦点切换等复杂交互。","source":"@site/docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-capability-overview/arkts-interaction-capability-overview.md","sourceDirName":"arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-capability-overview","slug":"/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-capability-overview/","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-capability-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"交互响应概述","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-interaction-capability-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"形状裁剪（clipShape）","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-draw-graphics/arkts-clip-shape/"},"next":{"title":"交互基础机制说明","permalink":"/harmonyos-docs-site/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-basic-principles/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-interaction-capability-overview/arkts-interaction-capability-overview.md


const frontMatter = {
	title: '交互响应概述',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/arkts-interaction-capability-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '交互响应概述';

const assets = {

};



const toc = [{
  "value": "基础输入事件",
  "id": "基础输入事件",
  "level": 2
}, {
  "value": "指向性事件",
  "id": "指向性事件",
  "level": 3
}, {
  "value": "非指向性事件",
  "id": "非指向性事件",
  "level": 3
}, {
  "value": "其他说明",
  "id": "其他说明",
  "level": 3
}, {
  "value": "手势系统",
  "id": "手势系统",
  "level": 2
}, {
  "value": "统一拖拽",
  "id": "统一拖拽",
  "level": 2
}, {
  "value": "焦点系统",
  "id": "焦点系统",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "交互响应概述",
        children: "交互响应概述"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkUI框架提供了丰富的交互功能，支持直接处理基础输入事件，以及由这些事件驱动的手势系统，同时支持拖拽、焦点切换等复杂交互。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基础输入事件",
      children: "基础输入事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当用户操作输入设备（例如触摸屏、键盘、鼠标、触控板）时，底层设备驱动会产生操作信号。系统捕捉这些信号并传递给应用程序，这些信号即为基础事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["根据基础事件特点总体上分为两类，", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "指向性"
        })
      }), "与", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "非指向性"
        })
      }), "事件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "指向性事件",
      children: "指向性事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "指向性事件是指包含事件发生位置信息的事件，此类事件以此次交互的第一个事件（Down/Begin类型）发生时所命中的组件来确定派发目标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["包括：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-touch/ts-universal-events-touch",
        children: "触摸事件"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-mouse-key/ts-universal-mouse-key",
        children: "鼠标事件"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-axis/ts-universal-events-axis",
        children: "轴事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "非指向性事件",
      children: "非指向性事件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "非指向性事件是指没有具体位置信息的事件，即事件的发生不依赖于特定的操作位置信息。此类事件以当前焦点组件为派发目标。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["包括：", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-key/ts-universal-events-key",
        children: "按键事件"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-crown/ts-universal-events-crown",
        children: "表冠事件"
      }), "，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-events/basic-raw-input-event/ts-universal-events-focus_axis/ts-universal-events-focus_axis",
        children: "焦点轴事件"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "其他说明",
      children: "其他说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "基础事件通常以一个标志开始的事件作为起始，以一个标志结束的事件作为结尾。在两者之间，会持续上报众多移动或更新事件。例如，触控事件的序列通常为Down, Move, Move..., Up；鼠标滚轮操作产生的轴事件的序列为Begin, Update, Update, ... End。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "部分基础事件不具备此类特征，例如按键事件，仅存在Down和Up两种状态，且Down状态可在持续按压时不间断地上报。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于指向性事件，系统会尽可能保证参与响应的组件可以得到完整的序列，这可以帮助你掌握处理开始与结束的时机；但对于非指向性事件，系统并没有这样的保障，由于焦点的变化，开始与结束可能被分发到不同的组件上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "手势系统",
      children: "手势系统"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "手势是一系列基础事件不断上报积累后，达成一定特点时所被识别成的交互结果，如点击：按下并在较短时间内抬起。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果使用ArkUI系统组件，系统会自动识别和响应这些组件上的手势，如按钮、列表，也可以在组件上绑定处理手势。一个组件上可绑定多个手势，这些手势可以由组件内置默认绑定，也可以由应用显式绑定。这些手势会在用户按下时，通过命中测试被收集上来，由系统统一管理，所有手势都会持续接收到输入事件，直到有一个手势满足条件，在这之后，就只有这一个手势可以继续接收和处理输入事件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果希望两个手势非此即彼，则可以考虑使用互斥手势，如果希望两个手势互不影响，则可以考虑使用并行手势，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-combined-gestures",
        children: "组合手势"
      }), "；"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["如果希望在用户按下时，才动态决定哪些手势能够参与处理，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/rkts-interaction-development-guide-support-gesture/arkts-gesture-events-gesture-judge",
        children: "手势冲突处理"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "统一拖拽",
      children: "统一拖拽"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-drag-event",
        children: "支持统一拖拽"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "焦点系统",
      children: "焦点系统"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/arkts-ui-development/arkts-interaction-development-guide-overview/arkts-common-events-focus-event",
        children: "支持焦点处理"
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