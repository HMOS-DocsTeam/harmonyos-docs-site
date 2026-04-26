"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["184961"], {
935134(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_development_fundamentals_application_configuration_file_fa_app_structure_app_structure_md_947_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-development-fundamentals-application-configuration-file-fa-app-structure-app-structure-md-947.json
var site_docs_development_fundamentals_application_configuration_file_fa_app_structure_app_structure_md_947_namespaceObject = JSON.parse('{"id":"development-fundamentals/application-configuration-file-fa/app-structure/app-structure","title":"app对象内部结构","description":"app对象包含应用全局配置信息，内部结构如下：","source":"@site/docs/development-fundamentals/application-configuration-file-fa/app-structure/app-structure.md","sourceDirName":"development-fundamentals/application-configuration-file-fa/app-structure","slug":"/development-fundamentals/application-configuration-file-fa/app-structure/","permalink":"/harmonyos-docs-site/development-fundamentals/application-configuration-file-fa/app-structure/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"app对象内部结构","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-structure","kit":"getting-started","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"应用配置文件概述（FA模型）","permalink":"/harmonyos-docs-site/development-fundamentals/application-configuration-file-fa/application-configuration-file-overview-fa/"},"next":{"title":"deviceConfig内部结构","permalink":"/harmonyos-docs-site/development-fundamentals/application-configuration-file-fa/deviceconfig-structure/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/development-fundamentals/application-configuration-file-fa/app-structure/app-structure.md


const frontMatter = {
	title: 'app对象内部结构',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/app-structure',
	kit: 'getting-started',
	last_updated: '2026-04-22'
};
const contentTitle = 'app对象内部结构';

const assets = {

};



const toc = [{
  "value": "version对象内部结构",
  "id": "version对象内部结构",
  "level": 2
}, {
  "value": "apiVersion内部结构",
  "id": "apiversion内部结构",
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
        id: "app对象内部结构",
        children: "app对象内部结构"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "app对象包含应用全局配置信息，内部结构如下："
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "app对象内部结构说明"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "bundleName"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用的Bundle名称，用于标识应用的唯一性。Bundle名称是由字母、数字、下划线（_）和点号（.）组成的字符串，必须以字母开头。支持的字符串长度为7~128字节。Bundle名称通常采用反向域名形式表示（例如，\"com.example.myapplication\"）。建议第一级为域名后缀\"com\"，第二级为厂商/个人名，也可以采用多级。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "vendor"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识对应用开发厂商的描述。字符串长度不超过255字节。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "version"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用的版本信息。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "apiVersion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用程序所依赖的操作系统 API版本。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "对象"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "smartWindowSize"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用在模拟器中运行时使用的屏幕尺寸。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "smartWindowDeviceType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用在模拟器中运行时可以模拟的设备。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串数组"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为空。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "asanEnabled"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用程序是否开启asan检测，用于辅助定位buffer越界造成的crash问题。  - true：当前工程开启asan检测。  - false：当前工程不开启asan检测。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "布尔值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值false。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "version对象内部结构",
      children: "version对象内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表2"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "version对象内部结构说明"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "name"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用的版本号，用于向应用的终端用户呈现。取值可以自定义，长度不超过127字节。自定义规则如下：API5及更早的版本：推荐使用三段数字版本号（也兼容两段式版本号），如A.B.C（也兼容A.B），其中A、B、C取值为0-999范围内的整数。除此之外不支持其他格式。  A段，一般表示主版本号（Major）。  B段，一般表示次版本号（Minor）。  C段，一般表示修订版本号（Patch）。API6版本起：推荐采用四段式数字版本号，如A.B.C.D，其中A、B、C取值为0-99范围内的整数，D的取值为0-999范围内的整数。  A段，一般表示主版本号（Major）。  B段，一般表示次版本号（Minor）。  C段，一般表示特性版本号（Feature）。  D段，一般表示修订版本号（Patch）。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "code"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用的版本号，仅用于操作系统管理该应用，不对应用的终端用户呈现。取值规则如下：API5及更早版本：二进制32位以内的非负整数，需要从version.name的值转换得到。转换规则为：code值=A * 1,000,000 + B * 1,000 + C例如，version.name字段取值为2.2.1，则code值为2002001。API6版本起：code的取值不与version.name字段的取值关联，开发者可自定义code取值，取值范围为2^31以内的非负整数，但是每次应用版本的更新，均需要更新code字段的值，新版本code取值必须大于旧版本code的值。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不可缺省。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "minCompatibleVersionCode"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "标识应用可兼容的最低版本号，用于跨设备场景下，判断其他设备上该应用的版本是否兼容。格式与version.code字段的格式要求相同。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "可缺省，缺省值为code标签值。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "apiversion内部结构",
      children: "apiVersion内部结构"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表3"
        })
      }), " ", (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "apiVersion内部结构说明"
        })
      })]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "属性名称"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "含义"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "数据类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "是否可缺省"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "compatible"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "运行应用所需要的最低API版本，取值范围为0~2147483647。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置在build.profile中，打包时由DevEco Studio填充到config.json中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "target"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于标识应用运行时使用的API版本，取值范围为0~2147483647。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "数值"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置在build.profile中，打包时由DevEco Studio填充到config.json中。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "releaseType"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "用于标识应用运行时SDK的状态。  canaryN：面向特定开发者早期预览版本，不承诺质量，不承诺API稳定，N代表大于零的整数，用于区分不同的版本。  betaN：公开发布的Beta版本，早期Beta版本不承诺API稳定，经历若干次发布后，通过Release Notes对开发者声明该Beta版本为API稳定里程碑，后续版本的API冻结，N代表大于零的整数，用于区分不同的版本。  release：正式发布版本，承诺质量，API不可变更。当版本处于此状态时版本号中不呈现Stage字段。"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "字符串"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "配置在build.profile中，打包时由DevEco Studio填充到config.json中。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "app对象示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\"app\": {\n    \"bundleName\": \"com.example.myapplication\",\n    \"vendor\": \"example\",\n    \"version\": {\n      \"code\": 8,\n      \"name\": \"8.0.1\"\n    },\n    \"apiVersion\": {\n      \"compatible\": 8,\n      \"target\": 9,\n      \"releaseType\": \"Beta1\"\n    }\n  }\n"
      })
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