"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["653479"], {
428057(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_ui_js_building_ui_ui_js_building_layout_ui_js_building_ui_layout_intro_ui_js_building_ui_layout_intro_md_bda_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-ui-js-building-ui-ui-js-building-layout-ui-js-building-ui-layout-intro-ui-js-building-ui-layout-intro-md-bda.json
var site_docs_arkui_ui_js_dev_ui_js_building_ui_ui_js_building_layout_ui_js_building_ui_layout_intro_ui_js_building_ui_layout_intro_md_bda_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-intro/ui-js-building-ui-layout-intro","title":"布局说明","description":"设备的基准宽度为720px（px为逻辑像素，非物理像素），实际显示效果会根据实际屏幕宽度进行缩放。","source":"@site/docs/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-intro/ui-js-building-ui-layout-intro.md","sourceDirName":"arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-intro","slug":"/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-intro/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"布局说明","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-building-ui-layout-intro","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"组件介绍","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-ui-component/"},"next":{"title":"添加标题行和文本区域","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-text/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/ui-js-building-ui/ui-js-building-layout/ui-js-building-ui-layout-intro/ui-js-building-ui-layout-intro.md


const frontMatter = {
	title: '布局说明',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ui-js-building-ui-layout-intro',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '布局说明';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "布局说明",
        children: "布局说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设备的基准宽度为720px（px为逻辑像素，非物理像素），实际显示效果会根据实际屏幕宽度进行缩放。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "其换算关系如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件的width设为100px时，在宽度为720物理像素的屏幕上，实际显示为100物理像素；在宽度为1440物理像素的屏幕上，实际显示为200物理像素。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "一个页面的基本元素包含标题区域、文本区域、图片区域等，每个基本元素内还可以包含多个子元素，开发者根据需求还可以添加按钮、开关、进度条等组件。在构建页面布局时，需要对每个基本元素思考以下几个问题："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "该元素的尺寸和排列位置"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "是否有重叠的元素"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "是否需要设置对齐、内间距或者边界"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "是否包含子元素及其排列位置"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "是否需要容器组件及其类型"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "将页面中的元素分解之后再对每个基本元素按顺序实现，可以减少多层嵌套造成的视觉混乱和逻辑混乱，提高代码的可读性，方便对页面做后续的调整。以下图为例进行分解："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " 页面布局分解"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(272135)/* ["default"] */.A) + "",
        width: "872",
        height: "897"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图2"
        })
      }), " 留言区布局分解"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(843583)/* ["default"] */.A) + "",
        width: "648",
        height: "289"
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
843583(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583438127-c456b76b2be1137c1520bb303ae92f35.png");

},
272135(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552798432-f61e0f84a95e87ef67f1848376ee83bf.png");

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