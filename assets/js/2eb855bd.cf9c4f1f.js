"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["247719"], {
930666(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascend_kirin_compatibility_cannkit_compatibility_rule_cannkit_compatibility_rule_md_2eb_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-cann-kit-guide-cannkit-ascendc-operator-development-cannkit-ascend-kirin-compatibility-cannkit-compatibility-rule-cannkit-compatibility-rule-md-2eb.json
var site_docs_cann_kit_guide_cannkit_ascendc_operator_development_cannkit_ascend_kirin_compatibility_cannkit_compatibility_rule_cannkit_compatibility_rule_md_2eb_namespaceObject = JSON.parse('{"id":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-compatibility-rule/cannkit-compatibility-rule","title":"兼容性说明","description":"总体兼容性策略见表1 Ascend C API兼容策略，兼容性范围不包含编译器BuiltIn API、Ascend C内部实现接口等。若开发者希望在新平台运行其它平台开发的Ascend C程序，需要在新平台重新编译并运行，并可能需要根据迁移指导进行代码调整。","source":"@site/docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-compatibility-rule/cannkit-compatibility-rule.md","sourceDirName":"cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-compatibility-rule","slug":"/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-compatibility-rule/","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-compatibility-rule/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"兼容性说明","sidebar_position":1,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-compatibility-rule","kit":"ai","last_updated":"2026-04-22"},"sidebar":"docs","previous":{"title":"VERIFY_FUNC_REG","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-basic-data-structure-and-apis/cannkit-ge-namespace/cannkit-verify-func-reg/"},"next":{"title":"昇腾和麒麟同代AI处理器的映射关系","permalink":"/harmonyos-docs-site/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend-kirin-map/"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-compatibility-rule/cannkit-compatibility-rule.md


const frontMatter = {
	title: '兼容性说明',
	sidebar_position: 1,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/cannkit-compatibility-rule',
	kit: 'ai',
	last_updated: '2026-04-22'
};
const contentTitle = '兼容性说明';

const assets = {

};



const toc = [];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    header: "header",
    img: "img",
    li: "li",
    ol: "ol",
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
        id: "兼容性说明",
        children: "兼容性说明"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "总体兼容性策略见表1 Ascend C API兼容策略，兼容性范围不包含编译器BuiltIn API、Ascend C内部实现接口等。若开发者希望在新平台运行其它平台开发的Ascend C程序，需要在新平台重新编译并运行，并可能需要根据迁移指导进行代码调整。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "图1"
        })
      }), " Ascend C API层次结构"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(145634)/* ["default"] */.A) + "",
        title: "点击放大",
        width: "522",
        height: "324"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "表1"
        })
      }), " Ascend C API兼容策略"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "API层级"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "兼容策略"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "高阶API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "高阶API在所有架构上均具备兼容性，但在涉及领域特性的部分存在不兼容情况。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "基础API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "基础API分为可兼容的基础API和ISASI基础API；兼容的API在所有架构上均能兼容；ISASI API为体系架构相关的API，不保证跨架构版本的兼容性，例如CUBE侧的计算接口LoadData、Mmad等。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "框架API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "框架API为软件实现API，跨架构版本兼容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "语言扩展C API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不保证兼容。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "编译器BuiltIn API"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "不保证兼容。"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "简要说明"
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "为了保证兼容性，建议开发者在开发过程中尽量避免使用如下接口或编程方式，否则开发者需自行保证兼容性。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "非Ascend C公开接口、结构体，例如impl目录下的接口、结构体等；"
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "对芯片规格进行硬编码。例如："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "uint32_t MAX_UB_SIZE = 256 * 1024;\n// 建议获取方式：ascendcPlatform.GetCoreMemSize(platform_ascendc::CoreMemType::UB, MAX_UB_SIZE);\n// ...\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "编译器BuiltIn API。例如："
            }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
              children: (0,jsx_runtime.jsx)(_components.code, {
                children: "copy_gm_to_ubuf(input_1_local_ub, input_1, 0, 1, 8, 0, 0);\n"
              })
            }), "\n"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
              children: "TilingKey编程。"
            }), "\n"]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "建议开发者使用如下接口或编程方式。"
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "兼容的API。"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["若涉及特定领域扩展特性，在Device侧用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascend-kirin-compatibility/cannkit-ascend910b-kirinx90/cannkit-migration-guidance-overview",
              children: "NPU_ARCH编译宏"
            }), "进行隔离，在Host侧用", (0,jsx_runtime.jsx)(_components.a, {
              href: "/cann-kit-guide/cannkit-ascendc-operator-development/cannkit-ascendc-operator-interface/cannkit-ascend-c-api/cannkit-host-api/cannkit-platformascendc/cannkit-getsocversion",
              children: "SocVersion"
            }), "进行隔离。"]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["使用", (0,jsx_runtime.jsx)(_components.a, {
              href: "https://www.hiascend.com/document/detail/zh/canncommercial/83RC1/opdevg/Ascendcopdevg/atlas_ascendc_10_00025.html",
              children: "Tiling模板编程"
            }), "。"]
          }), "\n"]
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
145634(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

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