"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["483463"], {
126717(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cloud_foundation_kit_guide_cloudfoundation_function_service_cloudfoundation_develop_cloud_function_cloudfoundation_develop_function_cloudfoundation_develop_function_nodejs_cloudfoundation_develop_function_nodejs_md_623_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cloud-foundation-kit-guide-cloudfoundation-function-service-cloudfoundation-develop-cloud-function-cloudfoundation-develop-function-cloudfoundation-develop-function-nodejs-cloudfoundation-develop-function-nodejs-md-623.json
var site_docs_cloud_foundation_kit_guide_cloudfoundation_function_service_cloudfoundation_develop_cloud_function_cloudfoundation_develop_function_cloudfoundation_develop_function_nodejs_cloudfoundation_develop_function_nodejs_md_623_namespaceObject = JSON.parse('{"id":"cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-develop-cloud-function/cloudfoundation-develop-function/cloudfoundation-develop-function-nodejs/cloudfoundation-develop-function-nodejs","title":"Node.js","description":"约束与限制","source":"@site/docs/cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-develop-cloud-function/cloudfoundation-develop-function/cloudfoundation-develop-function-nodejs/cloudfoundation-develop-function-nodejs.md","sourceDirName":"cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-develop-cloud-function/cloudfoundation-develop-function/cloudfoundation-develop-function-nodejs","slug":"/cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-develop-cloud-function/cloudfoundation-develop-function/cloudfoundation-develop-function-nodejs/","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-develop-cloud-function/cloudfoundation-develop-function/cloudfoundation-develop-function-nodejs/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Node.js","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-develop-function-nodejs","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"开通预加载服务","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-preparations/cloudfoundation-enable-prefetch/"},"next":{"title":"创建函数","permalink":"/harmonyos-docs-site/cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-develop-cloud-function/cloudfoundation-create-and-config-function/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cloud-foundation-kit-guide/cloudfoundation-function-service/cloudfoundation-develop-cloud-function/cloudfoundation-develop-function/cloudfoundation-develop-function-nodejs/cloudfoundation-develop-function-nodejs.md


const frontMatter = {
	title: 'Node.js',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cloudfoundation-develop-function-nodejs',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Node.js';

const assets = {

};



const toc = [{
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "入口方法",
  "id": "入口方法",
  "level": 2
}, {
  "value": "日志记录",
  "id": "日志记录",
  "level": 2
}, {
  "value": "获取环境变量",
  "id": "获取环境变量",
  "level": 2
}, {
  "value": "异常处理",
  "id": "异常处理",
  "level": 2
}, {
  "value": "函数示例",
  "id": "函数示例",
  "level": 2
}, {
  "value": "准备函数部署包",
  "id": "准备函数部署包",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "nodejs",
        children: "Node.js"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "支持Phone、Tablet设备。并且从5.1.0(18)版本开始，新增支持Wearable设备；从5.1.1(19)版本开始，新增支持TV设备；从6.1.0(23)版本开始，新增支持PC/2in1设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "入口方法",
      children: "入口方法"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "入口方法定义如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "module.exports.myHandler = function(event, context, callback, logger)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "myHandler：入口方法名称。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["event：调用方传递的事件对象，JSON格式。具体内容请参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/AppGallery-connect-Guides/agc-cloudfunction-trigger-event-0000001620581529",
          children: "event对象"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "context：函数运行时上下文对象，封装了日志接口、回调接口、环境变量env对象等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "callback：事件处理结果。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "logger：记录日志。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "函数必须通过显式调用callback(object)将事件处理结果返回给AppGallery Connect（简称AGC），结果可以是任意对象，但必须与JSON.stringify兼容，AGC会将结果转换成JSON字符串后，返回给调用方。callback执行完成，函数即执行结束。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["完整的Node.js 20.x云函数示例代码请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "#%E5%87%BD%E6%95%B0%E7%A4%BA%E4%BE%8B",
        children: "函数示例"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "日志记录",
      children: "日志记录"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可在代码中使用logger接口记录日志，后端已通过global.logger全局定义，目前支持四种级别："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "logger.debug()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "logger.error()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "logger.warn()"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "logger.info()"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "获取环境变量",
      children: "获取环境变量"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可在代码中使用context.env.key访问环境变量，获取环境变量env1示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let env1 = context.env.env1;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "若环境变量未配置，则会返回环境变量为undefined。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(974419)/* ["default"] */.A) + "",
        width: "532",
        height: "27"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "异常处理",
      children: "异常处理"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可以在函数代码中捕获异常，封装成error对象返回给调用方。对于函数执行期间被平台捕获的异常，平台同样以error对象形式返回给调用方。error对象定义如下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "let error = {\n    code: xxxxxx,\n    message: \"xxxxxxxx\"\n};\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其中code为错误码，message为错误码的描述信息。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "try {\n    logger.info(JSON.stringify(event));\n    let result = { message: \"success\" };\n    callback(result);\n} catch (err) {\n    let error = {\n        code: 400,\n        message: err.message\n    };\n    callback(error);\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "函数示例",
      children: "函数示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例函数如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(458820)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "示例代码中入口方法myHandler()的返回值类型仅供参考，开发者可以根据实际需要定义。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/**\n * Describe the basic method of Cloud Functions\n */\n\nlet myHandler = function (event, context, callback, logger) {\n  // example of display environment variables\n  let env1 = context.env.env1;\n\n  // example of display logs\n  logger.info(\"Test info log\");\n  logger.warn(\"Test warn log\");\n  logger.debug(\"Test debug log\");\n  logger.error(\"Test error log\");\n\n  logger.info(\"--------Start-------\");\n  try {\n    let startTime = new Date().getTime();\n    let endTime = startTime;\n    let interval = 0;\n    startTime = process.uptime() * 1000;\n\n    // print input parameters and environment variables\n    logger.info(\"request: \" + JSON.stringify(event.request));\n    logger.info(\"env1: \" + env1);\n\n    endTime = process.uptime() * 1000;\n    interval = endTime - startTime;\n    logger.info(\"intervalTime: \" + interval);\n    logger.info(\"--------Finished-------\");\n\n    let res = new context.HTTPResponse(context.env, {\n      \"res-type\": \"context.env\",\n      \"faas-content-type\": \"json\"\n    }, \"application/json\", \"200\");\n    res.body = { \"intervalTime\": interval };\n    callback(res);\n  } catch (error) {\n    logger.error(\"--------Error-------\");\n    logger.error(\"error: \" + error);\n    callback(error);\n  }\n};\n\nmodule.exports.myHandler = myHandler;\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "准备函数部署包",
      children: "准备函数部署包"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "上传的Node.js函数部署包须使用如下结构，处理程序所在代码文件，例如示例中的handler.js，必须在zip包根目录下，依赖项放到node_modules目录下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "my-function.zip\n  |---- handler.js\n  |---- node_modules\n    |----async\n    |----async-listener\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "可通过npm工具的相关命令，安装与管理依赖。例如npm install xxx命令（执行路径无限制）可将依赖xxx自动安装到根目录的node_modules文件夹下。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(535429)/* ["default"] */.A) + "",
        width: "562",
        height: "136"
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
974419(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
535429(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438889-3e3b46691c0324613d1d21941188e77b.png");

},
458820(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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