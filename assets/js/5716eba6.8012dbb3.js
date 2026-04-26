"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["540595"], {
834683(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_weather_service_kit_guide_weather_service_introduction_weather_service_introduction_md_571_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-weather-service-kit-guide-weather-service-introduction-weather-service-introduction-md-571.json
var site_docs_weather_service_kit_guide_weather_service_introduction_weather_service_introduction_md_571_namespaceObject = JSON.parse('{"id":"weather-service-kit-guide/weather-service-introduction/weather-service-introduction","title":"Weather Service Kit简介","description":"Weather Service Kit（天气服务）是鸿蒙生态下的一个数据提供服务，Weather Service Kit融合了多家气象行业TOPs供应商，提供专业、精准、稳定的超本地化天气预报服务，帮助开发者为用户提供更贴心的本地生活服务，支撑行业客户防灾减灾、降本增效。开发者可以轻松地在HarmonyOS应用/元服务中获取天气数据。","source":"@site/docs/weather-service-kit-guide/weather-service-introduction/weather-service-introduction.md","sourceDirName":"weather-service-kit-guide/weather-service-introduction","slug":"/weather-service-kit-guide/weather-service-introduction/","permalink":"/harmonyos-docs-site/weather-service-kit-guide/weather-service-introduction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Weather Service Kit简介","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/weather-service-introduction","kit":"app-services","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"用户删卡时会删除哪些信息？","permalink":"/harmonyos-docs-site/wallet-kit-guide/wallet-kit-faq/wallet-faq-8/"},"next":{"title":"开发准备","permalink":"/harmonyos-docs-site/weather-service-kit-guide/weather-service-preparations/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/weather-service-kit-guide/weather-service-introduction/weather-service-introduction.md


const frontMatter = {
	title: 'Weather Service Kit简介',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/weather-service-introduction',
	kit: 'app-services',
	last_updated: '2026-04-22'
};
const contentTitle = 'Weather Service Kit简介';

const assets = {

};



const toc = [{
  "value": "场景介绍",
  "id": "场景介绍",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "模拟器支持情况",
  "id": "模拟器支持情况",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
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
        id: "weather-service-kit简介",
        children: "Weather Service Kit简介"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Weather Service Kit（天气服务）是鸿蒙生态下的一个数据提供服务，Weather Service Kit融合了多家气象行业TOPs供应商，提供专业、精准、稳定的超本地化天气预报服务，帮助开发者为用户提供更贴心的本地生活服务，支撑行业客户防灾减灾、降本增效。开发者可以轻松地在HarmonyOS应用/元服务中获取天气数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "场景介绍",
      children: "场景介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Weather Service Kit可以返回以下天气数据，满足开发者的天气数据使用需求："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "天气预报：开发者可以通过Weather Service Kit获取城市级和POI级的天气预报，包括实况天气、48小时逐小时天气预报（海外城市24小时逐小时天气预报）、10日天气预报，包含天气状况、温度、风力、风向、湿度等全面的预报数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "分钟级降水预报：为您提供附近方圆5km范围内、未来2小时的分钟级降雨态势预报，包含降水形态、降水强度等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "天气预警：为您提供气象局实时发布的天气和环境预警信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "天气指数：为您提供未来3天的晾晒指数、穿衣指数、紫外线指数、路况指数、钓鱼指数等生活指数 。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "天文数据：为您提供日出时间、日落时间、月出时间、月落时间、以及月相等数据。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "潮汐：为您提供全国主要港口和城市的潮汐数据。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "使用限制：Weather Service Kit当前仅面向系统应用开放，暂不对外开放。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "设备限制：本kit仅适用于Phone、Tablet、PC/2in1、Wearable、TV设备。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "模拟器支持情况",
      children: "模拟器支持情况"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本kit暂不支持模拟器。"
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