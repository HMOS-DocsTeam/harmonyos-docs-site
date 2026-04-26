"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["67969"], {
456862(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_component_process_web_component_process_md_d4d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-component-process-web-component-process-md-d4d.json
var site_docs_arkweb_web_component_process_web_component_process_md_d4d_namespaceObject = JSON.parse('{"id":"arkweb/web_component_process/web_component_process","title":"ArkWeb进程","description":"ArkWeb是多进程模型，分为应用进程、Web渲染进程、Web GPU进程、Web孵化进程和Foundation进程。","source":"@site/docs/arkweb/web_component_process/web_component_process.md","sourceDirName":"arkweb/web_component_process","slug":"/arkweb/web_component_process/","permalink":"/harmonyos-docs-site/arkweb/web_component_process/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"ArkWeb进程","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web_component_process","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"ArkWeb简介","permalink":"/harmonyos-docs-site/arkweb/web-component-overview/"},"next":{"title":"Web组件的生命周期","permalink":"/harmonyos-docs-site/arkweb/web-event-sequence/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web_component_process/web_component_process.md


const frontMatter = {
	title: 'ArkWeb进程',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web_component_process',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'ArkWeb进程';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "arkweb进程",
        children: "ArkWeb进程"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkWeb是多进程模型，分为应用进程、Web渲染进程、Web GPU进程、Web孵化进程和Foundation进程。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(373565)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Web内核对内存大小的申请无限制约束。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " ArkWeb进程模型图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(764878)/* ["default"] */.A) + "",
        width: "1064",
        height: "828"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用进程中Web相关线程（应用唯一）"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "应用进程为主进程。包含网络线程、Video线程、Audio线程和IO线程等。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "负责Web组件的对外接口与回调处理，网络请求、媒体服务等需要与其他系统服务交互的功能。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Foundation进程（系统唯一）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "负责接收应用进程进行孵化进程的请求，管理应用进程和Web渲染进程的绑定关系。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Web孵化进程（系统唯一）"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "负责接收Foundation进程的请求，执行孵化Web渲染进程与Web GPU进程。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "执行孵化后处理安全沙箱降权、预加载动态链接库，以提升性能。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Web渲染进程（应用可指定多Web实例间共享或独立进程）"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "负责运行Web渲染进程引擎（HTML解析、排版、绘制、渲染）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "负责运行ArkWeb执行引擎（JavaScript、Web Assembly）。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "提供接口供应用选择多Web实例间是否共享渲染进程，满足不同场景对安全性、稳定性、内存占用的诉求。"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "默认策略：移动设备上共享渲染进程以节省内存，2in1设备上独立渲染进程提升安全与稳定性。"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Web GPU进程（应用唯一）"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "负责光栅化、合成送显等与GPU、RenderService交互功能。提升应用进程稳定性、安全性。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#setrenderprocessmode12",
            children: "setRenderProcessMode"
          }), "设置渲染子进程的模式，从而控制渲染过程的单进程或多进程状态。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["移动设备默认为单进程渲染，而2in1设备则默认采用多进程渲染。通过调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#getrenderprocessmode12",
            children: "getRenderProcessMode"
          }), "可查询当前的渲染子进程模式，其中枚举值0表示单进程模式，枚举值1对应多进程模式。若setRenderProcessMode接口传入的值不在", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-e/arkts-apis-webview-e#renderprocessmode12",
            children: "RenderProcessMode"
          }), "枚举值范围内，系统将自动采用多进程渲染模式作为默认设置。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('getRenderProcessMode')\n        .onClick(() => {\n          let mode = webview.WebviewController.getRenderProcessMode();\n          console.info('getRenderProcessMode: ' + mode);\n        })\n      Button('setRenderProcessMode')\n        .onClick(() => {\n          try {\n            webview.WebviewController.setRenderProcessMode(webview.RenderProcessMode.MULTIPLE);\n          } catch (error) {\n            console.error(`ErrorCode: ${(error as BusinessError).code},  Message: ${(error as     BusinessError).message}`);\n          }\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-arkts/js-apis-webview/arkts-apis-webview-webviewcontroller/arkts-apis-webview-webviewcontroller#terminaterenderprocess12",
            children: "terminateRenderProcess"
          }), "来主动关闭渲染进程。若渲染进程尚未启动或已销毁，此操作将不会产生任何影响。此外，销毁渲染进程将同时影响所有与之关联的其他实例。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Button('terminateRenderProcess')\n        .onClick(() => {\n          let result = this.controller.terminateRenderProcess();\n          console.info('terminateRenderProcess result: ' + result);\n        })\n      Web({ src: 'www.example.com', controller: this.controller })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onrenderexited9",
            children: "onRenderExited"
          }), "来监听渲染进程的退出事件，从而获知退出的具体原因（如内存OOM、crash或正常退出等）。由于多个Web组件可能共用同一个渲染进程，因此，每当渲染进程退出时，每个受此影响的Web组件均会触发相应的回调。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'chrome://crash/', controller: this.controller })\n        .onRenderExited((event) => {\n          if (event) {\n            console.info('reason:' + event.renderExitReason);\n          }\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["可通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onrenderprocessnotresponding12",
            children: "onRenderProcessNotResponding"
          }), "、", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onrenderprocessresponding12",
            children: "onRenderProcessResponding"
          }), "来监听渲染进程的无响应状态。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当Web组件无法处理输入事件，或未能在预期时间内导航至新URL时，系统会判定网页进程为无响应状态，并触发onRenderProcessNotResponding回调。在网页进程持续无响应期间，该回调可能反复触发，直至进程恢复至正常运行状态，此时将触发onRenderProcessResponding回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onRenderProcessNotResponding((data) => {\n          console.info('onRenderProcessNotResponding: [jsStack]= ' + data.jsStack +\n            ', [process]=' + data.pid + ', [reason]=' + data.reason);\n        })\n    }\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller })\n        .onRenderProcessResponding(() => {\n          console.info('onRenderProcessResponding again');\n        })\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web/arkts-basic-components-web",
            children: "Web组件"
          }), "创建参数涵盖了多进程模型的运用。其中，sharedRenderProcessToken标识了当前Web组件所指定的共享渲染进程的token。在多渲染进程模式下，拥有相同token的Web组件将优先尝试重用与该token绑定的渲染进程。token与渲染进程的绑定关系，在渲染进程的初始化阶段形成。一旦渲染进程不再关联任何Web组件，它与token的绑定关系将被解除。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { webview } from '@kit.ArkWeb';\n\n@Entry\n@Component\nstruct WebComponent {\n  controller1: webview.WebviewController = new webview.WebviewController();\n  controller2: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: 'www.example.com', controller: this.controller1, sharedRenderProcessToken: '111' })\n      Web({ src: 'www.w3.org', controller: this.controller2, sharedRenderProcessToken: '111' })\n    }\n  }\n}\n"
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
764878(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958206-eb5f5272c5015c9002dbb1bda747283c.png");

},
373565(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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