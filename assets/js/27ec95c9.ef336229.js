"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["302377"], {
486799(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_components_ui_js_basic_components_ui_js_components_images_ui_js_components_images_md_27e_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-components-ui-js-basic-components-ui-js-components-images-ui-js-components-images-md-27e.json
var site_docs_arkui_ui_js_dev_ui_js_components_ui_js_basic_components_ui_js_components_images_ui_js_components_images_md_27e_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-images/ui-js-components-images","title":"image开发指导","description":"image是图片组件，用来渲染展示图片。具体用法请参考image组件。","source":"@site/docs/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-images/ui-js-components-images.md","sourceDirName":"arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-images","slug":"/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-images/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-images/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"image开发指导","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-images","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"picker开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-picker/"},"next":{"title":"image-animator开发指导","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-image-animator/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-components/ui-js-basic-components/ui-js-components-images/ui-js-components-images.md


const frontMatter = {
	title: 'image开发指导',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-components-images',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'image开发指导';

const assets = {

};



const toc = [{
  "value": "创建image组件",
  "id": "创建image组件",
  "level": 2
}, {
  "value": "设置image样式",
  "id": "设置image样式",
  "level": 2
}, {
  "value": "加载图片",
  "id": "加载图片",
  "level": 2
}, {
  "value": "场景示例",
  "id": "场景示例",
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
    p: "p",
    pre: "pre",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "image开发指导",
        children: "image开发指导"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["image是图片组件，用来渲染展示图片。具体用法请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-basic-comp/js-components-basic-image/js-components-basic-image",
        children: "image"
      }), "组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "创建image组件",
      children: "创建image组件"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在pages/index目录下的hml文件中创建一个image组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.hml -->\n<div class=\"container\">\n  <image style=\"height: 30%;\" src=\"common/images/bg-tv.jpg\"> </image>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #F1F3F5;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(344941)/* ["default"] */.A) + "",
        width: "232",
        height: "311"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "设置image样式",
      children: "设置image样式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过设置width、height和object-fit属性定义图片的宽、高和缩放样式。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.hml -->\n<div class=\"container\">\n  <image src=\"common/images/bg-tv.jpg\"> </image>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color:#F1F3F5;\n}\nimage{\n  width: 80%;\n  height: 500px;\n  border: 5px solid saddlebrown;\n  border-radius: 20px;\n  object-fit: contain;\n  match-text-direction:true;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(844429)/* ["default"] */.A) + "",
        width: "202",
        height: "246"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "加载图片",
      children: "加载图片"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "图片成功加载时触发complete事件，返回加载的图源尺寸。加载失败则触发error事件，打印图片加载失败。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.hml -->\n<div class=\"container\" >\n  <div>\n    <image src=\"common/images/bg-tv.jpg\" oncomplete=\"imageComplete(1)\" onerror=\"imageError(1)\"> </image>\n  </div>\n  <div>\n    <image src=\"common/images/bg-tv1.jpg\" oncomplete=\"imageComplete(2)\" onerror=\"imageError(2)\"> </image>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container{\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n  justify-content: center;\n  align-self: center;\n  background-color: #F1F3F5;\n}\n.container div{\n  margin-left: 10%;\n  width: 80%;\n  height: 300px;\n  margin-bottom: 40px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.js\nimport promptAction from '@ohos.promptAction';\nexport default {\n  imageComplete(i,e){\n    promptAction.showToast({\n      message: \"image \"+i+\"'s width\"+ e.width+\"----image \"+i+\"'s height\"+e.height,\n      duration: 3000,\n    })\n  },\n  imageError(i,e){\n    setTimeout(()=>{\n      promptAction.showToast({\n        message: \"Failed to load image \"+i+\".\",\n        duration: 3000,\n      })\n    },3000)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(503447)/* ["default"] */.A) + "",
        width: "330",
        height: "705"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景示例",
      children: "场景示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在本场景中，开发者长按图片后将慢慢隐藏图片，当完全隐藏后再重新显示原始图片。定时器setInterval每隔一段时间改变图片透明度,实现慢慢隐藏的效果，当透明度为0时清除定时器，设置透明度为1。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- index.hml -->\n<div class=\"page-container\">\n  <div class=\"content\">\n    <div class=\"image-container\">\n      <image class=\"testimage\" src=\"{{testuri}}\" style=\"opacity:{{imageopacity}};\" onlongpress=\"changeopacity\"> </image>\n    </div>\n    <div class=\"text-container\">\n      <text style=\"font-size: 37px;font-weight:bold;color:orange;text-align: center;width: 100%;\">Touch and hold the image</text>\n    </div>\n  </div>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.page-container {\n  width: 100%;\n  height: 100%;\n  flex-direction:column;\n  align-self: center;\n  justify-content: center;\n  background-color:#F1F3F5;\n  background-color: #F1F3F5;\n}\n.content{\n  flex-direction:column;\n}\n.image-container {\n  width: 100%;\n  height: 300px;\n  align-items: center;\n  justify-content: center;\n}\n.text-container {\n  margin-top:50px;\n  width: 100%;\n  height: 60px;\n  flex-direction: row;\n  justify-content: space-between;\n}\n.testimage {\n  width: 100%;  height: 400px;\n  object-fit: scale-down;\n  border-radius: 20px;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// index.js\nimport promptAction from '@ohos.promptAction';\nexport default {\n  data: {\n    testuri: 'common/images/bg-tv.jpg',\n    imageopacity:1,\n    timer: null\n  },\n  changeopacity: function () {\n    promptAction.showToast({\n      message: 'Touch and hold the image.'\n    })\n    var opval = this.imageopacity * 20\n    clearInterval(this.timer);\n    this.timer = setInterval(()=>{\n      opval--;\n      this.imageopacity = opval / 20\n      if (opval===0) {\n        clearInterval(this.timer)\n        this.imageopacity = 1\n      }\n    },100);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(804753)/* ["default"] */.A) + "",
        width: "261",
        height: "528"
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
804753(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438155-879f4689506de46863a62323e7031fc1.gif");

},
844429(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583478109-6c7559f56a4ccf333913851efe80caa8.png");

},
503447(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798460-80989de42b6b5834d8cf6c8e12a561ed.gif");

},
344941(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958108-e6d49e6408ef59b10058ab36ec075aa7.png");

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