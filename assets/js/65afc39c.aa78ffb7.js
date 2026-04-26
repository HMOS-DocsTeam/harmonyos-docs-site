"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["289888"], {
520183(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_accessibility_kit_accessibility_approve_experience_improve_screen_reader_experience_scenario_dynamic_content_change_scenario_dynamic_content_change_md_65a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-accessibility-kit-accessibility-approve-experience-improve-screen-reader-experience-scenario-dynamic-content-change-scenario-dynamic-content-change-md-65a.json
var site_docs_accessibility_kit_accessibility_approve_experience_improve_screen_reader_experience_scenario_dynamic_content_change_scenario_dynamic_content_change_md_65a_namespaceObject = JSON.parse('{"id":"accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-dynamic-content-change/scenario-dynamic-content-change","title":"内容动态变化场景","description":"设计场景","source":"@site/docs/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-dynamic-content-change/scenario-dynamic-content-change.md","sourceDirName":"accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-dynamic-content-change","slug":"/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-dynamic-content-change/","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-dynamic-content-change/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"内容动态变化场景","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-dynamic-content-change","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"插画/视频/动画的播报场景","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-media-reading/"},"next":{"title":"控件状态变化场景","permalink":"/harmonyos-docs-site/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-component-status-change/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/accessibility-kit/accessibility-approve-experience/improve-screen-reader-experience/scenario-dynamic-content-change/scenario-dynamic-content-change.md


const frontMatter = {
	title: '内容动态变化场景',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/scenario-dynamic-content-change',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '内容动态变化场景';

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
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
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
        id: "内容动态变化场景",
        children: "内容动态变化场景"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设计场景",
      children: "设计场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "界面上重要内容在动态变化后，需要实时发送变化后的朗读内容。具体地，当界面上内容发生动态变化且其内容对用户具有必要的提示/告知/指导作用，则其发生变化后需对其变化内容进行播报，可调用无障碍提供的主动播报接口进行播报。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(362211)/* ["default"] */.A) + "",
        width: "359",
        height: "731"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "主动播报接口相关参数说明："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " EventInfo 说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "例"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "type"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "EventType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主动播报事件类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "announceForAccessibility"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "目标应用名"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当前应用包名"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "triggerAction"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "触发事件的Action"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "click或其他都不会有任何影响"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "textAnnouncedForAccessibility"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "主动播报的内容"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "test123 text"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发实例",
      children: "开发实例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import accessibility from '@ohos.accessibility';\n\n@Entry\n@Component\nexport struct Rule_2_1_7 {\n  title: string = 'Rule 2.1.7';\n  shortText: string = 'Button';\n  longText: string = 'sendAccessibilityEvent';\n  eventInfo: accessibility.EventInfo = ({\n    type: 'announceForAccessibility',\n    bundleName: 'com.example.pagesrouter',\n    triggerAction: 'common',\n    textAnnouncedForAccessibility: 'test123 text'\n  });\n\n  build() {\n    NavDestination() {\n      Column() {\n        Blank()\n        Button(this.shortText)\n          .accessibilityText(this.longText)\n          .align(Alignment.Center)\n          .fontSize(20)\n          .onClick(() => {\n            accessibility.sendAccessibilityEvent(this.eventInfo).then(() => {\n              console.info(`test123 Succeeded in send event, eventInfo is ${JSON.stringify(this.eventInfo)}`);\n            });\n          })\n        Blank()\n      }\n      .width('100%')\n      .height('100%')\n    }\n    .title(this.title)\n  }\n}\n"
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
362211(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583437563-07707b09915ac30e1843f5676a9aa97f.png");

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