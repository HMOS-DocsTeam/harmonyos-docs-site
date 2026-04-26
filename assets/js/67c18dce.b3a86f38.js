"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["231547"], {
495177(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cloud_foundation_kit_guide_cloudfoundation_function_service_cloudfoundation_debug_local_function_cloudfoundation_call_local_function_cloudfoundation_call_local_function_md_67c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-foundation-kit-guide-cloudfoundation-function-service-cloudfoundation-debug-local-function-cloudfoundation-call-local-function-cloudfoundation-call-local-function-md-67c.json
var site_docs_cloud_foundation_kit_guide_cloudfoundation_function_service_cloudfoundation_debug_local_function_cloudfoundation_call_local_function_cloudfoundation_call_local_function_md_67c_namespaceObject = JSON.parse('{"id":"cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-debug-local-function/cloudfoundation-call-local-function/cloudfoundation-call-local-function","title":"调用本地云函数","description":"约束与限制","source":"@site/docs/cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-debug-local-function/cloudfoundation-call-local-function/cloudfoundation-call-local-function.md","sourceDirName":"cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-debug-local-function/cloudfoundation-call-local-function","slug":"/cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-debug-local-function/cloudfoundation-call-local-function/","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-debug-local-function/cloudfoundation-call-local-function/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"调用本地云函数","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-call-local-function","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"启动本地云函数","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-debug-local-function/cloudfoundation-start-local-function/"},"next":{"title":"新增对象类型","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-database-service/cloudfoundation-database-add-object/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-debug-local-function/cloudfoundation-call-local-function/cloudfoundation-call-local-function.md


const frontMatter = {
	title: '调用本地云函数',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-call-local-function',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '调用本地云函数';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "设置“设备端口”到“主机端口”的映射",
  "id": "设置设备端口到主机端口的映射",
  "level": 2
}, {
  "value": "在应用中调用本地云函数",
  "id": "在应用中调用本地云函数",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "调用本地云函数",
        children: "调用本地云函数"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持Phone、Tablet、Wearable、TV设备。并且从6.1.0(23)版本开始，新增支持PC/2in1设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置设备端口到主机端口的映射",
      children: "设置“设备端口”到“主机端口”的映射"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["调用本地云函数之前，请按照以下示例设置“设备端口”到“主机端口”的映射。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/system-debug-optimize/debugging-commands/hdc#%E5%88%9B%E5%BB%BA%E5%8F%8D%E5%90%91%E7%AB%AF%E5%8F%A3%E8%BD%AC%E5%8F%91%E4%BB%BB%E5%8A%A1",
        children: "创建反向端口转发任务"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "hdc rport tcp:18090 tcp:18090\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中，设备端口和主机端口即为Function URI中的端口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在应用中调用本地云函数",
      children: "在应用中调用本地云函数"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从6.0.1(21)版本开始，新增支持调用本地云函数功能。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在项目中导入cloudFunction组件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { cloudFunction } from '@kit.CloudFoundationKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/cloud-foundation-api/cloudfoundation-arkts-api/cloudfoundation-cloudfunction/cloudfoundation-cloudfunction#call",
            children: "call()"
          }), "方法设置函数，在方法中传入函数名称和本地启动的云函数地址，返回调用结果。"]
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
            children: "function callFunctionLocal() {\n  cloudFunction.call({\n    name: 'my-cloud-function', // my-cloud-function需替换为实际的函数名\n    version: '$latest',   // 如果不传入版本号，默认为“$latest”。\n    timeout: 10 * 1000,   // 单位为毫秒，默认为70*1000毫秒。\n    data: {               // data为函数请求体\n      param1: 'val1',\n      param2: 'val2'\n    },\n    localUrl: 'http://localhost:18090' // 本地启动的云函数地址\n  }).then((value: cloudFunction.FunctionResult) => {\n    hilog.info(0x0000, 'testTag', `Succeeded in calling the function, result: ${JSON.stringify(value.result)}`);\n  }).catch((err: BusinessError) => {\n    hilog.error(0x0000, 'testTag', `Failed to call the function, code: ${err.code}, message: ${err.message}`);\n  })\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "或者，使用callback异步回调："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function callFunctionLocal() {\n  cloudFunction.call({\n    name: 'my-cloud-function', // my-cloud-function需替换为实际的函数名\n    version: '$latest',   // 如果不传入版本号，默认为“$latest”。\n    timeout: 10 * 1000,   // 单位为毫秒，默认为70*1000毫秒。\n    data: {               // data为函数请求体\n      param1: 'val1',\n      param2: 'val2'\n    },\n    localUrl: 'http://localhost:18090' // 本地启动的云函数地址\n  }, (err: BusinessError, value: cloudFunction.FunctionResult) => {\n    if (err) {\n      hilog.error(0x0000, 'testTag', `Failed to call the function, code: ${err.code}, message: ${err.message}`);\n      return;\n    }\n    hilog.info(0x0000, 'testTag', `Succeeded in calling the function, result: ${JSON.stringify(value.result)}`);\n  })\n}\n"
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