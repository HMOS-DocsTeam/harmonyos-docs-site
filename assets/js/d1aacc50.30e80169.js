"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["294"], {
586287(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ui_design_kit_guide_ui_design_icon_process_ui_design_normal_process_ui_design_normal_process_md_d1a_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ui-design-kit-guide-ui-design-icon-process-ui-design-normal-process-ui-design-normal-process-md-d1a.json
var site_docs_ui_design_kit_guide_ui_design_icon_process_ui_design_normal_process_ui_design_normal_process_md_d1a_namespaceObject = JSON.parse('{"id":"ui-design-kit-guide/ui-design-icon-process/ui-design-normal-process/ui-design-normal-process","title":"单层图标处理","description":"场景介绍","source":"@site/docs/ui-design-kit-guide/ui-design-icon-process/ui-design-normal-process/ui-design-normal-process.md","sourceDirName":"ui-design-kit-guide/ui-design-icon-process/ui-design-normal-process","slug":"/ui-design-kit-guide/ui-design-icon-process/ui-design-normal-process/","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-icon-process/ui-design-normal-process/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"单层图标处理","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-normal-process","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"（推荐）分层图标处理","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-icon-process/ui-design-layered-process/"},"next":{"title":"设置动态模糊样式","permalink":"/harmonyos-docs-site/ui-design-kit-guide/ui-design-navigation/ui-design-navigation-dynamic-blur/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ui-design-kit-guide/ui-design-icon-process/ui-design-normal-process/ui-design-normal-process.md


const frontMatter = {
	title: '单层图标处理',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-design-normal-process',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '单层图标处理';

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
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "单层图标处理",
        children: "单层图标处理"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从5.0.0(12)版本开始， Hds支持单层图标处理能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["适用于图标为单层资源，且图标展示风格要与华为HarmonyOS Design System设计风格一致的应用场景，典型应用场景可参考分层图标", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ui-design-kit-guide/ui-design-icon-process/ui-design-layered-process#%E5%9C%BA%E6%99%AF%E4%BB%8B%E7%BB%8D",
        children: "场景介绍"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束条件",
      children: "约束条件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "单层图标处理支持Phone、Tablet、PC/2in1设备，并且从5.1.1(19)版本开始，新增支持TV设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发步骤",
      children: "开发步骤"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(852466)/* ["default"] */.A) + "",
        width: "2572",
        height: "914"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "在entry/src/main/resources/base/media下，配置一张图片资源normal_icon.png。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "将图标处理的相关类添加至工程。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "import { LayeredDrawableDescriptor, DrawableDescriptor } from '@kit.ArkUI';\nimport { hdsDrawable } from '@kit.UIDesignKit';\nimport { image } from '@kit.ImageKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { resourceManager } from '@kit.LocalizationKit';\nimport { common } from '@kit.AbilityKit';\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["简单配置页面的布局，调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ui-design-api/ui-design-arkts/ui-design-hdsdrawable/ui-design-hdsdrawable#hdsdrawablegethdsicon",
            children: "单层图标接口"
          }), "获取处理后的图标信息，也可以调用", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/ui-design-api/ui-design-arkts/ui-design-hdsdrawable/ui-design-hdsdrawable#hdsdrawablegethdsicons",
            children: "异步批量处理接口"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "@Entry\n@Component\nstruct Index{\n  bundleName: string = 'com.example.uidesignkit';\n  resManager: resourceManager.ResourceManager | undefined = undefined;\n  layeredDrawableDescriptor: LayeredDrawableDescriptor | undefined = undefined;\n  drawableDescriptor: DrawableDescriptor | undefined = undefined;\n  @State iconsResult: Array<hdsDrawable.ProcessedIcon> = [];\n\n  build() {\n    Column() {\n      Column() {\n        Text('getHdsIcon')\n          .fontWeight(FontWeight.Bold)\n          .fontSize(16)\n          .margin(5)\n\n        Image(this.getHdsIcon())\n          .width(48)\n          .height(48)\n      }\n      .margin(20)\n\n      Text('getHdsIcons')\n        .fontWeight(FontWeight.Bold)\n        .fontSize(16)\n        .margin(5)\n\n      List() {\n        ForEach(this.iconsResult,\n          (item: hdsDrawable.ProcessedIcon, index?: number) => {\n            ListItem() {\n              Column() {\n                Text(item.bundleName)\n                  .fontWeight(FontWeight.Medium)\n                  .fontSize(16)\n                  .margin(5)\n\n                Image(item.pixelMap)\n                  .width(48)\n                  .height(48)\n              }\n              .margin(15)\n            }\n            .width('100%')\n          }, (item: string) => item.toString())\n      }\n      .scrollBar(BarState.On)\n      .height('60%')\n    }\n    .height('100%')\n    .width('100%')\n  }\n\n  aboutToAppear(): void {\n    // 获取资源管理器\n    this.resManager = (this.getUIContext().getHostContext() as common.UIAbilityContext)?.resourceManager;\n    if (!this.resManager) {\n      return;\n    }\n\n    // 通过资源管理获取分层图标信息\n    this.layeredDrawableDescriptor = (this.resManager.getDrawableDescriptor($r('app.media.drawable').id)) as LayeredDrawableDescriptor;\n\n    // 通过资源管理获取单层图标信息\n    this.drawableDescriptor =\n      (this.resManager?.getDrawableDescriptor($r('app.media.normal_icon').id)) as DrawableDescriptor;\n\n    this.getHdsIcons();\n  }\n\n  private getHdsIcon(): image.PixelMap | null {\n    try {\n      // 调用HDS单层图标接口\n      return hdsDrawable.getHdsIcon(this.bundleName, this.drawableDescriptor?.getPixelMap(), 48,\n        this.layeredDrawableDescriptor?.getMask().getPixelMap(), true);\n    } catch (err) {\n      let message = (err as BusinessError).message;\n      let code = (err as BusinessError).code;\n      console.error(`getHdsIcon failed, code: ${code}, message: ${message}`);\n      return null;\n    }\n  }\n\n  getHdsIcons(): void {\n    if (!this.drawableDescriptor) {\n      console.error(`getHdsIcons drawableDescriptor is undefined.`);\n      return;\n    }\n\n    if (!this.layeredDrawableDescriptor) {\n      console.error(`getHdsIcons layeredDrawableDescriptor is undefined.`);\n      return;\n    }\n\n    // 构造批量接口传参\n    let options: hdsDrawable.Options = {\n      size: 48,\n      hasBorder: true,\n      parallelNumber: 4\n    };\n\n    let icons: Array<hdsDrawable.Icon> = [];\n    for (let i = 0; i < 10; i++) {\n      icons.push({\n        bundleName: `${this.bundleName}-${i}`,\n        pixelMap: this.drawableDescriptor.getPixelMap()\n      })\n    }\n\n    try {\n      // 调用HDS单层批量接口处理图标\n      hdsDrawable.getHdsIcons(icons, this.layeredDrawableDescriptor.getMask().getPixelMap(), options)\n        .then((data: Array<hdsDrawable.ProcessedIcon>) => {\n          console.info(`getHdsIcons data size: ${data.length}`);\n          this.iconsResult = data;\n        })\n        .catch((err: BusinessError) => {\n          console.error(`getHdsIcons error, code: ${err.code}, msg: ${err.message}`);\n        });\n    } catch (err) {\n      let message = (err as BusinessError).message;\n      let code = (err as BusinessError).code;\n      console.error(`getHdsIcons callback failed: ${message}, code: ${code}`);\n    }\n  }\n}\n"
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
852466(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958332-9eca641e13c3d7baefd85da9c6f85c0b.png");

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