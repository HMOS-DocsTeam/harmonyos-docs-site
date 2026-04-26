"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["655635"], {
177601(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ide_build_customization_ide_hvigor_config_ohos_ide_hvigor_config_ohos_guide_ide_hvigor_config_ohos_guide_md_a05_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-ide-build-customization-ide-hvigor-config-ohos-ide-hvigor-config-ohos-guide-ide-hvigor-config-ohos-guide-md-a05.json
var site_docs_ide_build_customization_ide_hvigor_config_ohos_ide_hvigor_config_ohos_guide_ide_hvigor_config_ohos_guide_md_a05_namespaceObject = JSON.parse('{"id":"ide-build-customization/ide-hvigor-config-ohos/ide-hvigor-config-ohos-guide/ide-hvigor-config-ohos-guide","title":"能力说明","description":"Hvigor支持在hvigorfile.ts里接收部分编译配置，以实现动态配置构建配置、并使能到构建的过程与结果中。","source":"@site/docs/ide-build-customization/ide-hvigor-config-ohos/ide-hvigor-config-ohos-guide/ide-hvigor-config-ohos-guide.md","sourceDirName":"ide-build-customization/ide-hvigor-config-ohos/ide-hvigor-config-ohos-guide","slug":"/ide-build-customization/ide-hvigor-config-ohos/ide-hvigor-config-ohos-guide/","permalink":"/harmonyos-docs-site/ide-build-customization/ide-hvigor-config-ohos/ide-hvigor-config-ohos-guide/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"能力说明","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-config-ohos-guide","kit":"devtools/build","last_updated":"2026-04-24"},"sidebar":"docs","previous":{"title":"实践说明","permalink":"/harmonyos-docs-site/ide-build-customization/ide-hvigor-get-build-profile-para/ide-hvigor-get-build-profile-para-sample/"},"next":{"title":"实践说明","permalink":"/harmonyos-docs-site/ide-build-customization/ide-hvigor-config-ohos/ide-hvigor-config-ohos-sample/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/ide-build-customization/ide-hvigor-config-ohos/ide-hvigor-config-ohos-guide/ide-hvigor-config-ohos-guide.md


const frontMatter = {
	title: '能力说明',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/ide-hvigor-config-ohos-guide',
	kit: 'devtools/build',
	last_updated: '2026-04-24'
};
const contentTitle = '能力说明';

const assets = {

};



const toc = [{
  "value": "通过hook以及插件上下文实现动态配置",
  "id": "通过hook以及插件上下文实现动态配置",
  "level": 2
}, {
  "value": "在hvigorfile.ts中通过overrides关键字导出动态配置",
  "id": "在hvigorfilets中通过overrides关键字导出动态配置",
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
    p: "p",
    pre: "pre",
    ul: "ul",
    ...(0,lib/* .useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "能力说明",
        children: "能力说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hvigor支持在hvigorfile.ts里接收部分编译配置，以实现动态配置构建配置、并使能到构建的过程与结果中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "此能力现有两种方式实现："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "以hvigor hook能力为基础通过插件上下文来动态配置。(推荐使用)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "在hvigorfile.ts中通过overrides关键字导出动态配置。(不推荐使用)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "通过hook以及插件上下文实现动态配置",
      children: "通过hook以及插件上下文实现动态配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Hvigor支持stage模型在hvigor hook中操作从硬盘上读取的以下配置文件："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "每个hvigorNode中的build-profile.json5"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "module.json5"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "app.json5"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "每个module下的oh-package.json5文件中的dependency、devDependency、dynamicDependency以及version。"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前可以通过hvigor对象提供的上下文直接获取和修改配置以实现动态配置构建配置、并使能到构建的过程与结果中。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在hvigorfile.ts或hvigorconfig.ts文件中，可以使用Hvigor提供的API接口来实现此能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["相比于下面的overrides的能力来说，通过hook以及插件上下文来动态修改签名和编译配置更为灵活和易于理解，功能也更为全面，推荐采用此种方式。具体使用方式请参考", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ide-build-customization/ide-hvigor-config-ohos/ide-hvigor-config-ohos-sample#section67131365449",
        children: "通过hook以及插件上下文动态配置构建配置(推荐使用)"
      }), "。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "在hvigorfilets中通过overrides关键字导出动态配置",
      children: "在hvigorfile.ts中通过overrides关键字导出动态配置"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "在hvigorfile.ts中，我们约定在导出的对象中的config.ohos属性里接收编译的配置："
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "export default {  \n    system: hapTasks,  \n    config: {  \n        ohos: {\n            ...\n        }    \n    }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前可以在工程级的hvigorfile.ts的config.ohos中配置的字段："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["overrides：定义需要覆盖的字段，会在构建过程中覆盖原有的对应配置项。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["signingConfig：签名配置，对应build-profile.json5里的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile-app#section153288223224",
              children: "signingConfigs配置项"
            }), "。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "type"
              }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
                children: ["material\n", (0,jsx_runtime.jsxs)(_components.ul, {
                  children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "certpath"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "storePassword"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "keyAlias"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "keyPassword"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "profile"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "signAlg"
                  }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                    children: "storeFile"
                  }), "\n"]
                }), "\n"]
              }), "\n"]
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["appOpt：对应", (0,jsx_runtime.jsx)(_components.a, {
              href: "/development-fundamentals/application-configuration-file-stage/app-configuration-file",
              children: "app.json5"
            }), "里的配置项字段。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "bundleName"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "bundleType"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "icon"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "label"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "vendor"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "versionCode"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "versionName"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "目前可以在模块级的hvigorfile.ts的config.ohos中配置的字段："
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["overrides：定义需要覆盖的字段，会在构建过程中覆盖原有的对应配置项。\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["buildOption：对应build-profile.json5里的", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ide-hvigor-configuration-file/ide-hvigor-build-profile#section1010733210421",
              children: "buildOption配置项"
            }), "。\n", (0,jsx_runtime.jsxs)(_components.ul, {
              children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "arkOptions"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "externalNativeOptions"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "napiLibFilterOption"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "nativeLib"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "resOptions"
              }), "\n", (0,jsx_runtime.jsx)(_components.li, {
                children: "sourceOption"
              }), "\n"]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "配置在overrides项中的参数，其优先级会高于在配置项中的对应字段。"
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