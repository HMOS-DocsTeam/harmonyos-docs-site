"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["107101"], {
890218(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_set_attributes_events_web_open_in_new_window_web_open_in_new_window_md_9c5_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-set-attributes-events-web-open-in-new-window-web-open-in-new-window-md-9c5.json
var site_docs_arkweb_web_set_attributes_events_web_open_in_new_window_web_open_in_new_window_md_9c5_namespaceObject = JSON.parse('{"id":"arkweb/web-set-attributes-events/web-open-in-new-window/web-open-in-new-window","title":"在新窗口中打开页面","description":"Web组件提供了在新窗口打开页面的能力，开发者可以通过multiWindowAccess()接口来设置是否允许网页在新窗口打开。当有新窗口打开时，应用侧会在onWindowNew()接口或onWindowNewExt()接口中收到Web组件新窗口事件。开发者需要在此接口事件中新建窗口来处理Web组件的窗口请求。","source":"@site/docs/arkweb/web-set-attributes-events/web-open-in-new-window/web-open-in-new-window.md","sourceDirName":"arkweb/web-set-attributes-events/web-open-in-new-window","slug":"/arkweb/web-set-attributes-events/web-open-in-new-window/","permalink":"/harmonyos-docs-site/arkweb/web-set-attributes-events/web-open-in-new-window/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"在新窗口中打开页面","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-open-in-new-window","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Web深色模式适配","permalink":"/harmonyos-docs-site/arkweb/web-set-attributes-events/web-set-dark-mode/"},"next":{"title":"管理位置权限","permalink":"/harmonyos-docs-site/arkweb/web-set-attributes-events/web-geolocation-permission/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-set-attributes-events/web-open-in-new-window/web-open-in-new-window.md


const frontMatter = {
	title: '在新窗口中打开页面',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-open-in-new-window',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '在新窗口中打开页面';

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
        id: "在新窗口中打开页面",
        children: "在新窗口中打开页面"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件提供了在新窗口打开页面的能力，开发者可以通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#multiwindowaccess9",
        children: "multiWindowAccess()"
      }), "接口来设置是否允许网页在新窗口打开。当有新窗口打开时，应用侧会在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onwindownew9",
        children: "onWindowNew()"
      }), "接口或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onwindownewext23",
        children: "onWindowNewExt()"
      }), "接口中收到Web组件新窗口事件。开发者需要在此接口事件中新建窗口来处理Web组件的窗口请求。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(456067)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onwindownewext23",
          children: "onWindowNewExt()"
        }), "接口为", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onwindownew9",
          children: "onWindowNew()"
        }), "接口的功能增强接口，OnWindowNewExtEvent比OnWindowNewEvent新增了", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-e/arkts-basic-components-web-e#navigationpolicy23",
          children: "NavigationPolicy"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#windowfeatures23",
          children: "WindowFeatures"
        }), "，用于通知应用新窗口的打开方式和位置大小信息。当在同一个Web组件上同时使用这两个接口时，只有", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onwindownewext23",
          children: "onWindowNewExt()"
        }), "接口会被触发。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-attributes/arkts-basic-components-web-attributes#allowwindowopenmethod10",
          children: "allowWindowOpenMethod()"
        }), "接口设置为true时，前端页面通过JavaScript函数调用的方式打开新窗口。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当在Web页面调用window.open(url, name)打开新窗口时，ArkWeb内核会根据name查找是否存在已绑定的Web组件。若存在，该Web组件将收到", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onactivatecontent20",
          children: "onActivateContent()"
        }), "接口通知，以便应用可将其展示至前台；若不存在，ArkWeb内核将通过onWindowNew()接口通知应用创建新窗口。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果在onWindowNew()接口通知中创建了新窗口，并将", (0,jsx_runtime.jsx)(_components.a, {
          href: "../reference/apis-arkweb/arkts-basic-components-web-ControllerHandler.md#setwebcontroller9",
          children: "ControllerHandler.setWebController()"
        }), "接口的参数设置为新Web组件的WebviewController，则ArkWeb内核会完成name与该新Web组件的绑定。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["如果在onWindowNew()接口通知中没有创建新窗口，需要将", (0,jsx_runtime.jsx)(_components.a, {
          href: "../reference/apis-arkweb/arkts-basic-components-web-ControllerHandler.md#setwebcontroller9",
          children: "ControllerHandler.setWebController()"
        }), "接口的参数设置为null。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在下面的本地示例中，当用户点击“新窗口中打开网页”按钮时，应用会在onWindowNew()接口收到Web组件的新窗口事件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(760927)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["网页要求用户创建新的窗口时触发回调", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-i/arkts-basic-components-web-i#onwindownewevent12",
          children: "OnWindowNewEvent()"
        }), "，该回调函数中isUserTrigger参数，true代表用户触发，false代表非用户触发。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用侧代码。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\nimport { webview } from '@kit.ArkWeb';\n\n// 在同一界面有两个Web组件。在WebComponent新开窗口时，会跳转到NewWebViewComp。\n@CustomDialog\nstruct NewWebViewComp {\n  controller?: CustomDialogController;\n  webviewController1: webview.WebviewController = new webview.WebviewController();\n\n  build() {\n    Column() {\n      Web({ src: '', controller: this.webviewController1 })\n        .javaScriptAccess(true)\n        .multiWindowAccess(false)\n        .onWindowExit(() => {\n          console.info('NewWebViewComp onWindowExit');\n          if (this.controller) {\n            this.controller.close();\n          }\n        })\n        .onActivateContent(() => {\n          // 该Web需要展示到前台，建议应用在这里进行tab或window切换的动作\n          console.info('NewWebViewComp onActivateContent')\n        })\n    }\n  }\n}\n\n@Entry\n@Component\nstruct WebComponent {\n  controller: webview.WebviewController = new webview.WebviewController();\n  dialogController: CustomDialogController | null = null;\n\n  build() {\n    Column() {\n      Web({ src: $rawfile('window.html'), controller: this.controller })\n        .javaScriptAccess(true)\n          // 需要使能multiWindowAccess\n        .multiWindowAccess(true)\n        .allowWindowOpenMethod(true)\n        .onWindowNew((event) => {\n          if (this.dialogController) {\n            this.dialogController.close()\n          }\n          let popController: webview.WebviewController = new webview.WebviewController();\n          this.dialogController = new CustomDialogController({\n            builder: NewWebViewComp({ webviewController1: popController }),\n            // isModal设置为false，防止新窗口被销毁而无法触发onActivateContent回调\n            isModal: false\n          })\n          this.dialogController.open();\n          // 将新窗口对应WebviewController返回给Web内核。\n          // 若不调用event.handler.setWebController接口，会造成render进程阻塞。\n          // 如果没有创建新窗口，调用event.handler.setWebController接口时设置成null，通知Web没有创建新窗口。\n          event.handler.setWebController(popController);\n        })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "window.html页面代码。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "<!DOCTYPE html>\n<html>\n<head>\n    <meta name=\"viewport\" content=\"width=device-width\"/>\n    <title>WindowEvent</title>\n</head>\n<body>\n<input type=\"button\" value=\"新窗口中打开网页\" onclick=\"OpenNewWindow()\">\n<script type=\"text/javascript\">\n    function OpenNewWindow()\n    {\n        var txt = '打开的窗口';\n        let openedWindow = window.open(\"about:blank\", \"\", \"location=no,status=no,scrollbars=no\");\n        openedWindow.document.write(\"<p>\" + \"<br><br>\" + txt + \"</p>\");\n        openedWindow.focus();\n    }\n</script>\n</body>\n</html>\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 新窗口中打开页面效果图"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(400642)/* ["default"] */.A) + "",
        width: "441",
        height: "243"
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
456067(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
400642(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478209-47c325de137e3a4a9b1cc2bed2f053fa.png");

},
760927(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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