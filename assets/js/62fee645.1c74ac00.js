"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["70353"], {
857863(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_reader_kit_guide_reader_interaction_reader_progress_reader_progress_md_62f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-reader-kit-guide-reader-interaction-reader-progress-reader-progress-md-62f.json
var site_docs_reader_kit_guide_reader_interaction_reader_progress_reader_progress_md_62f_namespaceObject = JSON.parse('{"id":"reader-kit-guide/reader-interaction/reader-progress/reader-progress","title":"阅读进度通知","description":"当页面展示时，会通过页面展示回调接口返回页面渲染信息。页面渲染信息提供用于阅读进度跳转的domPos及resourceIndex属性，开发者可将属性缓存到数据库当中，用于阅读进度的恢复。","source":"@site/docs/reader-kit-guide/reader-interaction/reader-progress/reader-progress.md","sourceDirName":"reader-kit-guide/reader-interaction/reader-progress","slug":"/reader-kit-guide/reader-interaction/reader-progress/","permalink":"/harmonyos-docs-site/reader-kit-guide/reader-interaction/reader-progress/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"阅读进度通知","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/reader-progress","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"手动触发翻页","permalink":"/harmonyos-docs-site/reader-kit-guide/reader-interaction/reader-flip-page/"},"next":{"title":"Scenario Fusion Kit简介","permalink":"/harmonyos-docs-site/scenario-fusion-guide/scenario-fusion-introduction/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/reader-kit-guide/reader-interaction/reader-progress/reader-progress.md


const frontMatter = {
	title: '阅读进度通知',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/reader-progress',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '阅读进度通知';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发准备",
  "id": "开发准备",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "阅读进度通知",
        children: "阅读进度通知"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当页面展示时，会通过页面展示回调接口返回页面渲染信息。页面渲染信息提供用于阅读进度跳转的domPos及resourceIndex属性，开发者可将属性缓存到数据库当中，用于阅读进度的恢复。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "阅读进度通知涉及2个接口，具体介绍如下表所示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/reader-api/reader-arkts/reader-read-core/reader-read-core#onpageshow",
              children: "on('pageShow')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册章节内容分页展示结果回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/reader-api/reader-arkts/reader-read-core/reader-read-core#offpageshow",
              children: "off('pageShow')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注销章节内容分页展示结果回调，可在页面销毁时调用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发准备",
      children: "开发准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在进行阅读进度通知监听之前，请先确保已经“", (0,jsx_runtime.jsx)(_components.a, {
        href: "/reader-kit-guide/reader-content/reader-read-page",
        children: "构建阅读器"
      }), "”。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过ReaderComponentController组件控制器监听页面展示回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当排版引擎渲染完页面后会回调on('pageShow')接口，将页面渲染信息进行返回。通过页面渲染信息的domPos及resourceIndex属性，可标识当前阅读进度。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["开发者可在on('pageShow')接口回调中将阅读进度实时保存到数据库当中，防止用户异常退出阅读器时的进度丢失。当用户下次继续阅读时，可将保存domPos及resourceIndex属性传入到", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/reader-api/reader-arkts/reader-read-core/reader-read-core#startplay",
            children: "startPlay"
          }), "接口中，用于阅读进度的恢复。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "aboutToAppear(): void {\n  this.setOnPageShowListener();\n}\n\nprivate async setOnPageShowListener(){\n  try {\n      this.readerComponentController.on('pageShow', (data: readerCore.PageDataInfo): void => {\n      // 开发者可在此保存内容分页排版数据，利用data.resourceIndex及data.startDomPos数据调用startPlay接口继续阅读\n      hilog.info(0x0000, 'testTag', 'pageshow: data is: ' + JSON.stringify(data));\n    });\n  } catch (err) {\n    hilog.error(0x0000, 'testTag', `failed to init, Code is ${err.code}, message is ${err.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "页面销毁时，需要调用注销页面展示接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "aboutToDisappear(): void {\n  this.readerComponentController.off('pageShow');\n}\n"
          })
        }), "\n"]
      }), "\n"]
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