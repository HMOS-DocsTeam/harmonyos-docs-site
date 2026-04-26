"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["65957"], {
622067(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_reader_kit_guide_reader_parser_reader_catalog_list_reader_catalog_list_md_13d_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-reader-kit-guide-reader-parser-reader-catalog-list-reader-catalog-list-md-13d.json
var site_docs_reader_kit_guide_reader_parser_reader_catalog_list_reader_catalog_list_md_13d_namespaceObject = JSON.parse('{"id":"reader-kit-guide/reader-parser/reader-catalog-list/reader-catalog-list","title":"获取目录列表","description":"当应用需要展示书籍目录列表时，开发者可通过解析能力获取目录节点列表，实现目录列表中章节名称按顺序、层级的展示。当用户点击目录节点时，开发者也需要获取目录位置及资源信息，用于跳转到指定位置。","source":"@site/docs/reader-kit-guide/reader-parser/reader-catalog-list/reader-catalog-list.md","sourceDirName":"reader-kit-guide/reader-parser/reader-catalog-list","slug":"/reader-kit-guide/reader-parser/reader-catalog-list/","permalink":"/harmonyos-docs-site/reader-kit-guide/reader-parser/reader-catalog-list/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"获取目录列表","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/reader-catalog-list","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"获取书籍信息","permalink":"/harmonyos-docs-site/reader-kit-guide/reader-parser/reader-book-info/"},"next":{"title":"构建阅读器","permalink":"/harmonyos-docs-site/reader-kit-guide/reader-content/reader-read-page/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/reader-kit-guide/reader-parser/reader-catalog-list/reader-catalog-list.md


const frontMatter = {
	title: '获取目录列表',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/reader-catalog-list',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '获取目录列表';

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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "获取目录列表",
        children: "获取目录列表"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当应用需要展示书籍目录列表时，开发者可通过解析能力获取目录节点列表，实现目录列表中章节名称按顺序、层级的展示。当用户点击目录节点时，开发者也需要获取目录位置及资源信息，用于跳转到指定位置。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "业务流程",
      children: "业务流程"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(976256)/* ["default"] */.A) + "",
        width: "800",
        height: "582"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接口说明",
      children: "接口说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取目录列表及获取指定目录位置及资源信息共涉及4个接口，具体API说明请参考下表。"
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
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
              href: "/ref/reader-api/reader-arkts/reader-book-parser/reader-book-parser#getdefaulthandler",
              children: "getDefaultHandler"
            }), "(path: string): Promise<BookParserHandler>"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取书籍默认解析器。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/reader-api/reader-arkts/reader-book-parser/reader-book-parser#getcataloglist",
              children: "getCatalogList"
            }), "(): CatalogItem[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取书籍目录列表。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/reader-api/reader-arkts/reader-book-parser/reader-book-parser#getdomposbycataloghref",
              children: "getDomPosByCatalogHref"
            }), "(href: string): string"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取阅读起始位置domPos。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/reader-api/reader-arkts/reader-book-parser/reader-book-parser#getspinelist",
              children: "getSpineList"
            }), "(): SpineItem[]"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取书脊内容列表。"
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
            children: "import { common } from '@kit.AbilityKit';\nimport { bookParser } from '@kit.ReaderKit';\nimport { hilog } from '@kit.PerformanceAnalysisKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["通过提前导入到", (0,jsx_runtime.jsx)(_components.a, {
            href: "/core-file-kit/app-file/app-sandbox-directory",
            children: "应用沙箱目录"
          }), "中的书籍文件，初始化书籍解析器。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private defaultHandler: bookParser.BookParserHandler | null = null;\n\naboutToAppear(): void {\n  this.init().then(() => {\n  });\n}\n\nprivate async init() {\n  let context = this.getUIContext().getHostContext() as common.UIAbilityContext;\n  let path: string = `${context.filesDir}/abc.epub`;\n  try {\n    this.defaultHandler = await bookParser.getDefaultHandler(path);\n  } catch (error) {\n    hilog.error(0x0000, \"testTAG\", `getDefaultHandler failed, Code: ${error.code}, message: ${error.message}`);\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取目录列表并进行展示。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@State catalogItemList: bookParser.CatalogItem[] = [];\n\naboutToAppear(): void {\n  this.init().then(() => {\n    this.getCatalogList();\n  });\n}\n\nprivate getCatalogList() {\n  try {\n    this.catalogItemList = this.defaultHandler?.getCatalogList() || [];\n  } catch (error) {\n    hilog.error(0x0000, \"testTAG\", `getCatalogList failed, Code: ${error.code}, message: ${error.message}`);\n  }\n}\n\nbuild() {\n  Column() {\n    List() {\n      ForEach(this.catalogItemList, (item: bookParser.CatalogItem) => {\n        ListItem() {\n          Column() {\n            Row() {\n              Row() {\n                Text(' · ')\n                  .fontSize(14)\n                Text(item.catalogName)\n                  .fontSize(14)\n                  .textOverflow({ overflow: TextOverflow.Ellipsis })\n                  .padding({ top: 8, bottom: 8 })\n                  .maxLines(2)\n                  .layoutWeight(1)\n              }\n\n            }\n            .width('100%')\n            .height(48)\n            .justifyContent(FlexAlign.Center)\n            .alignItems(VerticalAlign.Center)\n\n            Divider()\n          }\n          .padding({\n            left: item.catalogLevel ? item.catalogLevel * 26 : 10,\n            right: item.catalogLevel ? item.catalogLevel * 26 : 10,\n            top: 6,\n            bottom: 6\n          })\n          .onClick(async () => {\n            // 在此实现点击目录跳转到指定章节功能\n            this.jumpToCatalogItem(item);\n          })\n        }\n      })\n    }\n    .scrollBar(BarState.Off)\n    .width('100%')\n    .height('100%')\n  }\n  .width('100%')\n  .height('100%')\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "获取跳转用的目录位置及资源信息。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "private jumpToCatalogItem(catalogItem: bookParser.CatalogItem) {\n  let domPos = this.getDomPos(catalogItem);\n  let resourceIndex = this.getResourceItemByCatalog(catalogItem).index;\n  // 通过domPos及resourceIndex信息，即可通过startPlay接口跳转到指定位置\n  hilog.info(0x0000, \"testTAG\", `jumpToCatalogItem domPos:${domPos}, resourceIndex:${resourceIndex}`);\n}\n\nprivate getDomPos(catalogItem: bookParser.CatalogItem): string {\n  try {\n    let domPos: string = this.defaultHandler?.getDomPosByCatalogHref(catalogItem.href || '') || '';\n    return domPos;\n  } catch (error) {\n    hilog.error(0x0000, \"testTAG\", `getDomPos failed, Code: ${error.code}, message: ${error.message}`);\n  }\n  return '';\n}\n\n/**\n * 获取书籍目录对应的资源条目\n *\n * @param catalogItem 目录条目\n */\nprivate getResourceItemByCatalog(catalogItem: bookParser.CatalogItem): bookParser.SpineItem {\n  let resourceFile = catalogItem.resourceFile || '';\n  try {\n    let spineList: bookParser.SpineItem[] = this.defaultHandler?.getSpineList() || []\n    // 查找目录对应的资源条目\n    let resourceItemArr = spineList.filter(item => item.href === resourceFile);\n    if (resourceItemArr.length > 0) {\n      hilog.info(0x0000, 'testTag', 'getResourceItemByCatalog get resource ', resourceItemArr[0]);\n      let resourceItem = resourceItemArr[0];\n      return resourceItem;\n    } else if (spineList.length > 0) {\n      // 如果查找不到，则默认返回第1个资源条目\n      hilog.info(0x0000, 'testTag', 'getResourceItemByCatalog get resource in resourceList', spineList[0]);\n      return spineList[0];\n    }\n  } catch (error) {\n    hilog.error(0x0000, \"testTAG\", `getDomPos failed, Code: ${error.code}, message: ${error.message}`);\n  }\n  // 如果没有资源条目，则返回默认值\n  hilog.info(0x0000, 'testTag', 'getResourceItemByCatalog get resource in escape');\n  return {\n    idRef: '',\n    index: 0,\n    href: '',\n    properties: ''\n  };\n}\n"
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
976256(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479143-3883db5fc533ce03f7f0b138c84199f9.png");

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