"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["371300"], {
350791(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_fa_model_development_fa_model_application_components_pageability_pageability_launch_type_pageability_launch_type_md_ccd_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-fa-model-development-fa-model-application-components-pageability-pageability-launch-type-pageability-launch-type-md-ccd.json
var site_docs_ability_kit_fa_model_development_fa_model_application_components_pageability_pageability_launch_type_pageability_launch_type_md_ccd_namespaceObject = JSON.parse('{"id":"ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-launch-type/pageability-launch-type","title":"PageAbility的启动模式","description":"启动模式对应PageAbility被启动时的行为，支持单实例模式、多实例模式两种启动模式。","source":"@site/docs/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-launch-type/pageability-launch-type.md","sourceDirName":"ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-launch-type","slug":"/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-launch-type/","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-launch-type/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"PageAbility的启动模式","sidebar_position":4,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pageability-launch-type","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"PageAbility的生命周期","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-lifecycle/"},"next":{"title":"创建PageAbility","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/pageability/create-pageability/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-launch-type/pageability-launch-type.md


const frontMatter = {
	title: 'PageAbility的启动模式',
	sidebar_position: 4,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/pageability-launch-type',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'PageAbility的启动模式';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "pageability的启动模式",
        children: "PageAbility的启动模式"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "启动模式对应PageAbility被启动时的行为，支持单实例模式、多实例模式两种启动模式。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " PageAbility的启动模式"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "启动模式"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "singleton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单实例模式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "每次调用startAbility方法时，如果应用进程中该类型的Ability实例已经存在，则复用已有的实例，系统中只存在唯一一个实例。表现为在最近任务列表中只有一个Ability实例。  典型场景：当用户打开视频播放应用并观看视频，回到桌面后，再次打开视频播放应用，应用仍为回到桌面之前正在观看的视频。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "multiton"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "多实例模式"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "缺省启动模式。每次调用startAbility方法时，都会在应用进程中创建一个新的Ability实例。表现为在最近任务列表中可以看到有多个该类型的Ability实例。  典型场景：当用户打开文档应用，选择新建文档的时候，每次点击新建文档，都会创建一个新的文档任务，在最近任务列表中可以看到多个新建的文档任务。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "开发者可在config.json配置文件中通过“launchType”配置启动模式。示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  \"module\": {\n    ...\n    \"abilities\": [\n      {\n        // singleton: 单实例模式\n        // multiton: 多实例模式\n        \"launchType\": \"multiton\",\n        ...\n      }\n    ]\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["启动PageAbility时，对于多实例模式启动，以及单实例模式进行首次启动时，", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ability-kit/fa-model-development/fa-model-application-components/pageability/pageability-lifecycle",
        children: "PageAbility生命周期回调"
      }), "均会被触发。单实例非首次启动时不会再触发onCreate()接口，而是触发onNewWant()，onNewWant()的说明如下表2所示。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " 单实例启动模式特有的回调函数说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "接口名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "接口描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "onNewWant(want: Want)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "单实例启动模式，PageAbility非首次启动时调用onNewWant方法，开发者可以在该方法中获取want，进而根据want做进一步处理。例如，单实例PageAbility迁移场景，指定页面拉起PageAbility场景。"
          })]
        })
      })]
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