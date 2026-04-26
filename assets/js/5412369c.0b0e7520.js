"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["909283"], {
923396(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_application_dev_guide_application_dev_guide_md_541_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-application-dev-guide-application-dev-guide-md-541.json
var site_docs_application_dev_guide_application_dev_guide_md_541_namespaceObject = JSON.parse('{"id":"application-dev-guide/application-dev-guide","title":"应用开发导读","description":"应用开发文档用于指导开发者通过HarmonyOS SDK提供的开放能力完成应用开发。在使用应用开发文档前，推荐您通过知识地图了解应用开发完整旅程。","source":"@site/docs/application-dev-guide/application-dev-guide.md","sourceDirName":"application-dev-guide","slug":"/application-dev-guide/","permalink":"/harmonyos-docs-site/application-dev-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"应用开发导读","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-guide","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","next":{"title":"开发准备","permalink":"/harmonyos-docs-site/quick-start/start-overview/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/application-dev-guide/application-dev-guide.md


const frontMatter = {
	title: '应用开发导读',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-guide',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = '应用开发导读';

const assets = {

};



const toc = [{
  "value": "入门",
  "id": "入门",
  "level": 2
}, {
  "value": "开发",
  "id": "开发",
  "level": 2
}, {
  "value": "工具",
  "id": "工具",
  "level": 2
}, {
  "value": "API参考",
  "id": "api参考",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
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
        id: "应用开发导读",
        children: "应用开发导读"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["应用开发文档用于指导开发者通过HarmonyOS SDK提供的开放能力完成应用开发。在使用应用开发文档前，推荐您通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "https://developer.huawei.com/consumer/cn/app/knowledge-map/",
        children: "知识地图"
      }), "了解应用开发完整旅程。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在应用开发的文档中，您可以获取到如下内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "入门",
      children: "入门"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "入门可以帮助开发者了解应用开发的基本方法。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "通过这一部分内容的学习和初步实践，开发者可以快速构建出首个HarmonyOS应用，掌握应用程序包结构、资源文件的使用以及ArkTS的核心功能和语法等基础知识，为后续的应用开发奠定基础。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发",
      children: "开发"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从HarmonyOS NEXT Developer Preview1（API 11）版本开始，HarmonyOS SDK以Kit维度提供丰富、完备的开放能力，涵盖应用框架、系统、媒体、图形、应用服务、AI六大领域，例如："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用框架相关Kit开放能力：Ability Kit（程序框架服务）、ArkUI（方舟UI框架）等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "系统相关Kit开放能力：Universal Keystore Kit（密钥管理服务）、Network Kit（网络服务）等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "媒体相关Kit开放能力：Audio Kit（音频服务）、Media Library Kit（媒体文件管理服务）等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "图形相关Kit开放能力：ArkGraphics 2D（方舟2D图形服务）、Graphics Accelerate Kit（图形加速服务）等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "应用服务相关Kit开放能力：Game Service Kit（游戏服务）、Location Kit（位置服务）等。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI相关Kit开放能力：Intents Kit（意图框架服务）、CANN Kit（CANN异构计算框架服务）等。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "我们针对重点开放能力提供了开发指导，助力开发者高效开发。详情请参见“开发”目录下相关内容。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "工具",
      children: "工具"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DevEco Studio工具是HarmonyOS应用开发的推荐IDE工具。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-tools-overview",
        children: "工具"
      }), "部分，讲解了DevEco Studio工具的详细用法，包括使用该工具进行工程创建、应用签名、应用调试、应用安装运行的指导。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "api参考",
      children: "API参考"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["API参考提供了HarmonyOS SDK各Kit开放能力的全量组件和接口的说明文档，可以帮助开发者快速查找到指定接口的详细描述和调用方法。详情请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/development-intro-api/development-intro-api",
        children: "API参考"
      }), "。"]
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