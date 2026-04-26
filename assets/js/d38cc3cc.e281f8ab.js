"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["34036"], {
374189(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_app_linking_kit_guide_applinking_introduction_applinking_introduction_md_d38_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-app-linking-kit-guide-applinking-introduction-applinking-introduction-md-d38.json
var site_docs_app_linking_kit_guide_applinking_introduction_applinking_introduction_md_d38_namespaceObject = JSON.parse('{"id":"app-linking-kit-guide/applinking-introduction/applinking-introduction","title":"App Linking Kit简介","description":"App Linking Kit（应用链接服务）提供了一系列增强的链接特性。","source":"@site/docs/app-linking-kit-guide/applinking-introduction/applinking-introduction.md","sourceDirName":"app-linking-kit-guide/applinking-introduction","slug":"/app-linking-kit-guide/applinking-introduction/","permalink":"/harmonyos-docs-site/app-linking-kit-guide/applinking-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"App Linking Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/applinking-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"场景值","permalink":"/harmonyos-docs-site/store-kit-guide/store-attribution-appendix/appgallery-scene-list/"},"next":{"title":"基本准备工作","permalink":"/harmonyos-docs-site/app-linking-kit-guide/applinking-preparations/applinking-basic-preparation/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/app-linking-kit-guide/applinking-introduction/applinking-introduction.md


const frontMatter = {
	title: 'App Linking Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/applinking-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'App Linking Kit简介';

const assets = {

};



const toc = [{
  "value": "适用场景",
  "id": "适用场景",
  "level": 2
}, {
  "value": "典型案例",
  "id": "典型案例",
  "level": 2
}, {
  "value": "碰一碰视频分享",
  "id": "碰一碰视频分享",
  "level": 3
}, {
  "value": "游戏碰一碰快速组队",
  "id": "游戏碰一碰快速组队",
  "level": 3
}, {
  "value": "通过扫码使服务快速触达用户",
  "id": "通过扫码使服务快速触达用户",
  "level": 3
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "支持的设备",
  "id": "支持的设备",
  "level": 3
}, {
  "value": "支持的国家/地区",
  "id": "支持的国家地区",
  "level": 3
}, {
  "value": "支持的签名方式",
  "id": "支持的签名方式",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
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
        id: "app-linking-kit简介",
        children: "App Linking Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "App Linking Kit（应用链接服务）提供了一系列增强的链接特性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["App Linking Kit支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "/app-linking-kit-guide/app-linking-startupapp",
            children: "通过App Linking应用链接拉起指定应用"
          }), "，实现应用间跳转。当应用已安装时，优先通过应用展示内容；若应用未安装，则通过系统浏览器展示网页版内容。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在此基础之上，还可以实现直达应用市场能力、延迟链接能力这类有竞争力的特性，大大增强了App Linking的能力，使得链接跳转体验更佳，链接转化率更高。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/app-linking-kit-guide/applinking-direct-to-ag",
              children: "通过直达应用市场能力跳转至应用市场下载详情页"
            }), "：当应用未安装时，App Linking的默认行为是通过系统浏览器打开链接对应的网页。通过App Linking Kit的直达应用市场能力，可以实现在应用未安装时直接跳转应用市场，省去了中转的步骤，使跳转体验更流畅。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/app-linking-kit-guide/applinking-deferredlink",
              children: "通过延迟链接跳转至应用详情页"
            }), "：当用户点击应用推广链接时，若应用未安装，系统会将用户的点击信息自动缓存十分钟。当用户随后安装并启动应用时，仍可获取之前的点击参数，避免转化率损失，提升体验。"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["App Linking Kit支持", (0,jsx_runtime.jsx)(_components.a, {
            href: "/app-linking-kit-guide/applinking-cross-platform",
            children: "通过聚合链接按指定方式跳转至应用"
          }), "。当用户在HarmonyOS系统中点击聚合链接时，默认通过系统浏览器打开深度链接地址。通过聚合链接能力，可以引导用户跳转到HarmonyOS平台预览页、应用市场详情页、自定义网址、深度链接地址等页面。"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "适用场景",
      children: "适用场景"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["适用于应用的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/scan-kit-guide/scan-directservice",
          children: "扫码直达"
        }), "、社交分享、沉默唤醒、广告引流等场景。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "适用于对安全性要求较高的场景，避免出现被其它应用仿冒的问题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "适用于对体验要求较高的应用，不管目标应用是否安装，用户点击该链接都可以正常访问。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "典型案例",
      children: "典型案例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "碰一碰视频分享",
      children: "碰一碰视频分享"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["随着全场景智慧生活的不断演进，跨设备内容分享已成为用户的核心需求之一。传统分享方式普遍存在操作繁琐（需手动选择设备或应用）、依赖特定网络环境、传输效率低等问题，影响了用户体验。HarmonyOS提供的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/share-kit-guide/share-introduction",
        children: "Share Kit（分享服务）"
      }), "结合App Linking Kit技术，能够实现内容的快速跨设备分享，直达目标应用，无需依赖第三方应用中转，提供高效、便捷、无缝的分享体验。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(947129)/* ["default"] */.A) + "",
        width: "667",
        height: "271"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "游戏碰一碰快速组队",
      children: "游戏碰一碰快速组队"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在《多乐中国象棋》这款组队竞技类游戏中，玩家只需轻轻碰触两台设备，即可实现秒速组队，省去了传统邀请流程中的繁琐操作，一步直达指定页面。与传统的通信软件邀请流程相比，操作步骤大幅减少。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(177831)/* ["default"] */.A) + "",
        width: "667",
        height: "369"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "通过扫码使服务快速触达用户",
      children: "通过扫码使服务快速触达用户"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "美团App结合App Linking技术，实现用户无需打开App，通过系统扫码即可直接解锁共享单车。在负一屏、控制中心、系统相机中均可解锁，相比打开App扫码，操作入口增加了3倍，一步扫码直达，操作效率提升了30%以上。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(926312)/* ["default"] */.A) + "",
        width: "267",
        height: "552"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "应用链接"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1、TV"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "直达应用市场"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "延迟链接"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "聚合链接"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Phone、Tablet、PC/2in1"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家地区",
      children: "支持的国家/地区"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅支持在中国境内（香港特别行政区、澳门特别行政区、中国台湾除外）提供服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的签名方式",
      children: "支持的签名方式"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当前仅支持", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-signing#section297715173233",
        children: "手动签名"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit暂不支持模拟器。"
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
947129(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958798-3d7d3f7092a4ca14ab004d8d2bdc8855.gif");

},
926312(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799150-c37604aa76025bc7cb4b44a117b8df3b.gif");

},
177831(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478799-cb1f26320b307c329d1f6034056f5c3d.gif");

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