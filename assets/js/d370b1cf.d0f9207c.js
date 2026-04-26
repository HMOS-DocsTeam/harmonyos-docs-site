"use strict";
(self["webpackChunkharmonyos_docs_site"] = self["webpackChunkharmonyos_docs_site"] || []).push([["398270"], {
703588(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  metadata: () => (/* reexport */ site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_visual_effect_property_ts_universal_attributes_foreground_color_ts_universal_attributes_foreground_color_md_d37_namespaceObject),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  contentTitle: () => (/* binding */ contentTitle),
  toc: () => (/* binding */ toc),
  assets: () => (/* binding */ assets)
});

;// CONCATENATED MODULE: ./.docusaurus/docusaurus-plugin-content-docs/ref/site-docs-ref-arkui-api-arkui-declarative-comp-ts-component-general-attributes-visual-effect-property-ts-universal-attributes-foreground-color-ts-universal-attributes-foreground-color-md-d37.json
var site_docs_ref_arkui_api_arkui_declarative_comp_ts_component_general_attributes_visual_effect_property_ts_universal_attributes_foreground_color_ts_universal_attributes_foreground_color_md_d37_namespaceObject = JSON.parse('{"id":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-foreground-color/ts-universal-attributes-foreground-color","title":"前景色设置","description":"设置组件的前景色。与背景色相对应，前景色会影响绘制组件内容的颜色。主要影响文字的颜色、形状绘制组件的填充色。","source":"@site/docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-foreground-color/ts-universal-attributes-foreground-color.md","sourceDirName":"arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-foreground-color","slug":"/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-foreground-color/ts-universal-attributes-foreground-color","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-foreground-color/ts-universal-attributes-foreground-color","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"前景色设置","sidebar_position":6,"original_url":"https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-foreground-color","kit":"应用框架","last_updated":"2026-04-22","slug":"ts-universal-attributes-foreground-color"},"sidebar":"ref","previous":{"title":"颜色渐变","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-gradient-color/ts-universal-attributes-gradient-color"},"next":{"title":"前景属性设置","permalink":"/harmonyos-docs-site/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-foreground-effect/ts-universal-attributes-foreground-effect"}}')
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(474848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(28453);
;// CONCATENATED MODULE: ./docs-ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/visual-effect-property/ts-universal-attributes-foreground-color/ts-universal-attributes-foreground-color.md


const frontMatter = {
	title: '前景色设置',
	sidebar_position: 6,
	original_url: 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/ts-universal-attributes-foreground-color',
	kit: '应用框架',
	last_updated: '2026-04-22',
	slug: 'ts-universal-attributes-foreground-color'
};
const contentTitle = '前景色设置';

const assets = {

};



const toc = [{
  "value": "foregroundColor",
  "id": "foregroundcolor",
  "level": 2
}, {
  "value": "foregroundColor18+",
  "id": "foregroundcolor18",
  "level": 2
}, {
  "value": "示例",
  "id": "示例",
  "level": 2
}, {
  "value": "示例1（使用前景色设置）",
  "id": "示例1使用前景色设置",
  "level": 3
}, {
  "value": "示例2（设置前景色为组件背景色反色）",
  "id": "示例2设置前景色为组件背景色反色",
  "level": 3
}, {
  "value": "示例3（前景色未继承父组件）",
  "id": "示例3前景色未继承父组件",
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
        id: "前景色设置",
        children: "前景色设置"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件的前景色。与背景色相对应，前景色会影响绘制组件内容的颜色。主要影响文字的颜色、形状绘制组件的填充色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(929128)/* ["default"] */.A) + "",
        width: "102",
        height: "38"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "从API version 10开始支持。后续版本如有新增内容，则采用上角标单独标记该内容的起始版本。"
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "foregroundcolor",
      children: "foregroundColor"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "foregroundColor(value: ResourceColor | ColoringStrategy): T"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "设置组件的前景色。当组件未设置前景色，默认继承父组件。"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 11开始，该接口支持在元服务中使用。"]
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
            children: "value"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#coloringstrategy10",
              children: "ColoringStrategy"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "foregroundcolor18",
      children: "foregroundColor18+"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "foregroundColor(color: Optional<ResourceColor | ColoringStrategy>): T"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["设置组件的前景色。当组件未设置前景色，默认继承父组件。与", (0,jsx_runtime.jsx)(_components.a, {
        href: "#foregroundcolor",
        children: "foregroundColor"
      }), "相比，color参数新增了对undefined类型的支持。"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "元服务API："
        })
      }), " 从API version 18开始，该接口支持在元服务中使用。"]
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
            children: "color"
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/ts-component-general-attributes/attribute-modifier-property/ts-universal-attributes-custom-property/ts-universal-attributes-custom-property#optionalt",
              children: "Optional"
            }), "<", (0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-types/ts-types#resourcecolor",
              children: "ResourceColor"
            })]
          }), (0,jsx_runtime.jsxs)(_components.td, {
            children: [(0,jsx_runtime.jsx)(_components.a, {
              href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#coloringstrategy10",
              children: "ColoringStrategy"
            }), ">"]
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "是"
          })]
        })
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
            children: "T"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "返回当前组件。"
          })]
        })
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "示例",
      children: "示例"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例1使用前景色设置",
      children: "示例1（使用前景色设置）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例主要演示通过foregroundColor设置前景色。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ForegroundColorExample {\n  build() {\n    Column({ space: 100 }) {\n      // 绘制一个直径为150的圆，默认填充色为黑色\n      Circle({ width: 150, height: 200 }).margin(20)\n      // 绘制一个直径为150的圆，设置前景色为橙色\n      Circle({ width: 150, height: 200 }).foregroundColor(Color.Orange)\n    }.width('100%').backgroundColor(Color.Gray)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(41705)/* ["default"] */.A) + "",
        width: "310",
        height: "471"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例2设置前景色为组件背景色反色",
      children: "示例2（设置前景色为组件背景色反色）"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["该示例通过", (0,jsx_runtime.jsx)(_components.a, {
        href: "/ref/arkui-api/arkui-declarative-comp/common-definitions/ts-appendix-enums/ts-appendix-enums#coloringstrategy10",
        children: "ColoringStrategy"
      }), ".INVERT将前景色设置为背景色反色。"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ColoringStrategyExample {\n  build() {\n    Column({ space: 100 }) {\n      // 绘制一个直径为150的圆,默认填充色为黑色\n      Circle({ width: 150, height: 200 })\n      // 绘制一个直径为150的圆，设置前景色为组件背景色的反色\n      Circle({ width: 150, height: 200 })\n        .backgroundColor(Color.Black)\n        .foregroundColor(ColoringStrategy.INVERT)\n    }.width('100%')\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(140393)/* ["default"] */.A) + "",
        width: "207",
        height: "272"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "示例3前景色未继承父组件",
      children: "示例3（前景色未继承父组件）"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "该示例主要演示组件同时设置前景色和背景色与只设置背景色的效果对比。"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "// xxx.ets\n@Entry\n@Component\nstruct ForegroundColorInherit {\n  build() {\n    Column() {\n      Button('设置前景色为橘色').fontSize(20).foregroundColor(Color.Orange).backgroundColor(Color.Gray)\n      Divider()\n      Button('未设置前景色继承自父组件').fontSize(20).backgroundColor(Color.Gray)\n    }.foregroundColor(Color.Pink)\n  }\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.img, {
        src: (__webpack_require__(911679)/* ["default"] */.A) + "",
        width: "314",
        height: "108"
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
140393(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = ("data:image/png;base64,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");

},
911679(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552959520-882864f39cdd68a53f1a8d0eea70cd4e.png");

},
41705(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
__webpack_require__.d(__webpack_exports__, {
  A: () => (__rspack_default_export)
});
/* export default */ const __rspack_default_export = (__webpack_require__.p + "assets/images/zh-cn_image_0000002552799870-b754856edb877b81529022bdbfe4bd86.png");

},
929128(__unused_rspack_module, __webpack_exports__, __webpack_require__) {
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