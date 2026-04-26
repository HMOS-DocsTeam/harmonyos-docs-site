"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["779097"], {
825424(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_display_manager_display_terminology_display_terminology_md_132_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-display-manager-display-terminology-display-terminology-md-132.json
var site_docs_arkui_display_manager_display_terminology_display_terminology_md_132_namespaceObject = JSON.parse('{"id":"arkui/display-manager/display-terminology/display-terminology","title":"屏幕管理开发术语","description":"屏幕管理开发主要围绕逻辑屏和物理屏两个核心概念进行。","source":"@site/docs/arkui/display-manager/display-terminology/display-terminology.md","sourceDirName":"arkui/display-manager/display-terminology","slug":"/arkui/display-manager/display-terminology/","permalink":"/harmonyos-docs-site/arkui/display-manager/display-terminology/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"屏幕管理开发术语","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/display-terminology","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用Display实现屏幕属性查询及状态监听 (ArkTS)","permalink":"/harmonyos-docs-site/arkui/display-manager/screenproperty-guideline/"},"next":{"title":"屏幕开发常见问题","permalink":"/harmonyos-docs-site/arkui/display-manager/displaymanager-faqs/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/display-manager/display-terminology/display-terminology.md


const frontMatter = {
	title: '屏幕管理开发术语',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/display-terminology',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '屏幕管理开发术语';

const assets = {

};



const toc = [{
  "value": "逻辑屏",
  "id": "逻辑屏",
  "level": 2
}, {
  "value": "主屏",
  "id": "主屏",
  "level": 3
}, {
  "value": "镜像屏",
  "id": "镜像屏",
  "level": 3
}, {
  "value": "扩展屏",
  "id": "扩展屏",
  "level": 3
}, {
  "value": "异源屏",
  "id": "异源屏",
  "level": 3
}, {
  "value": "物理屏",
  "id": "物理屏",
  "level": 2
}, {
  "value": "实体屏",
  "id": "实体屏",
  "level": 3
}, {
  "value": "虚拟屏",
  "id": "虚拟屏",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "屏幕管理开发术语",
        children: "屏幕管理开发术语"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "屏幕管理开发主要围绕逻辑屏和物理屏两个核心概念进行。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "逻辑屏不能独立于物理屏存在，每一块逻辑屏都会映射到物理屏上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "物理屏属性会影响逻辑屏属性，如：折叠手机折展时，逻辑屏会在手机的内屏和外屏之间切换，逻辑屏的宽高属性也会更新为对应屏的分辨率。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "逻辑屏",
      children: "逻辑屏"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "系统为每个应用程序呈现的一个连续的显示空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "逻辑屏有主屏、镜像屏、扩展屏、异源屏四种。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "主屏",
      children: "主屏"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "承载系统核心UI（任务栏）和默认交互焦点的逻辑屏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "镜像屏",
      children: "镜像屏"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "拷贝另一块逻辑屏上的内容来显示的逻辑屏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常用场景：有线投屏、无线投屏、录屏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "扩展屏",
      children: "扩展屏"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "作为主屏的延伸，增加屏幕的使用空间。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可以设置与主屏的相对位置，鼠标、窗口可以在主屏与扩展屏之间移动。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "异源屏",
      children: "异源屏"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "显示内容与主屏完全独立的逻辑屏。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "常用场景：使用虚拟屏创建异源屏来运行应用，应用为虚拟屏绑定XComponent组件作为内容输出目的地，从而显示异源屏上应用产生的内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "物理屏",
      children: "物理屏"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "物理屏是操作系统独立输出一个完整图像帧的显示单元，是图形系统进行画面合成和输出的基本目标对象。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "物理屏有独立的帧缓冲区，用于存储即将在该屏幕上显示的完整图像。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "物理屏可分为实体屏和虚拟屏两种。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "实体屏",
      children: "实体屏"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由物理硬件（液晶面板、OLED面板等）构成的物理屏，其图像输出与一个真实的、通过线缆连接的物理屏相关联。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "实体屏分为内置屏和外接屏。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "内置屏：与设备一体的实体屏。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "外接屏：通过线缆（HDMI、DP等）方式连接的物理屏。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "虚拟屏",
      children: "虚拟屏"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "由软件模拟的物理屏，没有对应的实体显示硬件，其生成的图像帧被输出到其他目的地，例如通过网络传输（远程桌面共享）或录制到视频文件（录屏软件）。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "作为物理屏的一种，虚拟屏也可以被逻辑屏关联，常用场景：关联镜像屏进行录屏或投屏、关联异源屏独立运行应用。"
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