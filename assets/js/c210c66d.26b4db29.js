"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["140899"], {
311975(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_call_kit_guide_call_introduction_call_introduction_md_c21_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-call-kit-guide-call-introduction-call-introduction-md-c21.json
var site_docs_call_kit_guide_call_introduction_call_introduction_md_c21_namespaceObject = JSON.parse('{"id":"call-kit-guide/call-introduction/call-introduction","title":"Call Service Kit简介","description":"Call Service Kit（通话服务）是HarmonyOS为开发者提供的应用内通话管理服务。","source":"@site/docs/call-kit-guide/call-introduction/call-introduction.md","sourceDirName":"call-kit-guide/call-introduction","slug":"/call-kit-guide/call-introduction/","permalink":"/harmonyos-docs-site/call-kit-guide/call-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Call Service Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/call-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"通过聚合链接按指定方式跳转至应用","permalink":"/harmonyos-docs-site/app-linking-kit-guide/applinking-cross-platform/"},"next":{"title":"开发准备","permalink":"/harmonyos-docs-site/call-kit-guide/call-preparations/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/call-kit-guide/call-introduction/call-introduction.md


const frontMatter = {
	title: 'Call Service Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/call-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Call Service Kit简介';

const assets = {

};



const toc = [{
  "value": "场景分类",
  "id": "场景分类",
  "level": 2
}, {
  "value": "与相关Kit的关系",
  "id": "与相关kit的关系",
  "level": 2
}, {
  "value": "约束和限制",
  "id": "约束和限制",
  "level": 2
}, {
  "value": "设备限制",
  "id": "设备限制",
  "level": 3
}, {
  "value": "通话数量",
  "id": "通话数量",
  "level": 3
}, {
  "value": "支持的国家/地区",
  "id": "支持的国家地区",
  "level": 3
}, {
  "value": "相关Kit的约束和限制",
  "id": "相关kit的约束和限制",
  "level": 3
}, {
  "value": "模拟器支撑情况",
  "id": "模拟器支撑情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "call-service-kit简介",
        children: "Call Service Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Call Service Kit（通话服务）是HarmonyOS为开发者提供的应用内通话管理服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者通过集成Call Service Kit，可以实现便捷的来电一键接听、横幅通知、静音与取消静音等功能，提升用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景分类",
      children: "场景分类"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用内通话，主要分为来电场景、去电场景两类。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "来电场景"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用接收到来自网络的音/视频通话，称为来电场景。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在来电场景中，应用需要将来电信息上报给Call Service Kit，系统会为用户展示来电横幅通知。用户可以在横幅上执行接听或拒接来电、静音与解除静音、挂断通话等操作。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "此外，Call Service Kit还支持锁屏来电通知、多路来电通知等。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "去电场景"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用主动发起音/视频通话，称为去电场景。去电场景与来电场景大部分功能相似，但有以下几点区别："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "去电时，由于应用在前台，不需要展示横幅通知，只在屏幕左上角展示通话胶囊。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "去电不支持多路共存，即同一时间，只能有1路去电存在。"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "与相关kit的关系",
      children: "与相关Kit的关系"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用在后台时，如果有来电，需要", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-kit-introduction",
        children: "Push Kit（推送服务）"
      }), "先拉起应用主进程，应用才能给Call Service Kit上报来电。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "业务流程如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(325159)/* ["default"] */.A) + "",
        width: "1362",
        height: "806"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "设备限制",
      children: "设备限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本示例仅支持标准系统上运行，不支持模拟器。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "能力"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "支持设备"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "来电场景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet，Wearable。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "去电场景"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet，Wearable。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "企业联系人信息来去电页面显示"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1、Wearable。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通话数量",
      children: "通话数量"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一时间，最多支持3路应用内来电。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "同一时间，最多支持1路应用内去电。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家地区",
      children: "支持的国家/地区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Call Service Kit提供的能力当前只支持中国大陆。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "相关kit的约束和限制",
      children: "相关Kit的约束和限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["由于Call Service Kit依赖Push Kit，还需要参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/push-kit-guide/push-kit-introduction#%E7%BA%A6%E6%9D%9F%E5%92%8C%E9%99%90%E5%88%B6",
        children: "Push Kit的约束和限制"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支撑情况",
      children: "模拟器支撑情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本kit暂不支持模拟器"
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
325159(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799178-efb888447448738a63a002cbf0c39d17.jpg");

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