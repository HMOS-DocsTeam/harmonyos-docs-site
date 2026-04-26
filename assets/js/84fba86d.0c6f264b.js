"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["248671"], {
411472(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_arkui_ui_js_dev_js_framework_overview_js_framework_resource_restriction_js_framework_resource_restriction_md_84f_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-arkui-ui-js-dev-js-framework-overview-js-framework-resource-restriction-js-framework-resource-restriction-md-84f.json
var site_docs_arkui_ui_js_dev_js_framework_overview_js_framework_resource_restriction_js_framework_resource_restriction_md_84f_namespaceObject = JSON.parse('{"id":"arkui/ui-js-dev/js-framework-overview/js-framework-resource-restriction/js-framework-resource-restriction","title":"资源限定与访问","description":"资源限定词","source":"@site/docs/arkui/ui-js-dev/js-framework-overview/js-framework-resource-restriction/js-framework-resource-restriction.md","sourceDirName":"arkui/ui-js-dev/js-framework-overview/js-framework-resource-restriction","slug":"/arkui/ui-js-dev/js-framework-overview/js-framework-resource-restriction/","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/js-framework-overview/js-framework-resource-restriction/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"资源限定与访问","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/js-framework-resource-restriction","kit":"application-framework","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"生命周期","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/js-framework-overview/js-framework-lifecycle/"},"next":{"title":"多语言支持","permalink":"/harmonyos-docs-site/arkui/ui-js-dev/js-framework-overview/js-framework-multiple-languages/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/arkui/ui-js-dev/js-framework-overview/js-framework-resource-restriction/js-framework-resource-restriction.md


const frontMatter = {
	title: '资源限定与访问',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/js-framework-resource-restriction',
	kit: 'application-framework',
	last_updated: '2026-04-22'
};
const contentTitle = '资源限定与访问';

const assets = {

};



const toc = [{
  "value": "资源限定词",
  "id": "资源限定词",
  "level": 2
}, {
  "value": "资源限定词的命名要求",
  "id": "资源限定词的命名要求",
  "level": 2
}, {
  "value": "限定词与设备状态的匹配规则",
  "id": "限定词与设备状态的匹配规则",
  "level": 2
}, {
  "value": "引用JS模块内resources资源",
  "id": "引用js模块内resources资源",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
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
        id: "资源限定与访问",
        children: "资源限定与访问"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "资源限定词",
      children: "资源限定词"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["资源限定词可以由一个或多个表示应用场景或设备特征的限定词组合而成，包括屏幕密度等维度，限定词之间通过中划线（-）连接。开发者在", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "resources"
        })
      }), "目录下创建限定词文件时，需要掌握限定词文件的命名要求以及与限定词文件与设备状态的匹配规则。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "资源限定词的命名要求",
      children: "资源限定词的命名要求"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "限定词的组合顺序：屏幕密度。开发者可以根据应用的使用场景和设备特征，选择其中的一类或几类限定词组成目录名称，顺序不可颠倒。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "限定词的连接方式：限定词之间均采用中划线（-）连接。例如：res-dark-ldpi.json 。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "限定词的取值范围：每类限定词的取值必须符合下表的条件，否则，将无法匹配目录中的资源文件，限定词大小写敏感。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["限定词前缀：", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "resources"
          })
        }), "资源文件的资源限定词有前缀res，例如res-ldpi.json。"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["默认资源限定文件：", (0,jsx_runtime.jsx)(_components.strong, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "resources"
          })
        }), "资源文件的默认资源限定文件为res-defaults.json。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "资源限定文件中不支持使用枚举格式的颜色来设置资源。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " 资源限定词"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义与取值说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "屏幕密度"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "表示设备的屏幕密度（单位为dpi），取值如下：  - ldpi：表示低密度屏幕（~120dpi）（0.75基准密度）  - mdpi：表示中密度屏幕（~160dpi）（基准密度）  - hdpi：表示高密度屏幕（~240dpi）（1.5基准密度）  - xhdpi：表示加高密度屏幕（~320dpi）（2.0基准密度）  - xxhdpi：表示超超高密度屏幕（~480dpi）（3.0基准密度）  - xxxhdpi：表示超超超高密度屏幕（~640dpi）（4.0基准密度）"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "限定词与设备状态的匹配规则",
      children: "限定词与设备状态的匹配规则"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在为设备匹配对应的资源文件时，限定词目录匹配的优先级从高到低依次为：MCC和MNC> 横竖屏 > 深色模式 > 设备类型 > 屏幕密度。在资源限定词目录均未匹配的情况下，则匹配默认资源限定文件。"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "如果限定词目录中包含资源限定词，则对应限定词的取值必须与当前的设备状态完全一致，该目录才能够参与设备的资源匹配。例如：资源限定文件res-hdpi.json与当前设备密度xhdpi无法匹配。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "引用js模块内resources资源",
      children: "引用JS模块内resources资源"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["在应用开发的hml和js文件中使用$r的语法，可以对JS模块内的resources目录下的json资源进行格式化，获取相应的资源内容，该目录与pages目录同级，具体目录结构请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/arkui/ui-js-dev/js-framework-overview/js-framework-file",
        children: "文件组织"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "描述"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "$r"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "(key: string) => string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "获取资源限定下具体的资源内容。例如：$r('strings.hello')。  参数说明：  - key：定义在资源限定文件中的键值，如strings.hello。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "res-defaults.json示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"strings\": {\n        \"hello\": \"hello world\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resources/res-dark.json:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"image\": {\n        \"clockFace\": \"common/dark_face.png\"\n    },\n    \"colors\": {\n    \"background\": \"#000000\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "resources/res-defaults.json:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "{\n    \"image\": {\n        \"clockFace\": \"common/face.png\"\n    },\n    \"colors\": {\n    \"background\": \"#ffffff\"\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div style=\"background-color: {{ $r('colors.background') }}\">\n    <image src=\"{{ $r('image.clockFace') }}\"></image>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(142081)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "资源限定文件中不支持颜色枚举格式。"
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
142081(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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