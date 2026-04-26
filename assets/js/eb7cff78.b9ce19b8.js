"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["166618"], {
399844(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_reader_kit_guide_reader_content_reader_setting_reader_setting_font_reader_setting_font_md_eb7_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-reader-kit-guide-reader-content-reader-setting-reader-setting-font-reader-setting-font-md-eb7.json
var site_docs_reader_kit_guide_reader_content_reader_setting_reader_setting_font_reader_setting_font_md_eb7_namespaceObject = JSON.parse('{"id":"reader-kit-guide/reader-content/reader-setting/reader-setting-font/reader-setting-font","title":"自定义字体","description":"当应用需要支持自定义字体时，开发者可通过ReaderSetting的fontPath属性，实现对阅读内容字体的实时修改。","source":"@site/docs/reader-kit-guide/reader-content/reader-setting/reader-setting-font/reader-setting-font.md","sourceDirName":"reader-kit-guide/reader-content/reader-setting/reader-setting-font","slug":"/reader-kit-guide/reader-content/reader-setting/reader-setting-font/","permalink":"/harmonyos-docs-site/reader-kit-guide/reader-content/reader-setting/reader-setting-font/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"自定义字体","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/reader-setting-font","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"构建阅读器","permalink":"/harmonyos-docs-site/reader-kit-guide/reader-content/reader-read-page/"},"next":{"title":"自定义页面背景","permalink":"/harmonyos-docs-site/reader-kit-guide/reader-content/reader-setting/reader-setting-background/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/reader-kit-guide/reader-content/reader-setting/reader-setting-font/reader-setting-font.md


const frontMatter = {
	title: '自定义字体',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/reader-setting-font',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '自定义字体';

const assets = {

};



const toc = [{
  "value": "业务流程",
  "id": "业务流程",
  "level": 2
}, {
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
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
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
        id: "自定义字体",
        children: "自定义字体"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["当应用需要支持自定义字体时，开发者可通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/reader-api/reader-arkts/reader-read-core/reader-read-core#readersetting",
        children: "ReaderSetting"
      }), "的fontPath属性，实现对阅读内容字体的实时修改。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义字体文件支持两种存放路径："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "工程目录resources/rawfile文件夹。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/core-file-kit/app-file/app-sandbox-directory",
          children: "应用沙箱目录"
        }), "。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(126030)/* ["default"] */.A) + "",
        width: "800",
        height: "327"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "自定义字体主要涉及3个接口，具体介绍如下表所示。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/reader-api/reader-arkts/reader-read-core/reader-read-core#setpageconfig",
              children: "setPageConfig"
            }), "(pageConfig: ReaderSetting): void"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "设置或者修改页面排版属性。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/reader-api/reader-arkts/reader-read-core/reader-read-core#onresourcerequest",
              children: "on('resourceRequest')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注册资源请求回调，如果设置了自定义背景，字体时，排版引擎会通过此接口获取对应的资源ArrayBuffer。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/reader-api/reader-arkts/reader-read-core/reader-read-core#offresourcerequest",
              children: "off('resourceRequest')"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "注销资源请求回调接口，可在页面销毁时调用。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发准备",
      children: "开发准备"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["进行自定义字体之前，请先确保已经“", (0,jsx_runtime.jsx)(_components.a, {
          href: "/reader-kit-guide/reader-content/reader-read-page",
          children: "构建阅读器"
        }), "”。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "已经准备好字体资源，并放在对应的目录当中。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "导入相关模块。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { fileIo as fs } from '@kit.CoreFileKit';\nimport { common } from '@kit.AbilityKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "定义字体文件存放路径："
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "若资源放在项目resources/rawfile/fonts文件夹下。"
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "let filePath: string = 'fonts/SourceHanSerifCN-VF.ttf';\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
              children: ["若资源放在", (0,jsx_runtime.jsx)(_components.a, {
                href: "/core-file-kit/app-file/app-sandbox-directory",
                children: "应用沙箱目录"
              }), "下。"]
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "let filePath: string = this.getUIContext().getHostContext()!.filesDir + '/fonts/SourceHanSerifCN-VF.ttf'\n"
              })
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "通过ReaderSetting的fontName和fontPath属性设置自定义字体的名称及所在的路径，并调用ReaderComponentController组件控制器的setPageConfig接口，重新渲染界面。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "this.readerSetting.fontName = '思源宋体';\n// 路径为上述两种之一\nthis.readerSetting.fontPath = filePath;\nthis.readerComponentController.setPageConfig(this.readerSetting);\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "注册排版引擎资源请求接口，并返回相应资源。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "当排版引擎检测到是自定义字体场景时，会通过接口请求字体资源。开发者需要根据返回的文件路径，判断是否为请求字体资源。如果是，则根据字体资源所在的路径，返回对应的ArrayBuffer。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "aboutToAppear(): void {\n  // 注册资源请求回调\n  this.readerComponentController.on('resourceRequest', this.resourceRequest);\n}\n\naboutToDisappear(): void {\n  // 注销资源请求回调\n  this.readerComponentController.off('resourceRequest');\n}\n\nprivate isFont(filePath: string): boolean {\n  let options = [\".ttf\", \".woff2\", \".otf\"];\n  let path = filePath.toLowerCase();\n  let result = path.indexOf(options[0]) != -1 || path.indexOf(options[1]) != -1 || path.indexOf(options[2]) != -1;\n  hilog.info(0x0000, 'testTag',  'isFont = ' + result);\n  return result;\n}\n\n/**\n * 资源请求回调\n */\nprivate resourceRequest: bookParser.CallbackRes<string, ArrayBuffer> = (filePath: string): ArrayBuffer => {\n  hilog.info(0x0000, 'testTag', 'resourceRequest : filePath = ' + filePath);\n  if (filePath.length === 0) {\n    return new ArrayBuffer(0);\n  }\n  if (!this.isFont(filePath)) {\n    return new ArrayBuffer(0);\n  }\n  try {\n    let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n    // 获取资源路径resources/rawfile/fonts下的字体文件Uint8Array数据\n    let value: Uint8Array = context.resourceManager.getRawFileContentSync(this.readerSetting.fontPath);\n    hilog.info(0x0000, 'testTag', 'resourceRequest : get other resource succeeded ');\n    return value.buffer as ArrayBuffer;\n  } catch (error) {\n    let code = (error as BusinessError).code;\n    let message = (error as BusinessError).message;\n    hilog.error(0x0000, 'testTag',\n      `resourceRequest : get other resource failed, error code: ${code}, message: ${message}.`);\n  }\n  // 如果在资源路径resources/rawfile/fonts下获取字体文件数据失败，则去沙箱目录下获取字体文件数据\n  return this.loadFileFromPath(this.readerSetting.fontPath);\n}\n\nprivate loadFileFromPath(filePath: string): ArrayBuffer {\n  try {\n    let stats = fs.statSync(filePath);\n    let file = fs.openSync(filePath, fs.OpenMode.READ_ONLY);\n    let buffer = new ArrayBuffer(stats.size);\n    fs.readSync(file.fd, buffer);\n    fs.closeSync(file);\n    return buffer;\n  } catch (err) {\n    hilog.error(0x0000, 'testTag', \"mkdir failed with error message: \", err.message, \", error code: \", err.code);\n    return new ArrayBuffer(0);\n  }\n}\n"
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
126030(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583439189-15a8cd04740e32922adb7b48309b079f.png");

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