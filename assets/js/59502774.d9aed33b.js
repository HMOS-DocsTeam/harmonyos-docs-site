"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["651491"], {
751532(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_log_and_fault_analysis_ide_fault_analysis_ide_release_app_stack_analysis_ide_release_app_stack_analysis_md_595_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-log-and-fault-analysis-ide-fault-analysis-ide-release-app-stack-analysis-ide-release-app-stack-analysis-md-595.json
var site_docs_ide_log_and_fault_analysis_ide_fault_analysis_ide_release_app_stack_analysis_ide_release_app_stack_analysis_md_595_namespaceObject = JSON.parse('{"id":"ide-log-and-fault-analysis/ide-fault-analysis/ide-release-app-stack-analysis/ide-release-app-stack-analysis","title":"堆栈轨迹分析","description":"对于发布的应用（Release应用），为减小应用程序大小，提高运行效率，会对代码进行优化，去除其中的debug信息。因此无法直接通过Release应用的堆栈信息定位到源码的具体文件和行位置，不易于开发者快速定位解决问题。","source":"@site/docs/ide-log-and-fault-analysis/ide-fault-analysis/ide-release-app-stack-analysis/ide-release-app-stack-analysis.md","sourceDirName":"ide-log-and-fault-analysis/ide-fault-analysis/ide-release-app-stack-analysis","slug":"/ide-log-and-fault-analysis/ide-fault-analysis/ide-release-app-stack-analysis/","permalink":"/harmonyos-docs-site/ide-log-and-fault-analysis/ide-fault-analysis/ide-release-app-stack-analysis/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"堆栈轨迹分析","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-release-app-stack-analysis","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"FaultLog","permalink":"/harmonyos-docs-site/ide-log-and-fault-analysis/ide-fault-analysis/ide-fault-log/"},"next":{"title":"异常堆栈解析原理","permalink":"/harmonyos-docs-site/ide-log-and-fault-analysis/ide-fault-analysis/ide-exception-stack-parsing-principle/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-log-and-fault-analysis/ide-fault-analysis/ide-release-app-stack-analysis/ide-release-app-stack-analysis.md


const frontMatter = {
	title: '堆栈轨迹分析',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-release-app-stack-analysis',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '堆栈轨迹分析';

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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "堆栈轨迹分析",
        children: "堆栈轨迹分析"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于发布的应用（Release应用），为减小应用程序大小，提高运行效率，会对代码进行优化，去除其中的debug信息。因此无法直接通过Release应用的堆栈信息定位到源码的具体文件和行位置，不易于开发者快速定位解决问题。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["针对该场景，DevEco Studio提供了Release应用堆栈解析功能，开发者可以利用构建产物中包含Debug信息的文件（so文件、sourceMap文件、nameCache文件等），对Release应用中C++堆栈、ArkTS堆栈以及ArkTS堆栈中混淆的方法名和文件名进行还原。关于构建产物的介绍和堆栈解析的原理，请查看", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-log-and-fault-analysis/ide-fault-analysis/ide-exception-stack-parsing-principle",
        children: "异常堆栈解析原理"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Release应用堆栈解析功能操作方法如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["单击菜单栏", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Code > Analyze Stack Trace"
            })
          }), "，或在FaultLog页面异常堆栈信息处右键选择", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Analyze Stack Trace。"
            })
          })]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(541851)/* ["default"] */.A) + "",
            width: "323",
            height: "225"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在弹出的", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Analyze Stack Trace"
            })
          }), "对话框中，粘贴Release应用的异常堆栈信息。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(294007)/* ["default"] */.A) + "",
            width: "933",
            height: "784"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果当前工程为堆栈所在应用对应的工程，且存在Release构建产物，点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Start Analyze"
            })
          }), "即可进行解析。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果当前工程不是堆栈所在应用对应的工程，则需要配置应用对应构建产物：勾选", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unscramble stack trace"
            })
          }), ", 在下方的文件选择框中，分别添加应用对应的sourceMap文件、so文件以及nameCache文件，点击", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Start Analyze"
            })
          }), "进行转换。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "DevEco Studio将解析后的堆栈信息显示在右侧的输出框中。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(459578)/* ["default"] */.A) + "",
            width: "1874",
            height: "567"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在构建Release应用时，so文件是默认不包含符号表信息的，如果需要在构建Release应用时生成包含符号表的so文件，需要在工程的", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-hvigor-configuration/ide-hvigor-cpp",
            children: "模块级build-profile.json5"
          }), "文件的buildOption属性中，配置如下信息："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"buildOption\": {\n  \"externalNativeOptions\": {\n    \"arguments\": \"-DCMAKE_BUILD_TYPE=RelWithDebInfo\"\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["如果引用release Har包中native方法产生了异常堆栈，解析时请勾选", (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Unscramble stack trace"
            })
          }), ", 并选择har模块中编译出的带有符号信息的so文件，引用方build产物中的har模块so不带有符号信息。so文件在模块中相对路径为build/default/intermediates/libs/default/{cpu类型}/libxxx.so。"]
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
294007(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530912692-c025b7fbcd317331d74c11f3c8935b78.png");

},
459578(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002561832613-ec43b2dfd7ef56d90e2643b0927dedfe.png");

},
541851(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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