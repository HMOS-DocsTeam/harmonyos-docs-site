"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["42429"], {
201820(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_component_overview_web_component_overview_md_2bf_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-component-overview-web-component-overview-md-2bf.json
var site_docs_arkweb_web_component_overview_web_component_overview_md_2bf_namespaceObject = JSON.parse('{"id":"arkweb/web-component-overview/web-component-overview","title":"ArkWeb简介","description":"使用场景","source":"@site/docs/arkweb/web-component-overview/web-component-overview.md","sourceDirName":"arkweb/web-component-overview","slug":"/arkweb/web-component-overview/","permalink":"/harmonyos-docs-site/arkweb/web-component-overview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"ArkWeb简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-component-overview","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkUI术语","permalink":"/harmonyos-docs-site/arkui/arkui-glossary/"},"next":{"title":"ArkWeb进程","permalink":"/harmonyos-docs-site/arkweb/web_component_process/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-component-overview/web-component-overview.md


const frontMatter = {
	title: 'ArkWeb简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-component-overview',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkWeb简介';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "能力范围",
  "id": "能力范围",
  "level": 2
}, {
  "value": "需要权限",
  "id": "需要权限",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
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
    p: "p",
    pre: "pre",
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
        id: "arkweb简介",
        children: "ArkWeb简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkWeb（方舟Web）提供了Web组件，用于在应用中显示Web页面内容。常见使用场景包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用集成Web页面：应用可以在界面中使用Web组件，嵌入Web页面内容，以降低开发成本，提升开发、运维效率。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "浏览器网页浏览场景：浏览器类应用可以使用Web组件，打开三方Web网页，使用无痕浏览模式浏览Web页面，设置广告拦截等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "小程序：小程序类宿主应用可以使用Web组件，渲染小程序的页面，实现同层渲染，视频托管等小程序的功能。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "能力范围",
      children: "能力范围"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web组件为开发者提供了丰富的控制Web页面能力。包括："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Web页面加载：声明式加载Web页面和离屏加载Web页面等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "生命周期管理：组件生命周期状态变化，通知Web页面的加载状态变化等。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["常用属性与事件：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkweb/web-set-attributes-events/web-default-useragent",
          children: "User-Agent开发指导"
        }), "、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkweb/web-set-attributes-events/web-cookie-and-data-storage-mgmt",
          children: "管理Cookie及数据存储"
        }), "、字体与", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkweb/web-set-attributes-events/web-set-dark-mode",
          children: "Web深色模式适配"
        }), "、权限管理等。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "与应用界面交互：自定义文本选择菜单、上下文菜单、文件上传界面等与应用界面交互能力。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用通过JavaScriptProxy，与Web页面进行JavaScript交互。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "安全与隐私：无痕浏览模式、广告拦截、坚盾守护模式等。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["维测能力：", (0,jsx_runtime.jsx)(_components.a, {
          href: "/arkweb/web-debugging/web-debugging-with-devtools",
          children: "DevTools工具"
        }), "调试能力，使用crashpad收集Web组件崩溃信息、定位与解决Web白屏问题、使用Hypium实现ArkWeb自动化测试。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["其他高阶能力：与系统组件同层渲染、Web组件的网络托管、Web组件的媒体播放托管、Web组件输入框拉起自定义输入法、", (0,jsx_runtime.jsx)(_components.a, {
          href: "/system-security/passwordvault/arkweb-access-password-safe",
          children: "网页接入密码保险箱"
        }), "等。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "需要权限",
      children: "需要权限"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["使用Web组件访问在线Web网页时需添加网络权限：ohos.permission.INTERNET，具体申请方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions",
        children: "声明权限"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"requestPermissions\":[\n    {\n      \"name\" : \"ohos.permission.INTERNET\"\n    }\n  ]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可依据ArkWeb内核版本在相关网站查询W3C标准的支持情况。例如：<", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://developer.mozilla.org/en-US/&gt;"
          }), " 和 <", (0,jsx_runtime.jsx)(_components.code, {
            children: "https://webassembly.org/features/&gt;"
          }), " 。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "ArkWeb内核版本：ArkWeb基于谷歌Chromium内核开发，系统版本与Chromium版本的对应关系如表格所示。"
        }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
          children: [(0,jsx_runtime.jsx)(_components.thead, {
            children: (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.th, {
                children: "系统版本"
              }), (0,jsx_runtime.jsx)(_components.th, {
                children: "Chromium版本"
              })]
            })
          }), (0,jsx_runtime.jsxs)(_components.tbody, {
            children: [(0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "HarmonyOS 4.0及之前"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "M99"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "HarmonyOS 4.1-5.1"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "M114"
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "HarmonyOS 6.0"
              }), (0,jsx_runtime.jsxs)(_components.td, {
                children: ["M132（默认，推荐使用）  M114（可选，若应用需切换为此内核，请参考", (0,jsx_runtime.jsx)(_components.a, {
                  href: "https://gitcode.com/openharmony-tpc/chromium_src/blob/132_trunk/web/ReleaseNote/CompatibleWithLegacyWebEngine.md",
                  children: "M114内核在HarmonyOS6.0系统上的适配指导"
                }), "）"]
              })]
            }), (0,jsx_runtime.jsxs)(_components.tr, {
              children: [(0,jsx_runtime.jsx)(_components.td, {
                children: "HarmonyOS开发套件（基于API23）"
              }), (0,jsx_runtime.jsx)(_components.td, {
                children: "M132"
              })]
            })]
          })]
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