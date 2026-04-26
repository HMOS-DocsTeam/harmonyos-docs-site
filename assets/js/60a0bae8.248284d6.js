"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["147407"], {
128729(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkweb_web_debugging_web_crashpad_web_crashpad_md_60a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkweb-web-debugging-web-crashpad-web-crashpad-md-60a.json
var site_docs_arkweb_web_debugging_web_crashpad_web_crashpad_md_60a_namespaceObject = JSON.parse('{"id":"arkweb/web-debugging/web-crashpad/web-crashpad","title":"使用Crashpad收集Web组件崩溃信息","description":"Web组件支持使用Crashpad记录进程崩溃信息。Crashpad是Chromium内核提供的进程崩溃信息处理工具，在应用使用Web组件导致的进程（Web渲染进程）崩溃出现后，Crashpad会在应用主进程沙箱目录写入dmp文件。该文件为二进制格式，后缀为dmp，其记录了进程崩溃的原因、线程信息、寄存器信息等，应用可以使用该文件分析Web组件相关进程崩溃问题。Web组件分别从API version 9和API version 12开始支持接口onRenderExited和onRenderProcessNotResponding，开发者可以分别通过Web接口onRenderExited和onRenderProcessNotResponding来检测渲染进程退出和渲染进程不响应，也可以在这些接口中增加应用处理的逻辑。","source":"@site/docs/arkweb/web-debugging/web-crashpad/web-crashpad.md","sourceDirName":"arkweb/web-debugging/web-crashpad","slug":"/arkweb/web-debugging/web-crashpad/","permalink":"/harmonyos-docs-site/arkweb/web-debugging/web-crashpad/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"使用Crashpad收集Web组件崩溃信息","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-crashpad","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"使用DevTools工具调试前端页面","permalink":"/harmonyos-docs-site/arkweb/web-debugging/web-debugging-with-devtools/"},"next":{"title":"定位与解决Web白屏问题","permalink":"/harmonyos-docs-site/arkweb/web-debugging/web-white-screen/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkweb/web-debugging/web-crashpad/web-crashpad.md


const frontMatter = {
	title: '使用Crashpad收集Web组件崩溃信息',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/web-crashpad',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '使用Crashpad收集Web组件崩溃信息';

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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "使用crashpad收集web组件崩溃信息",
        children: "使用Crashpad收集Web组件崩溃信息"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Web组件支持使用Crashpad记录进程崩溃信息。Crashpad是Chromium内核提供的进程崩溃信息处理工具，在应用使用Web组件导致的进程（Web渲染进程）崩溃出现后，Crashpad会在应用主进程沙箱目录写入dmp文件。该文件为二进制格式，后缀为dmp，其记录了进程崩溃的原因、线程信息、寄存器信息等，应用可以使用该文件分析Web组件相关进程崩溃问题。Web组件分别从API version 9和API version 12开始支持接口onRenderExited和onRenderProcessNotResponding，开发者可以分别通过Web接口", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onrenderexited9",
        children: "onRenderExited"
      }), "和", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkweb-api/arkweb-comp/ts-basic-components-web/arkts-basic-components-web-events/arkts-basic-components-web-events#onrenderprocessnotresponding12",
        children: "onRenderProcessNotResponding"
      }), "来检测渲染进程退出和渲染进程不响应，也可以在这些接口中增加应用处理的逻辑。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用步骤如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在应用使用Web组件导致的进程崩溃出现后，Crashpad收到信号，对应Hilog日志（节选部分）如下"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "pid-30069             I     [crashpad_ohos.cc:254] crashpad SandboxedHandler::HandleCrash, received signo = 6\npid-30069             I     [crashpad_ohos.cc:182] crashpad SandboxedHandler::HandleCrashNonFatal, connect to handler successfully, need to request dump\n...\narkweb_cr..._handler  I     [crash_report_database.cc:91] crash dmp path : /data/storage/el2/log/crashpad/new/xxx.dmp\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这时Crashpad开始请求dump，成功之后，会在应用主进程沙箱目录下产生对应的dmp文件，对应的沙箱路径如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/data/storage/el2/log/crashpad\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/best-practices/bpta-file-native-side",
          children: "Native访问应用沙箱"
        }), "实现访问应用沙箱dmp文件；也可将存放dmp文件的沙箱路径的文件复制到可以查看的路径。示例如下"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { fileIo as fs } from '@kit.CoreFileKit'\nimport { BusinessError } from '@kit.BasicServicesKit'\nimport { webview } from '@kit.ArkWeb'\n\n@Entry\n@Component\nstruct Index {\n  controller: webview.WebviewController = new webview.WebviewController();\n  uiContext: UIContext = this.getUIContext();\n  build() {\n    RelativeContainer() {\n      Web({src:'chrome://memory-exhaust/', controller:this.controller})\n      Button('file')\n        .onClick(() => {\n          let pathDir = this.uiContext.getHostContext()?.filesDir;\n          console.info(\"pathdir=\" + pathDir);\n          fs.copyDir(\"/data/storage/el2/log/crashpad/pending/\", pathDir, 0)\n            .then(()=>{\n              console.info(\"copy files success\");\n            })\n            .catch((err: BusinessError)=>{\n              console.error(\"copy failed with error message: \" + err.message + \", error code: \" + err.code);\n            })\n        })\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上示例将所有的dmp文件都复制到可查看的沙箱路径中，也可以搜索Hilog日志“.dmp”得到dmp文件名，这样就可以将某个dmp文件复制到另一个沙箱路径下了，具体的路径为"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/data/app/el2/100/base/com.example.myapplication/haps/entry/files/\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "这个路径可以利用DevEco Studio查看。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(318965)/* ["default"] */.A) + "",
        width: "399",
        height: "426"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取dmp文件后进行解析，具体步骤如下："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过minidump_stackwalk工具解析dmp文件，可以得到上述dmp文件对应的进程崩溃信息（崩溃的原因、线程信息、寄存器信息等），示例如下（Linux环境）："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "./minidump_stackwalk b678e0b5-894b-4794-9ab3-fb5d6dda06a3.dmp > parsed_stacktrace.txt\n"
              })
            }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["minidump_stackwalk由Breakpad项目源码编译得到，编译方法见项目仓库：", (0,jsx_runtime.jsx)(_components.a, {
                href: "https://chromium.googlesource.com/breakpad/breakpad",
                children: "Breakpad仓库地址"
              }), "。"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "查看解析后的文件，以下示例列出部分内容："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "Crash reason:  SIGSEGV /SEGV_MAPERR    表示导致进程crash的信号，此处示例为段错误\nCrash address: 0x0\nProcess uptime: 12 seconds\n\nThread 0 (crashed)                     表示Thread 0发生crash\n 0  libweb_engine.so + 0x2e0b340       0层调用栈，0x2e0b340为so偏移地址，可用来反编译解析crash源码（依赖unstripped so）\n     x0 = 0x00000006a5719ff8    x1 = 0x000000019a5a28c0\n     x2 = 0x0000000000020441    x3 = 0x00000000000001b6\n     x4 = 0x0000000000000018    x5 = 0x0000000000008065\n     x6 = 0x0000000000008065    x7 = 0x63ff686067666d60\n     x8 = 0x0000000000000000    x9 = 0x5f129cf9e7bf008c\n    x10 = 0x0000000000000001   x11 = 0x0000000000000000\n    x12 = 0x000000069bfcc6d8   x13 = 0x0000000009a1746e\n    x14 = 0x0000000000000000   x15 = 0x0000000000000000\n    x16 = 0x0000000690df4850   x17 = 0x000000010c0d47f8\n    x18 = 0x0000000000000000   x19 = 0x0000005eea827db8\n    x20 = 0x0000005eea827c38   x21 = 0x00000006a56b1000\n    x22 = 0x00000006a8b85020   x23 = 0x00000020002103c0\n    x24 = 0x00000006a56b8a70   x25 = 0x0000000000000000\n    x26 = 0x00000006a8b84e00   x27 = 0x0000000000000001\n    x28 = 0x0000000000000000    fp = 0x0000005eea827c10\n     lr = 0x000000069fa4b33c    sp = 0x0000005eea827c10\n     pc = 0x000000069fa4b340\n    Found by: given as instruction pointer in context\n 1  libweb_engine.so + 0x2e0b338\n     fp = 0x0000005eea827d80    lr = 0x000000069fa48d44\n     sp = 0x0000005eea827c20    pc = 0x000000069fa4b33c\n    Found by: previous frame's frame pointer\n 2  libweb_engine.so + 0x2e08d40\n     fp = 0x0000005eea827e50    lr = 0x00000006a385cef8\n     sp = 0x0000005eea827d90    pc = 0x000000069fa48d44\n    Found by: previous frame's frame pointer\n 3  libweb_engine.so + 0x6c1cef4\n     fp = 0x0000005eea828260    lr = 0x00000006a0f11298\n     sp = 0x0000005eea827e60    pc = 0x00000006a385cef8\n ......\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "使用LLVM工具链解析崩溃源码位置，需要注意的是，要解析的so文件必须是带有符号表的so文件，如果栈显示和web的so相关，开发者可以在社区提issue或IR单。示例如下（Linux环境）："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "./llvm-addr2line -Cfpie libweb_engine.so 0x2e0b340\n"
              })
            }), "\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "llvm-addr2line工具链位于SDK中。"
            }), "\n"]
          }), "\n"]
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
318965(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478255-391a3e7e702de6e63c86a9a9e4b2bcff.png");

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