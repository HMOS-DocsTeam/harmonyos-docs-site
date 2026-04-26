"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["339131"], {
246984(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cloud_foundation_kit_guide_cloudfoundation_prefetch_service_cloudfoundation_prefetch_cloud_interdev_cloudfoundation_prefetch_cloud_interdev_md_1eb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-foundation-kit-guide-cloudfoundation-prefetch-service-cloudfoundation-prefetch-cloud-interdev-cloudfoundation-prefetch-cloud-interdev-md-1eb.json
var site_docs_cloud_foundation_kit_guide_cloudfoundation_prefetch_service_cloudfoundation_prefetch_cloud_interdev_cloudfoundation_prefetch_cloud_interdev_md_1eb_namespaceObject = JSON.parse('{"id":"cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-cloud-interdev/cloudfoundation-prefetch-cloud-interdev","title":"开发预加载资源接口","description":"使用预加载服务之前，开发者需要完成云侧接口的开发，以提供预加载所需的资源数据。华为提供两种方式供开发者选择：云函数和开发者服务器，开发者可根据实际业务需要进行选择。","source":"@site/docs/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-cloud-interdev/cloudfoundation-prefetch-cloud-interdev.md","sourceDirName":"cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-cloud-interdev","slug":"/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-cloud-interdev/","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-cloud-interdev/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"开发预加载资源接口","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-prefetch-cloud-interdev","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"配置预加载","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-config/"},"next":{"title":"预加载工具类","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-call/cloudfoundation-prefetch-add-dependency-class/cloudfoundation-prefetch-tool-class/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cloud-foundation-kit-guide/cloudfoundation-prefetch-service/cloudfoundation-prefetch-cloud-interdev/cloudfoundation-prefetch-cloud-interdev.md


const frontMatter = {
	title: '开发预加载资源接口',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-prefetch-cloud-interdev',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '开发预加载资源接口';

const assets = {

};



const toc = [{
  "value": "云函数",
  "id": "云函数",
  "level": 2
}, {
  "value": "云函数接口规范",
  "id": "云函数接口规范",
  "level": 3
}, {
  "value": "示例",
  "id": "示例",
  "level": 3
}, {
  "value": "开发者服务器",
  "id": "开发者服务器",
  "level": 2
}, {
  "value": "开发者服务器接口规范",
  "id": "开发者服务器接口规范",
  "level": 3
}, {
  "value": "示例",
  "id": "示例-1",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "开发预加载资源接口",
        children: "开发预加载资源接口"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用预加载服务之前，开发者需要完成云侧接口的开发，以提供预加载所需的资源数据。华为提供两种方式供开发者选择：云函数和开发者服务器，开发者可根据实际业务需要进行选择。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "云函数",
      children: "云函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者需要先按照云函数接口规范开发函数，然后在AGC云端创建函数，并可测试函数运行是否正常。流程如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(567994)/* ["default"] */.A) + "",
        width: "800",
        height: "240"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-develop-cloud-function/cloudfoundation-develop-function/cloudfoundation-develop-function-nodejs",
          children: "开发函数"
        }), "：按照云函数接口规范开发函数。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-develop-cloud-function/cloudfoundation-create-and-config-function",
          children: "创建函数"
        }), "：函数业务代码开发完成后，即可在AGC云端创建函数。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-develop-cloud-function/cloudfoundation-test-function",
          children: "测试函数"
        }), "：对函数进行测试，以确保函数代码运行正常。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "云函数接口规范",
      children: "云函数接口规范"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "预加载类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "返回值"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "安装预加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取预加载数据接口"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["event.body.appId：应用ID，获取方法请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569",
              children: "查看应用信息"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义JSON字符串"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "周期性预加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取预加载数据接口"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- event.body.appId：应用ID，获取方法请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569",
              children: "查看应用信息"
            }), "。  - event.body.token：可选，注册周期性预加载任务时开发者自行传入的用户级认证信息，长度不超过2048个字符。  - event.body.params：可选，注册周期性预加载任务时开发者自行传入的自定义参数，长度不超过1024个字符。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义JSON字符串"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "跳链安装预加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取预加载数据接口"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- event.body.appId：应用ID，获取方法请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569",
              children: "查看应用信息"
            }), "。  - event.body.link：可选，跳链安装预加载延迟链接。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义JSON字符串"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-project/ide-module-management/agc-harmonyos-clouddevguide/agc-harmonyos-clouddev-devprocess/agc-harmonyos-clouddev-develop/agc-harmonyos-clouddev-cloudfunctions/agc-harmonyos-clouddev-funccoding",
        children: "端云一体化工程"
      }), "预加载云函数示例如下。其中，axios依赖库为网络请求库，需要在“cloudfunctions/云函数名称/package.json”的“dependencies”中添加axios的1.7.7或以上版本依赖。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "安装预加载"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import axios from 'axios';\n\nlet myHandler = async function (event, context, callback, logger) {\n  logger.info(\"event:\" + JSON.stringify(event));\n  let env1 = context.env.env1; // 环境变量\n  logger.info(\"env1: \" + env1)\n  try {\n    let body = event.body ? JSON.parse(event.body) : event;\n    let appId = body.appId;\n\n    logger.info(\"appId: \" + appId);\n\n    // http请求示例，请按照实际业务修改\n    let url = 'https://example.com/prefetchApi';  // 页面资源数据的请求url\n    let headers = { 'k1': 'v1' };  // 请求header\n    let res;  // 返回数据\n    await axios.post(url, {}, { headers })  // http post请求\n      .then(response => {\n        res = response.data;\n      })\n    logger.info(\"--------Finished-------\");\n    callback(res);\n  } catch (error) {\n    logger.error(\"--------Error-------\");\n    logger.error(\"error: \" + error);\n    callback(error);\n  }\n};\n\nexport { myHandler };\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "周期性预加载"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import axios from 'axios';\n\nlet myHandler = async function (event, context, callback, logger) {\n  logger.info(\"event:\" + JSON.stringify(event));\n  let env1 = context.env.env1; // 环境变量\n  logger.info(\"env1: \" + env1)\n  try {\n    let body = event.body ? JSON.parse(event.body) : event;\n    let appId = body.appId;\n    let token = body.token;\n    let paramsStr = body.params; // 如果需要解析json结构paramsStr中的参数，需要使用 let params = JSON.parse(paramsStr);\n\n    logger.info(\"appId: \" + appId + \",token:\" + token + \",params:\" + paramsStr);\n\n    // http请求示例，请按照实际业务修改\n    let url = 'https://example.com/prefetchApi'; // 页面资源数据的请求url\n    let headers = { 'k1': 'v1' }; // 请求header\n    let res; // 返回数据\n    await axios.post(url, {}, { headers }) // http post请求\n      .then(response => {\n        res = response.data;\n      })\n    logger.info(\"--------Finished-------\");\n    callback(res);\n  } catch (error) {\n    logger.error(\"--------Error-------\");\n    logger.error(\"error: \" + error);\n    callback(error);\n  }\n};\n\nexport { myHandler };\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "跳链安装预加载"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import axios from 'axios';\n\nlet myHandler = async function (event, context, callback, logger) {\n  logger.info(\"event:\" + JSON.stringify(event));\n  let env1 = context.env.env1; // 环境变量\n  logger.info(\"env1: \" + env1)\n  try {\n    let body = event.body ? JSON.parse(event.body) : event;\n    let appId = body.appId;\n    let link = body.link; // 跳链安装预加载link信息\n\n    logger.info(\"appId: \" + appId + \",link:\" + link);\n\n    // http请求示例，请按照实际业务修改\n    let url = 'https://example.com/prefetchApi'; // 页面资源数据的请求url\n    let headers = { 'k1': 'v1' }; // 请求header\n    let res; // 返回数据\n    await axios.post(url, {}, { headers }) // http post请求\n      .then(response => {\n        res = response.data;\n      })\n    logger.info(\"--------Finished-------\");\n    callback(res);\n  } catch (error) {\n    logger.error(\"--------Error-------\");\n    logger.error(\"error: \" + error);\n    callback(error);\n  }\n};\n\nexport { myHandler };\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发者服务器",
      children: "开发者服务器"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "申请开通开发者服务器权限之后，开发者使用自己的服务器自行开发和实现预加载资源接口，接口需遵循开发者服务器接口规范。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "开发者服务器接口规范",
      children: "开发者服务器接口规范"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "预加载类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "API/PATH名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "参数"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "请求方式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "返回值"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "安装预加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取预加载数据接口"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["appId：应用ID，获取方法请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569",
              children: "查看应用信息"
            }), "。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义JSON字符串"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "周期性预加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取预加载数据接口"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- appId：应用ID，获取方法请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569",
              children: "查看应用信息"
            }), "。  - token：可选，注册周期性预加载任务时开发者自行传入的用户级认证信息，长度不超过2048个字符。  - params：可选，注册周期性预加载任务时开发者自行传入的自定义参数，长度不超过1024个字符。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义JSON字符串"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "跳链安装预加载"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取预加载数据接口"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["- appId：应用ID，获取方法请参见", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-view-app-info-0000002282674569",
              children: "查看应用信息"
            }), "。  - link：可选，跳链安装预加载延迟链接。"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "GET"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义JSON字符串"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例-1",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义名称为prefetchData的接口，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "https://www.example.com/prefetchData?appId=1234&token=xxxx&params=yyyy\n"
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
567994(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438917-f811989c5397586c3ea5cfce178f200e.png");

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