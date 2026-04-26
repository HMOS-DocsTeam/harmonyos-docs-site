"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["450254"], {
241472(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_map_kit_guide_map_introduction_map_introduction_md_fbc_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-map-kit-guide-map-introduction-map-introduction-md-fbc.json
var site_docs_map_kit_guide_map_introduction_map_introduction_md_fbc_namespaceObject = JSON.parse('{"id":"map-kit-guide/map-introduction/map-introduction","title":"Map Kit简介","description":"Map Kit（地图服务）为开发者提供强大而便捷的地图能力，助力全球开发者实现个性化显示地图、位置搜索和路径规划等功能，轻松完成地图构建工作。您可以轻松地在HarmonyOS应用/元服务中集成地图相关的功能，全方位提升用户体验。","source":"@site/docs/map-kit-guide/map-introduction/map-introduction.md","sourceDirName":"map-kit-guide/map-introduction","slug":"/map-kit-guide/map-introduction/","permalink":"/harmonyos-docs-site/map-kit-guide/map-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Map Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"附录","permalink":"/harmonyos-docs-site/location-kit/location-kit-appendix/"},"next":{"title":"开发准备","permalink":"/harmonyos-docs-site/map-kit-guide/map-config-agc/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/map-kit-guide/map-introduction/map-introduction.md


const frontMatter = {
	title: 'Map Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/map-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Map Kit简介';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束和限制",
  "id": "约束和限制",
  "level": 2
}, {
  "value": "支持的国家/地区",
  "id": "支持的国家地区",
  "level": 3
}, {
  "value": "支持的设备",
  "id": "支持的设备",
  "level": 3
}, {
  "value": "示例代码",
  "id": "示例代码",
  "level": 3
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "map-kit简介",
        children: "Map Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Map Kit（地图服务）为开发者提供强大而便捷的地图能力，助力全球开发者实现个性化显示地图、位置搜索和路径规划等功能，轻松完成地图构建工作。您可以轻松地在HarmonyOS应用/元服务中集成地图相关的功能，全方位提升用户体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Map Kit提供了全球3.2亿的 POI（Point of Interest，兴趣点）。在地图表达中，一个 POI可代表一家商铺、一栋办公楼、一处景点等等。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Map Kit不断优化丰富地图的细节呈现能力，例如在POI和路网信息展示方面，根据POI属性信息及区域路网差异，在不同层级比例尺条件下，为用户展示更合适的POI和路网信息。手势交互方面，提供了包括缩放、旋转、移动、倾斜等流畅的交互体验。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["中国大陆使用GCJ02坐标系，中国台湾和海外使用WGS84坐标系。详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/map-kit-guide/map-calculation-tool/map-convert-coordinate",
        children: "坐标纠偏"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Map Kit提供以下功能，满足绝大多数地图开发的需求："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/map-kit-guide/map-creation/map-presenting",
          children: "创建地图"
        }), "：创建地图组件、设置地图属性、自定义地图等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/map-kit-guide/map-interaction/map-controls-and-interaction",
          children: "地图交互"
        }), "：控制地图的交互手势和交互按钮。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/map-kit-guide/map-drawing/map-marker",
          children: "在地图上绘制"
        }), "：添加位置标记、覆盖物以及各种形状等。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/map-kit-guide/map-location-services/map-site-search",
          children: "位置搜索"
        }), "：多种查询POI信息的能力，提供正地理编码、逆地理编码的能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/map-kit-guide/map-navi/map-navi-routes",
          children: "路径规划"
        }), "：提供驾车、步行、骑行路径规划能力。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/map-kit-guide/map-static-diagram",
          children: "静态图"
        }), "：获取一张地图图片。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/map-kit-guide/map-advanced-controls/map-location-details",
          children: "地图Picker"
        }), "：提供地点详情展示控件、地点选取控件、区划选择控件。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/map-kit-guide/map-petalmaps",
          children: "通过地图应用实现导航等能力"
        }), "：查看位置详情、查看路径规划、发起导航、发起内容搜索。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.a, {
          href: "/map-kit-guide/map-calculation-tool/map-convert-coordinate",
          children: "地图计算工具"
        }), "：华为地图涉及的2种坐标系及其使用区域和转换。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束和限制",
      children: "约束和限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的国家地区",
      children: "支持的国家/地区"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/map-kit-guide/map-appendix/map-supported",
        children: "支持的国家/地区"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "支持的设备",
      children: "支持的设备"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本kit仅适用于Phone、Tablet、PC/2in1和Wearable。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例代码",
      children: "示例代码"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Map Kit（地图服务）示例代码，请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://gitcode.com/HarmonyOS_Samples/map-kit_-sample-code_-demo-arkts",
        children: "示例代码"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["通用差异：请参见“", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-run-emulator/ide-emulator-overview/ide-emulator-specification#section1227613205203",
          children: "模拟器与真机的差异"
        }), "”。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ARM模拟器：petalMaps命名空间下相关功能不支持，我的位置功能不支持。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "x86模拟器：petalMaps命名空间下相关功能不支持，我的位置功能不支持，手表不支持。"
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