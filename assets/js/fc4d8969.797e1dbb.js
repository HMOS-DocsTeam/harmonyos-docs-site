"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["21437"], {
487670(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_app_test_ide_app_analyzer_appendix_ide_app_analyzer_rules_ide_smooth_for_transition_0414_ide_smooth_for_transition_0414_md_fc4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-app-test-ide-app-analyzer-appendix-ide-app-analyzer-rules-ide-smooth-for-transition-0414-ide-smooth-for-transition-0414-md-fc4.json
var site_docs_ide_app_test_ide_app_analyzer_appendix_ide_app_analyzer_rules_ide_smooth_for_transition_0414_ide_smooth_for_transition_0414_md_fc4_namespaceObject = JSON.parse('{"id":"ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-smooth-for-transition-0414/ide-smooth-for-transition-0414","title":"转场操作流畅","description":"规则详情","source":"@site/docs/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-smooth-for-transition-0414/ide-smooth-for-transition-0414.md","sourceDirName":"ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-smooth-for-transition-0414","slug":"/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-smooth-for-transition-0414/","permalink":"/harmonyos-docs-site/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-smooth-for-transition-0414/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"转场操作流畅","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-smooth-for-transition-0414","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"滑动过程流畅","permalink":"/harmonyos-docs-site/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-smooth-for-swipe-0413/"},"next":{"title":"动态内存峰值占用","permalink":"/harmonyos-docs-site/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-peak-dynamic-memory-usage-0417/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-app-test/ide-app-analyzer-appendix/ide-app-analyzer-rules/ide-smooth-for-transition-0414/ide-smooth-for-transition-0414.md


const frontMatter = {
	title: '转场操作流畅',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-smooth-for-transition-0414',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '转场操作流畅';

const assets = {

};



const toc = [{
  "value": "规则详情",
  "id": "规则详情",
  "level": 2
}, {
  "value": "检测逻辑",
  "id": "检测逻辑",
  "level": 2
}, {
  "value": "计算逻辑",
  "id": "计算逻辑",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "转场操作流畅",
        children: "转场操作流畅"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "规则详情",
      children: "规则详情"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用的应用内转场过程卡顿率≤ 0ms/s；滑动过程卡顿率：动效时间内累计丢帧时间/动效时长。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "检测逻辑",
      children: "检测逻辑"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "开始时间：以ABILITY_OR_PAGE_SWITCH转场泳道为例，泳道的起点（如图标记1）。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "结束时间：以ABILITY_OR_PAGE_SWITCH转场泳道为例，泳道的终点（如图标记2）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "其他转场泳道标记如下："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "H:APP_TRANSITION_FROM_OTHER_APP"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "H:APP_TRANSITION_TO_OTHER_APP"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "H:APP_SWIPER_NO_ANIMATION_SWITCH"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "H:APP_TABS_NO_ANIMATION_SWITCH"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "H:APP_TABS_FLING"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(913294)/* ["default"] */.A) + "",
        width: "1470",
        height: "126"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "总时长(s)：【最后一个“H:Waiting for Present Fence xxxx” 时间（如图标记2）】 - 【第一个“H:Waiting for Present Fence xxxx” 时间（如图标记1）】。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(317991)/* ["default"] */.A) + "",
            width: "1499",
            height: "391"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "每帧时长(ms)：1000ms / 刷新率。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "刷新率：在泳道范围内查找关键词H:RSHardwareThread::CommitAndReleaseLayers rate，如下图："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(775281)/* ["default"] */.A) + "",
            width: "1413",
            height: "334"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "每帧渲染实际耗时(ms)：【下一个H:Waiting for Present Fence xxxx的起始时间】 - 【当前H:Waiting for Present Fence xxxx的起始时间】如下图 【标记2 - 标记1】。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(481198)/* ["default"] */.A) + "",
            width: "1446",
            height: "514"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "每帧丢帧时间(ms)：max（【每帧渲染实际耗时(ms)】- 【每帧时长(ms)】 * 1.5, 0）；即每帧耗时大于标准耗时1.5倍时则判定为丢帧。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "计算逻辑",
      children: "计算逻辑"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "卡顿率=所有【每帧丢帧时间(ms)】/ 总时长(s)，卡顿率小于等于0ms/s。"
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
481198(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832985-89d4f265dc42208734248092b17f937e.png");

},
913294(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832987-f4c254d1dfd32c69689147eb3a40f2f0.png");

},
317991(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832979-e23172e0aa336cc9e506267c4cd72ceb.png");

},
775281(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530753064-1731da38ebeac8cf8684b4654a9bf319.png");

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