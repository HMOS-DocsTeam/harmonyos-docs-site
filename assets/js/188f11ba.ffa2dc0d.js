"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["594296"], {
82862(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_location_kit_geofence_guidelines_index_geofence_intro_geofence_intro_md_188_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-location-kit-geofence-guidelines-index-geofence-intro-geofence-intro-md-188.json
var site_docs_location_kit_geofence_guidelines_index_geofence_intro_geofence_intro_md_188_namespaceObject = JSON.parse('{"id":"location-kit/geofence-guidelines-index/geofence-intro/geofence-intro","title":"地理围栏简介","description":"地理围栏（GeoFence）是一种基于地理位置的技术，它允许开发者设定特定的地理区域，在用户进入、离开或驻留在这个特定区域的时候，可以把该地理围栏事件（进入/离开/驻留）通知应用，应用在接收到这些事件时完成后面的业务逻辑，以达到提醒用户的目的。","source":"@site/docs/location-kit/geofence-guidelines-index/geofence-intro/geofence-intro.md","sourceDirName":"location-kit/geofence-guidelines-index/geofence-intro","slug":"/location-kit/geofence-guidelines-index/geofence-intro/","permalink":"/harmonyos-docs-site/location-kit/geofence-guidelines-index/geofence-intro/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"地理围栏简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/geofence-intro","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"正地理编码与逆地理编码开发指导","permalink":"/harmonyos-docs-site/location-kit/geocode-guidelines/"},"next":{"title":"端侧GNSS围栏开发指导","permalink":"/harmonyos-docs-site/location-kit/geofence-guidelines-index/geofence-guidelines/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/location-kit/geofence-guidelines-index/geofence-intro/geofence-intro.md


const frontMatter = {
	title: '地理围栏简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/geofence-intro',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = '地理围栏简介';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    header: "header",
    p: "p",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "地理围栏简介",
        children: "地理围栏简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "地理围栏（GeoFence）是一种基于地理位置的技术，它允许开发者设定特定的地理区域，在用户进入、离开或驻留在这个特定区域的时候，可以把该地理围栏事件（进入/离开/驻留）通知应用，应用在接收到这些事件时完成后面的业务逻辑，以达到提醒用户的目的。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HarmonyOS支持2种类型的地理围栏：端侧围栏和云侧围栏。端侧围栏是指由开发者来管理围栏的生命周期，比如创建围栏，删除围栏；云侧围栏是指开发者直接使用华为云侧的公共围栏。端侧围栏比较适合于开发者要使用自己的个性化围栏场景，云侧围栏比较适合于开发者要使用公共围栏的场景。"
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