"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["636943"], {
190270(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_window_manager_multi_window_guide_multi_window_adapt_multi_window_controlbar_adapt_multi_window_controlbar_adapt_md_2fc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-window-manager-multi-window-guide-multi-window-adapt-multi-window-controlbar-adapt-multi-window-controlbar-adapt-md-2fc.json
var site_docs_arkui_window_manager_multi_window_guide_multi_window_adapt_multi_window_controlbar_adapt_multi_window_controlbar_adapt_md_2fc_namespaceObject = JSON.parse('{"id":"arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-controlbar-adapt/multi-window-controlbar-adapt","title":"顶部窗口控制条避让适配智慧多窗","description":"顶部窗口控制条是应用窗口处于智慧多窗模式下，应用顶部的操作横条  。","source":"@site/docs/arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-controlbar-adapt/multi-window-controlbar-adapt.md","sourceDirName":"arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-controlbar-adapt","slug":"/arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-controlbar-adapt/","permalink":"/harmonyos-docs-site/arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-controlbar-adapt/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"顶部窗口控制条避让适配智慧多窗","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multi-window-controlbar-adapt","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用布局适配智慧多窗","permalink":"/harmonyos-docs-site/arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-layout-adapt/"},"next":{"title":"应用启动页简介","permalink":"/harmonyos-docs-site/arkui/window-manager/launch-page/launch-page-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/window-manager/multi-window-guide/multi-window-adapt/multi-window-controlbar-adapt/multi-window-controlbar-adapt.md


const frontMatter = {
	title: '顶部窗口控制条避让适配智慧多窗',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multi-window-controlbar-adapt',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '顶部窗口控制条避让适配智慧多窗';

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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "顶部窗口控制条避让适配智慧多窗",
        children: "顶部窗口控制条避让适配智慧多窗"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["顶部窗口控制条是应用窗口处于智慧多窗模式下，应用顶部的操作横条 ", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(600874)/* ["default"] */.A) + "",
        width: "40",
        height: "12"
      }), " 。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "顶部窗口控制条示意图如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(461021)/* ["default"] */.A) + "",
        width: "525",
        height: "282"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "顶部横条的避让可通过以下两种方式适配："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["使用窗口的避让能力：通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#setwindowlayoutfullscreen9",
            children: "setWindowLayoutFullScreen"
          }), "设置窗口布局是否为沉浸式布局。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "沉浸式布局是指应用布局不避让状态栏、导航栏以及智慧多窗顶部横条，这可能发生组件与顶部横条的重叠，导致文字遮挡、点击事件冲突等情况。非沉浸式布局是指布局避让状态栏、导航栏以及智慧多窗顶部横条，组件不会与其重叠。因此可设置isLayoutFullScreen值为false使窗口的布局为非沉浸式布局。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(31968)/* ["default"] */.A) + "",
            width: "525",
            height: "282"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "示例："
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { window } from '@kit.ArkUI';\nimport { common } from '@kit.AbilityKit';\n\n@Entry\n@Component\nstruct Index {\n  @State message: string = '非沉浸式布局';\n  private windowClass: window.Window | undefined = undefined;\n\n  aboutToAppear(): void {\n    try {\n      window.getLastWindow(this.getUIContext()?.getHostContext() as common.UIAbilityContext,\n        (err: BusinessError, data) => {\n          const errCode: number = err.code;\n          if (errCode) {\n            console.error('Failed to obtain the top window. Cause: ' + JSON.stringify(err));\n            return;\n          }\n          this.windowClass = data;\n          console.info('Succeeded in obtaining the top window. Data: ' + JSON.stringify(data));\n        });\n    } catch (exception) {\n      console.error('Failed to obtain the top window. Cause: ' + JSON.stringify(exception));\n    }\n  }\n\n  private setWindowLayoutFullScreen(isLayoutFullScreen: boolean) {\n    if (!this.windowClass) {\n      return;\n    }\n    this.windowClass.setWindowLayoutFullScreen(isLayoutFullScreen).then(() => {\n      console.info('Succeeded in setting the window layout to full-screen mode.');\n    }).catch((err: BusinessError) => {\n      const errCode: number = err.code;\n      if (errCode) {\n        console.error('Failed to set the window layout to full-screen mode. Cause:' + JSON.stringify(err));\n        return;\n      }\n    });\n  }\n\n  build() {\n    Stack({ alignContent: Alignment.TopStart }) {\n      Column() {\n        Text(this.message)\n          .fontSize(25)\n          .fontWeight(FontWeight.Bold)\n          .margin({\n            top: '2%',\n            bottom: '40%'\n          })\n\n        Button() {\n          Text('设置窗口为沉浸式布局')\n            .fontSize(18)\n            .fontWeight(FontWeight.Normal)\n        }\n        .type(ButtonType.Normal)\n        .borderRadius(15)\n        .margin({ top: 20 })\n        .stateStyles({\n          normal: {\n            .backgroundColor('#ff6b89d4')\n          },\n          pressed: {\n            .backgroundColor('#ffc81f2a')\n          }\n        })\n        .width('60%')\n        .height('6%')\n        .onClick(() => {\n          this.setWindowLayoutFullScreen(true);\n          this.message = '沉浸式布局';\n        })\n\n        Button() {\n          Text('设置窗口为非沉浸式布局')\n            .fontSize(18)\n            .fontWeight(FontWeight.Normal)\n        }\n        .type(ButtonType.Normal)\n        .borderRadius(15)\n        .margin({ top: 20 })\n        .stateStyles({\n          normal: {\n            .backgroundColor('#ff6b89d4')\n          },\n          pressed: {\n            .backgroundColor('#ffc81f2a')\n          }\n        })\n        .width('60%')\n        .height('6%')\n        .onClick(() => {\n          this.setWindowLayoutFullScreen(false);\n          this.message = '非沉浸式布局';\n        })\n      }\n      .width('100%')\n    }\n    .backgroundColor('#fceaeaea')\n    .height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "图1 设置窗口是否为沉浸式布局"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(931289)/* ["default"] */.A) + "",
            width: "400",
            height: "420"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["应用主动避让：应用不使用窗口避让能力（即设置窗口为沉浸式布局）。首次通过", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#getwindowavoidarea9",
            children: "getWindowAvoidArea"
          }), "接口可获取屏幕顶部需要规避的矩阵区域topRect，获取到该值后应用可对应做布局避让，并且注册", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ref/arkui-api/arkui-arkts/window-manager-api/js-apis-window/arkts-apis-window-window/arkts-apis-window-window#onavoidareachange9",
            children: "on('avoidAreaChange')"
          }), "监听系统避让区域变化以进行布局的动态调整。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// Index.ets\nimport { BusinessError } from '@kit.BasicServicesKit';\nimport { common } from '@kit.AbilityKit';\nimport { window } from '@kit.ArkUI';\n\n@Entry\n@Component\nstruct Index {\n  @State topSafeHeight: number = 0;\n\n  aboutToAppear(): void {\n    try {\n      let windowClass: window.Window | undefined = undefined;\n      window.getLastWindow(this.getUIContext()?.getHostContext() as common.UIAbilityContext,\n        (err: BusinessError, data) => {\n          const errCode: number = err.code;\n          if (errCode) {\n            console.error('Failed to obtain the top window. Cause: ' + JSON.stringify(err));\n            return;\n          }\n          windowClass = data;\n          windowClass.setWindowLayoutFullScreen(true);\n          this.topSafeHeight = this.getUIContext()?.px2vp(\n            windowClass.getWindowAvoidArea(window.AvoidAreaType.TYPE_SYSTEM).topRect.height);\n          windowClass.on('avoidAreaChange', (data) => {\n            if (data.type == window.AvoidAreaType.TYPE_SYSTEM) {\n              this.topSafeHeight = this.getUIContext()?.px2vp(data.area.topRect.height)\n            }\n          })\n          console.info('Succeeded in obtaining the top window. Data: ' + JSON.stringify(data));\n        });\n    } catch (exception) {\n      console.error('Failed to obtain the top window. Cause: ' + JSON.stringify(exception));\n    }\n  }\n\n  build() {\n    Stack({ alignContent: Alignment.TopStart }) {\n      // 顶部避让区域\n      Row() {\n      }\n      .height(this.topSafeHeight)\n      .width(\"100%\")\n      .backgroundColor('#ccbbf375')\n      // 根据topSafeHeight动态调整应用布局\n      // ...\n    }\n    .height('100%')\n  }\n}\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "图2 应用主动做布局避让"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(612750)/* ["default"] */.A) + "",
            width: "400",
            height: "420"
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
31968(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
600874(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAMCAYAAAAQw/9NAAAB3ElEQVR42tVVQavTQBCeCUnaUgvt0YLgrYKeaqDwoAeF1tfTu3h4f0HE35D+BxGv/gA9eKqa3nIqhOai4XkTBIXk0MJmk21288bLi6T1tS+erB8sLMMw+818M7MIe0BEiIgEB0BECBVQJc5NPmVnDQA0AADbtrXrSNi2rdm2rUFF7PMnIizZtau3t5Pbl4lhGCCl/MNevpumWYlglmUH4+x7CwBA3yWXZZnled6zNE3vtNttr9/vv0TEn0UlEZGI6P5isXjOGLtXVPsALlut1sVgMHiFiF924txeLpcv1uu11Wg0vluW9RoRvTJJvZAVES+J6MFsNnsvhOgqpSCO4xHn/CERPQWA+CroXcdx3nHOe1JKQMSbWgbiOH7kOM5jIjpFxG9EhETUcl33zWq1Gm82G9B1Hebz+SkRPUHEzwUnDQBgOp0CAIDv++dCiG6aplIplTPG8iiKxmEYnhQZBUFwxjnvJUkilVK5lPLgUUrlSZJIznkvCIKzonphGJ5EUTRmjOVKqTxNUymE6Pq+f17mVLnR/xXwGok/FhLXajXodDqfhsPhrsQf/kZiwzCg2Wx+HY1GvyUGgFuu674tS1yv139MJpMtifHYhsQ0za0hOfo1838t6mP86n4B0xPjRjFu2yAAAAAASUVORK5CYII=");

},
931289(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958200-973f93091d875e3d92ea10954686c1b7.gif");

},
612750(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478201-57134ea3fa5037a2978a513c92d306ad.gif");

},
461021(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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