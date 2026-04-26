"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["859993"], {
979868(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_preview_kit_guide_preview_filepreview_preview_filepreview_md_b4e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-preview-kit-guide-preview-filepreview-preview-filepreview-md-b4e.json
var site_docs_preview_kit_guide_preview_filepreview_preview_filepreview_md_b4e_namespaceObject = JSON.parse('{"id":"preview-kit-guide/preview-filepreview/preview-filepreview","title":"文件预览","description":"当前Preview Kit的文件预览能力采用拉起新窗口的方式来实现，在新的窗口中展示需要预览的文件，并按照统一设计的界面进行展示，如果开发者需要使用Preview Kit的文件预览能力，需要注意以下事项：","source":"@site/docs/preview-kit-guide/preview-filepreview/preview-filepreview.md","sourceDirName":"preview-kit-guide/preview-filepreview","slug":"/preview-kit-guide/preview-filepreview/","permalink":"/harmonyos-docs-site/preview-kit-guide/preview-filepreview/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"文件预览","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/preview-filepreview","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"Preview Kit简介","permalink":"/harmonyos-docs-site/preview-kit-guide/preview-introduction/"},"next":{"title":"文件打开加速（C/C++）","permalink":"/harmonyos-docs-site/preview-kit-guide/preview-openfileboost/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/preview-kit-guide/preview-filepreview/preview-filepreview.md


const frontMatter = {
	title: '文件预览',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/preview-filepreview',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '文件预览';

const assets = {

};



const toc = [{
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "文件预览",
        children: "文件预览"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前Preview Kit的文件预览能力采用拉起新窗口的方式来实现，在新的窗口中展示需要预览的文件，并按照统一设计的界面进行展示，如果开发者需要使用Preview Kit的文件预览能力，需要注意以下事项："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前Preview Kit仅支持跳出应用进行文件的预览，暂不支持应用内预览。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Office类型文档预览借助WPS提供的能力来实现，在预览文档类型文件时会存在“WPS提供技术支持”、“使用WPS Office打开”等相关字样。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "当前Preview Kit暂不支持安全定制能力，包括禁止截录屏、屏蔽其他应用打开入口、屏蔽分享入口等安全预览能力。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["当前Preview Kit需要调用方存在对应uri的转授权能力，从而让预览获得该文件的访问权限来正常读取文件，具体问题可以参考", (0,jsx_runtime.jsx)(_components.a, {
          href: "/preview-kit-guide/preview-faq/preview-faq-2",
          children: "Preview Kit常见问题2"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["接口返回值有两种返回形式：callback和promise，promise和callback只是返回值方式不一样，功能相同。具体API说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/preview-api/preview-api-reference/preview-arkts/preview-arkts",
        children: "接口文档"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " Preview Kit的接口介绍"]
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
            children: "openPreview(context: Context, file: PreviewInfo, info?: DisplayInfo): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开预览功能。通过传入单个文件预览信息以及悬浮窗口属性信息，打开预览窗口。1秒内重复调用无效。使用Promise方式异步返回结果。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openPreview(context: Context, file: PreviewInfo, info: DisplayInfo, callback: AsyncCallback<void>): void"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开预览功能。通过传入单个文件预览信息以及悬浮窗口属性信息，打开预览窗口。1秒内重复调用无效。传入callback进行异步回调。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "openPreview(context: Context, files: Array<PreviewInfo>, index?: number): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "打开预览功能。通过传入多个文件预览信息以及选择展示的文件信息下标，打开预览窗口。1秒内重复调用无效。使用Promise方式异步返回结果。仅移动端可用。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "canPreview(context: Context, uri: string): Promise<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "根据文件的uri判断文件是否可预览。  - 当传入支持的文件类型（图片、视频、音频、文本、html）并且文件存在时，会返回true。  - 当传入不可预览的文件uri时，返回false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "hasDisplayed(context: Context): Promise<boolean>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "判断预览窗口是否已经存在。预览窗口是单例的形式。  - 如果预览窗口已经打开过并且没关闭，那会返回true。  - 如果没打开或者打开后已关闭，那将返回false。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "closePreview(context: Context): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "关闭预览窗口，仅当预览窗口存在时起效。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "loadData(context: Context, file: PreviewInfo): Promise<void>"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "加载预览文件信息。仅当预览窗口存在时生效。100毫秒内重复调用无效。  - 传入可预览文件时展示对应预览界面。  - 传入不可预览文件显示不支持预览界面。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { filePreview } from '@kit.PreviewKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "判断是否可以预览。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let uri = 'file://docs/storage/Users/currentUser/Documents/1.txt';\nlet uiContext = this.getUIContext().getHostContext() as Context;\nfilePreview.canPreview(uiContext, uri).then((result) => {    // 传入支持的文件类型且文件存在时会返回true\n  console.info(`Succeeded in obtaining the result of whether it can be previewed. result = ${result}`);\n}).catch((err: BusinessError) => {\n  console.error(`Failed to obtain the result of whether it can be previewed, err.code = ${err.code}, err.message = ${err.message}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "调用openPreview，实现打开文件预览的功能。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过Promise方式打开文件"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "let uiContext = this.getUIContext().getHostContext() as Context;\nlet displayInfo: filePreview.DisplayInfo = {\n  x: 100,\n  y: 100,\n  width: 800,\n  height: 800\n};\nlet fileInfo: filePreview.PreviewInfo = {\n  title: '1.txt',\n  uri: 'file://docs/storage/Users/currentUser/Documents/1.txt',\n  mimeType: 'text/plain'\n};\nfilePreview.openPreview(uiContext, fileInfo, displayInfo).then(() => {\n  console.info('Succeeded in opening preview');\n}).catch((err: BusinessError) => {\n  console.error(`Failed to open preview, err.code = ${err.code}, err.message = ${err.message}`);\n});\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "通过CallBack回调函数方式打开文件"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "let uiContext = this.getUIContext().getHostContext() as Context;\nlet displayInfo: filePreview.DisplayInfo = {\n  x: 100,\n  y: 100,\n  width: 800,\n  height: 800\n};\nlet fileInfo: filePreview.PreviewInfo = {\n  title: '1.txt',\n  uri: 'file://docs/storage/Users/currentUser/Documents/1.txt',\n  mimeType: 'text/plain'\n};\nfilePreview.openPreview(uiContext, fileInfo, displayInfo, (err) => {\n  if (err && err.code) {\n    console.error(`Failed to open preview, err.code = ${err.code}, err.message = ${err.message}`);\n    return;\n  }\n  console.info('Succeeded in opening preview');\n});\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "传入多个文件打开预览，仅移动端可用。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "let uiContext = this.getUIContext().getHostContext() as Context;\nlet fileInfo: filePreview.PreviewInfo = {\n  title: '1.txt',\n  uri: 'file://docs/storage/Users/currentUser/Documents/1.txt',\n  mimeType: 'text/plain'\n};\nlet fileInfo1: filePreview.PreviewInfo = {\n  title: '2.txt',\n  uri: 'file://docs/storage/Users/currentUser/Documents/2.txt',\n  mimeType: 'text/plain'\n};\nlet files: Array<filePreview.PreviewInfo> = new Array();\nfiles.push(fileInfo);\nfiles.push(fileInfo1);\nfilePreview.openPreview(uiContext, files, 0).then(() => {\n  console.info('Succeeded in opening preview');\n}).catch((err: BusinessError) => {\n  console.error(`Failed to open preview, err.code = ${err.code}, err.message = ${err.message}`);\n});\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）如果已经打开过预览窗口，需要重新加载页面，需要调用loadData接口，加载文件。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let uiContext = this.getUIContext().getHostContext() as Context;\nlet fileInfo: filePreview.PreviewInfo = {\n  title: '2.txt',\n  uri: 'file://docs/storage/Users/currentUser/Documents/2.txt',\n  mimeType: 'text/plain'\n};\nfilePreview.loadData(uiContext, fileInfo).then(() => {   // 仅当预览窗口存在时起效\n  console.info('Succeeded in loading data.');\n}).catch((err: BusinessError) => {\n  console.error(`Failed to load data, err.code = ${err.code}, err.message = ${err.message}`);\n});\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "（可选）如果想要关闭预览窗口，需要调用closePreview。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "let uiContext = this.getUIContext().getHostContext() as Context;\nfilePreview.closePreview(uiContext).then(() => {   // 仅当预览窗口存在时起效\n  console.info('Succeeded in closing preview');\n}).catch((err: BusinessError) => {\n  console.error(`Failed to close preview, err.code = ${err.code}, err.message = ${err.message}`);\n});\n"
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