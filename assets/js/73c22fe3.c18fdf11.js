"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["499787"], {
829484(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_preview_kit_guide_preview_openfileboost_preview_openfileboost_md_73c_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-preview-kit-guide-preview-openfileboost-preview-openfileboost-md-73c.json
var site_docs_preview_kit_guide_preview_openfileboost_preview_openfileboost_md_73c_namespaceObject = JSON.parse('{"id":"preview-kit-guide/preview-openfileboost/preview-openfileboost","title":"文件打开加速（C/C++）","description":"从5.0.3(15)版本开始，新增文件打开加速功能。提供注册和取消注册接口，应用可以注册一系列回调，文件打开加速服务通过调用回调接口向应用推荐文件进行预加载动作。","source":"@site/docs/preview-kit-guide/preview-openfileboost/preview-openfileboost.md","sourceDirName":"preview-kit-guide/preview-openfileboost","slug":"/preview-kit-guide/preview-openfileboost/","permalink":"/harmonyos-docs-site/preview-kit-guide/preview-openfileboost/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"文件打开加速（C/C++）","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/preview-openfileboost","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"文件预览","permalink":"/harmonyos-docs-site/preview-kit-guide/preview-filepreview/"},"next":{"title":"文件打开加速状态感知","permalink":"/harmonyos-docs-site/preview-kit-guide/preview-openfileboost-stateawareness/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/preview-kit-guide/preview-openfileboost/preview-openfileboost.md


const frontMatter = {
	title: '文件打开加速（C/C++）',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/preview-openfileboost',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '文件打开加速（C/C++）';

const assets = {

};



const toc = [{
  "value": "接口说明",
  "id": "接口说明",
  "level": 2
}, {
  "value": "开发准备",
  "id": "开发准备",
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
        id: "文件打开加速cc",
        children: "文件打开加速（C/C++）"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.0.3(15)版本开始，新增文件打开加速功能。提供注册和取消注册接口，应用可以注册一系列回调，文件打开加速服务通过调用回调接口向应用推荐文件进行预加载动作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/preview-api/preview-c/openfileboost-index/openfileboost_preview/openfileboost_preview",
        children: "文件打开加速接口文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 文件预加载接口介绍（C API）"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenFileBoost_ErrCode HMS_OpenFileBoost_RegisterFilePreload(  HMS_OpenFileBoost_QueryAppState queryAppState,  HMS_OpenFileBoost_OnFilePreload filePreload,  HMS_OpenFileBoost_OnFilePreload cancelFilePreload);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "向系统注册文件预加载回调，后续系统预测用户可能打开的文件，在通知预加载之前先调用queryAppState向应用查询当前是否允许推荐预加载文件，如果应用返回允许推荐，通过调用filePreload向应用推荐一个文件供应用进行文件预加载。在某些场景下,比如当前系统可用内存不足,或者有其他文件更有可能被用户打开,则系统会通过调用cancelFilePreload取消某些文件的预加载。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "typedef OpenFileBoost_AppState (*HMS_OpenFileBoost_QueryAppState)(void);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统查询APP状态的回调函数定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "typedef OpenFileBoost_CbErrCode (*HMS_OpenFileBoost_OnFilePreload)(void* fileInfo);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "系统向应用推荐或取消推荐预加载文件的回调函数定义。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenFileBoost_ErrCode HMS_OpenFileBoost_GetFdFromPreloadFileInfo(  void* fileInfo, int32_t* fd);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在向应用推荐文件进行预加载或取消预加载的回调上下文中，应用通过调用该接口获取文件描述符信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenFileBoost_ErrCode HMS_OpenFileBoost_GetSandboxPathFromPreloadFileInfo(  void* fileInfo, char* sandboxPath, int32_t pathLen);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "在向应用推荐文件进行预加载或取消预加载的回调上下文中，应用通过调用该接口获取文件沙箱路径信息。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenFileBoost_ErrCode HMS_OpenFileBoost_UnregisterFilePreload(void);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消注册预加载回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "OpenFileBoost_ErrCode HMS_OpenFileBoost_NotifyPreloadHit(  int32_t fd, char* sandboxPath, int32_t pathLen);"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "当用户打开预加载文件时, 应用调用该接口通知系统预加载命中, 这将有助于提高预加载文件预测的准确性。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发准备",
      children: "开发准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["需要先通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/syscap/syscap#%E5%88%A4%E6%96%AD-api-%E6%98%AF%E5%90%A6%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8",
        children: "Syscap"
      }), "查询您的目标设备是否支持SystemCapability.PCService.OpenFileBoost系统能力，当前仅在2in1设备上支持该能力。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["申请文件打开加速服务的对应权限，在module.json5文件中添加文件预加载权限。注意ohos.permission.PRELOAD_FILE为受限权限，具体可参考", (0,jsx_runtime.jsx)(_components.a, {
            href: "/system-security/access-control/app-permission-mgmt/request-app-permissions/declare-permissions-in-acl",
            children: "申请使用受限权限"
          }), " 。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"requestPermissions\":[\n  {\n    \"name\": \"ohos.permission.PRELOAD_FILE\"\n  }\n]\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "添加对应的头文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "#include \"PreviewKit/open_file_boost.h\"\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "编写CMakeLists.txt，新增对文件打开加速功能的依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "target_link_libraries(entry PUBLIC\n    libopen_file_boost.so\n)\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册文件预加载回调，注册后系统在条件符合时调用回调向应用推荐文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OpenFileBoost_ErrCode ret = HMS_OpenFileBoost_RegisterFilePreload(AppQueryAppStateCb,\n    AppOnFilePreload, AppCancelFilePreload);\nif (ret != OPEN_FILE_BOOST_SUCCESS){\n    // 注册失败，用户可自定义错误处理\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用应该在当前回调上下文中同步解析预加载文件, 或同步阻塞等待解析完毕后再返回，以便系统可以评估本次预加载文件的资源消耗。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 查询应用当前状态的回调函数，系统在向应用推荐文件前会先调用状态查询回调函数向应用查询当前是否适合推荐\nOpenFileBoost_AppState AppQueryAppStateCb(void)\n{\n    // 如果当前状态允许进行文件预加载则返回OPEN_FILE_BOOST_APP_STATE_ALLOW_PRELOAD，这里的CanPreload函数为代码示例，表示应用根据实际业务判断是否允许预加载\n    if (CanPreload()) {\n        return OPEN_FILE_BOOST_APP_STATE_ALLOW_PRELOAD;\n    } else {\n        return OPEN_FILE_BOOST_APP_STATE_REJECT_PRELOAD;\n    }\n}\n\n// 文件预加载回调\nOpenFileBoost_CbErrCode AppOnFilePreload(void* fileInfo)\n{\n    int32_t fileDescriptor = 0;\n    // 指针fileInfo仅在当前回调上下文有效，在回调中调用HMS_OpenFileBoost_GetFdFromPreloadFileInfo获取文件描述符\n    OpenFileBoost_ErrCode ret = HMS_OpenFileBoost_GetFdFromPreloadFileInfo(fileInfo, &fileDescriptor);\n    if (ret != OPEN_FILE_BOOST_SUCCESS) {\n        return OPEN_FILE_BOOST_CALLBACK_FAILURE;\n    }\n    char sandboxPath[MAX_BUFFER_LENGTH] = {0};\n    // 指针fileInfo仅在当前回调上下文有效，在回调中调用HMS_OpenFileBoost_GetSandboxPathFromPreloadFileInfo获取文件路径\n    ret = HMS_OpenFileBoost_GetSandboxPathFromPreloadFileInfo(fileInfo, sandboxPath, MAX_BUFFER_LENGTH);\n    if (ret != OPEN_FILE_BOOST_SUCCESS) {\n        return OPEN_FILE_BOOST_CALLBACK_FAILURE;\n    }\n    // 用户可保存文件描述符和文件路径，方便后续通知取消预加载时对文件取消预加载\n    // 用户自定义具体的文件预加载逻辑\n    return OPEN_FILE_BOOST_CALLBACK_SUCCESS;\n}\n\n// 取消预加载回调\nOpenFileBoost_CbErrCode AppCancelFilePreload(void* fileInfo)\n{\n    // 同样的方法获取文件描述符和沙箱路径\n    int32_t fileDescriptor = 0;\n    OpenFileBoost_ErrCode ret = HMS_OpenFileBoost_GetFdFromPreloadFileInfo(fileInfo, &fileDescriptor);\n    if (ret != OPEN_FILE_BOOST_SUCCESS) {\n        return OPEN_FILE_BOOST_CALLBACK_FAILURE;\n    }\n    char sandboxPath[MAX_BUFFER_LENGTH] = {0};\n    ret = HMS_OpenFileBoost_GetSandboxPathFromPreloadFileInfo(fileInfo, sandboxPath, MAX_BUFFER_LENGTH);\n    if (ret != OPEN_FILE_BOOST_SUCCESS) {\n        return OPEN_FILE_BOOST_CALLBACK_FAILURE;\n    }\n    // 用户自定义具体的取消文件预加载逻辑\n    return OPEN_FILE_BOOST_CALLBACK_SUCCESS;\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果用户打开了已经预加载的文件，应用需要调用HMS_OpenFileBoost_NotifyPreloadHit通知系统，系统会更改文件的预加载状态。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 传入用户打开的已经预加载的文件描述符、文件路径和长度\nOpenFileBoost_ErrCode ret = HMS_OpenFileBoost_NotifyPreloadHit(fileDescriptor, sandboxPath, pathLen);\nif (ret != OPEN_FILE_BOOST_SUCCESS){\n    // 通知失败，用户可自定义错误处理\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用不想再收到回调，或者在退出流程中时，调用取消预加载接口。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "OpenFileBoost_ErrCode ret = HMS_OpenFileBoost_UnregisterFilePreload();\nif (ret != OPEN_FILE_BOOST_SUCCESS){\n    // 取消注册失败，用户可自定义错误处理\n}\n"
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