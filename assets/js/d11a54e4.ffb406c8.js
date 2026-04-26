"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["142317"], {
982997(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_arkts_arkui_arkts_dep_js_apis_system_configuration_js_apis_system_configuration_md_d11_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-arkts-arkui-arkts-dep-js-apis-system-configuration-js-apis-system-configuration-md-d11.json
var site_docs_ref_arkui_api_arkui_arkts_arkui_arkts_dep_js_apis_system_configuration_js_apis_system_configuration_md_d11_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-system-configuration/js-apis-system-configuration","title":"@system.configuration (应用配置)","description":"- 从API Version 7 开始，该接口不再维护，推荐使用新接口@ohos.i18n和@ohos.intl。","source":"@site/docs-ref/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-system-configuration/js-apis-system-configuration.md","sourceDirName":"arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-system-configuration","slug":"/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-system-configuration/js-apis-system-configuration","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-system-configuration/js-apis-system-configuration","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"@system.configuration (应用配置)","sidebar_position":3,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-system-configuration","kit":"应用框架","last_updated":"2026-04-22","slug":"js-apis-system-configuration"},"sidebar":"ref","previous":{"title":"@system.app (应用上下文)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-system-app/js-apis-system-app"},"next":{"title":"@system.mediaquery (媒体查询)","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-system-mediaquery/js-apis-system-mediaquery"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-arkts/arkui-arkts-dep/js-apis-system-configuration/js-apis-system-configuration.md


const frontMatter = {
	title: '@system.configuration (应用配置)',
	sidebar_position: 3,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/js-apis-system-configuration',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'js-apis-system-configuration'
};
const contentTitle = '@system.configuration (应用配置)';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "configuration.getLocale",
  "id": "configurationgetlocale",
  "level": 2
}, {
  "value": "LocaleResponse",
  "id": "localeresponse",
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
        id: "systemconfiguration-应用配置",
        children: "@system.configuration (应用配置)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(644148)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["从API Version 7 开始，该接口不再维护，推荐使用新接口", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/localization-api/localization-arkts/js-apis-i18n/js-apis-i18n",
          children: "@ohos.i18n"
        }), "和", (0,jsx_runtime.jsx)(_components.a, {
          href: "/ref/localization-api/localization-arkts/js-apis-intl/js-apis-intl",
          children: "@ohos.intl"
        }), "。"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "本模块首批接口从API version 3开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import Configuration from '@system.configuration';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "configurationgetlocale",
      children: "configuration.getLocale"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "static getLocale(): LocaleResponse"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "获取应用当前的语言和地区。默认与系统的语言和地区同步。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.ArkUI.ArkUI.Lite"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "返回值："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "LocaleResponse"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "应用当前Locale相关信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ArkTS示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export default {\n  getLocale() {\n    const localeInfo = configuration.getLocale();\n    console.info(localeInfo.language);\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "JS示例："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<!-- xxx.hml -->\n<div class=\"container\">\n    <text class=\"title\" style=\"font-size: {{fontSize}}; color: {{fontColor}};\">\n        configuration.getLocale example\n    </text>\n    <div class=\"section\">\n        <text class=\"section-title\">Language Settings:</text>\n        <div class=\"info-item\">\n            <text class=\"value\">{{language}}</text>\n        </div>\n    </div>\n    <div class=\"section\">\n        <text class=\"section-title\">Region Settings:</text>\n        <div class=\"info-item\">\n            <text class=\"value\">{{countryOrRegion}}</text>\n        </div>\n    </div>\n    <div class=\"section\">\n        <text class=\"section-title\">Layout direction:</text>\n        <div class=\"info-item\">\n            <text class=\"value\">{{dir}}</text>\n        </div>\n    </div>\n    <input type=\"button\" value=\"Refresh configuration\" style=\"width: 350px; height: 50px; margin: 5px;\" onclick=\"getLocaleInfo\"></input>\n</div>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "/* xxx.css */\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    left: 0px;\n    top: 0px;\n    width: 454px;\n    height: 454px;\n    background-color: #000000;\n}\n.title {\n    font-size: 24px;\n    text-align: center;\n    width: 320px;\n    height: 100px;\n    margin-top: 40px;\n    color: #ffffff;\n}\n.section {\n    width: 400px;\n    height: 60px;\n    padding: 15px;\n    background-color: #1a1a1a;\n    border-radius: 10px;\n}\n.section-title {\n    font-size: 24px;\n    color: #007dff;\n    height: 35px;\n    margin-bottom: 10px;\n}\n.info-item {\n    width: 100%;\n    height: 35px;\n}\n.label {\n    font-size: 24px;\n    height: 40px;\n    color: #aaaaaa;\n}\n.value {\n    font-size: 24px;\n    height: 40px;\n    color: #ffffff;\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.js\nimport configuration from '@system.configuration';\n\nexport default {\n    data: {\n        fontSize: '28px',\n        fontColor: '#ffffff',\n        language: '',\n        countryOrRegion: '',\n        dir: '',\n        displayLanguage: '',\n        displayRegion: '',\n        displayDir: ''\n    },\n    onInit() {\n        this.getLocaleInfo();\n    },\n    getLocaleInfo() {\n        try {\n            const localeInfo = configuration.getLocale();\n            console.info('configuration.getLocale success');\n            console.info('language: ' + localeInfo.language);\n            console.info('countryOrRegion: ' + localeInfo.countryOrRegion);\n            console.info('dir: ' + localeInfo.dir);\n            \n            this.language = localeInfo.language || 'Unknown';\n            this.countryOrRegion = localeInfo.countryOrRegion || 'Unknown';\n            this.dir = localeInfo.dir || 'Unknown';\n            \n            this.displayLanguage = this.getDisplayLanguage(this.language);\n            this.displayRegion = this.getDisplayRegion(this.countryOrRegion);\n            this.displayDir = this.getDisplayDirection(this.dir);\n        } catch (error) {\n            console.error('configuration.getLocale failed: ' + error.message);\n            this.language = 'Failed';\n            this.countryOrRegion = 'Failed';\n            this.dir = 'Failed';\n            this.displayLanguage = 'Failed';\n            this.displayRegion = 'Failed';\n            this.displayDir = 'Failed';\n        }\n    },\n    getDisplayLanguage(language) {\n        const map = {\n            'zh': 'Chinese',\n            'en': 'English',\n            'ja': 'Japanese',\n            'ko': 'Korean'\n        };\n        return map[language] || language;\n    },\n    getDisplayRegion(region) {\n        const map = {\n            'CN': 'China',\n            'US': 'United States',\n            'JP': 'Japan',\n            'KR': 'South Korea'\n        };\n        return map[region] || region;\n    },\n    getDisplayDirection(dir) {\n        if (dir === 'ltr') {\n            return 'Left to Right';\n        } else if (dir === 'rtl') {\n            return 'Right to Left';\n        }\n        return dir;\n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "localeresponse",
      children: "LocaleResponse"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "表示应用当前Locale的属性。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 12开始，该接口支持在元服务中使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力"
        })
      }), "：以下各项对应的系统能力均为SystemCapability.ArkUI.ArkUI.Lite"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可读"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "可写"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "language"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "语言。例如：zh。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "countryOrRegion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "国家或地区。例如：CN。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "dir"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "string"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "文字布局方向。取值范围：  - ltr：从左到右。  - rtl：从右到左。"
          })]
        })]
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
644148(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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