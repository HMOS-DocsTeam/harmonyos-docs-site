"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["330689"], {
459090(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cloud_foundation_kit_guide_cloudfoundation_function_service_cloudfoundation_develop_cloud_function_cloudfoundation_call_function_cloudfoundation_call_function_md_9a9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-foundation-kit-guide-cloudfoundation-function-service-cloudfoundation-develop-cloud-function-cloudfoundation-call-function-cloudfoundation-call-function-md-9a9.json
var site_docs_cloud_foundation_kit_guide_cloudfoundation_function_service_cloudfoundation_develop_cloud_function_cloudfoundation_call_function_cloudfoundation_call_function_md_9a9_namespaceObject = JSON.parse('{"id":"cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-develop-cloud-function/cloudfoundation-call-function/cloudfoundation-call-function","title":"调用函数","description":"约束与限制","source":"@site/docs/cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-develop-cloud-function/cloudfoundation-call-function/cloudfoundation-call-function.md","sourceDirName":"cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-develop-cloud-function/cloudfoundation-call-function","slug":"/cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-develop-cloud-function/cloudfoundation-call-function/","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-develop-cloud-function/cloudfoundation-call-function/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"调用函数","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-call-function","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"测试函数","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-develop-cloud-function/cloudfoundation-test-function/"},"next":{"title":"启动本地云函数","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-debug-local-function/cloudfoundation-start-local-function/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-develop-cloud-function/cloudfoundation-call-function/cloudfoundation-call-function.md


const frontMatter = {
	title: '调用函数',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-call-function',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '调用函数';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "设置云函数配置项",
  "id": "设置云函数配置项",
  "level": 2
}, {
  "value": "查询函数名和版本",
  "id": "查询函数名和版本",
  "level": 2
}, {
  "value": "在应用中调用函数",
  "id": "在应用中调用函数",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "调用函数",
        children: "调用函数"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持Phone、Tablet设备。并且从5.1.0(18)版本开始，新增支持Wearable设备；从5.1.1(19)版本开始，新增支持TV设备；从6.1.0(23)版本开始，新增支持PC/2in1设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置云函数配置项",
      children: "设置云函数配置项"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在“entry/src/main/module.json5”文件中添加网络权限。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"requestPermissions\": [\n  {\n    \"name\": \"ohos.permission.INTERNET\"\n  }\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "查询函数名和版本",
      children: "查询函数名和版本"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在函数的触发器页面点击“HTTP触发器”，查看“触发URL”的后缀，获取触发器的标识，格式为“函数名-版本号”。如下图所示，“myhandlerxxxx-$latest”即为HTTP触发器标识，其中“myhandlerxxxx”为函数名，“$latest”为版本号。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(59037)/* ["default"] */.A) + "",
        width: "1090",
        height: "511"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在应用中调用函数",
      children: "在应用中调用函数"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在项目中导入cloudFunction组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cloudFunction } from '@kit.CloudFoundationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-cloudfunction/cloudfoundation-cloudfunction#call",
            children: "call()"
          }), "方法设置函数，在方法中传入函数名称，返回调用结果。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "（可选）通过设置timeout属性对云函数设置超时时长，单位为毫秒。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "（可选）通过设置version属性对云函数设置函数版本号，默认为最新版本'$latest'。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "（可选）如果函数有入参，可以将data参数转化为JSON对象或JSON字符串传入，如果没有参数则不传。"
          }), "\n"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "使用Promise异步回调："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { cloudFunction } from '@kit.CloudFoundationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction callFunction() {\n  cloudFunction.call({\n    name: 'functionName', // functionName需替换为实际的函数名\n    version: '$latest',   // 如果不传入版本号，默认为“$latest”。\n    timeout: 10 * 1000,   // 单位为毫秒，默认为70*1000毫秒。\n    data: {               // data为函数请求体\n      param1: 'val1',\n      param2: 'val2'\n    }\n  }).then((value: cloudFunction.FunctionResult) => {\n    hilog.info(0x0000, 'testTag', `Succeeded in calling the function, result: ${JSON.stringify(value.result)}`);\n  }).catch((err: BusinessError) => {\n    hilog.error(0x0000, 'testTag', `Failed to call the function, code: ${err.code}, message: ${err.message}`);\n  })\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "或者，使用callback异步回调："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { hilog } from '@kit.PerformanceAnalysisKit';\nimport { cloudFunction } from '@kit.CloudFoundationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\nfunction callFunction() {\n  cloudFunction.call({\n    name: 'functionName', // functionName需替换成实际的函数名\n    version: '$latest',  // 如果不传入版本号，默认为“$latest”。\n    timeout: 10 * 1000,  // 单位为毫秒，默认为70*1000毫秒。\n    data: {              // data为函数请求体\n      param1: 'val1',\n      param2: 'val2'\n    }\n  }, (err: BusinessError, value: cloudFunction.FunctionResult) => {\n    if (err) {\n      hilog.error(0x0000, 'testTag', `Failed to call the function, code: ${err.code}, message: ${err.message}`);\n      return;\n    }\n    hilog.info(0x0000, 'testTag', `Succeeded in calling the function, result: ${JSON.stringify(value.result)}`);\n  })\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果需要关注函数的返回值，可调用result属性获取。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let returnValue = value.result;\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["value为步骤2中调用call()方法返回的cloudFunction.FunctionResult对象，返回值为云函数body返回的值，以", (0,jsx_runtime.jsx)(_components.a, {
            href: "/cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-develop-cloud-function/cloudfoundation-test-function",
            children: "测试函数"
          }), "时返回的结果为例，value.result = {\"simple\":\"example\"}。"]
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
59037(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958860-5d3bcbe97b796957681f931d2af05b9b.png");

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