"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["508531"], {
84316(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_icon_process_ui_design_layered_process_ui_design_layered_process_md_d94_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-icon-process-ui-design-layered-process-ui-design-layered-process-md-d94.json
var site_docs_ui_design_kit_guide_ui_design_icon_process_ui_design_layered_process_ui_design_layered_process_md_d94_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-icon-process/ui-design-layered-process/ui-design-layered-process","title":"（推荐）分层图标处理","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-icon-process/ui-design-layered-process/ui-design-layered-process.md","sourceDirName":"ui-design-kit-guide/ui-design-icon-process/ui-design-layered-process","slug":"/ui-design-kit-guide/ui-design-icon-process/ui-design-layered-process/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-icon-process/ui-design-layered-process/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"（推荐）分层图标处理","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-layered-process","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"UI Design Kit简介","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-introduction/"},"next":{"title":"单层图标处理","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-icon-process/ui-design-normal-process/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-icon-process/ui-design-layered-process/ui-design-layered-process.md


const frontMatter = {
	title: '（推荐）分层图标处理',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-layered-process',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '（推荐）分层图标处理';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束条件",
  "id": "约束条件",
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
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "推荐分层图标处理",
        children: "（推荐）分层图标处理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.0.0(12)版本开始， Hds支持分层图标处理能力。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "适用于图标为分层资源，且图标展示风格要与华为HarmonyOS Design System设计风格一致的应用场景。以下是一些典型的应用场景："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "展示带图标的应用列表：可调用UI Design Kit批量处理分层图标的接口获取处理后的应用图标。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "展示应用详情：可调用UI Design Kit处理单个分层图标的接口获取处理后的应用图标。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "展示跟随在线主题的应用图标：可调用UI Design Kit处理分层图标的接口获取主题换肤后的应用图标。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(547145)/* ["default"] */.A) + "",
        width: "307",
        height: "586"
      }), (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(46244)/* ["default"] */.A) + "",
        width: "307",
        height: "587"
      }), (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(558072)/* ["default"] */.A) + "",
        width: "285",
        height: "586"
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束条件",
      children: "约束条件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "分层图标处理支持Phone、Tablet、PC/2in1设备，并且从5.1.1(19)版本开始，新增支持TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(870094)/* ["default"] */.A) + "",
        width: "3564",
        height: "950"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "设置分层图标，将前景资源和背景资源放至entry/src/main/resources/base/media文件中，并在该目录下创建一个json文件（例如：drawable.json）："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"layered-image\":\n  {\n    \"background\" : \"$media:background\",\n    \"foreground\" : \"$media:foreground\"\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将图标处理的相关类添加至工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { LayeredDrawableDescriptor } from '@kit.ArkUI';\nimport { hdsDrawable } from '@kit.UIDesignKit';\nimport { image } from '@kit.ImageKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { resourceManager } from '@kit.LocalizationKit';\nimport { common } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["简单配置页面的布局，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ui-design-api/ui-design-arkts/ui-design-hdsdrawable/ui-design-hdsdrawable#hdsdrawablegethdslayeredicon",
            children: "分层图标接口"
          }), "获取处理后的图标信息，也可以调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ui-design-api/ui-design-arkts/ui-design-hdsdrawable/ui-design-hdsdrawable#hdsdrawablegethdslayeredicons",
            children: "异步批量处理接口"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index{\n  bundleName: string = 'com.example.uidesignkit';\n  resManager: resourceManager.ResourceManager | undefined = undefined;\n  layeredDrawableDescriptor: LayeredDrawableDescriptor | undefined = undefined;\n  @State layeredIconsResult: Array<hdsDrawable.ProcessedIcon> = [];\n\n  build() {\n    Column() {\n      Column() {\n        Text('getHdsLayeredIcon')\n          .fontWeight(FontWeight.Bold)\n          .fontSize(16)\n          .margin(5)\n\n        Image(this.getHdsLayeredIcon())\n          .width(48)\n          .height(48)\n      }\n      .margin(20)\n\n      Text('getHdsLayeredIcons')\n        .fontWeight(FontWeight.Bold)\n        .fontSize(16)\n        .margin(5)\n\n      List() {\n        ForEach(this.layeredIconsResult,\n          (item: hdsDrawable.ProcessedIcon, index?: number) => {\n            ListItem() {\n              Column() {\n                Text(item.bundleName)\n                  .fontWeight(FontWeight.Medium)\n                  .fontSize(16)\n                  .margin(5)\n\n                Image(item.pixelMap)\n                  .width(48)\n                  .height(48)\n              }\n              .margin(15)\n            }\n            .width('100%')\n          }, (item: string) => item.toString())\n      }\n      .scrollBar(BarState.On)\n      .height('60%')\n    }\n    .height('100%')\n    .width('100%')\n  }\n\n  aboutToAppear(): void {\n    // 获取资源管理器\n    this.resManager = (this.getUIContext().getHostContext() as common.UIAbilityContext)?.resourceManager;\n    if (!this.resManager) {\n      return;\n    }\n    // 通过资源管理获取原始分层图标信息\n    this.layeredDrawableDescriptor = (this.resManager.getDrawableDescriptor($r('app.media.drawable')\n      .id)) as LayeredDrawableDescriptor;\n    this.getHdsLayeredIcons();\n  }\n\n  private getHdsLayeredIcon(): image.PixelMap | null {\n    try {\n      // 调用HDS分层图标接口处理图标\n      return hdsDrawable.getHdsLayeredIcon(this.bundleName, this.layeredDrawableDescriptor, 48, true);\n    } catch (err) {\n      let message = (err as BusinessError).message;\n      let code = (err as BusinessError).code;\n      console.error(`getHdsLayeredIcon failed, code: ${code}, message: ${message}`);\n      return null;\n    }\n  }\n\n  private getHdsLayeredIcons(): void {\n    if (!this.layeredDrawableDescriptor) {\n      console.error(`getHdsLayeredIcons layeredDrawableDescriptor is undefined.`);\n      return;\n    }\n    \n    // 构造批量接口传参\n    let options: hdsDrawable.Options = {\n      size: 48,\n      hasBorder: true,\n      parallelNumber: 4\n    };\n\n    let layeredIcons: Array<hdsDrawable.LayeredIcon> = [];\n    for (let i = 0; i < 10; i++) {\n      layeredIcons.push({\n        bundleName: `${this.bundleName}-${i}`,\n        layeredDrawableDescriptor: this.layeredDrawableDescriptor\n      });\n    }\n\n    try {\n      // 调用HDS批量分层接口处理图标\n      hdsDrawable.getHdsLayeredIcons(layeredIcons, options)\n        .then((data: Array<hdsDrawable.ProcessedIcon>) => {\n          console.info(`getHdsLayeredIcons data size: ${data.length}`);\n          this.layeredIconsResult = data;\n        })\n        .catch((err: BusinessError) => {\n          console.error(`getHdsLayeredIcons return error, code: ${err.code}, msg: ${err.message}`);\n        });\n    } catch (err) {\n      let message = (err as BusinessError).message;\n      let code = (err as BusinessError).code;\n      console.error(`getHdsLayeredIcons failed, code: ${code}, message: ${message}`);\n    }\n  }\n}\n"
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
547145(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958330-71722674d2513fa94cf4522234ad6e71.png");

},
558072(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798682-f47b856cbd4571755a06d13300074197.png");

},
870094(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438377-a698a11bc4049b6b0dcf8217be63e841.png");

},
46244(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478331-22cb6516bf3a54bd3737541ec330cf06.png");

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