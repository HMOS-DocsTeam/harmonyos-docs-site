"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["67524"], {
776031(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_system_network_remote_communication_kit_guide_remote_communication_introduction_remote_communication_introduction_md_0d3_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-system-network-remote-communication-kit-guide-remote-communication-introduction-remote-communication-introduction-md-0d3.json
var site_docs_system_network_remote_communication_kit_guide_remote_communication_introduction_remote_communication_introduction_md_0d3_namespaceObject = JSON.parse('{"id":"system-network/remote-communication-kit-guide/remote-communication-introduction/remote-communication-introduction","title":"Remote Communication Kit简介","description":"概述","source":"@site/docs/system-network/remote-communication-kit-guide/remote-communication-introduction/remote-communication-introduction.md","sourceDirName":"system-network/remote-communication-kit-guide/remote-communication-introduction","slug":"/system-network/remote-communication-kit-guide/remote-communication-introduction/","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Remote Communication Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-introduction","kit":"system/network","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"多网发起和释放(C/C++)","permalink":"/harmonyos-docs-site/system-network/network-boost-kit-guide/networkboost-netmultipathguide-c/networkboost-netmultipath-request-release-c/"},"next":{"title":"开发准备","permalink":"/harmonyos-docs-site/system-network/remote-communication-kit-guide/remote-communication-preparations/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/system-network/remote-communication-kit-guide/remote-communication-introduction/remote-communication-introduction.md


const frontMatter = {
	title: 'Remote Communication Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/remote-communication-introduction',
	kit: 'system/network',
	last_updated: '2026-04-22'
};
const contentTitle = 'Remote Communication Kit简介';

const assets = {

};



const toc = [{
  "value": "概述",
  "id": "概述",
  "level": 2
}, {
  "value": "基本概念",
  "id": "基本概念",
  "level": 2
}, {
  "value": "支持的HTTP网络请求场景",
  "id": "支持的http网络请求场景",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
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
    header: "header",
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
        id: "remote-communication-kit简介",
        children: "Remote Communication Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "概述",
      children: "概述"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Remote Communication Kit提供请求网络数据的功能，当前包含以下能力："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["HTTP请求能力。Remote Communication Kit构建了一种场景化HTTP通信能力。和Network Kit提供的标准HTTP能力不同的是，Remote Communication Kit构建了场景化API，强调易用性，详见", (0,jsx_runtime.jsx)(_components.a, {
          href: "#%E6%94%AF%E6%8C%81%E7%9A%84http%E7%BD%91%E7%BB%9C%E8%AF%B7%E6%B1%82%E5%9C%BA%E6%99%AF",
          children: "支持的HTTP网络请求场景"
        }), "。开发者可根据需要选择合适的Kit。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "URPC（Unified Remote Procedure Call）高性能rpc通信库。可实现远程函数调用能力，且具有抗弱网传输、多径传输（蜂窝网络和Wi-Fi）等特性。开发者可通过URPC完成简单方便的远程过程调用。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "基本概念",
      children: "基本概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP（Hypertext Transfer Protocol）是一种基于客户端-服务器模型的数据传输协议。客户端向服务器发出请求，服务器返回响应。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HTTP请求是客户端向服务器发送请求的过程，包括以下基本概念："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请求方法（Request Method）：客户端向服务器发送请求的方式，如GET、POST、PUT、DELETE、OPTIONS、HEAD、PATCH等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "URL（Uniform Resource Locator）：统一资源定位符，用于指定要访问的资源的地址。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请求头（Request Header）：包含一些附加的信息，如请求的来源、客户端的浏览器类型、语言、字符集等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "请求体（Request Body）：包含客户端向服务器发送的数据，如表单数据等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "HTTP版本（HTTP Version）：HTTP协议的版本号，如HTTP/1.1、HTTP/2等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "状态码（Status Code）：服务器响应请求后返回的状态码，如200表示请求成功、404表示请求的资源不存在等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "响应头（Response Header）：包含一些附加的信息，如服务器的类型、响应的日期、内容类型等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "响应体（Response Body）：包含服务器返回给客户端的数据，如HTML、JSON等格式的数据。"
      }), "\n"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "请求类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "GET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取资源，用于请求特定资源的表示形式。常用场景：获取网页、图片、视频等资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "POST"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "提交资源，用于提交实体，通常用于提交表单数据。常用场景：提交数据，如表单数据、上传文件等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OPTIONS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取资源支持的HTTP方法。常用场景：查询有关目标资源所支持的HTTP方法，如获取某个API支持的请求方式。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "HEAD"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取资源的元数据，与GET方法类似，但不返回资源的主体部分，只返回资源的元数据，如响应头。常用场景：获取资源的头部信息，如文件大小、修改时间等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PUT"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新资源，用于修改已经存在服务器上的资源，对指定URL路径上的资源进行完全替换。常用场景：更新资源，如更新文件、修改数据库记录等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "DELETE"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "删除资源，用于删除目标资源。常用场景：删除如用户、文章等资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "PATCH"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "更新资源的一部分，用于对资源进行局部修改。常用场景：更新服务器局部资源，如资源的某些属性和字段，而不需要替换整个资源。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "支持的http网络请求场景",
      children: "支持的HTTP网络请求场景"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "场景名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "场景描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "发送PATCH类型请求"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "以PATCH的方式请求。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "设置会话中URL的基地址"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "会话中URL的基地址将自动加在URL前面，除非URL是一个绝对URL。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "取消自动重定向"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于取消HTTP请求的自动重定向。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "拦截请求和响应"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在请求后或响应前进行拦截。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "取消请求"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "发送请求前取消、发送请求过程中取消、请求接收后取消。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "响应缓存"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可以使用缓存，并在请求时优先读取缓存。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缓存跟随当前进程生效，新缓存会替换旧缓存。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "设置响应数据的类型"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置数据以何种方式返回。可将响应的数据类型设置为string、object、ArrayBuffer等类型。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "响应体类型默认为ArrayBuffer，调用方可通过Response的toJSON或者toString方法得到object或者string类型的数据。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义证书校验"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义校验客户端和服务端证书的逻辑，用于判断是否可以连接。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "忽略SSL校验"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在建立SSL连接时不验证服务器端的SSL证书。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "自定义DNS解析"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义DNS服务器或配置静态DNS规则。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "捕获详细的跟踪信息"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "捕获HTTP请求中详细的跟踪信息。有助于调试、分析性能和深入了解通信过程中的数据流。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "获取HTTP请求的时间数据"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取HTTP请求各阶段相关的时间信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "-"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持Phone、2in1、Tablet、Wearable设备。并且从5.1.1(19)开始，新增支持TV设备；暂不支持Lite Wearable设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本Kit支持模拟器开发，但与真机存在部分能力差异，具体差异如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通用差异：请参见“", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification#section1227613205203",
          children: "模拟器与真机的差异"
        }), "”。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "模拟器不支持使用URPC。"
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