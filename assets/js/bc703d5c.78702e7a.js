"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["255971"], {
838246(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_preview_kit_guide_preview_openfileboost_stateawareness_preview_openfileboost_stateawareness_md_bc7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-preview-kit-guide-preview-openfileboost-stateawareness-preview-openfileboost-stateawareness-md-bc7.json
var site_docs_preview_kit_guide_preview_openfileboost_stateawareness_preview_openfileboost_stateawareness_md_bc7_namespaceObject = JSON.parse('{"id":"preview-kit-guide/preview-openfileboost-stateawareness/preview-openfileboost-stateawareness","title":"文件打开加速状态感知","description":"从5.0.5(17)版本开始，如浏览器等支持下载文件的应用，可以接入文件预加载状态感知接口，动态感知文件预加载状态，通过UI（user interface）标识对加速文件进行显性化提示，进一步提升用户体验。","source":"@site/docs/preview-kit-guide/preview-openfileboost-stateawareness/preview-openfileboost-stateawareness.md","sourceDirName":"preview-kit-guide/preview-openfileboost-stateawareness","slug":"/preview-kit-guide/preview-openfileboost-stateawareness/","permalink":"/harmonyos-docs-site/preview-kit-guide/preview-openfileboost-stateawareness/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"文件打开加速状态感知","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/preview-openfileboost-stateawareness","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"文件打开加速（C/C++）","permalink":"/harmonyos-docs-site/preview-kit-guide/preview-openfileboost/"},"next":{"title":"openPreview打开显示预览失败","permalink":"/harmonyos-docs-site/preview-kit-guide/preview-faq/preview-faq-1/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/preview-kit-guide/preview-openfileboost-stateawareness/preview-openfileboost-stateawareness.md


const frontMatter = {
	title: '文件打开加速状态感知',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/preview-openfileboost-stateawareness',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '文件打开加速状态感知';

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
        id: "文件打开加速状态感知",
        children: "文件打开加速状态感知"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.0.5(17)版本开始，如浏览器等支持下载文件的应用，可以接入文件预加载状态感知接口，动态感知文件预加载状态，通过UI（user interface）标识对加速文件进行显性化提示，进一步提升用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/preview-api/preview-api-reference/preview-arkts-openfileboost-api/preview-arkts-openfileboost-api",
        children: "预加载状态感知接口文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 文件预加载状态感知接口介绍（ArkTS API）"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
            children: "on(type: 'filePreloadStateChanged', callback: Callback<FilePreloadStatusInfo>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件预加载状态回调，应用通过注册回调函数获取文件预加载的状态变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "off(type: 'filePreloadStateChanged', callback?: Callback<FilePreloadStatusInfo>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文件预加载状态注销回调，通过注销回调函数取消获取文件预加载的状态变化。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "addFile(file: string): void"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: ["监听一个文件的预加载状态，传入文件路径开始监听该文件的预加载状态。后续该文件状态有变化通过'filePreloadStateChanged'事件回调应用。  注意需要先调用openFileBoost.on('filePreloadStateChanged')接口后再调用该接口添加文件。  当前支持加速的文件类型见", (0,jsx_runtime.jsx)(_components.a, {
              href: "/preview-kit-guide/preview-introduction#%E6%96%87%E4%BB%B6%E6%89%93%E5%BC%80%E5%8A%A0%E9%80%9F%E6%94%AF%E6%8C%81%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B",
              children: "文件打开加速支持的文件类型"
            }), "， 不支持的文件类型默认为未预加载状态，不需要调用该接口监听文件预加载状态变更。"]
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "removeFile(file: string): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "取消监听一个文件的预加载状态，取消后文件的预加载状态变化不会通过回调再通知业务。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "queryFilePreloadStatusInfo(file: string): FilePreloadStatusInfo"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "查询文件预加载状态，传入文件路径，通过返回值返回该文件当前的预加载状态。"
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
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { openFileBoost } from '@kit.PreviewKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册文件预加载状态感知回调函数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 文件预加载状态变更的回调函数定义，若有文件预加载状态变更，则通过该回调函数通知\nfunction callback(filePreloadStatusInfo: openFileBoost.FilePreloadStatusInfo): void {\n  if (filePreloadStatusInfo.state === openFileBoost.FilePreloadState.PRELOADING) {\n    // 预加载过程中，应用可以根据自己设计对应UX\n    hilog.info(0x0000, 'testTag', `file is PRELOADING, suggest to show loading animation`);\n  }\n  if (filePreloadStatusInfo.state === openFileBoost.FilePreloadState.PRELOADED) {\n    // 预加载完成，应用可以通过UX显示提示用户加速完成\n    hilog.info(0x0000, 'testTag', `file is PRELOADED, suggest to show loaded animation`);\n  }\n  if (filePreloadStatusInfo.state === openFileBoost.FilePreloadState.NOT_PRELOADED) {\n    // 没有预加载，应用可以不显示任何额外UX\n    hilog.info(0x0000, 'testTag', `file is UNPRELOADED, suggest do not show animation `);\n  }\n}\n// 调用register函数可以注册预加载状态感知回调\nfunction register(): void {\n  try {\n    openFileBoost.on('filePreloadStateChanged', callback);\n  } catch(error) {\n    let code = (error as BusinessError).code;\n    let message = (error as BusinessError).message;\n    hilog.error(0x0000, 'testTag', `register filePreloadStateChanged failed, error code: ${code}, message: ${message}.`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用addFile接口传入想要监听的文件的沙箱路径。典型场景比如应用下载某个文件完成，可将该文件路径注册进来，若文件后续状态变更，系统会通过2中的回调函数通知应用。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 为10MB_file.docx文件添加文件预加载状态监听\nfunction testAddFile(): void {\n  try {\n    const file:string = \"/storage/Users/currentUser/Desktop/10MB_file.docx\";\n    openFileBoost.addFile(file);\n  } catch(error) {\n    let code = (error as BusinessError).code;\n    let message = (error as BusinessError).message;\n    hilog.error(0x0000, 'testTag', `addFile failed, error code: ${code}, message: ${message}.`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过addFile接口监听的文件个数有上限（50个文件），不再需要监听的文件可以通过removeFile接口取消监听。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "const file:string = \"/storage/Users/currentUser/Desktop/10MB_file.docx\";\ntry {\n  openFileBoost.removeFile(file);\n} catch(error) {\n  let code = (error as BusinessError).code;\n  let message = (error as BusinessError).message;\n  hilog.error(0x0000, 'testTag', `removeFile failed, error code: ${code}, message: ${message}.`);\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "如果不需要再监听任何文件的预加载状态变更，可注销预加载状态感知回调函数。如果传入具体的回调函数，则只取消该函数； 如果不传入具体的回调函数，则取消该进程的所有回调。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// 假设之前在进程的不同业务逻辑中已经注册了callback1、callback2、callback3总共3个回调函数\nopenFileBoost.on('filePreloadStateChanged', callback1);\nopenFileBoost.on('filePreloadStateChanged', callback2);\nopenFileBoost.on('filePreloadStateChanged', callback3);\n\nfunction testUnregister(): void {\n  try {\n    // 单独取消callback1的监听，传入callback1作为参数，后续不会再调用callback1的回调做通知\n    openFileBoost.off('filePreloadStateChanged', callback1);\n    // 取消所有callback的监听，不传第二个可选参数，后续不会再调用callback2和callback3做通知\n    openFileBoost.off('filePreloadStateChanged');\n  } catch(error) {\n    let code = (error as BusinessError).code;\n    let message = (error as BusinessError).message;\n    hilog.error(0x0000, 'testTag', `off filePreloadStateChanged failed, error code: ${code}, message: ${message}.`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用还可通过查询接口查询某个文件的实时的预加载状态，一般在应用刚启动时可以查询一遍相关文件的预加载状态。每次调用接口传入一个文件的沙箱路径。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "function testQuery(): void {\ntry {\n  const file:string = \"/storage/Users/currentUser/Desktop/10MB_file.docx\";\n  let statusInfo : openFileBoost.FilePreloadStatusInfo = openFileBoost.queryFilePreloadStatusInfo(file);\n  hilog.info(0x0000, 'testTag', 'file, %{public}s, progress:%{public}d  preloadState:%{public}d',\n    statusInfo.sandboxPath, statusInfo.progress, statusInfo.state);\n} catch(error) {\n  let code = (error as BusinessError).code;\n  let message = (error as BusinessError).message;\n  hilog.error(0x0000, 'testTag', `query failed, error code: ${code}, message: ${message}.`);\n}\n}\n"
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