"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["715243"], {
390132(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_ui_design_api_ui_design_arkts_ui_design_symbolregister_ui_design_symbolregister_md_fc0_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-ui-design-api-ui-design-arkts-ui-design-symbolregister-ui-design-symbolregister-md-fc0.json
var site_docs_ref_ui_design_api_ui_design_arkts_ui_design_symbolregister_ui_design_symbolregister_md_fc0_namespaceObject = JSON.parse('{"id":"ui-design-api/ui-design-arkts/ui-design-symbolregister/ui-design-symbolregister","title":"symbolRegister","description":"本模块提供自定义Symbol图标资源与动效参数资源注册加载能力。","source":"@site/docs-ref/ui-design-api/ui-design-arkts/ui-design-symbolregister/ui-design-symbolregister.md","sourceDirName":"ui-design-api/ui-design-arkts/ui-design-symbolregister","slug":"/ui-design-api/ui-design-arkts/ui-design-symbolregister/ui-design-symbolregister","permalink":"/harmonyos-docs-site/ref/ui-design-api/ui-design-arkts/ui-design-symbolregister/ui-design-symbolregister","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"symbolRegister","sidebar_position":2,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-symbolregister","kit":"应用框架","last_updated":"2026-04-22","slug":"ui-design-symbolregister"},"sidebar":"ref","previous":{"title":"hdsDrawable","permalink":"/harmonyos-docs-site/ref/ui-design-api/ui-design-arkts/ui-design-hdsdrawable/ui-design-hdsdrawable"},"next":{"title":"hdsEffect","permalink":"/harmonyos-docs-site/ref/ui-design-api/ui-design-arkts/ui-design-hdseffect/ui-design-hdseffect"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/ui-design-api/ui-design-arkts/ui-design-symbolregister/ui-design-symbolregister.md


const frontMatter = {
	title: 'symbolRegister',
	sidebar_position: 2,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ui-design-symbolregister',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ui-design-symbolregister'
};
const contentTitle = 'symbolRegister';

const assets = {

};



const toc = [{
  "value": "导入模块",
  "id": "导入模块",
  "level": 2
}, {
  "value": "symbolRegister.registerSymbol",
  "id": "symbolregisterregistersymbol",
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
        id: "symbolregister",
        children: "symbolRegister"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "本模块提供自定义Symbol图标资源与动效参数资源注册加载能力。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.1(19)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "导入模块",
      children: "导入模块"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { symbolRegister } from '@kit.UIDesignKit';\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "symbolregisterregistersymbol",
      children: "symbolRegister.registerSymbol"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "registerSymbol(ttfSrc: resourceManager.Resource, jsonSrc: resourceManager.Resource): boolean"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "注册自定义Symbol资源。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "模型约束："
        })
      }), " 此接口仅可在Stage模型下使用。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "系统能力："
        })
      }), " SystemCapability.UIDesign.Core"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "起始版本："
        })
      }), " 5.1.1(19)"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "参数名"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "类型"
              })
            })
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: (0,jsx_runtime.jsx)(_components.strong, {
                children: "说明"
              })
            })
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "ttfSrc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "resourceManager.Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义Symbol图标资源。"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "jsonSrc"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "resourceManager.Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "自定义Symbol动效参数资源。"
          })]
        })]
      })]
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
            children: "boolean"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回注册结果，true：注册成功，false：注册失败。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "错误码："
        })
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["以下错误码的详细介绍请参见", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/ui-design-api/ui-design-arkts/ui-design-error-code/ui-design-error-code",
        children: "ArkTS API错误码"
      }), "。"]
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "错误码ID"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "错误信息"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "401"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Parameter error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "801"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Device Type error."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1012600002"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TTF or JSON resource out of size."
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "1012600003"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "TTF or JSON resource content error."
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "示例："
        })
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { symbolRegister } from '@kit.UIDesignKit';\nimport { BusinessError } from '@kit.BasicServicesKit';\n\n@Entry\n@Component\nstruct test {\n  aboutToAppear(): void {\n    try {\n      // 注册自定义的Symbol资源,在resource/rawfile目录下配置图标资源\n      let result =\n        symbolRegister.registerSymbol($rawfile(\"symbol/symbol_register.ttf\"), $rawfile(\"symbol/symbol_register.json\"));\n    } catch (error) {\n      let err = error as BusinessError;\n      console.error(\"errCode:\" + err.code)\n      console.error(\"error \" + err.message);\n    }\n  }\n\n  build() {\n    Column() {\n      SymbolGlyph($r('app.string.symbol_custom_phone_fill_1'))\n    }\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(37736)/* ["default"] */.A) + "",
        width: "120",
        height: "162"
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
37736(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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