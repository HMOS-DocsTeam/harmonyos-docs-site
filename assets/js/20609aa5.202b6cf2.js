"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["143088"], {
627307(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_js_comp_arkui_js_full_comp_js_full_grid_comp_js_components_grid_basic_concepts_js_components_grid_basic_concepts_md_206_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-js-comp-arkui-js-full-comp-js-full-grid-comp-js-components-grid-basic-concepts-js-components-grid-basic-concepts-md-206.json
var site_docs_ref_arkui_api_arkui_js_comp_arkui_js_full_comp_js_full_grid_comp_js_components_grid_basic_concepts_js_components_grid_basic_concepts_md_206_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-grid-comp/js-components-grid-basic-concepts/js-components-grid-basic-concepts","title":"基本概念","description":"提供栅格布局效果，通过栅格系统进行元素布局，主要提供&lt;grid-container&gt;、&lt;grid-row&gt;、&lt;grid-col&gt;栅格容器组件。","source":"@site/docs-ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-grid-comp/js-components-grid-basic-concepts/js-components-grid-basic-concepts.md","sourceDirName":"arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-grid-comp/js-components-grid-basic-concepts","slug":"/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-grid-comp/js-components-grid-basic-concepts/js-components-grid-basic-concepts","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-grid-comp/js-components-grid-basic-concepts/js-components-grid-basic-concepts","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"基本概念","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-grid-basic-concepts","kit":"应用框架","last_updated":"2026-04-22","slug":"js-components-grid-basic-concepts"},"sidebar":"ref","previous":{"title":"OffscreenCanvasRenderingContext2D对象","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-canvas-comp/js-offscreencanvasrenderingcontext2d/js-offscreencanvasrenderingcontext2d"},"next":{"title":"grid-container","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-grid-comp/js-components-grid-container/js-components-grid-container"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-js-comp/arkui-js-full-comp/js-full-grid-comp/js-components-grid-basic-concepts/js-components-grid-basic-concepts.md


const frontMatter = {
	title: '基本概念',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-components-grid-basic-concepts',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-components-grid-basic-concepts'
};
const contentTitle = '基本概念';

const assets = {

};



const toc = [{
  "value": "栅格系统的概念",
  "id": "栅格系统的概念",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "基本概念",
        children: "基本概念"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "提供栅格布局效果，通过栅格系统进行元素布局，主要提供<grid-container>、<grid-row>、<grid-col>栅格容器组件。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "栅格系统作为一种辅助布局的定位工具，在平面设计和网站设计都起到了很好的作用，对移动设备的界面设计有较好的借鉴作用。总结栅格系统对于移动设备的优势主要有："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "给布局提供一种可循的规律，解决多尺寸多设备的动态布局问题。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "给系统提供一种统一的定位标注，保证各模块各设备的布局一致性。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "给应用提供一种灵活的间距调整方法，满足特殊场景布局调整的可能性。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "栅格系统的概念",
      children: "栅格系统的概念"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "栅格系统有Margins、Gutters、Columns三个属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Margins："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "是用来控制元素距离屏幕最边缘的距离关系，可以根据设备的不同尺寸，定义不同的Margin值作为断点系统中的统一规范。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Gutters："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "是用来控制元素和元素之间的距离关系，可以根据设备的不同尺寸，定义不同的Gutters值作为断点系统中的统一规范。为了保证较好的视觉效果，Gutters通常的取值不会大于Margins的取值。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "Columns："
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "是用来辅助布局的主要定位工具，不同的屏幕尺寸匹配不同的Columns数量来辅助布局定位。Columns的宽度在保证Margins和Gutters符合规范的情况下，根据实际设备的宽度和Columns数量自动计算每一个Columns的宽度。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(912941)/* ["default"] */.A) + "",
            width: "698",
            height: "384"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "栅格断点系统"
            })
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "栅格系统定义了不同水平宽度设备对应Columns的数量关系，形成了一套断点规则定义。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "栅格系统以水平分辨率值作为断点依据，不同的设备根据自身当前水平宽度px值(配置了autoDesignWidth为true)在不同的断点范围内的情况，显示不同数量的栅格数。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "xs: 0<水平分辨率<320时：2 Columns栅格；"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "sm: 320<=水平分辨率<600时：4 Columns栅格；"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "md: 600<=水平分辨率<840时：8 Columns栅格；"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "lg: 840<=水平分辨率时：12 Columns栅格。"
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
912941(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552800590-100fac8a47a64bf99e7bac34c7427aed.png");

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