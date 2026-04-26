"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["387660"], {
971799(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_avsession_kit_avsession_recommendation_avsession_recommendation_md_c04_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-avsession-kit-avsession-recommendation-avsession-recommendation-md-c04.json
var site_docs_avsession_kit_avsession_recommendation_avsession_recommendation_md_c04_namespaceObject = JSON.parse('{"id":"avsession-kit/avsession-recommendation/avsession-recommendation","title":"播控推荐服务","description":"播控特性简介","source":"@site/docs/avsession-kit/avsession-recommendation/avsession-recommendation.md","sourceDirName":"avsession-kit/avsession-recommendation","slug":"/avsession-kit/avsession-recommendation/","permalink":"/harmonyos-docs-site/avsession-kit/avsession-recommendation/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"播控推荐服务","sidebar_position":5,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avsession-recommendation","kit":"media","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"音视频投播","permalink":"/harmonyos-docs-site/avsession-kit/playback-control-access-selfcheck/access-checklist/avcastpicker/"},"next":{"title":"Camera Kit简介","permalink":"/harmonyos-docs-site/camera-kit/camera-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/avsession-kit/avsession-recommendation/avsession-recommendation.md


const frontMatter = {
	title: '播控推荐服务',
	sidebar_position: 5,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/avsession-recommendation',
	kit: 'media',
	last_updated: '2026-04-22'
};
const contentTitle = '播控推荐服务';

const assets = {

};



const toc = [{
  "value": "播控特性简介",
  "id": "播控特性简介",
  "level": 2
}, {
  "value": "推荐资源位分配原则",
  "id": "推荐资源位分配原则",
  "level": 2
}, {
  "value": "约束与限制",
  "id": "约束与限制",
  "level": 2
}, {
  "value": "接入方式",
  "id": "接入方式",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "播控推荐服务",
        children: "播控推荐服务"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "播控特性简介",
      children: "播控特性简介"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播控推荐服务致力于为用户提供更便捷的操作路径、更精准的内容推荐服务，帮助用户发现更感兴趣的内容，助力应用从系统级入口直达服务。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播控推荐服务基于用户使用音频类应用的习惯来分配播控推荐服务的资源位，保障用户常用的应用有更多的曝光。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "同时，将基于用户的听歌偏好进行内容精准推荐，推荐的内容源需要三方应用通过云侧接口捐赠给播控中心。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(524967)/* ["default"] */.A) + "",
        width: "327",
        height: "451"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "推荐资源位分配原则",
      children: "推荐资源位分配原则"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播控中心推荐服务作为公共系统级入口，将依据统一的分配原则，来保证该栏目资源位分配公平，且符合用户的预期。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "面向对象：在应用市场的分类显示为“影音娱乐-音乐”、“影音娱乐-电台”的两大类应用。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "分配原则：基于用户最近30天使用应用的总时长分配，用户使用频次高、使用时间长的应用将获得较多的资源位。如某用户使用最多的应用是“应用A”，那么“应用A”获得的曝光资源位是最多的。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束与限制",
      children: "约束与限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "当前仅支持在中国大陆区域使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "接入方式",
      children: "接入方式"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "播控推荐服务当前受限开放，在使用此功能前，您需要向华为运营人员发送申请邮件，华为运营人员将在5个工作日内为您安排对接人员。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["邮箱地址：", (0,jsx_runtime.jsx)(_components.a, {
          href: "mailto:support@huawei.com",
          children: "support@huawei.com"
        })]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["邮件标题：[申请使用播控推荐服务]-[公司名称]-[APP ID或APP包名]，APP ID或APP包名等查询方法可参见", (0,jsx_runtime.jsx)(_components.a, {
          href: "https://developer.huawei.com/consumer/cn/doc/app/agc-help-appinfo-0000001100014694",
          children: "查看应用基本信息"
        }), "。"]
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
524967(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552958564-cabd40d33e8cf552c86667db1cca7081.png");

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