"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["627898"], {
416494(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_previewer_01_ide_previewer_arkui_ide_previewer_arkui_md_cbd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-previewer-01-ide-previewer-arkui-ide-previewer-arkui-md-cbd.json
var site_docs_ide_previewer_01_ide_previewer_arkui_ide_previewer_arkui_md_cbd_namespaceObject = JSON.parse('{"id":"ide-previewer-01/ide-previewer-arkui/ide-previewer-arkui","title":"查看ArkUI预览效果","description":"ArkUI预览支持页面预览、组件预览和卡片预览，下图中左侧图标为页面预览，右侧图标为组件预览，卡片预览在创建卡片文件后可直接预览。","source":"@site/docs/ide-previewer-01/ide-previewer-arkui/ide-previewer-arkui.md","sourceDirName":"ide-previewer-01/ide-previewer-arkui","slug":"/ide-previewer-01/ide-previewer-arkui/","permalink":"/harmonyos-docs-site/ide-previewer-01/ide-previewer-arkui/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"查看ArkUI预览效果","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-arkui","kit":"devtools/write-debug","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"查看ArkTS/JS预览效果","permalink":"/harmonyos-docs-site/ide-previewer-01/ide-previewer-arkts-js/"},"next":{"title":"Profile Manager","permalink":"/harmonyos-docs-site/ide-previewer-01/ide-previewer-profile-manager/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-previewer-01/ide-previewer-arkui/ide-previewer-arkui.md


const frontMatter = {
	title: '查看ArkUI预览效果',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-previewer-arkui',
	kit: 'devtools/write-debug',
	last_updated: '2026-04-24'
};
const contentTitle = '查看ArkUI预览效果';

const assets = {

};



const toc = [{
  "value": "页面预览",
  "id": "页面预览",
  "level": 2
}, {
  "value": "组件预览",
  "id": "组件预览",
  "level": 2
}, {
  "value": "卡片预览",
  "id": "卡片预览",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "查看arkui预览效果",
        children: "查看ArkUI预览效果"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["ArkUI预览支持页面预览、组件预览和卡片预览，下图中左侧图标", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(997240)/* ["default"] */.A) + "",
        width: "18",
        height: "18"
      }), "为页面预览，右侧图标", (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(622439)/* ["default"] */.A) + "",
        width: "17",
        height: "17"
      }), "为组件预览，卡片预览在创建卡片文件后可直接预览。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(501371)/* ["default"] */.A) + "",
        width: "276",
        height: "56"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "页面预览",
      children: "页面预览"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS应用/元服务支持页面预览。页面预览通过在工程的ets文件头部添加@Entry实现。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Entry的使用参考如下示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Entry\n@Component\nstruct Index {\n  @State message: string = 'Hello World'\n\n  build() {\n    Row() {\n      Column() {\n        Text(this.message)\n          .fontSize(50)\n          .fontWeight(FontWeight.Bold)\n      }\n      .width('100%')\n    }\n    .height('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "组件预览",
      children: "组件预览"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS应用/元服务支持组件预览。组件预览支持实时预览，不支持动态图和动态预览。组件预览通过在组件前添加注解@Preview实现，在单个源文件中，最多可以使用10个@Preview装饰自定义组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "@Preview的使用参考如下示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Preview({\n  title: 'ContentTable'\n})\n@Component\nstruct ContentTablePreview {\n  build() {\n    Flex() {\n      ContentTable({ foodItem: getDefaultFoodData() })\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "以上示例的组件预览效果如下图所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(650784)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "1540",
        height: "942"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件预览默认的预览设备为Phone，若您想查看不同的设备，或者不同的屏幕形状，或者不同设备语言等情况下的组件预览效果，可以通过设置@Preview的参数，指定预览设备的相关属性。若不设置@Preview的参数，默认的设备属性如下所示："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Preview({\n  title: 'Component1',  //预览组件的名称\n  deviceType: 'phone',  //指定当前组件预览渲染的设备类型，默认为Phone\n  width: 1080,  //预览设备的宽度，单位：px\n  height: 2340,  //预览设备的长度，单位：px\n  colorMode: 'light',  //显示的亮暗模式，当前支持取值为light\n  dpi: 480,  //预览设备的屏幕DPI值\n  locale: 'zh_CN',  //预览设备的语言，如zh_CN、en_US等\n  orientation: 'portrait',  //预览设备的横竖屏状态，取值为portrait或landscape\n  roundScreen: false  //设备的屏幕形状是否为圆形\n})\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "请注意，如果被预览的组件是依赖参数注入的组件，建议的预览方式是：定义一个组件片段，在该片段中声明将要预览的组件，以及该组件依赖的入参，并在组件片段上标注@Preview注解，以表明将预览该片段中的内容。例如，要预览如下组件："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Component\nstruct Title {\n  @Prop context: string; \n  build() {\n    Text(this.context)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "建议按如下方式预览："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "@Preview\n@Component    //定义组件片段TitlePreview\nstruct TitlePreview {\n  build() {\n    Title({ context: 'MyTitle' })    //在该片段中声明将要预览的组件Title，以及该组件依赖的入参 {context: 'MyTitle'}\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "卡片预览",
      children: "卡片预览"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["创建卡片并选中卡片文件后，点击右侧边栏", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Previewer"
        })
      }), "按钮即可预览卡片。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(816416)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "676",
        height: "931"
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
501371(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
650784(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913446-71ccbdae9c1661df66f83dafdf3ac970.gif");

},
816416(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002530913442-d436c9caeeb1c699ac02157b6fc3cc34.png");

},
622439(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAABe0lEQVQ4ja2TPS8EURiFn5m5Y7NCIyiERpDI7kSikO0UEhEtciU6tX9AKX6BWicMaoWPgmqjkDArEkGzIvGRLYYQ7p0ZxcayOzsS4bTvPU/Om3Nfw/f9iD/K/CsAQCQN9q8Fy3kbgLmcYqRbJ0KM2nU+zfvX1fyRbp0Iq0CSzLWqBzN83492rwQTa+kfzbXakK+M9erqJJclk+V8AyvH9o/m2UHFXO6dnpYwvs7tk0FHc5QI+27+fBuDLB6k0AFIR9HfFlZgQMV8/mDiejbCgoXhtzjk+d3A9QRuwSbTHiIdRa4zACBftHALNmf3JjKrkI6mqaFOku0LwVBnQGtjxNaZjesJVGgAEbYJ0tFMZhSPLwZHNxbjfV/tVPo8vTOZ30sxldXIrGIyo9i5LI9HezRXJZOlwxSbBYF0FON9xJMAlF4NXK+cItcVIB1NBGx4gnzRQjoa6Sha0tXnFvuxAEEI6wWb1ZNyQzMDiumswkq4tLqQ3+pfrvhfIB9W0cIVrMv9nAAAAABJRU5ErkJggg==");

},
997240(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAABZ0lEQVQ4jc2UsWoCQRCGvz1XchHJBRTskkI8IRB9CSsTLVLqC8Qn0heITSBFNFa+RBQCKhZJJyhEETnwvE1xoO55NsFAptrdmf12dv7ZFYvFQnECM04BOSlI7k9ePiSdoSQZUxTSGwppVwvujiXdcYTpSlC0XR5u3HBQZygp2i6ZhBd6airuUc17jGYGnaE8DkrGFJmEx20qHLS/nozpGmmgQnqzHc8dwdtQ8vktALi+VNzZLpapDmIBRJj87YGk1jKZO4JKbg1AsxfFMhX1ksN91g1u0TMCeHqPUmuZAFRyaxplZ+tr9qJUns+plxyq+bW272/kB6jm11im4vHVpNmLIsQum4szRaMcfjWtRt2xJBX3VZs7gvZA8jX3k76yPO6zfrH7E4PJ0tD6TMuoO45QzfsSW6Y6qEMw9ihouhKMZruyBfupP/F9o5nBdCU0nwYq2q72RIKgydLQnsi+hfbRb+z/fSM/VOiRozybMbYAAAAASUVORK5CYII=");

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