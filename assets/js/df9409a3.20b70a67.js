"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["970564"], {
891790(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_attribute_modifier_property_universal_attributes_attribute_symbolglyphmodifier_universal_attributes_attribute_symbolglyphmodifier_md_df9_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-ts-component-general-attributes-attribute-modifier-property-universal-attributes-attribute-symbolglyphmodifier-universal-attributes-attribute-symbolglyphmodifier-md-df9.json
var site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_attribute_modifier_property_universal_attributes_attribute_symbolglyphmodifier_universal_attributes_attribute_symbolglyphmodifier_md_df9_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/universal-attributes-attribute-symbolglyphmodifier/universal-attributes-attribute-symbolglyphmodifier","title":"动态SymbolGlyphModifier属性设置","description":"SymbolGlyphModifier用于动态设置SymbolGlyph组件的属性和样式，支持使用if/else语句进行设置。SymbolGlyph是一个用于展示图标符号的组件。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/universal-attributes-attribute-symbolglyphmodifier/universal-attributes-attribute-symbolglyphmodifier.md","sourceDirName":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/universal-attributes-attribute-symbolglyphmodifier","slug":"/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/universal-attributes-attribute-symbolglyphmodifier/universal-attributes-attribute-symbolglyphmodifier","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/universal-attributes-attribute-symbolglyphmodifier/universal-attributes-attribute-symbolglyphmodifier","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"动态SymbolGlyphModifier属性设置","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/universal-attributes-attribute-symbolglyphmodifier","kit":"应用框架","last_updated":"2026-04-22","slug":"universal-attributes-attribute-symbolglyphmodifier"},"sidebar":"ref","previous":{"title":"自定义属性设置","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property"},"next":{"title":"复用标识","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/other-property/ts-universal-attributes-reuse-id/ts-universal-attributes-reuse-id"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/universal-attributes-attribute-symbolglyphmodifier/universal-attributes-attribute-symbolglyphmodifier.md


const frontMatter = {
	title: '动态SymbolGlyphModifier属性设置',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/universal-attributes-attribute-symbolglyphmodifier',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'universal-attributes-attribute-symbolglyphmodifier'
};
const contentTitle = '动态SymbolGlyphModifier属性设置';

const assets = {

};



const toc = [{
  "value": "SymbolGlyphModifier",
  "id": "symbolglyphmodifier",
  "level": 2
}, {
  "value": "constructor",
  "id": "constructor",
  "level": 3
}, {
  "value": "applyNormalAttribute",
  "id": "applynormalattribute",
  "level": 3
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
    h3: "h3",
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
        id: "动态symbolglyphmodifier属性设置",
        children: "动态SymbolGlyphModifier属性设置"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["SymbolGlyphModifier用于动态设置SymbolGlyph组件的属性和样式，支持使用if/else语句进行设置。", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph",
        children: "SymbolGlyph"
      }), "是一个用于展示图标符号的组件。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(845198)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 12开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "symbolglyphmodifier",
      children: "SymbolGlyphModifier"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "定义SymbolGlyphModifier。"
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
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "constructor",
      children: "constructor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "constructor(src?: Resource)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "SymbolGlyphModifier的构造函数。"
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
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "src"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resource",
              children: "Resource"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "否"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "资源信息。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "applynormalattribute",
      children: "applyNormalAttribute"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "applyNormalAttribute?(instance: SymbolGlyphAttribute): void"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "组件普通状态时的样式。"
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
      }), " SystemCapability.ArkUI.ArkUI.Full"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "参数："
        })
      })
    }), "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "参数名"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "类型"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "必填"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "说明"
          })]
        })
      }), (0,jsx_runtime.jsx)(_components.tbody, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "instance"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-symbolglyph/ts-basic-components-symbolglyph",
              children: "SymbolGlyphAttribute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "动态设置SymbolGlyph组件的属性。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "#symbolglyphmodifier",
        children: "SymbolGlyphModifier"
      }), "和TextInput组件的", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/text-and-input/ts-basic-components-textinput/ts-basic-components-textinput#cancelbutton18",
        children: "cancelButton"
      }), "属性展示了自定义右侧symbol类型清除按钮样式的效果。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "import { SymbolGlyphModifier } from '@kit.ArkUI';\n\n// xxx.ets\n@Entry\n@Component\nstruct Index {\n  @State text: string = '';\n  symbolModifier: SymbolGlyphModifier =\n    new SymbolGlyphModifier($r('sys.symbol.trash')).fontColor([Color.Red]).fontSize(16).fontWeight(FontWeight.Regular);\n\n  build() {\n    Column() {\n      TextInput({ text: this.text, placeholder: 'input your word...' })\n        .height(50)\n        .cancelButton({\n          style: CancelButtonStyle.CONSTANT,\n          icon: this.symbolModifier // 从API version 18开始支持symbol类型\n        })\n    }.margin(10)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(905232)/* ["default"] */.A) + "",
        width: "507",
        height: "80"
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
845198(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAmCAYAAAA2h+4OAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAD8UlEQVRo3u2aT2gcVRzHP09mZFes3ZyKRSUG9SKSlYhQsLgoevAPBiRHYS9NDoItbKQgCLnUQ5tALyJZEFuwiPVgIBU9RKwinmrdHrQ0oO7JPydTIwZcy7eH/Y19rrO7M9Mmxvi+sMzOe+/3ZjKf+b3f7/2yThJB2083hUcQwAQFMAFMUAATwAQFMEE7HoxzruqcezmlveKcm05pH3fOzWzXvycqaliO41FgEqgAtZQhLfssbXQ6ayn2k0B1gO2a2bYyQBkHTgF7nXNIOmbtM8ACcMXam57ZG8A+59wLkh5JmXMOWE97mSUdc859AOwZcFtnJM0VftGK7vzLcbwGtIElO7a97hqQgNsNnAQOWd8h7/tZD2ACr2LAqsBzwN0bnU47A5wV4HHgInBY0rK1LwPP2P09KGnNOdcA5oHLNnYxZb5zwETKpZqSZgb0J5qVtFDYZSTl/pSiqFKKIpWiqJZhbL0URW0br1IUrZWiqJ7jGpNZ7smAfg8I+NxrHwUuGfyGtX1t404MmO+cjVkGDttRwGJPf6OPXaPIs/1rngJQ6t5DruWwaxuUSg6b5DrHM8KZBj4Bxu1cGT+nB4BJYDa2EkyRGFMv6JwngFpavMmgakbvbwLNlK4v+5jsAe4AftkxwX+bZWSXvED9s6Sne4A91Mdu0bzsejTvnJsPYNJ1XwbvKKp9BnBvn/6LwO/e+b3AbQFMV08AUzfg7U/T80P63/SzrwzZ2v8HjKQV28swYMlK03iG6ZvAe5sIfkd7zDANe6AjA/pW+4BPnt1dti9KdEsAMzghmLQlDuB1i0OzdpwGVoEXrf+7ApcYs+NLwWOyQ1kA9kt62M43UhKDdUkrBed/FtjlLXU+2IPA7QHMNd3qZWgTSWETuNNiya9WlplIedBfARck1TNmZUlC8K2kmZ65pgKYdO0CfrOdeht4xdrPS2o75/ptYK9kzMrGvJh0Pq2MGJayv2t/8hYDrwI/2jIzZZvP3oLizRaHkgrxN0OyssQrD5jXrQNHzEvq9hKMAn/0ePC/AuZ4OY5bdkO9atOtHv+j7F+O4wrdynO1T7mlSNnmtC1bB4DHgKNWblkH3pZ0xsZ9bMcHgPc9+5965vvQYtIpSZ8ZgHeBp6z/I0kXnHNjwFtp2dx1xcm8Zf9yHJ8FHs15nZNcK+cv0a237c5h/+lGp1PLGaC/AO4BDkp6p6fvKPAk8KeXlb0mqTVkzhG6RdJY0v1e+w9eXFkFliXNbjWYJbr/J9lK5QazyVnfiKRNLXwWAVMhY7XXVAHmvF32ZfOYPMtVq2BV+r+b8offLm9PhV/JBDBBAUwAExTABDBBAUxQABPABN0QXQXAUtdXGlCCowAAAABJRU5ErkJggg==");

},
905232(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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lIZyqtuasNfL3afddvdv/QEXlxf+/O/u+KM/92rtvtPhOGO+MWgxIdpYverGSebfAIL/OLa5zLZt4OTJk4vNzVLLxub8+MmTR6tl4tJ1U2td3x8/efLkqVN9X7uuq7U+7GEPW6/X6/XaNpfZlgRIGsex1jpNk+2+71trkvq+B7I12xEhKTO7rnut13qtc+fOnTt3TtIdd9xx371nH/KQh25ubt5555193z/84Q9frVbzeTcM4/Hjx6+77ro77rhjGAZeqIiSmadPn57NZ1Obtja3Sim2bdsupezsHHupl3qpJzzpia2NB0eH+wcHr/O6rztfLG697RnN+cQnP+nGm286c+bMrU+/dRzHhz70oZmOKLV2Xdc/6lGPPHv27Pnz50sprbXZbHbi5MlhmDY35svlcrlcPuQhD5naNJ/PZ323s71z3XXXZeZyuez7WURw1VVX/e/gwtqxbmUsnvqWNGverVg3DRueto4OacNsdXh8HO2J3pemoxp1PrlmyxhbGUKDlPwbQPAfyjb3s933fQmt1+PF3f1QbG9tj+NUoqzXoxQbG5ut5Ti0TE9THj9+ou9nraWNFDYgIFt2XTeOY2ba2B6G4dSpU5k+ODgYx7HrOsC27YhorT3oQQ+68cYb//AP/7Drusc97nGbm1sPe9jDI2IYxr6fdV0PslksNkqp29s7GxubIBAIBAKBQCAQCCilnDx5srUmablartdrIDNtA9PUXvZlX/boaHnXPffdddfd1193/fb2zqMf9ei///t/2L24e/7c+Vd4+Vfoai21rlbrTNuephZR9vePxrGVUlvLUmot3c72sf29w1rqcjkeHS672m9tbjs1rMdp8jhNx48fL6XM57NxHFprXHXVVf8bFPvYetgcVxnrobZ1bfR5aacc9uvcVFkv2+oSeZjDXjetXEc22z39mBta1xzqNNZh1tbH1kPXkn8DCP5dEhISEjLdaleQM6fZrMPuah1XU1/qsc1tT+mplYSWs9q11XD27nvJrDUiQuJJT3qSpPl8npkRMQyDna1lpt18/ux5Ul2psoK4dHEP09e+rzMntmycQNgax+mlX/plnvrUp99+2x2333bHy7zMy2xubrTWTp06uV6vn/a0p9VabU3TtFwu77zzjo2NxcbGbL1e11r39vYiZDszd3d3jx07No6jpHEch2EYhqG1FhF91/d9D0iy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");

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