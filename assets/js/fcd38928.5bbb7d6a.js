"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["779071"], {
395737(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_development_fundamentals_application_typical_scenarios_multiinstance_multiinstance_md_fcd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-development-fundamentals-application-typical-scenarios-multiinstance-multiinstance-md-fcd.json
var site_docs_development_fundamentals_application_typical_scenarios_multiinstance_multiinstance_md_fcd_namespaceObject = JSON.parse('{"id":"development-fundamentals/application-typical-scenarios/multiinstance/multiinstance","title":"创建应用多实例","description":"应用多实例允许一个应用同时运行多个进程，实现多个账号同时登录使用，且互不影响。主要应用场景包括社交账户多开和游戏大小号多开等，无需切换账号从而避免频繁登录的繁琐操作。","source":"@site/docs/development-fundamentals/application-typical-scenarios/multiinstance/multiinstance.md","sourceDirName":"development-fundamentals/application-typical-scenarios/multiinstance","slug":"/development-fundamentals/application-typical-scenarios/multiinstance/","permalink":"/harmonyos-docs-site/development-fundamentals/application-typical-scenarios/multiinstance/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"创建应用多实例","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multiinstance","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"创建应用分身","permalink":"/harmonyos-docs-site/development-fundamentals/application-typical-scenarios/app-clone/"},"next":{"title":"配置应用图标和名称","permalink":"/harmonyos-docs-site/development-fundamentals/application-typical-scenarios/layered-image/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/development-fundamentals/application-typical-scenarios/multiinstance/multiinstance.md


const frontMatter = {
	title: '创建应用多实例',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/multiinstance',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = '创建应用多实例';

const assets = {

};



const toc = [{
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "应用多实例的开发步骤",
  "id": "应用多实例的开发步骤",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "创建应用多实例",
        children: "创建应用多实例"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用多实例允许一个应用同时运行多个进程，实现多个账号同时登录使用，且互不影响。主要应用场景包括社交账户多开和游戏大小号多开等，无需切换账号从而避免频繁登录的繁琐操作。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "桌面上的多个应用实例都是独立的进程，各个进程的运行、通知等都是彼此独立的；各实例共享数据，可通过账号进行切换。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用多实例间的关系："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "多实例的应用图标相同。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["各实例共享", (0,jsx_runtime.jsx)(_components.a, {
          href: "/core-file-kit/app-file/app-sandbox-directory#%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E7%9B%AE%E5%BD%95%E4%B8%8E%E5%BA%94%E7%94%A8%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84",
          children: "应用文件目录"
        }), "下的文件数据。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "可通过账号进行切换，单个实例可以切换不同的账号登录。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "应用多实例仅支持2in1设备。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "应用多实例的开发步骤",
      children: "应用多实例的开发步骤"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "应用多实例的配置方法。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["在工程项目中对App/app.json5配置文件配置", (0,jsx_runtime.jsx)(_components.a, {
            href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file#multiappmode%E6%A0%87%E7%AD%BE",
            children: "multiAppMode"
          }), "字段。具体配置如下："]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"app\": {\n    // ...\n    \"multiAppMode\": {\n      \"multiAppModeType\": \"multiInstance\",\n      \"maxCount\": 5\n    }\n  }\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建应用多实例。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "将已配置好的工程编译打包安装到设备上。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "首次右击桌面应用图标启动一个应用进程，然后再次右击该应用图标，选择“打开”。此时桌面上会显示同一个应用的两个进程页面。"
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