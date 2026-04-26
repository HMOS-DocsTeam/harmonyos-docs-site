"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["581206"], {
967699(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_development_fundamentals_application_typical_scenarios_integrated_hsp_integrated_hsp_md_fee_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-development-fundamentals-application-typical-scenarios-integrated-hsp-integrated-hsp-md-fee.json
var site_docs_development_fundamentals_application_typical_scenarios_integrated_hsp_integrated_hsp_md_fee_namespaceObject = JSON.parse('{"id":"development-fundamentals/application-typical-scenarios/integrated-hsp/integrated-hsp","title":"集成态HSP","description":"集成态HSP是应用内HSP的中间编译产物，用于解决使用方的bundleName和签名之间的强耦合问题。","source":"@site/docs/development-fundamentals/application-typical-scenarios/integrated-hsp/integrated-hsp.md","sourceDirName":"development-fundamentals/application-typical-scenarios/integrated-hsp","slug":"/development-fundamentals/application-typical-scenarios/integrated-hsp/","permalink":"/harmonyos-docs-site/development-fundamentals/application-typical-scenarios/integrated-hsp/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"集成态HSP","sidebar_position":8,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/integrated-hsp","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"HAP转HAR指导","permalink":"/harmonyos-docs-site/development-fundamentals/application-typical-scenarios/hap-to-har/"},"next":{"title":"应用程序包常见问题","permalink":"/harmonyos-docs-site/development-fundamentals/common-problem-of-application/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/development-fundamentals/application-typical-scenarios/integrated-hsp/integrated-hsp.md


const frontMatter = {
	title: '集成态HSP',
	sidebar_position: 8,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/integrated-hsp',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = '集成态HSP';

const assets = {

};



const toc = [{
  "value": "使用场景",
  "id": "使用场景",
  "level": 2
}, {
  "value": "约束限制",
  "id": "约束限制",
  "level": 2
}, {
  "value": "开发使用说明",
  "id": "开发使用说明",
  "level": 2
}, {
  "value": "配置集成态HSP",
  "id": "配置集成态hsp",
  "level": 3
}, {
  "value": "使用方集成",
  "id": "使用方集成",
  "level": 3
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    img: "img",
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
        id: "集成态hsp",
        children: "集成态HSP"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "集成态HSP是应用内HSP的中间编译产物，用于解决使用方的bundleName和签名之间的强耦合问题。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(835135)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "HSP只能给bundleName一样的工程使用，集成态HSP可以给不同的bundleName的工程集成使用。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "使用方使用集成态HSP时，需要采用使用方的签名文件对集成态HSP重新签名，且需要优先安装重新签名后的集成态HSP。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "使用场景",
      children: "使用场景"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "如果存在多个应用包含相同的基础能力，例如日志打印模块，为节约开发成本并实现代码和资源的共享，多个应用可以共用一个日志模块。此时，可以通过应用内HSP方式提供能力。由于应用内HSP的限制，每个应用在使用前都需要调整其bundleName，并使用当前应用的签名重新签名，构建一个新的HSP提供给当前应用使用。这意味着，每增加一个应用，就需要进行一次调整bundleName和重新签名的操作，导致签名和打包过程繁琐。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "而集成态HSP在DevEco Studio编译过程中，bundleName和重签名的动作会自动完成，开发者无需关注重复签名的操作，可以专注于功能业务的开发。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "约束限制",
      children: "约束限制"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["集成态HSP只支持", (0,jsx_runtime.jsx)(_components.a, {
          href: "/development-fundamentals/application-package-fundamentals/application-package-structure/application-package-structure-stage",
          children: "Stage模型"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "从API version 12开始，支持使用集成态HSP。"
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["使用集成态HSP要求使用标准化的OHMUrl格式。需要在工程级的", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app",
          children: "build-profile.json5文件"
        }), "中，将", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app#section13181758123312",
          children: "strictMode"
        }), "下的useNormalizedOHMUrl字段设置为true。"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "开发使用说明",
      children: "开发使用说明"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "配置集成态hsp",
      children: "配置集成态HSP"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "工程配置：配置工程级的build-profile.json5文件，将useNormalizedOHMUrl字段设置为true。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"app\": {\n    \"signingConfigs\": [\n    ],\n    \"products\": [\n      {\n        \"name\": \"default\",\n        \"signingConfig\": \"default\",\n        \"targetSdkVersion\": \"5.1.1(19)\",\n        \"compatibleSdkVersion\": \"5.1.1(19)\",\n        \"runtimeOS\": \"HarmonyOS\",\n        \"buildOption\": {\n          \"strictMode\": {\n            // ...\n            \"useNormalizedOHMUrl\": true,\n          }\n        }\n      }\n    ],\n    // ...\n  },\n  // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["模块配置：修改模块级构建配置文件", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile",
            children: "build-profile.json5"
          }), "，将integratedHsp配置项设置为true，指定构建的HSP模块为集成态HSP。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "// library/build-profile.json5\n{\n  \"apiType\": \"stageMode\",\n  // ...\n  \"buildOptionSet\": [\n    {\n      // ...\n      \"arkOptions\": {\n        \"integratedHsp\": true,\n        // ...\n      },\n    },\n  ],\n  // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "打包配置（tgz包）。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["(1) 配置项目签名信息，详情请参见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-signing",
            children: "应用/元服务签名"
          }), "。"]
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(2) 配置release模式。"
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.img, {
            src: (__webpack_require__(509986)/* ["default"] */.A) + "",
            width: "693",
            height: "452"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "(3) 选择library目录，执行Build -> Make Module 'library'。"
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "使用方集成",
      children: "使用方集成"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "创建目录并拷贝文件：在entry目录下新建libs目录，将集成态打包产物tgz包拷贝到libs目录下。"
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "工程依赖配置：在使用方主模块的oh-package.json5配置文件中添加依赖。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "\"dependencies\": {\n  \"library\": \"file:./libs/library-default.tgz\"\n},\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "工程配置：在工程级的build-profile.json5文件中，将useNormalizedOHMUrl字段设置为true。"
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            children: "{\n  \"app\": {\n    \"signingConfigs\": [\n    ],\n    \"products\": [\n      {\n        \"name\": \"default\",\n        \"signingConfig\": \"default\",\n        \"targetSdkVersion\": \"5.1.1(19)\",\n        \"compatibleSdkVersion\": \"5.1.1(19)\",\n        \"runtimeOS\": \"HarmonyOS\",\n        \"buildOption\": {\n          \"strictMode\": {\n            // ...\n            \"useNormalizedOHMUrl\": true,\n          }\n        }\n      }\n    ],\n    // ...\n  },\n  // ...\n}\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "配置签名。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: ["安装和运行应用前，必须配置项目签名信息，详见", (0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-signing",
            children: "应用/元服务签名"
          }), "。"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.a, {
            href: "/ide-run-device",
            children: "安装和运行"
          }), "。"]
        }), "\n"]
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
835135(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
509986(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002583477481-84132d1c8b80df2a17155fec31eee659.png");

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