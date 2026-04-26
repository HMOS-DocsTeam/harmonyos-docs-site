"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["578041"], {
328067(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_native_childprocess_development_capi_nativechildprocess_exit_info_capi_nativechildprocess_exit_info_md_41e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-native-childprocess-development-capi-nativechildprocess-exit-info-capi-nativechildprocess-exit-info-md-41e.json
var site_docs_ability_kit_native_childprocess_development_capi_nativechildprocess_exit_info_capi_nativechildprocess_exit_info_md_41e_namespaceObject = JSON.parse('{"id":"ability-kit/native-childprocess-development/capi-nativechildprocess-exit-info/capi-nativechildprocess-exit-info","title":"获取Native子进程退出信息","description":"场景介绍","source":"@site/docs/ability-kit/native-childprocess-development/capi-nativechildprocess-exit-info/capi-nativechildprocess-exit-info.md","sourceDirName":"ability-kit/native-childprocess-development/capi-nativechildprocess-exit-info","slug":"/ability-kit/native-childprocess-development/capi-nativechildprocess-exit-info/","permalink":"/harmonyos-docs-site/ability-kit/native-childprocess-development/capi-nativechildprocess-exit-info/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"获取Native子进程退出信息","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/capi-nativechildprocess-exit-info","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"创建/终止Native子进程（C/C++）","permalink":"/harmonyos-docs-site/ability-kit/native-childprocess-development/capi-nativechildprocess-development-guideline/"},"next":{"title":"Ability Kit术语","permalink":"/harmonyos-docs-site/ability-kit/ability-terminology/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/native-childprocess-development/capi-nativechildprocess-exit-info/capi-nativechildprocess-exit-info.md


const frontMatter = {
	title: '获取Native子进程退出信息',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/capi-nativechildprocess-exit-info',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '获取Native子进程退出信息';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发步骤",
  "id": "开发步骤",
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
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "获取native子进程退出信息",
        children: "获取Native子进程退出信息"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["从API version 20开始，支持父进程通过注册回调函数监听子进程，获取子进程异常退出信息，以便父进程做后续优化处理。这里支持监听的子进程必须为", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_startnativechildprocess",
        children: "OH_Ability_StartNativeChildProcess"
      }), "、", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_startnativechildprocesswithconfigs",
        children: "OH_Ability_StartNativeChildProcessWithConfigs"
      }), "或", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ability-api/ability-arkts/stage-model/js-apis-app-ability-childprocessmanager/js-apis-app-ability-childprocessmanager#childprocessmanagerstartnativechildprocess13",
        children: "startNativeChildProcess"
      }), "接口创建的子进程。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "Ability_NativeChildProcess_ErrCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_registernativechildprocessexitcallback",
              children: "OH_Ability_RegisterNativeChildProcessExitCallback"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_onnativechildprocessexit",
              children: "OH_Ability_OnNativeChildProcessExit"
            }), " onProcessExit)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册子进程退出回调函数。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#ability_nativechildprocess_errcode",
              children: "Ability_NativeChildProcess_ErrCode"
            }), " ", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_unregisternativechildprocessexitcallback",
              children: "OH_Ability_UnregisterNativeChildProcessExitCallback"
            }), " (", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_onnativechildprocessexit",
              children: "OH_Ability_OnNativeChildProcessExit"
            }), " onProcessExit)"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "解注册子进程退出回调函数。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "动态库文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "libchild_process.so\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "头文件"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "#include <AbilityKit/native_child_process.h>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主进程-注册和解注册Native子进程异常退出回调。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_registernativechildprocessexitcallback",
            children: "OH_Ability_RegisterNativeChildProcessExitCallback"
          }), "注册Native子进程，如果返回值为NCP_NO_ERROR表示注册成功。"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ability-api/ability-c/ability-headerfile/capi-native-child-process-h/capi-native-child-process-h#oh_ability_unregisternativechildprocessexitcallback",
            children: "OH_Ability_UnregisterNativeChildProcessExitCallback"
          }), "解注册Native子进程，如果返回值为NCP_NO_ERROR表示解注册成功。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include <AbilityKit/native_child_process.h>\n#include <hilog/log.h>\n\n// ···\n\nvoid OnNativeChildProcessExit(int32_t pid, int32_t signal)\n{\n    OH_LOG_INFO(LOG_APP, \"pid: %{public}d, signal: %{public}d\", pid, signal);\n}\n\nvoid RegisterNativeChildProcessExitCallback()\n{\n    Ability_NativeChildProcess_ErrCode ret =\n        OH_Ability_RegisterNativeChildProcessExitCallback(OnNativeChildProcessExit);\n    if (ret != NCP_NO_ERROR) {\n        OH_LOG_ERROR(LOG_APP, \"register failed.\");\n    }\n    // ···\n}\n\nvoid UnregisterNativeChildProcessExitCallback()\n{\n    Ability_NativeChildProcess_ErrCode ret =\n        OH_Ability_UnregisterNativeChildProcessExitCallback(OnNativeChildProcessExit);\n    if (ret != NCP_NO_ERROR) {\n        OH_LOG_ERROR(LOG_APP, \"unregister failed.\");\n    }\n    // ···\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "主进程-添加编译依赖项。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "修改CMaklist.txt添加必要的依赖库，假设主进程所在的so名称为libmainprocesssample.so（主进程和子进程的实现也可以选择编译到同一个动态库文件）。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(mainprocesssample PUBLIC\n    # 添加依赖的元能力动态库\n    libchild_process.so\n   \n    # 其它依赖的动态库\n    # ...\n)\n"
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