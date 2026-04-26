"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["499265"], {
771149(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_fa_model_development_fa_model_application_components_dataability_dataability_permission_control_dataability_permission_control_md_da8_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-fa-model-development-fa-model-application-components-dataability-dataability-permission-control-dataability-permission-control-md-da8.json
var site_docs_ability_kit_fa_model_development_fa_model_application_components_dataability_dataability_permission_control_dataability_permission_control_md_da8_namespaceObject = JSON.parse('{"id":"ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-permission-control/dataability-permission-control","title":"DataAbility权限控制","description":"DataAbility提供数据服务，并不是所有的Ability都有权限读写它，DataAbility有一套权限控制机制来保证数据安全。分为静态权限控制和动态权限控制两部分。","source":"@site/docs/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-permission-control/dataability-permission-control.md","sourceDirName":"ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-permission-control","slug":"/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-permission-control/","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-permission-control/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"DataAbility权限控制","sidebar_position":7,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/dataability-permission-control","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"访问DataAbility","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/dataability/access-dataability/"},"next":{"title":"FA模型的Context","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/application-context-fa/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-permission-control/dataability-permission-control.md


const frontMatter = {
	title: 'DataAbility权限控制',
	sidebar_position: 7,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/dataability-permission-control',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'DataAbility权限控制';

const assets = {

};



const toc = [{
  "value": "静态权限控制",
  "id": "静态权限控制",
  "level": 2
}, {
  "value": "动态权限控制",
  "id": "动态权限控制",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
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
        id: "dataability权限控制",
        children: "DataAbility权限控制"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DataAbility提供数据服务，并不是所有的Ability都有权限读写它，DataAbility有一套权限控制机制来保证数据安全。分为静态权限控制和动态权限控制两部分。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "静态权限控制",
      children: "静态权限控制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DataAbility作为服务端，在被拉起的时候，会根据config.json里面配置的权限来进行校验，有\"readPermission\"、\"writePermission\"和\"Permission\"三个配置项，可以不配或者为空。示例如下:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"abilities\": [\n  // ...\n  {\n    \"name\": \".DataAbility\",\n    \"srcLanguage\": \"ets\",\n    \"srcPath\": \"DataAbility\",\n    \"icon\": \"$media:icon\",\n    \"description\": \"$string:DataAbility_desc\",\n    \"type\": \"data\",\n    \"visible\": true,\n    \"uri\": \"dataability://com.samples.famodelabilitydevelop.DataAbility\",\n    \"readPermission\": \"ohos.permission.READ_CONTACTS\",\n    \"writePermission\": \"ohos.permission.WRITE_CONTACTS\"\n  },\n  // ...\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "客户端在拉起DataAbility的时候，需要校验客户端是否有权限拉起该DataAbility。客户端的权限配置在config.json配置文件的\"module\"对象的\"reqPermissions\"对象中，示例如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n  // ...\n  \"module\": {\n    // ...\n    \"reqPermissions\": [\n      {\n        \"name\": \"ohos.permission.READ_CONTACTS\"\n      },\n      {\n        \"name\": \"ohos.permission.WRITE_CONTACTS\"\n      },\n      // ...\n    ],\n    // ...\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "动态权限控制",
      children: "动态权限控制"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "静态权限校验只能控制某个DataAbility是否能被另一个Ability或应用拉起，无法精确校验每个读写接口的权限，因为拉起DataAbility的时候，还不知道应用是否需要读写它的数据。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "动态权限控制是校验每个数据操作的接口是否有对应的权限。客户端调用数据操作接口所需的权限如下表所示。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 接口对应的读写权限配置"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "需要配置读权限的接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "需要配置写权限的接口"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "根据实际操作配置读写权限的接口"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "query、normalizeUri、denormalizeUri、openfile（传入mode有'r'）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "insert、batchInsert、delete、update、openfile（传入mode有'w'）"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "executeBatch"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于需要配置读权限的接口，服务端需要配置readPermission，客户端必须申请相应的读权限才能调用相关的接口。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "对于需要配置写权限的接口，服务端需要配置writePermission，客户端必须申请相应的写权限才能调用相关的接口。"
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