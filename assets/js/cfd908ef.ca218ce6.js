"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["775493"], {
966712(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_faq_map_faq_4_map_faq_4_md_cfd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-faq-map-faq-4-map-faq-4-md-cfd.json
var site_docs_map_kit_guide_map_faq_map_faq_4_map_faq_4_md_cfd_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-faq/map-faq-4/map-faq-4","title":"设置地图Logo始终显示","description":"*现象描述*","source":"@site/docs/map-kit-guide/map-faq/map-faq-4/map-faq-4.md","sourceDirName":"map-kit-guide/map-faq/map-faq-4","slug":"/map-kit-guide/map-faq/map-faq-4/","permalink":"/harmonyos-docs-site/map-kit-guide/map-faq/map-faq-4/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"设置地图Logo始终显示","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-faq-4","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"手势卡顿或者不生效","permalink":"/harmonyos-docs-site/map-kit-guide/map-faq/map-faq-3/"},"next":{"title":"场景化控件的language参数生效范围","permalink":"/harmonyos-docs-site/map-kit-guide/map-faq/map-faq-5/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-faq/map-faq-4/map-faq-4.md


const frontMatter = {
	title: '设置地图Logo始终显示',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-faq-4',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '设置地图Logo始终显示';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    header: "header",
    img: "img",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "设置地图logo始终显示",
        children: "设置地图Logo始终显示"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "现象描述"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Map Kit地图Logo不可见。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(802409)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "414",
        height: "920"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "可能原因"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "用户在开发过程中，若地图Logo被其他UI控件或页面元素覆盖，则可能导致Logo不可见。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "处理步骤"
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Map Kit无法隐藏地图Logo，用户可通过调整地图组件的边距或布局，确保地图Logo不被其他控件遮挡。解决方案参考如下代码："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { MapComponent, mapCommon, map } from '@kit.MapKit';\nimport { AsyncCallback } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct MapKitAppDemo {\n  private mapOptions?: mapCommon.MapOptions;\n  private callback?: AsyncCallback<map.MapComponentController>;\n  private mapController?: map.MapComponentController;\n  private mapEventManager?: map.MapEventManager;\n  private TAG = 'MapKitAppDemo';\n  @State isShowSheet: boolean = true;\n\n  @Builder\n  Panel() {\n    Column() {\n      Row() {\n        Text() {\n          SymbolSpan($r('sys.symbol.magnifyingglass'))\n            .fontSize(24)\n            .fontColor([Color.Gray])\n        }\n\n        TextInput()\n          .layoutWeight(1)\n          .backgroundColor('#33b1afaf')\n          .borderRadius(24)\n          .margin({ left: 8, right: 8 })\n      }\n      .backgroundColor(Color.White)\n      .width('100%')\n    }\n    .borderRadius(10)\n    .padding({\n      top: 8,\n      left: 8,\n      right: 8,\n      bottom: 4\n    })\n    .width('100%')\n  }\n\n  aboutToAppear() {\n    // 地图初始化参数，设置地图中心点坐标及层级\n    this.mapOptions = {\n      position: {\n        target: {\n          latitude: 31.979227,\n          longitude: 118.762245\n        },\n        zoom: 17\n      }\n    };\n\n    // 地图初始化的回调\n    this.callback = async (err, mapController) => {\n      if (!err) {\n        // 获取地图的控制器类，用来操作地图\n        this.mapController = mapController;\n        // 返回地图组件的监听事件管理接口\n        this.mapEventManager = this.mapController.getEventManager();\n        let callback = () => {\n          console.info(this.TAG, `on-mapLoad`);\n        }\n        // 监听地图加载事件\n        this.mapEventManager?.on('mapLoad', callback);\n      } else {\n        console.error(`Failed to initialize the map, code is：${err.code}, message is ${err.message}`);\n      }\n    }\n  }\n\n  aboutToDisappear(): void {\n    this.mapEventManager?.off('mapLoad');\n    this.mapController?.clear();\n  }\n\n  private bindSheetOptions() {\n    let bindSheetOptions = {\n      // 半模态框三个状态的高度\n      detents: [100, 300, 500],\n      // 半模态所在页面允许交互\n      enableOutsideInteractive: true,\n      maskColor: Color.Transparent,\n      backgroundColor: Color.White,\n      blurStyle: BlurStyle.Thick,\n      showClose: false,\n      preferType: SheetType.CENTER,\n      onAppear: () => {\n        this.mapController?.setPadding({\n          bottom: 358\n        })\n      },\n      onHeightDidChange: (height: number) => {\n        // 动态设置地图底部边距，避免遮挡logo\n        this.mapController?.setPadding({\n          bottom: height + 8\n        })\n      }\n    } as BindOptions\n    return bindSheetOptions;\n  }\n\n  build() {\n    Stack() {\n      Column() {\n        // 调用MapComponent组件初始化地图\n        MapComponent({ mapOptions: this.mapOptions, mapCallback: this.callback })\n          .width('100%')\n          .height('100%')\n        Column()\n          .bindSheet(this.isShowSheet, this.Panel(), this.bindSheetOptions())\n          .visibility(this.isShowSheet ? Visibility.Visible : Visibility.None)\n          .justifyContent(FlexAlign.Start)\n      }\n    }\n    .height('100%')\n    .width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "展示效果如图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(914578)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "870",
        height: "1920"
      })
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
914578(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583479057-c863a03a2823b87405dfd483e508fcdb.gif");

},
802409(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959056-f65fa1e84e63557f33e038ab7faa45d8.jpg");

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