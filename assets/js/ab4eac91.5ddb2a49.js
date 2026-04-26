"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["689838"], {
535847(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ability_kit_fa_model_development_fa_model_application_components_dataability_dataability_configuration_dataability_configuration_md_ab4_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ability-kit-fa-model-development-fa-model-application-components-dataability-dataability-configuration-dataability-configuration-md-ab4.json
var site_docs_ability_kit_fa_model_development_fa_model_application_components_dataability_dataability_configuration_dataability_configuration_md_ab4_namespaceObject = JSON.parse('{"id":"ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-configuration/dataability-configuration","title":"DataAbility组件配置","description":"URI介绍","source":"@site/docs/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-configuration/dataability-configuration.md","sourceDirName":"ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-configuration","slug":"/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-configuration/","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-configuration/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"DataAbility组件配置","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/dataability-configuration","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"DataAbility组件概述","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-overview/"},"next":{"title":"DataAbility的生命周期","permalink":"/harmonyos-docs-site/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-lifecycle/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ability-kit/fa-model-development/fa-model-application-components/dataability/dataability-configuration/dataability-configuration.md


const frontMatter = {
	title: 'DataAbility组件配置',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/dataability-configuration',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = 'DataAbility组件配置';

const assets = {

};



const toc = [{
  "value": "URI介绍",
  "id": "uri介绍",
  "level": 2
}, {
  "value": "部分配置项介绍",
  "id": "部分配置项介绍",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    header: "header",
    img: "img",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "dataability组件配置",
        children: "DataAbility组件配置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "uri介绍",
      children: "URI介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "DataAbility的提供方和使用方都通过URI（Uniform Resource Identifier）来标识一个具体的数据，例如数据库中的某个表或磁盘上的某个文件。此处的URI仍基于URI通用标准，格式如下："
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(107239)/* ["default"] */.A) + "",
        width: "539",
        height: "91"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "scheme：协议方案名，固定为\"dataability\"，代表Data Ability所使用的协议类型。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "authority：设备ID。如果为跨设备场景，则为目标设备的ID；如果为本地设备场景，则不需要填写。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "path：资源的路径信息，代表特定资源的位置信息。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "query：查询参数。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "fragment：可以用于指示要访问的子资源。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "URI示例："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "跨设备场景：dataability://device_id/com.domainname.dataability.persondata/person/10"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本地设备：dataability:///com.domainname.dataability.persondata/person/1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(76409)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本地设备的\"device_id\"字段为空，因此在\"dataability:\"后面有三个\"/\"。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "部分配置项介绍",
      children: "部分配置项介绍"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "与PageAbility类似，DataAbility的相关配置在config.json配置文件的\"module\"对象的\"abilities\"对象中，与PageAbility的区别在于\"type\"属性及\"uri\"属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " DataAbility的部分配置项说明"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Json重要字段"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "备注说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"name\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Ability名称。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"type\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "UIAbility类型，DataAbility的类型为\"data\"。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"uri\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "通信使用的URI。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "\"visible\""
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对其他应用是否可见，设置为true时，DataAbility才能与其他应用进行通信传输数据。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "config.json配置样例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"abilities\": [\n  ...\n  {\n    \"name\": \".DataAbility\",\n    \"srcLanguage\": \"ets\",\n    \"srcPath\": \"DataAbility\",\n    \"icon\": \"$media:icon\",\n    \"description\": \"$string:DataAbility_desc\",\n    \"type\": \"data\",\n    \"visible\": true,\n    \"uri\": \"dataability://com.samples.famodelabilitydevelop.DataAbility\",\n    \"readPermission\": \"ohos.permission.READ_CONTACTS\",\n    \"writePermission\": \"ohos.permission.WRITE_CONTACTS\"\n  },\n  ...\n]\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["DataAbility支持的配置项及详细说明详见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/development-fundamentals/application-configuration-file-fa/module-structure",
        children: "module对象内部结构"
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
107239(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
76409(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

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